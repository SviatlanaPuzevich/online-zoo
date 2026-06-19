let collapseButton = document.getElementById('collapseBtn');
let drawer = document.getElementById('drawer');
let drawerBadge = document.getElementById('drawer-badge');
const drawerToggleIcon = document.getElementById('drawerToggleIcon');
const iconWrappers = document.querySelectorAll('#drawer .drawer__icon-wrap');
const circleWrappers = document.querySelectorAll('#drawer .drawer__circle');

collapseButton.addEventListener('click', () => {
    collapseButton.classList.toggle('drawer__collapse--expanded');
    drawer.classList.toggle('drawer__list--expanded');
    drawerBadge.classList.toggle('drawer__badge--visible');
    drawerToggleIcon.classList.toggle('drawer__left-icon--expanded');
    circleWrappers.forEach((circle) => {
        circle.classList.toggle('drawer__circle--collapsed');
    })
    iconWrappers.forEach(icon => {
        if (icon.classList.contains('drawer__icon-wrap--active')) {
            icon.classList.toggle('drawer__icon-wrap--active--collapsed');
        } else {
            icon.classList.toggle('drawer__icon-wrap--collapsed');
        }
    })
})
