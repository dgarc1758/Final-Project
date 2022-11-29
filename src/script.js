import {LocalDB} from 'https://cdn.skypack.dev/peadb'
import shortid from 'https://cdn.skypack.dev/shortid'
import confetti from 'https://cdn.skypack.dev/canvas-confetti'

const db = new LocalDB('car-list-db')
const cars = db.getAll() || []

const carList = document.getElementById('carList')
const newCarInput = document.getElementById('newCar')
const addBtn = document.getElementById('addBtn')

const createCarElement = car => {
  const carElement = document.createElement('li')
  carElement.innerText = car.value
  carElement.classList.add('carItem')
  carElement.addEventListener('click',() => {
   carElement.remove()
   db.delete(car.key)
   confetti({particleCount: 300, spread: 1000, origin: {y: 1}})
  })
  return carElement
}

const addCar = newCar =>{
    carList.appendChild(createCarElement(newCar))
}

addBtn.addEventListener ('click',e => {
    e.preventDefault
    const value = newCarInput.value
    if(value){
        const key = shortid.generate()
        addCar({key,value})
        db.set(key,value)
        newCarInput.value = null 
    }  
})

cars.map(car=>addCar(car))