document.addEventListener('DOMContentLoaded', function() {
    const entries = document.querySelectorAll('.research-entry');
    
    entries.forEach(entry => {
        const header = entry.querySelector('.entry-header');
        
        header.addEventListener('click', () => {
            // Toggle the expanded class
            entry.classList.toggle('expanded');
            
            // Update aria-expanded attribute
            const button = entry.querySelector('.expand-button');
            const isExpanded = entry.classList.contains('expanded');
            button.setAttribute('aria-expanded', isExpanded);
        });
    });
}); 