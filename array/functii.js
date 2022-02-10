
var produse = [
    {
        name: 'Java Script Fundamentals',
        language:'js',
        price: 10
    },
    {
       name: 'Python Fundamentals',
       price: 12,
       language:'python',
    },
    {
        name: 'Intro To React',
        price: 15,
        language:'js',
    },

]
produse.filter(product => product.price <= 12)
var total= produce.filter(product => product.language == 'js')
produse.filter(product => product.language == 'js')
   .reduce((sum, product) => product.price + sum,0)
   document.write('Pretul cursurilor js:'+ total)
   document.write('<br>')








var fruits= ['apple', 'orange', 'lemon', 'straberry', 'melon', 'peach']

document.write(fruits.map(fruit => fruit.lenght))
document.write('<br>')
document.write(fruits.map(fruit => fruit.toUpperCase()))
document.write('<br>')

document.write(fruits.filter(fruit =>fruit.lenght <=5))
document.write('<br>')
document.write(fruits.filter(fruit => fruit.search('a') != -1))

var prices= [3, 5, 10, 15, 5,11]
// suma totala
document.write(prices.reduce((prices,sum) => price + sum))
 

let text ='Tomato Mango Potato'
let newText = text
   .split(',')
   .map(el => el.toLowerCase())
   .join(',')
   document.write(newText)

   document.write('<br>')
   document.write(fruits.sort())
   document.write('<br>')
   document.write(fruits.sort().reverse())

  let fruitsByLenght = fruits.sort((fruit1, fruit2) => fruit1.lenght - fruit2.length)
  document.write(fruitsByLenght)
  document.write('<br>')

// amestecare aleatoriu un array folosind sort
var shuffledFruits = fruits.sort(() =>Math.random()-0.5 )
document.write(shuffledFruits)




