const light = {
    "--bg-main": "#f5f5f5",
    "--bg-sidebar": "#e8e8e8",
    "--bg-card": "#ffffff",
    "--bg-checkbox": "#cfcfcfa8",
    "--bg-accent-soft": "#d1d9e0",
    "--text-primary": "#2c3e50",
    "--text-muted": "#666666",
    "--text-on-accent": "#ffffff",
    "--accent": "#2980b9",
    "--danger": "#e74c3c",
    "--border": "#cccccc",
    "--border-checkbox": "#e2e2e2a8"
};

const dark = {
    "--bg-main": "#0e0e0e",
    "--bg-sidebar": "#1a1a1a",
    "--bg-card": "#222222",
    "--bg-checkbox": "#424242a8",
    "--bg-accent-soft": "#2c3e50",
    "--text-primary": "#e0e0e0",
    "--text-muted": "#888888",
    "--text-on-accent": "#000000",
    "--accent": "#f1c40f",
    "--danger": "#c0392b",
    "--border": "#333333",
    "--border-checkbox": "#333333a8"
};

function showSection(sectionId) {
    const sections = document.querySelectorAll('.wiki-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        localStorage.setItem('lastViewedTab', sectionId);
    }
}

const themeCheckbox = document.querySelector('#start-checked input');

function applyTheme(isDark) {
    const theme = isDark ? dark : light;
    const checkbox = document.querySelector('.checkbox input[type="checkbox"]');
    
    Object.entries(theme).forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
    });

    if (checkbox) {
        checkbox.checked = isDark;
    }

    localStorage.setItem('backrooms-theme', isDark ? 'dark' : 'light');
}

function toggleTheme() {
    const isNowDark = localStorage.getItem('backrooms-theme') !== 'dark';
    applyTheme(isNowDark);
}

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('backrooms-theme');
    const shouldBeDark = (savedTheme === 'dark' || savedTheme === null);
    applyTheme(shouldBeDark);
    const lastTab = localStorage.getItem('lastViewedTab');
    if (lastTab) {
        showSection(lastTab);
    } else {
        // Default to overview if no history exists
        showSection('overview');
    }
});