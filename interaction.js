function changeColor(event, element) {
    event.preventDefault();

    element.style.backgroundColor = '#E5E5E5';
    element.style.fontStyle = 'normal';
    element.style.fontWeight = 'normal';

    let clickedEmails = JSON.parse(localStorage.getItem('clickedEmails')) || [];

    if (!clickedEmails.includes(element.id)) {
        clickedEmails.push(element.id);
        localStorage.setItem('clickedEmails', JSON.stringify(clickedEmails));
    }

    setTimeout(() => {
        window.location.href = element.parentElement.getAttribute('data-href');
    }, 100);
}

function resetEmails() {
    localStorage.removeItem('clickedEmails');

    document.querySelectorAll('.email-item').forEach(email => {
        email.style.backgroundColor = '';
        email.style.fontStyle = '';
        email.style.fontWeight = '';
    });
}

window.onload = function() {
    let clickedEmails = JSON.parse(localStorage.getItem('clickedEmails')) || [];

    clickedEmails.forEach(emailId => {
        const emailItem = document.getElementById(emailId);
        if (emailItem) {
            emailItem.style.backgroundColor = '#E5E5E5';
            emailItem.style.fontStyle = 'normal';
            emailItem.style.fontWeight = 'normal';
        }
    });
};
  