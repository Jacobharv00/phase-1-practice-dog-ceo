document.addEventListener('DOMContentLoaded', () => {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

fetchDogs()
fetchBreeds()

// Fetches the dogs
function fetchDogs() {
  fetch(imgUrl)
  .then(res => res.json())
  .then(data => dogImg(data.message))
}

// Takes the data from dogs and irrerates over it and makes elements
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
    let breeds = Object.keys(data.message)
    dogBreeds(breeds)
  })
}

function dogBreeds(breedsArr) {
  const breedUl = document.getElementById('dog-breeds')
  breedsArr.forEach(breed => {
    let breedLi = document.createElement('li')
    breedLi.textContent = breed
    breedLi.style.cursor = 'pointer'
    breedUl.append(breedLi) 

    breedLi.addEventListener('click', (e) => {
      let value = e.target
      value.style.color  = 'purple'
      value.style.textDecoration = 'underline'
      value.style.fontWeight = 'bolder'
    })
  })
  const breedDropDown = document.getElementById('breed-dropdown')
  breedDropDown.addEventListener('change', (e) => {
    
    console.log(e.path)
    
    
    
  })




  }
})