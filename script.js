const fooddata =  require('./food.json');

function listAllFoodItems() {
    return foodData;} 

function listVegetableFoodItems() {
  return foodData.filter((food) => food.category === 'Vegetable');
}

function listfruitfooditems(){
  return fooddata.filter((food) => food.category === 'fruit');
}

function listproteinfooditems(){
  return fooddata.filter((food) => food.category === 'protein');
}


function listnutsfooditems(){
  return fooddata.filter((food)=> food.category === 'nuts');
}

function listgrainsfooditems(){
  return fooddata.filter((food)=> food.category === 'grain');
}

function listdairyfooditems(){
  return fooddata.filter((food)=> food.category === 'dairy');
}

function listcaloriesfooditems(calorie){
    return fooddata.filter((food) => food.calorie > calorie);
}

function listcaloriesfooditems(calorie){
    return fooddata.filter((food) => food.calorie < calorie);
}

function listFoodItemsByProteinContent() {
    return foodData.sort((a, b) => b.protiens - a.protiens);
  }

  function listFoodItemsByCarbContent() {
    return foodData.sort((a, b) => a.cab - b.cab);
  }


    

