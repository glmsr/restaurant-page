class Burgir {
	constructor( name, ing, desc, img ){
        this.name = name
        this.ing = ing
        this.desc = desc
        this.img = img      
  }
}

let cheeseburger = new Burgir(
  "Cheeseburger",
  "Tomato, Cheese, Lettuce, Patty",
  "Beautiful cheeseburger with fresh tomatoes and juicy patty.",
  "image/cheeseburger.jpg"
)

let crabbypatty = new Burgir(
  "Crabby Patty",
  "Lettuce, Red Cabbage, Carrot, Crispy Sticks, Patty",
  "Yummy treat with special sauce and crispy sticks - you'll love it !",
  "image/crabbypatty.jpg"
)
let eggypatty = new Burgir(
  "Eggy Patty",
  "Tomato, Lettuce, Egg, Patty",
  "Consider having a burger for breakfast. Definitely try this out.",
  "image/eggypatty.jpg"
)
let bigboye = new Burgir(
  "Big Boye",
  "Tomato, Lettuce, Cheddar, Pickles, Double Patty",
  "Now THIS is a real hunger killer !",
  "image/bigboye.jpg"
)
let myArr = [cheeseburger, crabbypatty, eggypatty, bigboye]



function loadMenu() {
    content.innerHTML = ''
    
    let menuDiv = document.createElement('div');
    menuDiv.id = 'menuDiv';
    content.appendChild(menuDiv)
    
  for (let i in myArr) {
    menuDiv.innerHTML += `
    <div class="card mb-3" style="max-width: 940px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${myArr[i].img}" class="img-fluid rounded-start" alt="${myArr[i].name}">
            </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${myArr[i].name}</h5>
              <p class="card-text"><small class="text-muted">${myArr[i].ing}</small></p>
              <p class="card-text">${myArr[i].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
          `
  }
}

export default loadMenu 