/**
 * Encyclopedia Galactica - Interactive JavaScript
 * ==============================================
 * 
 * Provides enhanced interactivity for the Encyclopedia Galactica interface
 * including search functionality, theme toggling, and smooth animations.
 */

class EncyclopediaGalactica {
    constructor() {
        this.searchInput = null;
        this.articles = [];
        this.categories = [];
        this.currentTheme = 'dark';
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        this.setupSearch();
        this.setupThemeToggle();
        this.setupAnimations();
        this.setupInteractions();
        this.setupAccessibility();
    }
    
    // Search functionality
    setupSearch() {
        this.searchInput = document.getElementById('searchInput');
        if (!this.searchInput) return;
        
        // Cache articles and categories for better performance
        this.articles = Array.from(document.querySelectorAll('.article-item'));
        this.categories = Array.from(document.querySelectorAll('.category-section'));
        
        // Setup search with debouncing
        let searchTimeout;
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => this.performSearch(e.target.value), 300);
        });
        
        // Add search shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'k' || e.metaKey && e.key === 'k') {
                e.preventDefault();
                this.focusSearch();
            }
            if (e.key === 'Escape' && document.activeElement === this.searchInput) {
                this.clearSearch();
            }
        });
    }
    
    performSearch(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        
        if (!term) {
            this.showAllArticles();
            return;
        }
        
        let visibleArticlesCount = 0;
        
        this.articles.forEach(article => {
            const title = article.querySelector('.article-link')?.textContent.toLowerCase() || '';
            const meta = article.querySelector('.article-meta')?.textContent.toLowerCase() || '';
            
            const isVisible = title.includes(term) || meta.includes(term);
            article.style.display = isVisible ? 'block' : 'none';
            
            if (isVisible) {
                visibleArticlesCount++;
                this.highlightSearchTerm(article, term);
            }
        });
        
        // Hide/show empty categories
        this.categories.forEach(category => {
            const visibleArticles = category.querySelectorAll('.article-item[style*="block"], .article-item:not([style*="none"])');
            category.style.display = visibleArticles.length > 0 ? 'block' : 'none';
        });
        
        this.updateSearchResults(visibleArticlesCount, term);
    }
    
    highlightSearchTerm(article, term) {
        const titleElement = article.querySelector('.article-link');
        if (titleElement) {
            const originalText = titleElement.textContent;
            const highlightedText = originalText.replace(
                new RegExp(`(${term})`, 'gi'),
                '<mark style="background: var(--accent-purple); color: white; padding: 2px 4px; border-radius: 2px;">$1</mark>'
            );
            titleElement.innerHTML = highlightedText;
        }
    }
    
    showAllArticles() {
        this.articles.forEach(article => {
            article.style.display = 'block';
            // Remove highlighting
            const titleElement = article.querySelector('.article-link');
            if (titleElement) {
                titleElement.innerHTML = titleElement.textContent;
            }
        });
        
        this.categories.forEach(category => {
            category.style.display = 'block';
        });
        
        this.updateSearchResults(this.articles.length, '');
    }
    
    updateSearchResults(count, term) {
        let resultsElement = document.getElementById('searchResults');
        if (!resultsElement) {
            resultsElement = document.createElement('div');
            resultsElement.id = 'searchResults';
            resultsElement.className = 'search-results';
            this.searchInput.parentNode.insertBefore(resultsElement, this.searchInput.nextSibling);
        }
        
        if (term) {
            resultsElement.textContent = `Found ${count} article${count !== 1 ? 's' : ''} matching "${term}"`;
            resultsElement.style.display = 'block';
        } else {
            resultsElement.style.display = 'none';
        }
    }
    
    focusSearch() {
        if (this.searchInput) {
            this.searchInput.focus();
            this.searchInput.select();
        }
    }
    
    clearSearch() {
        if (this.searchInput) {
            this.searchInput.value = '';
            this.performSearch('');
        }
    }
    
    // Theme toggle functionality
    setupThemeToggle() {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('encyclopedia-theme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
            document.body.setAttribute('data-theme', savedTheme);
        }
        
        // Create theme toggle button
        const themeToggle = document.createElement('button');
        themeToggle.innerHTML = this.currentTheme === 'dark' ? '☀️' : '🌙';
        themeToggle.className = 'theme-toggle';
        themeToggle.title = 'Toggle theme';
        themeToggle.setAttribute('aria-label', 'Toggle dark/light theme');
        
        // Add styles for theme toggle
        const style = document.createElement('style');
        style.textContent = `
            .theme-toggle {
                position: fixed;
                top: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                border: none;
                border-radius: 50%;
                background: var(--bg-card);
                border: 2px solid var(--border-color);
                font-size: 1.5rem;
                cursor: pointer;
                z-index: 1000;
                transition: all 0.3s ease;
            }
            
            .theme-toggle:hover {
                transform: scale(1.1);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            }
            
            .search-results {
                margin-top: 0.5rem;
                padding: 0.5rem;
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: 4px;
                font-size: 0.9rem;
                color: var(--text-secondary);
            }
        `;
        document.head.appendChild(style);
        
        themeToggle.addEventListener('click', () => this.toggleTheme());
        document.body.appendChild(themeToggle);
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('encyclopedia-theme', this.currentTheme);
        
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.innerHTML = this.currentTheme === 'dark' ? '☀️' : '🌙';
        }
    }
    
    // Animation setup
    setupAnimations() {
        // Intersection Observer for fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1 });
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.article-item, .category-section, .stat-item');
        animatedElements.forEach(el => observer.observe(el));
    }
    
    // Interactive enhancements
    setupInteractions() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Copy link functionality
        document.querySelectorAll('.article-link').forEach(link => {
            link.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                navigator.clipboard.writeText(link.href).then(() => {
                    this.showToast('Link copied to clipboard!');
                });
            });
        });
        
        // Enhanced hover effects
        document.querySelectorAll('.article-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-2px)';
                item.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0)';
                item.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            });
        });
    }
    
    // Accessibility enhancements
    setupAccessibility() {
        // Add skip links
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        
        const skipStyle = document.createElement('style');
        skipStyle.textContent = `
            .skip-link {
                position: absolute;
                top: -40px;
                left: 6px;
                background: var(--accent-purple);
                color: white;
                padding: 8px;
                text-decoration: none;
                border-radius: 4px;
                z-index: 1000;
                transition: top 0.3s;
            }
            
            .skip-link:focus {
                top: 6px;
            }
        `;
        document.head.appendChild(skipStyle);
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add ARIA labels where missing
        document.querySelectorAll('button:not([aria-label])').forEach(button => {
            if (button.textContent.trim()) {
                button.setAttribute('aria-label', button.textContent.trim());
            }
        });
        
        // Announce search results to screen readers
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.setAttribute('aria-live', 'polite');
            searchResults.setAttribute('aria-atomic', 'true');
        }
    }
    
    // Utility functions
    showToast(message, duration = 3000) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.className = 'toast';
        
        const toastStyle = document.createElement('style');
        toastStyle.textContent = `
            .toast {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: var(--accent-purple);
                color: white;
                padding: 12px 20px;
                border-radius: 6px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                animation: slideUp 0.3s ease-out;
            }
            
            .toast.hiding {
                animation: fadeOut 0.3s ease-out forwards;
            }
            
            @keyframes fadeOut {
                to {
                    opacity: 0;
                    transform: translateY(20px);
                }
            }
        `;
        document.head.appendChild(toastStyle);
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('hiding');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, duration);
    }
    
    // Public API
    search(term) {
        if (this.searchInput) {
            this.searchInput.value = term;
            this.performSearch(term);
        }
    }
    
    getStats() {
        return {
            totalArticles: this.articles.length,
            totalCategories: this.categories.length,
            currentTheme: this.currentTheme
        };
    }
}

// Initialize Encyclopedia Galactica
const encyclopedia = new EncyclopediaGalactica();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EncyclopediaGalactica;
}

// Global functions for backward compatibility
window.encyclopediaSearch = (term) => encyclopedia.search(term);
window.encyclopediaStats = () => encyclopedia.getStats();