function scrollToContent() {
    window.scrollTo({
        top: document.querySelector('.banner').offsetHeight,
        behavior: 'smooth'
    });
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});


