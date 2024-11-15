document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const collapsedMenu = document.getElementById
    menuButton.addEventListener('click', function () {
        collapsedMenu.classList.toggle('hidden');
    });
    const searchButton = document.getElementById('search-button');
    const collapsedsearch = document.getElementById('champRecherche');

    searchButton.addEventListener('click', function () {
        collapsedsearch.classList.remove('hidden');
    });
});
