var Backbone = require('backbone');

var Pizza = Backbone.Model.extend({

});

var PizzaCollection = Backbone.Collection.extend({
  model: Pizza,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/pizza',
  // parse: function(data){
  //   return data.results;
});
console.log(PizzaCollection)



module.exports = {
  PizzaCollection: PizzaCollection,
  Pizza: Pizza

};
