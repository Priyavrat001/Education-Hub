burger = document.querySelector('.burger')
    navbar = document.querySelector('.navbar')
    navList = document.querySelector('.nav-lsit')
    rightNav = document.querySelector('.rightNav')

    burger.addEventListener('click', () => {
        rightNav.classlist.toggel('v-class-resp');
        navList.classlist.toggel('v-class-resp');
        navbar.classlist.toggel('h-nav-list');
    })