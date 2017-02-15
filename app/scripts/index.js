var $ = require('jquery'); //3rd party libraries

var pizzaTemplate = require('../templates/pizza-item.hbs');
var pizzaCollection = require('./models/models').PizzaCollection; //local libraries
var models = require('./models/models');

var pizzas = new models.PizzaCollection();

$('#submit-button').on('click', function(){
$('#submit-button').text('Loading...');
console.log('pizzas');

pizzas.fetch();
})

pizzas.on('update', function(){  //listen for event for pizzas
  console.log(pizzas);

pizzas.forEach(function(menu){
  $('button').text('Submit');

});
});
