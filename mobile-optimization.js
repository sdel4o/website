// mobile-optimization.js
// This file optimizes filter selectors for mobile performance

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Only apply optimizations on mobile devices
        if (!isMobileDevice()) return;
        
        console.log('🔄 Applying mobile optimizations...');
        
        // Fix 1: Optimize filter selectors for single-tap
        optimizeFilterSelectors();
        
        // Fix 2: Improve touch event handling
        improveTouchEvents();
        
        // Fix 3: Optimize dropdown performance
        optimizeDropdowns();
        
        // Fix 4: Add visual feedback for mobile taps
        addMobileTapFeedback();
        
        console.log('✅ Mobile optimizations applied');
    });

    // Check if device is mobile
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               window.innerWidth <= 768;
    }

    // Fix 1: Optimize filter selectors for single-tap
    function optimizeFilterSelectors() {
        const filterSelectors = [
            'brandFilter', 'subBrandFilter', 'catFilter', 
            'typeFilter', 'genFilter'
        ];
        
        filterSelectors.forEach(selectorId => {
            const element = document.getElementById(selectorId);
            if (!element) return;
            
            // Remove existing event listeners to prevent conflicts
            const newElement = element.cloneNode(true);
            element.parentNode.replaceChild(newElement, element);
            
            // Add optimized event listener
            newElement.addEventListener('change', function(e) {
                // Prevent default to avoid any double-tap behavior
                e.preventDefault();
                
                // Execute filter immediately with minimal delay
                requestAnimationFrame(() => {
                    handleFilterChange(this.id, this.value);
                });
                
                // Blur the element to hide keyboard on iOS
                setTimeout(() => this.blur(), 100);
            }, { passive: true });
            
            // Add touchstart for immediate feedback
            newElement.addEventListener('touchstart', function(e) {
                this.style.backgroundColor = '#f0f0f0';
                this.style.transition = 'background-color 0.1s';
            }, { passive: true });
            
            newElement.addEventListener('touchend', function(e) {
                this.style.backgroundColor = '';
            }, { passive: true });
        });
    }
    
    // Optimized filter change handler
    function handleFilterChange(filterId, value) {
        // Update filter value in UI
        const filterElement = document.getElementById(filterId);
        if (filterElement && filterElement.value !== value) {
            filterElement.value = value;
        }
        
        // Execute appropriate filter logic based on filter type
        switch(filterId) {
            case 'brandFilter':
                if (typeof handleBrandChange === 'function') {
                    handleBrandChange();
                } else {
                    // Fallback if function doesn't exist
                    applyFilters();
                }
                break;
            case 'catFilter':
                if (typeof handleCategoryChange === 'function') {
                    handleCategoryChange();
                } else {
                    applyFilters();
                }
                break;
            default:
                if (typeof applyFilters === 'function') {
                    applyFilters();
                }
                break;
        }
    }

    // Fix 2: Improve touch event handling
    function improveTouchEvents() {
        // Prevent double-tap zoom on filter elements
        const touchElements = document.querySelectorAll('.gold-select, .filter-btn, .qty-btn, .catalog-qty-btn');
        
        touchElements.forEach(el => {
            // Add touch-action CSS property
            el.style.touchAction = 'manipulation';
            el.style.webkitTapHighlightColor = 'transparent';
            
            // Prevent context menu on long press
            el.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                return false;
            });
        });
        
        // Add passive event listeners for scroll performance
        document.addEventListener('touchmove', function(e) {
            // This is now passive for better scroll performance
        }, { passive: true });
    }

    // Fix 3: Optimize dropdown performance
    function optimizeDropdowns() {
        // Cache dropdown elements for faster access
        window.filterDropdowns = {
            brand: document.getElementById('brandFilter'),
            subBrand: document.getElementById('subBrandFilter'),
            category: document.getElementById('catFilter'),
            type: document.getElementById('typeFilter'),
            gender: document.getElementById('genFilter')
        };
        
        // Use native select on mobile for better performance
        // (the existing gold-select already uses native on mobile)
        
        // Prevent iOS zoom on focus
        const inputs = document.querySelectorAll('select, input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.fontSize = '16px'; // Prevent iOS zoom
            });
            
            input.addEventListener('blur', function() {
                this.style.fontSize = '';
            });
        });
    }

    // Fix 4: Add visual feedback for mobile taps
    function addMobileTapFeedback() {
        // Add active state for buttons
        const buttons = document.querySelectorAll('.filter-btn, .qty-btn, .catalog-qty-btn, button[onclick*="addToCart"]');
        
        buttons.forEach(btn => {
            btn.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
                this.style.transition = 'transform 0.1s';
            }, { passive: true });
            
            btn.addEventListener('touchend', function() {
                this.style.transform = '';
            }, { passive: true });
            
            btn.addEventListener('touchcancel', function() {
                this.style.transform = '';
            }, { passive: true });
        });
        
        // Add ripple effect for filter selects
        const selects = document.querySelectorAll('.gold-select');
        selects.forEach(select => {
            select.addEventListener('touchstart', function(e) {
                const rect = this.getBoundingClientRect();
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.left = (e.touches[0].clientX - rect.left) + 'px';
                ripple.style.top = (e.touches[0].clientY - rect.top) + 'px';
                ripple.style.width = '100px';
                ripple.style.height = '100px';
                ripple.style.pointerEvents = 'none';
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    if (ripple.parentNode === this) {
                        this.removeChild(ripple);
                    }
                }, 600);
            }, { passive: true });
        });
        
        // Add CSS for ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            /* Improved mobile tap feedback */
            .gold-select:active {
                background-color: #111 !important;
                border-color: #FFD700 !important;
            }
            
            .filter-btn:active {
                background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%) !important;
                color: #000 !important;
                transform: translateY(1px) !important;
            }
            
            /* Disable hover effects on mobile */
            @media (hover: none) and (pointer: coarse) {
                .product-card:hover {
                    transform: none !important;
                    box-shadow: none !important;
                }
                
                .qty-btn:hover, .catalog-qty-btn:hover {
                    background: #f0f0f0 !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Expose functions to global scope for use in main script
    window.mobileOptimizations = {
        apply: function() {
            optimizeFilterSelectors();
            improveTouchEvents();
            optimizeDropdowns();
            addMobileTapFeedback();
        },
        isMobile: isMobileDevice
    };
})();