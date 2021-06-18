document.addEventListener('DOMContentLoaded', () => {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
const breedUl = document.getElementById('dog-breeds')
const breedDropDown = document.getElementById('breed-dropdown')
let breedsArr

fetchDogs()
fetchBreeds()


function fetchDogs() {
  fetch(imgUrl)
  .then(res => res.json())
  .then(data => dogImg(data.message))
}

function dogImg(dogs) {
  dogs.forEach(dog => {
    const divDog = document.querySelector('div')
    const dogImg = document.createElement('img')
    dogImg.src = dog
    dogImg.style.width = '225px'
    divDog.append(dogImg)
  })
}

function fetchBreeds() {
  fetch(breedUrl)
  .then(res => res.json())
  .then(data => {
    breedsArr = Object.keys(data.message)
    dogBreeds(breedsArr)
  })
}

function dogBreeds(breedsArr) {
  breedsArr.forEach(breed => {
    let breedLi = document.createElement('li')
    breedLi.textContent = breed
    breedLi.style.cursor = 'pointer'
    breedUl.append(breedLi) 
    
  breedLi.addEventListener('click', (e) => {
  let dogList = e.target
  dogList.style.color  = 'purple'
  dogList.style.textDecoration = 'underline'
  dogList.style.fontWeight = 'bolder'

    })
  }) 
}

breedDropDown.addEventListener('change', handleChange)


function handleChange(e) {
  let letter = e.target.value
  let filteredBreeds = breedsArr.filter(breed => breed.startsWith(letter))
  breedUl.innerHTML = newDogList(filteredBreeds)
}

function newDogList(breedsArr) {
  let dogLiArr = breedsArr.map(breed => {
    return `<li>${breed}</li>` 
  })
  return dogLiArr.join('')
}




}) //<======== End of DOMContentLoaded