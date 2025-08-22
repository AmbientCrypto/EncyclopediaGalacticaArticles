// Encyclopedia Galactica V3 - Collection JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const expandAllBtn = document.getElementById('expand-all');
    const collapseAllBtn = document.getElementById('collapse-all');
    const searchInput = document.getElementById('search-input');
    const treeItems = document.querySelectorAll('.tree-item');
    
    // Initialize tree state
    initializeTree();
    
    // Expand/Collapse functionality
    expandAllBtn.addEventListener('click', expandAll);
    collapseAllBtn.addEventListener('click', collapseAll);
    
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Tree node click handling
    document.querySelector('.collection-tree').addEventListener('click', handleTreeClick);
    
    /**
     * Initialize tree with some nodes expanded
     */
    function initializeTree() {
        // Expand first level by default
        const firstLevelItems = document.querySelectorAll('.tree-root > .tree-item.has-children');
        firstLevelItems.forEach(item => {
            item.classList.add('expanded');
        });
    }
    
    /**
     * Handle clicks on tree nodes
     */
    function handleTreeClick(e) {
        const treeNode = e.target.closest('.tree-node');
        if (!treeNode) return;
        
        const treeItem = treeNode.parentElement;
        
        // Check if click was on article link
        if (e.target.classList.contains('article-link')) {
            return; // Let the link work normally
        }
        
        // Toggle expand/collapse for nodes with children
        if (treeItem.classList.contains('has-children')) {
            e.preventDefault();
            treeItem.classList.toggle('expanded');
        }
    }
    
    /**
     * Expand all tree nodes
     */
    function expandAll() {
        const hasChildrenItems = document.querySelectorAll('.tree-item.has-children');
        hasChildrenItems.forEach(item => {
            item.classList.add('expanded');
        });
    }
    
    /**
     * Collapse all tree nodes
     */
    function collapseAll() {
        const hasChildrenItems = document.querySelectorAll('.tree-item.has-children');
        hasChildrenItems.forEach(item => {
            item.classList.remove('expanded');
        });
    }
    
    /**
     * Handle search input
     */
    function handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // Clear search - show all items
            treeItems.forEach(item => {
                item.classList.remove('search-hidden', 'search-match');
            });
            return;
        }
        
        // Search through all tree items
        treeItems.forEach(item => {
            const nodeTitle = item.querySelector('.node-title');
            const itemPath = item.getAttribute('data-path') || '';
            const text = (nodeTitle.textContent + ' ' + itemPath).toLowerCase();
            
            if (text.includes(searchTerm)) {
                // Match found
                item.classList.remove('search-hidden');
                item.classList.add('search-match');
                
                // Expand parent nodes to show match
                expandParents(item);
            } else {
                // No match
                item.classList.add('search-hidden');
                item.classList.remove('search-match');
            }
        });
        
        // Show parent nodes even if they don't match
        showParentNodes();
    }
    
    /**
     * Expand all parent nodes of an item
     */
    function expandParents(item) {
        let parent = item.parentElement;
        
        while (parent && !parent.classList.contains('collection-tree')) {
            if (parent.classList.contains('tree-item')) {
                parent.classList.add('expanded');
                parent.classList.remove('search-hidden');
            }
            parent = parent.parentElement;
        }
    }
    
    /**
     * Show parent nodes that have visible children
     */
    function showParentNodes() {
        // Work from deepest level up
        const allItems = Array.from(treeItems);
        
        // Sort by depth (deepest first)
        allItems.sort((a, b) => {
            const depthA = getDepth(a);
            const depthB = getDepth(b);
            return depthB - depthA;
        });
        
        allItems.forEach(item => {
            if (item.classList.contains('has-children')) {
                const visibleChildren = item.querySelectorAll('.tree-children > .tree-item:not(.search-hidden)');
                if (visibleChildren.length > 0) {
                    item.classList.remove('search-hidden');
                }
            }
        });
    }
    
    /**
     * Get depth of a tree item
     */
    function getDepth(item) {
        let depth = 0;
        let parent = item.parentElement;
        
        while (parent && !parent.classList.contains('collection-tree')) {
            if (parent.classList.contains('tree-children')) {
                depth++;
            }
            parent = parent.parentElement;
        }
        
        return depth;
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + F to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            searchInput.focus();
        }
        
        // Escape to clear search
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.blur();
        }
    });
});