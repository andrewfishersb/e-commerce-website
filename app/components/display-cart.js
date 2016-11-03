import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  cartQuantity: Ember.computed(function(){
    console.log("got here");
    var items = this.shoppingCart.items;
    console.log(items);
    var quantity = 0;
    for(var i = 0; i<items.length; i++){
      if(this.get('item.name') === items[i].name){
        quantity++;
      }
    }
    return quantity
  }),
  actions: {
    removeFromCart(item){
      this.get('shoppingCart').remove(item);
    }
  }
});
