import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,
  add(item){
    this.get('items').pushObject(item);
    this.cost(this.get('items'));
  },
  remove(item){
    this.get('items').removeObject(item);
    this.cost(this.get('items'));
  },
  empty(){
    this.get('items').clear();
  },
  //maybe a checker for if cart is empty
  cost(items){
    var tempTotal = 0;
    if(items.length>0){
      for (var i = 0; i < items.length; i++) {
      tempTotal+=items[i].data.price;
      }
    }
    this.set("total",tempTotal);
  }
});
