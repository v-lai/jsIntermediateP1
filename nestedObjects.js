var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}
// Using a for loop, console.log all of the numbers in the primeNumbers array.
var primeNumbers = nestedData.innerData.numberData.primeNumbers;
for (var i = 0; i < primeNumbers.length; i++){
    console.log(primeNumbers[i]);
}
// Using a for loop, console.log all of the even Fibonnaci numbers.
var fibonnaci = nestedData.innerData.numberData.fibonnaci;
for (var i = 0; i < fibonnaci.length; i++){
    if (fibonnaci[i] % 2 == 0){
        console.log(fibonnaci[i]);
    }
}

// Console.log the value "second" inside the order array.
console.log(nestedData.innerData.order[1]);

// Invoke the addSnack function and add the snack "chocolate".
nestedData.innerData.addSnack("chocolate");
console.log(nestedData.innerData.snacks);

/* Inside of the addSnack function there is a special keyword called this. 
   What does the word this refer to inside the addSnack function? */
// the this keyword refers to the object itself

var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}
/* Write a function addSpeaker to add a speaker to the array of speakers. The 
   speaker you add must be an object with a key of name and a value of whatever 
   you'd like. */
function addSpeaker(name){
    nestedObject.speakers.push({name: name});
    return nestedObject.speakers;
}
addSpeaker("myName");

/* Write a function addLanguage that adds a language to the languages object. 
   The language object you add should have a key with the name of the language 
   and the value of another object with a key of "hello" and a value of however
   you spell "hello" in the language you add. */
function addLanguage(language, hello){
    nestedObject.data.languages[language] = {hello: hello};
    return nestedObject.data.languages;
}
addLanguage("mandarin chinese", "Ni hao");

/* Write a function addCountry that adds a European country to the countries 
   object (inside of the continents object, inside of the countries object). 
   The country you add should be an object with the key as name of the country 
   and the value as an object with the keys of "capital" and "population" and 
   their respective values. */
function addCountry(country, capital, population){
    nestedObject.data.continents.europe.countries[country] = {
        capital: capital,
        population: population
    }
    return nestedObject.data.continents.europe.countries;
}
addCountry("iceland", "Reykjavik", 333000);
