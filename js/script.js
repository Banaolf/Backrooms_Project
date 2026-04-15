function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.wiki-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}
