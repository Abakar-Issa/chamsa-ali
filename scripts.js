document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Traitement du formulaire (peut être envoyé à une API)
    document.getElementById('response-message').innerText = `Merci ${name}, votre message a été envoyé !`;
    
    // Réinitialiser le formulaire
    this.reset();
});

// Activer le menu hamburger
document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});




