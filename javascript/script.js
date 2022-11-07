
const cardContainer = document.querySelector('.card-container');

//Array di oggetti
const peopleArray = [
    {
       nome : 'Wayne Barnett',
       role : 'Founder & CEO',
       photo : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome : 'Angela Caroll',
        role : 'Chief Editor',
        photo : 'angela-caroll-chief-editor.jpg'
     },
     {
        nome : 'Walter Gordon',
        role : 'Office Manager',
        photo : 'walter-gordon-office-manager.jpg'
     },
     {
        nome : 'Angela Lopez',
        role : 'Social Media Manager',
        photo : 'angela-lopez-social-media-manager.jpg'
     },
     {
        nome : 'Scott Estrada',
        role : 'Developer',
        photo : 'scott-estrada-developer.jpg'
     },
     {
        nome : 'Barbara Ramos',
        role : 'Graphic Designer',
        photo : 'barbara-ramos-graphic-designer.jpg'
     },
];

function createElement(value) {
    //creo la card e la inserisco all'interno di .card-container
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardContainer.append(cardElement);

    //creo l'elemento immagine e setto l'attributo src in base al valore di "photo"
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', `img/${peopleArray[value].photo}` );

    //creo l'elemento nome e setto il contenuto in base al valore di "name"
    const nameElement = document.createElement('h2');
    nameElement.innerHTML = `${peopleArray[value].nome}`;

    //creo l'elemento ruolo e setto il contenuto in base al valore di "role"
    const roleElement = document.createElement('p');
    roleElement.innerHTML = `${peopleArray[value].role}`;

    // inserisco tutti gli elementi creati all'interno di .card
    cardElement.append(imgElement, nameElement, roleElement);
}

for (let i = 0; i < peopleArray.length; i++) {
    createElement(i);
}