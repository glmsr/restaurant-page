function loadHome() {
    content.innerHTML = '';
    let homeDiv = document.createElement('div')
    homeDiv.id = 'homeDiv';
    content.appendChild(homeDiv)


    let h1 = document.createElement('h1')
    h1.id = 'restaurantName'
    h1.classList.add('display-4')
    h1.innerHTML = `Burger Queen`
    homeDiv.appendChild(h1)


    let footer = document.createElement('footer');
    footer.classList.add('footer')
    footer.innerHTML = `
    <p class = 'h6'>Est. 1956 by John Doe</p>
    <p class = 'lead'> We make the best burgers in town</p>
    `
    homeDiv.appendChild(footer);
}

export default loadHome;