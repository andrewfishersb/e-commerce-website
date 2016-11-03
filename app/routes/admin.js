import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      product: this.store.findAll('product'),
      reviews: this.store.findAll('review')
    })
  },

  actions: {
    saveItem(params){
      var newItem = this.store.createRecord('product',params);
        newItem.save();
        this.transitionTo('admin');
    },
    delete(item) {
      this.get('shoppingCart').removeAllOfOneType(item,this.get('shoppingCart.items'));
      this.get('shoppingCart').cost(this.get('shoppingCart.items'));
      var review_deletion = item.get('reviews').map(function(review){
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletion).then(function(){
        return item.destroyRecord();
      });
      this.transitionTo('admin');
    },
    editItem(item, params){
      console.log("got to this point")
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          item.set(key,params[key]);
        }
      });
      item.save();
      this.transitionTo('admin');
    }
  }
});
