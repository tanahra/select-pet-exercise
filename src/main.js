const URL_APIdogs = 'https://dog.ceo/api/breeds/image/random';
const URL_APIcats = 'https://aws.random.cat/meow';

const dogBTN = document.querySelector('#dog');
const catBTN = document.querySelector('#cat');
const randomPetsBTN = document.querySelector('#random-pet');
const petImage = document.querySelector('#pet-img');



catBTN.addEventListener('click', () => {
    fetch(URL_APIcats)
    .then((response) => response.json())
    .then((data) => {
        petImage.src = data.file; 
    }) 
})

dogBTN.addEventListener('click', () => {
    fetch(URL_APIdogs)
    .then((response) => response.json())
    .then((data) => {
        petImage.src = data.message;
    }) 
})

randomPetsBTN.addEventListener('click', () => {
    Promise.any([
        fetch(URL_APIdogs),
        fetch(URL_APIcats)
    ])
    .then((response) => response.json())
    .then((data) => {
        petImage.src = data.file || data.message;
    })
})   


