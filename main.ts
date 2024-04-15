//          100 days of coding challenge ( DAY 27 )

//   Question 01
// --This sets up an object for a car with specific details
  let car = {
    make:"Honda",
    model: "Civic",
    year: 2024,
  }
  console.log(car.model)
  // --We use dot notation (car.model) to get the model of the car from our object.
//   Question 02    
//--Starting with our car object
let Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

// Adding a new property 'color' and updating 'year'
car.Color = "blue"; // --Adds a new property 'color'
car.year = 2021; // --Updates the 'year' property

//--Showing the updated car object
console.log(car); // --Outputs the car object with the new color and updated year
// --Now our car is blue and its model year is updated to 2021.
//   Question 03 
// This function shows every detail about an object
function logObjectProperties(obj: object) {
    for (let property in obj) {
        // Loops through each property in the object
        console.log(`${property}: ${obj[property]}`);
        // Shows the property name and its value
    }
}

// Using the function with a car object
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
// It tells us each piece of information stored about the car.
 