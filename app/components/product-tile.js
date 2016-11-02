import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item){
      debugger;
      this.get('shoppingCart').add(item);
      console.log("closed");
    }
  }
});
