
// conversie la json:
var hero = {
    name: 'Superman',
    power: 1000,
    life: 100
}


JSON.stringify(hero)
   
document.write(json)

// conversie de la json la obiect:
var json = '{"name":"Superman","power":1000,"Life":100}' 

hero = JSON.parse(json)

console.log(hero)