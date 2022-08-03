import loadHome from "./home.js";
import loadMenu from "./menu.js"
import loadContact from "./contact.js"
function loadPage() {
    let content = document.getElementById('content')

    let title = document.createElement('title')
    title.innerHTML = `Burger Queen`
    document.head.appendChild(title);

    let navbar = document.createElement('ul')
    navbar.classList.add('nav', 'justify-content-end')
    document.body.appendChild(navbar);
    let navItems = ["Home", "Menu", "Contact Us"];
    let liItem;
    for (let i in navItems) {
        liItem = document.createElement('li')
        liItem.classList.add('nav-item')
        let navItem = document.createElement('a')
        navItem.classList.add('nav-link')
        navItem.id = navItems[i]
        navItem.href = '#'
        if (i === 0) { navItem.setAttribute('aria-current', 'page') }
        // navItem.setAttribute('aria-current', 'page')
        navItem.innerHTML = navItems[i]
        liItem.appendChild(navItem)
        navbar.appendChild(liItem)
    }
    document.getElementById('Home').addEventListener('click', function () { loadHome() })
    document.getElementById('Menu').addEventListener('click', function () { loadMenu() })
    document.getElementById('Contact Us').addEventListener('click', function () { loadContact() })
    loadHome();
}

export default loadPage;