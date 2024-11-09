document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const collapsedMenu = document.getElementById('collapsed-menu');

    menuButton.addEventListener('click', function () {
        collapsedMenu.classList.toggle('hidden');
    });
});
