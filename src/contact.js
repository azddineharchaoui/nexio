document.addEventListener('DOMContentLoaded', function () {
    // Get the 'Send' button after DOM is ready
    const sendButton = document.getElementById("Send");
    if (sendButton) {
        sendButton.addEventListener("click", function () {
            const fullname = document.getElementById("fullname");
            const number = document.getElementById("number");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            let valid = true;
            let error = "";

            // Validation logic
            if (!fullname.value || !number.value || !email.value || !message.value) {
                alert("Tous les champs doivent être remplis.");
                return;
            }

            // Validate Full Name (only letters and spaces)
            if (!/^[a-zA-Z\s]+$/.test(fullname.value)) {
                valid = false;
                error += "Le nom complet doit contenir uniquement des lettres et des espaces.\n";
            }

            // Validate Phone Number (at least 10 digits)
            if (!/^\d{10,}$/.test(number.value)) {
                valid = false;
                error += "Le numéro de téléphone doit être valide (au moins 10 chiffres).\n";
            }

            // Validate Email
            if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)) {
                valid = false;
                error += "L'email est invalide.\n";
            }

            // Validate Message
            if (!message.value) {
                valid = false;
                error += "Le message ne peut pas être vide.\n";
            }

            // If validation failed, show errors
            if (!valid) {
                alert("Erreur de validation :\n" + error);
            } else {
                // If everything is valid
                alert("Votre message a été envoyé avec succès !");

                // Clear the form after successful submission
                fullname.value = "";
                number.value = "";
                email.value = "";
                message.value = "";
            }
        });
    } else {
        console.error("Send button not found!");
    }
});
