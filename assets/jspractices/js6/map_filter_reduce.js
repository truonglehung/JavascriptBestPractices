/*
===========MAP======
*/

document.getElementById("1demo1").innerHTML = "hello";

//EXAMPLE1 GET ALL THE ANIMAL NAME 
const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]

//using for loop
/* let animal_names = [];
for (let i = 0; i < animals.length; i++) {
    animal_names.push(animals[i].name);
}

document.getElementById("1demo1").innerHTML = animal_names; */

//using map
let animal_names = animals.map((animal, index, animals) => {
    return animal.name
})

document.getElementById("1demo1").innerHTML = animal_names;

/*
===========FILTER======
*/

//EXAMPLE1 GET ALL THE SMALL ANIMAL  
//using for loop

/* let small_animals = [];

for (let i = 0; i < animals.length; i ++) {
    if (animals[i].size === "small") {
        small_animals.push(animals[i].name)
    }
}

document.getElementById("1demo2").innerHTML = "small animal: " +small_animals; */

//using filter
let small_animals = animals.filter((animal) => {
    return animal.size === "small"
})
document.getElementById("1demo2").innerHTML = "small animal: " +small_animals;


/*
===========REDUCE======
*/
//EXAMPLE1 GET TOTAL WEIGHT OF ALL THE ANIMALS
//using for loop

let total_weight = 0;
for (let i = 0; i < animals.length; i++) {
    total_weight += animals[i].weight
    console.log(total_weight);
}

document.getElementById("1demo3").innerHTML = total_weight;

//using reduce
/* let total_weight = animals.reduce((weight, animal, index, animals) => {
    return weight += animal.weight
}, 0)

console.log(total_weight); */

