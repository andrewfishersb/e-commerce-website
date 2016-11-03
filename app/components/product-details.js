import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('product.reviews', 'sortBy'),

  actions: {
    saveReview(params) {
      this.sendAction('saveReview', params);
    },
    addToCart(item){
      this.get('shoppingCart').add(item);
    },
    deleteReview(review){
      this.sendAction('deleteReview',review)
    }
  }
});
