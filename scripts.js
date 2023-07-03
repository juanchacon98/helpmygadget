document.addEventListener('DOMContentLoaded', (event) => {
    const menuItems = document.querySelectorAll('#menu a');
    menuItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            menuItems.forEach((item) => item.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
});
