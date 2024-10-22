// Ouvre la section "À PROPOS" lorsque le lien est cliqué
document.querySelector('.top-center').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.querySelector('#about-section').classList.add('active');
});

// Ferme la section "À PROPOS" lorsque la croix est cliquée
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('#about-section').classList.remove('active');
});
