
function loadContact() {
    content.innerHTML = '';    
    
    let contactDiv = document.createElement('div');
    contactDiv.id = 'contactDiv';
    content.appendChild(contactDiv)

    contactDiv.innerHTML += `
    <h3 class = 'contactInfo'> Contact Us</h1>
    <p class='contactInfo'> (222)-888 5555 </p>
    <p class = 'contactInfo'>Telluride, CO 81435, USA</p>

    <iframe id ='myMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12586.8828221279!2d-107.76326057447986!3d37.936954749169324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873edf4988cc8b6b%3A0xbedced3ab6f3c42a!2sTomboy!5e0!3m2!1str!2str!4v1659346191092!5m2!1str!2str" width="500" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    `

}

export default loadContact