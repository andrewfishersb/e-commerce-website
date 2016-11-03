import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteReview(review){
      this.sendAction('deleteReview',review)
    }
  }
});
