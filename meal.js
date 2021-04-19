const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice){
  const dish = {
    name: dishName,
    price: dishPrice,
  }
  return this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your order is ${appetizer.name}, ${main.name} and ${dessert.name}. The total price is ${totalPrice} euro.`
  }
  };
  
  menu.addDishToCourse('appetizers', 'Bruschetta', 3);
  menu.addDishToCourse('appetizers', 'Tartar', 6);
  menu.addDishToCourse('appetizers', 'Chef choise', 4);

  
  menu.addDishToCourse('mains', 'Risotto Milanese', 7);
  menu.addDishToCourse('mains', 'Orata', 8 );
  menu.addDishToCourse('mains', 'Canederli', 10);

  
  menu.addDishToCourse('desserts', 'Tiramisu', 5.00);
  menu.addDishToCourse('desserts', 'Sorbetto', 4);
  menu.addDishToCourse('desserts', 'Napoleon', 5);

  
  const meal = menu.generateRandomMeal();
  console.log(meal);