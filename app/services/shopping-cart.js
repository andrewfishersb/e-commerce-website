import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  add(item){
    console.log("item added "+item);
    this.get('items').pushObject(item);
  },
  remove(item){
    this.get('items').removeObject(item);
  },
  empty(){
    this.get('items').clear();
  },
  //maybe a checker for if cart is empty
  // cost(){
  //   var total =0;
  //   var tempCart[]=this.get('cart');
  //   if(tempCart.length>0 && tempCart[i].price){
  //     for (var i = 0; i < tempCart.length; i++) {
  //       total+=tempCart[i].price
  //     }
  //   }
  //     return total;
  //   }
});
