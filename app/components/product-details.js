import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('product.reviews', 'sortBy'),
  // averageRating: Ember.computed('product', function() {
  //   // debugger;
  //   var product = this.get('product');
  //   var reviews = product.get('reviews');
  //   console.log(product.reviews(0));
  //   // console.log(reviews.content);
  //   // console.log(reviews.content.get());
  //   var totalRating = 0;
  //   for (var i = 0; i < reviews.content.length; i++) {
  //     totalRating += reviews.content.currentState[i]._data.rating;
  //   }
  //   return totalRating / reviews.content.length;
  // }),

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
