let dropdown1 = document.getElementById('fruitdrop1');
dropdown1.length = 0;
let dropdown2 = document.getElementById('fruitdrop2');
dropdown2.length = 0;
let dropdown3 = document.getElementById('fruitdrop3');
dropdown3.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Apple';

dropdown1.add(defaultOption);
dropdown1.selectedIndex = 0;

dropdown2.add(defaultOption);
dropdown2.selectedIndex = 0;

dropdown3.add(defaultOption);
dropdown3.selectedIndex = 0;

const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }
  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].abbreviation;
      	  dropdown1.add(option);
    	}
      for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
              option.text = data[i].name;
              option.value = data[i].abbreviation;
              dropdown2.add(option);
      }
      for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
              option.text = data[i].name;
              option.value = data[i].abbreviation;
              dropdown3.add(option);
      } 
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });


fruitform = document.querySelector("form[name=fruitform]");
fruitform.querySelector("button").addEventListener("click", function(){
  fruitform.requestSubmit();
});

fruitform.addEventListener("submit", function(e){
  e.preventDefault();
  displaysmoothie();
});

  function displaysmoothie() {
    let fname = document.querySelector("#fname").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let fruit1 = document.querySelector("#fruitdrop1").value;
    let fruit2 = document.querySelector("#fruitdrop2").value;
    let fruit3 = document.querySelector("#fruitdrop3").value;
    let special = document.querySelector("#special").value;
  
    let carbsf1 = fruits.filter(function(fruit){
      return fruit.name == document.querySelector("#fruitdrop1").value;
    });
    let carbsf2 = fruits.filter(function(fruit){
      return fruit.name == document.querySelector("#fruitdrop2").value;
    });
    let carbsf3 = fruits.filter(function(fruit){
      return fruit.name == document.querySelector("#fruitdrop3").value;
    });

    let carbt = carbsf1[0].nutritions.carbohydrates + carbsf2[0].nutritions.carbohydrates + carbsf3[0].nutritions.carbohydrates;
  
    let proteinf1 = fruits.filter(function(fruit){
      return fruit.name == document.querySelector("#fruitdrop1").value;
    });
    let proteinf2 = fruits.filter(function(fruit){
      return fruit.name == document.querySelector("#fruitdrop2").value;
    });
    let proteinf3 = fruits.filter(function(fruit){
      return fruit.name == document.querySelector("#fruitdrop3").value;
    });

    let proteint = proteinf1[0].nutritions.protein + proteinf2[0].nutritions.protein + proteinf3[0].nutritions.protein;
  
    let fatf1 = fruits.filter(function(fruit){
      return fruit.name == document.querySelector("#fruitdrop1").value;
    });
    let fatf2 = fruits.filter(function(fruit){
      return fruit.name == document.querySelector("#fruitdrop2").value;
    });
    let fatf3 = fruits.filter(function(fruit){
      return fruit.name == document.querySelector("#fruitdrop3").value;
    });

    let fatt = fatf1[0].nutritions.fat + fatf2[0].nutritions.fat + fatf3[0].nutritions.fat;
  
    let sugarf1 = fruits.filter(function(fruit){
      return fruit.name == document.querySelector("#fruitdrop1").value;
    });
    let sugarf2 = fruits.filter(function(fruit){
      return fruit.name == document.querySelector("#fruitdrop2").value;
    });
    let sugarf3 = fruits.filter(function(fruit){
      return fruit.name == document.querySelector("#fruitdrop3").value;
    });

    let sugart = sugarf1[0].nutritions.sugar + sugarf2[0].nutritions.sugar + sugarf3[0].nutritions.sugar;
  
    let result = `
      <h2>First Name: </h2>
      <p>${fname}</p>
      <h2>Email: </h2>
      <p>${email}</p>
      <h2>Phone: </h2>
      <p>${phone}</p>
      <h2>Fruit 1: </h2>
      <p>${fruit1}</p>
      <h2>Fruit 2: </h2>
      <p>${fruit2}</p>
      <h2>Fruit 3: </h2>
      <p>${fruit3}</p>
      <h2>Special Notes: </h2>
      <p>${special}</p>
      <h2>Total Carbs: </h2>
      <p>${carbt.toFixed(2)}</p>
      <h2>First Name: </h2>
      <p>${proteint.toFixed(2)}</p>
      <h2>First Name: </h2>
      <p>${fatt.toFixed(2)}</p>
      <h2>First Name: </h2>
      <p>${sugart.toFixed(2)}</p>`;
  
    document.querySelector("#newdrink").innerHTML = result;
  }