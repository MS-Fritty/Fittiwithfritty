// Abhaken-Funktion mit Farbwechsel
document.querySelectorAll('.monthly-progress-calendar input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.style.backgroundColor = '#4a90e2';
            this.style.borderColor = '#4a90e2';
        } else {
            this.style.backgroundColor = '';
            this.style.borderColor = '';
        }
    });
});

// Funktion zum Zurücksetzen aller Checkboxen
document.getElementById('reset-button').addEventListener('click', () => {
    document.querySelectorAll('.monthly-progress-calendar input[type="checkbox"]').forEach((checkbox) => {
        checkbox.checked = false;
        checkbox.style.backgroundColor = '';
        checkbox.style.borderColor = '';
    });
});
