var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var len = ingredients.length;
var i = 0;
while(i != len) {
  console.log(ingredients[i]);
  i++;
}

for(i=0;i<len; i++) {
  console.log(ingredients[i]);
}

for(i=len-1; i>=0; i--) {
  console.log(ingredients[i]);
}