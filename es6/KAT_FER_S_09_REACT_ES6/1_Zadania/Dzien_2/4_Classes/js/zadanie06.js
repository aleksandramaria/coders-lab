let foods =[];

/* abstract */ class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }
  print() {
    console.log(this.name + " " + this.protein + " " + this.carbs + " " + this.fat);
  }
}

class FastFood extends Food {
}

class FatFreeFood extends Food {
}

const name = $('#name');
const proteins = $('#proteins');
const carbs = $('#carbs');
const fat = $('#fat');
const submit = $('#add');
const ul = $('#products');

submit.on('click', e => {
  e.preventDefault();

  const totalCal = proteins.val() * 4 + carbs.val() * 4 + fat.val() * 9;
  let food;
  if(totalCal >= 250) {
    food = new FastFood(name.val(), proteins.val(), carbs.val(), fat.val());
  } else {
    food = new FatFreeFood(name.val(), proteins.val(), carbs.val(), fat.val());
  }
  foods.push(food);
  console.log(foods);
  const newLi = $('<li>');
  newLi.text(food.name + ': ' + food.protein + ' gram bialka ' + food.carbs + ' gram weglowodanow ' + food.fat + ' gram tluszczu.');
  ul.append(newLi);
});
