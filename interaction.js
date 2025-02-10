function changeColor(event, element) {
    event.preventDefault(); // Prevent immediate navigation

    let clickedEmails = JSON.parse(localStorage.getItem('clickedEmails')) || [];

    if (!clickedEmails.includes(element.id)) {
        clickedEmails.push(element.id);
        localStorage.setItem('clickedEmails', JSON.stringify(clickedEmails));
    }

    applyStyles(); // Apply styles after clicking
    setTimeout(() => {
        window.location.href = element.getAttribute('data-href'); // Delay navigation
    }, 100);
}

function applyStyles() {
    let clickedEmails = JSON.parse(localStorage.getItem('clickedEmails')) || [];

    clickedEmails.forEach(emailId => {
        const emailItem = document.getElementById(emailId);
        if (emailItem) {
            emailItem.classList.add('read-email'); // Add a CSS class for styling
        }
    });
}

window.onload = applyStyles;