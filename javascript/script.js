const cardContainer = document.querySelector('.card-container');

//Array di oggetti
const peopleArray = [
    {
       name : 'Wayne Barnett',
       role : 'Founder & CEO',
       photo : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        photo : 'angela-caroll-chief-editor.jpg'
     },
     {
        name : 'Walter Gordon',
        role : 'Office Manager',
        photo : 'walter-gordon-office-manager.jpg'
     },
     {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        photo : 'angela-lopez-social-media-manager.jpg'
     },
     {
        name : 'Scott Estrada',
        role : 'Developer',
        photo : 'scott-estrada-developer.jpg'
     },
     {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        photo : 'barbara-ramos-graphic-designer.jpg'
     },
];

function createElement(value) {
    //creo div.card e lo inserisco all'interno di .card-container
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardContainer.append(cardElement);

    //creo l'elemento immagine e setto l'attributo src in base al valore di "photo"
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', `img/${peopleArray[value].photo}` );

    //creo l'elemento name e setto il contenuto in base al valore di "name"
    const nameElement = document.createElement('h2');
    nameElement.innerHTML = `${peopleArray[value].name}`;

    //creo l'elemento ruolo e setto il contenuto in base al valore di "role"
    const roleElement = document.createElement('p');
    roleElement.innerHTML = `${peopleArray[value].role}`;

    // inserisco tutti gli elementi creati all'interno di .card
    cardElement.append(imgElement, nameElement, roleElement);
}

function createElementAlternative(value) {
   cardContainer.innerHTML += `
   <div class="card">
      <img src="img/${peopleArray[value].photo}">
      <h2>${peopleArray[value].name}</h2>
      <p>${peopleArray[value].role}</p>
   </div>
   `;
}

for (let i = 0; i < peopleArray.length; i++) {
   //  createElement(i);
    createElementAlternative(i);
}