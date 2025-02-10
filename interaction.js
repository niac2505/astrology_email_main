function changeColor(element) {
    element.style.backgroundColor = '#E5E5E5';
    element.style.fontStyle = 'normal';
    element.style.fontWeight = 'normal';

    let clickedEmails = JSON.parse(localStorage.getItem('clickedEmails')) || [];

    if (!clickedEmails.includes(element.id)) {
        clickedEmails.push(element.id);
        localStorage.setItem('clickedEmails', JSON.stringify(clickedEmails));
    }
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
