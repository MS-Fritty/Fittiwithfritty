// Fortschrittsverfolgung durch Abhaken
document.querySelectorAll('.progress-calendar input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.parentElement.style.backgroundColor = '#4a90e2';
            this.parentElement.style.color = '#ffffff';
        } else {
            this.parentElement.style.backgroundColor = '';
            this.parentElement.style.color = '#333';
        }
    });
});
