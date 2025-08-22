/**
 * Encyclopedia Galactica V3 - Article JavaScript
 * 
 * Minimal JavaScript for article functionality
 */

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add copy functionality to code blocks
    document.querySelectorAll('pre').forEach(pre => {
        // Create copy button
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            padding: 4px 12px;
            background: rgba(124, 58, 237, 0.2);
            border: 1px solid rgba(124, 58, 237, 0.4);
            border-radius: 4px;
            color: var(--accent-cyan);
            font-size: 0.875rem;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s;
        `;
        
        // Make pre relative for absolute button positioning
        pre.style.position = 'relative';
        
        // Show button on hover
        pre.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });
        
        pre.addEventListener('mouseleave', () => {
            button.style.opacity = '0';
        });
        
        // Copy functionality
        button.addEventListener('click', async () => {
            const code = pre.querySelector('code') || pre;
            try {
                await navigator.clipboard.writeText(code.textContent);
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
        
        pre.appendChild(button);
    });

    // Add reading progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--accent-purple), var(--accent-cyan));
        width: 0%;
        transition: width 0.2s;
        z-index: 1000;
    `;
    document.body.appendChild(progressBar);

    // Update progress on scroll
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Add table of contents generation if there are enough headings
    // Only select h2 and h3 within the article content, not in download sections
    const articleContent = document.querySelector('article');
    const headings = [];
    articleContent.querySelectorAll('h2, h3').forEach(heading => {
        // Skip headings that are inside download-section
        if (!heading.closest('.download-section')) {
            headings.push(heading);
        }
    });
    
    if (headings.length > 3) {
        generateTableOfContents(headings);
    }
    
    // Initialize disclaimer accordion
    initializeDisclaimerAccordion();
});

// Generate table of contents
function generateTableOfContents(headings) {
    const toc = document.createElement('nav');
    toc.id = 'TOC';
    toc.innerHTML = '<h3>Table of Contents</h3>';
    
    const list = document.createElement('ul');
    let currentLevel = 2;
    let currentList = list;
    const listStack = [list];
    
    headings.forEach((heading, index) => {
        // Ensure heading has an ID
        if (!heading.id) {
            heading.id = 'heading-' + index;
        }
        
        const level = parseInt(heading.tagName.charAt(1));
        
        // Adjust list nesting
        while (level > currentLevel && currentLevel < 3) {
            const newList = document.createElement('ul');
            if (currentList.lastElementChild) {
                currentList.lastElementChild.appendChild(newList);
            } else {
                currentList.appendChild(newList);
            }
            listStack.push(newList);
            currentList = newList;
            currentLevel++;
        }
        
        while (level < currentLevel && listStack.length > 1) {
            listStack.pop();
            currentList = listStack[listStack.length - 1];
            currentLevel--;
        }
        
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = heading.textContent;
        
        item.appendChild(link);
        currentList.appendChild(item);
    });
    
    toc.appendChild(list);
    
    // Insert after metadata or after h1
    const article = document.querySelector('article');
    const metadata = article.querySelector('.metadata');
    const h1 = article.querySelector('h1');
    
    if (metadata) {
        metadata.parentNode.insertBefore(toc, metadata.nextSibling);
    } else if (h1) {
        h1.parentNode.insertBefore(toc, h1.nextSibling);
    } else {
        article.insertBefore(toc, article.firstChild);
    }
}

// Initialize disclaimer accordion
function initializeDisclaimerAccordion() {
    const disclaimerBox = document.getElementById('encyclopedia-disclaimer-box');
    if (!disclaimerBox) return;
    
    const disclaimerToggle = disclaimerBox.querySelector('.disclaimer-toggle');
    const disclaimerContent = disclaimerBox.querySelector('#disclaimer-content');
    const disclaimerIcon = disclaimerBox.querySelector('.disclaimer-icon');
    
    if (disclaimerToggle && disclaimerContent && disclaimerIcon) {
        // Load saved state from localStorage with a unique key
        const storageKey = 'encyclopediaDisclaimerExpanded';
        const savedState = localStorage.getItem(storageKey);
        if (savedState === 'true') {
            disclaimerContent.style.display = 'block';
            disclaimerToggle.setAttribute('aria-expanded', 'true');
            disclaimerIcon.textContent = '▼';
        }
        
        // Toggle functionality
        disclaimerToggle.addEventListener('click', function() {
            const isExpanded = disclaimerToggle.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                disclaimerContent.style.display = 'none';
                disclaimerToggle.setAttribute('aria-expanded', 'false');
                disclaimerIcon.textContent = '▶';
                localStorage.setItem(storageKey, 'false');
            } else {
                disclaimerContent.style.display = 'block';
                disclaimerToggle.setAttribute('aria-expanded', 'true');
                disclaimerIcon.textContent = '▼';
                localStorage.setItem(storageKey, 'true');
            }
        });
    }
}