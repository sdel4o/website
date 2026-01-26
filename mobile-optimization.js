// ============================================
// ULTRA-FAST MOBILE OPTIMIZATION
// ============================================

(function() {
    'use strict';
    
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;
    
    // Create a performance-optimized debounce
    function mobileDebounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // OPTIMIZATION 1: Ultra-fast filter handler
    function setupMobileFilters() {
        const filterIds = ['brandFilter', 'catFilter', 'typeFilter', 'genFilter'];
        
        filterIds.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            
            // Use native select for max performance
            el.className = 'mobile-native-select';
            
            // SINGLE TAP FIX: Use click instead of change for immediate response
            el.addEventListener('click', function(e) {
                e.stopPropagation();
                this.focus(); // Open dropdown immediately
            }, { passive: true });
            
            // Optimized change handler
            el.addEventListener('change', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Execute filter with minimal delay
                setTimeout(() => {
                    switch(id) {
                        case 'brandFilter': 
                            if (window.handleBrandChange) window.handleBrandChange();
                            break;
                        case 'catFilter': 
                            if (window.handleCategoryChange) window.handleCategoryChange();
                            break;
                        default: 
                            if (window.applyFilters) window.applyFilters();
                    }
                }, 10);
                
                // Force close keyboard/dropdown
                setTimeout(() => this.blur(), 50);
            }, { passive: true });
        });
        
        // Size selector optimization
        document.querySelectorAll('.size-select').forEach(select => {
            select.addEventListener('click', function(e) {
                e.stopPropagation();
                this.focus(); // Open immediately on first tap
            }, { passive: true });
            
            select.addEventListener('change', function(e) {
                e.stopPropagation();
                // No heavy operations needed for size change
            }, { passive: true });
        });
    }
    
    // OPTIMIZATION 2: Remove all hover effects on mobile
    function disableMobileHover() {
        const style = document.createElement('style');
        style.textContent = `
            /* KILL ALL HOVER EFFECTS ON MOBILE */
            @media (max-width: 768px) {
                .product-card:hover,
                .filter-btn:hover,
                .gold-select:hover,
                .size-select:hover,
                .qty-btn:hover,
                .catalog-qty-btn:hover,
                .cart-summary-btn:hover {
                    transform: none !important;
                    box-shadow: none !important;
                    background: none !important;
                    color: inherit !important;
                    border-color: inherit !important;
                }
                
                /* Ensure tap targets are large enough */
                .gold-select, .filter-btn, .size-select {
                    min-height: 48px !important;
                    cursor: pointer !important;
                }
                
                /* Native mobile select styling */
                .mobile-native-select {
                    -webkit-appearance: menulist !important;
                    -moz-appearance: menulist !important;
                    appearance: menulist !important;
                    background: #000 !important;
                    color: #FFD700 !important;
                    border: 2px solid #D4AF37 !important;
                    border-radius: 30px !important;
                    padding: 12px 20px !important;
                    font-size: 16px !important;
                    width: 100% !important;
                }
                
                /* Prevent iOS zoom */
                select, input[type="text"], input[type="search"] {
                    font-size: 16px !important;
                    max-height: 48px !important;
                }
                
                /* Instant response for buttons */
                .filter-btn:active,
                .qty-btn:active,
                .catalog-qty-btn:active {
                    transform: scale(0.95) !important;
                    transition: transform 0.05s !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // OPTIMIZATION 3: Pre-warm filter functions
    function preWarmFilterFunctions() {
        // Cache filter functions to avoid lookup delays
        window.mobileFilters = {
            apply: window.applyFilters || function() {},
            brandChange: window.handleBrandChange || function() {},
            categoryChange: window.handleCategoryChange || function() {}
        };
        
        // Pre-calculate filter values
        if (window.allCards) {
            window.filterCache = {
                brands: [...new Set(window.allCards.map(c => c.dataset.brand))],
                categories: [...new Set(window.allCards.map(c => c.dataset.category))]
            };
        }
    }
    
    // OPTIMIZATION 4: DOM simplification for mobile
    function simplifyMobileDOM() {
        // Remove complex gradients on mobile
        const controls = document.querySelector('.controls');
        if (controls) {
            controls.style.background = '#1a1a1a';
            controls.style.backgroundImage = 'none';
        }
        
        // Reduce thumbnail complexity
        document.querySelectorAll('.thumbnails').forEach(thumb => {
            if (window.innerWidth <= 768) {
                thumb.style.gridTemplateColumns = 'repeat(4, 1fr)'; // Fewer thumbnails
            }
        });
    }
    
    // Initialize everything
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            disableMobileHover();
            setupMobileFilters();
            preWarmFilterFunctions();
            simplifyMobileDOM();
            console.log('🚀 Mobile optimizations loaded');
        });
    } else {
        disableMobileHover();
        setupMobileFilters();
        preWarmFilterFunctions();
        simplifyMobileDOM();
        console.log('🚀 Mobile optimizations loaded');
    }
    
    // Export for debugging
    window.mobileOptimized = true;
})();
