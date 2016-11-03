import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  // cartQuantity: Ember.computed('item.name',function(){
  //   var items = this.get('shoppingCart.items');
  //   var quantity = 0;
  //   for(var i = 0; i<items.length; i++){
  //     if(this.get('item.name') === items[i].name){
  //       quantity++;
  //     }
  //   }
  //   return quantity
  // }),
  actions: {
    removeFromCart(item){
      this.get('shoppingCart').remove(item);
    }
  }
});
