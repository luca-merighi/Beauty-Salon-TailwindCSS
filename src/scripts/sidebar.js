const body = document.querySelector('body')
const sidebar = document.querySelector('#sidebar')

const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')

function showSidebar() {
    menuIcon.classList.add('opacity-0', 'invisible')
    closeIcon.classList.remove('opacity-0', 'invisible')

    sidebar.classList.remove('opacity-0', 'invisible', 'translate-x-full')
    body.classList.add('lock-scroll')
}

function closeSidebar() {
    menuIcon.classList.remove('opacity-0', 'invisible')
    closeIcon.classList.add('opacity-0', 'invisible')

    sidebar.classList.add('opacity-0', 'invisible', 'translate-x-full')
    body.classList.remove('lock-scroll')
}

const toggleSidebarIcons = document.querySelector('.toggle-sidebar-icons')
toggleSidebarIcons.addEventListener('click', () => {
    closeIcon.classList.contains('opacity-0') 
        ? showSidebar() 
        : closeSidebar()
})

toggleSidebarIcons.addEventListener('keypress', (event) => {
    event.keyCode === 13 && closeIcon.classList.contains('opacity-0') 
    ? showSidebar() 
    : closeSidebar()
})

const sidebarLinks = document.querySelectorAll('#sidebar div ul li a')
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeIcon.classList.contains('opacity-0') 
        ? showSidebar() 
        : closeSidebar()
    })
})