// Define the meal maker object
const mealMaker = {
    // Define the available ingredients
    ingredients: {
      protein: ['chicken', 'beef', 'tofu', 'fish'],
      starch: ['rice', 'potato', 'pasta', 'bread'],
      vegetable: ['broccoli', 'carrots', 'spinach', 'peppers']
    },
    // Define a method to get a random item from an array
    getRandomItem(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    },
    // Define a method to generate a random meal
    generateMeal() {
      const protein = this.getRandomItem(this.ingredients.protein);
      const starch = this.getRandomItem(this.ingredients.starch);
      const vegetable = this.getRandomItem(this.ingredients.vegetable);
      const meal = `Your meal is ${protein} with ${starch} and ${vegetable}. Enjoy!`;
      return meal;
    }
  };
  
  // Test the meal maker by generating a meal
  console.log(mealMaker.generateMeal());
  