// Fonctionnalité 1 / 1-bis

let footer = document.getElementsByTagName('footer')[0];
let i = 1;

footer.addEventListener('click', () => {
  console.log(`clique numéro ${i}`);
  i++;
});

// Fonctionnalité 2

let navbarToggler = document.querySelector('button.navbar-toggler');
let navbarHeader = document.getElementById('navbarHeader');

navbarToggler.addEventListener('click', () => {
  navbarHeader.classList.toggle('collapse');
});

// Fonctionnalité 3

let firstCardText = document.querySelector('body > main > div > div > div > div:nth-child(1) > div > div > p');
let firstCardEditButton = document.querySelector('body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary');


firstCardEditButton.addEventListener('click', () => {
  firstCardText.setAttribute('style', 'color: red')
});

//Fonctionnalité 4

let secondCardText = document.querySelector('body > main > div > div > div > div:nth-child(2) > div > div > p');
let secondCardEditButton = document.querySelector('body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary');

secondCardEditButton.addEventListener('click', () => {
  if (secondCardText.style.color !== 'green') {
    secondCardText.setAttribute('style', 'color: green');
  } else {
    secondCardText.removeAttribute('style')
  }
});

// Fonctionnalité 5

let navbar = document.querySelector('body > header > div.navbar.navbar-dark.bg-dark.box-shadow');
let bootstrapCdnLink = document.querySelector('head > link');
let head = document.getElementsByTagName('head')[0];


navbar.addEventListener('dblclick', () => {
  if (head.querySelector('link') === bootstrapCdnLink) {
    head.removeChild(bootstrapCdnLink);
  } else {
    head.appendChild(bootstrapCdnLink);
  }
})

//Fonctionnalité 6

let viewCardButtons = document.querySelectorAll('body > main > div > div > div > div > div > div > div > div > button.btn.btn-sm.btn-success');
let cards = document.querySelectorAll('body > main > div > div > div > div > div');

viewCardButtons.forEach((button, index) => {
  let card = cards[index];
  let text = card.querySelector('p');
  let image = card.querySelector('img');

  button.addEventListener('mousemove', () => {
    if (text.style.display === 'none') {
      text.style.display = 'block';
      image.setAttribute('style', 'width: 100%');
    } else {
      text.style.display = 'none';
      image.setAttribute('style', 'width: 20%');
    }
  })
})

// Fonctionnalité 7

let cardRow = document.querySelector('body > main > div > div > div');
let greyArrow = document.querySelector('body > main > section > div > p > a.btn.btn-secondary.my-2');

greyArrow.addEventListener('click', () => {
  let lastCard = document.querySelector('body > main > div > div > div > div:nth-child(6)');
  cardRow.removeChild(lastCard)
  cardRow.prepend(lastCard)
})

// Fonctionnalité 8

let blueArrow = document.querySelector('body > main > section > div > p > a.btn.btn-primary.my-2')

blueArrow.addEventListener('click', (event) => {
  event.preventDefault();
  let firstCard = document.querySelector('body > main > div > div > div > div:nth-child(1)')
  cardRow.removeChild(firstCard)
  cardRow.append(firstCard)
})

// Fonctionnalité 9

let logo = document.querySelector('body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > a');
let row = document.querySelector('body > main > div > div > div');
let rowContainer = document.querySelector('body > main > div > div');

logo.addEventListener('keypress', (event) => {
  switch (event.key) {
    case 'a':
      console.log(event.key);
      rowContainer.classList.remove('d-flex', 'justify-content-center', 'justify-content-end');
      row.classList.add('col-md-4');
      break;
    case 'y':
      console.log(event.key);
      rowContainer.classList.remove('d-flex', 'justify-content-center', 'justify-content-end');
      rowContainer.classList.add('d-flex', 'justify-content-center');
      row.classList.add('col-md-4');
      break;
    case 'p':
      console.log(event.key);
      rowContainer.classList.remove('d-flex', 'justify-content-center', 'justify-content-end');
      rowContainer.classList.add('d-flex', 'justify-content-end');
      row.classList.add('col-md-4');
      break;
    case 'b':
      console.log(event.key);
      rowContainer.classList.remove('d-flex', 'justify-content-center', 'justify-content-end');
      row.classList.remove('col-md-4');
      break;
    default:
      console.log('press a, y, p or d')
  }
})

