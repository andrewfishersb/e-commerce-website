import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,


  add(item){
    this.get('items').pushObject(item);
    this.cost(this.get('items'));
  },
  remove(item){
    var indexToRemove = this.get('items').indexOf(item);
    this.get('items').removeAt(indexToRemove);
    this.cost(this.get('items'));
  },
  empty(){
    this.get('items').clear();
  },
  removeAllOfOneType(item,items){
    for(var i = 0; i <items.length; i++){
    	if(items.includes(item)){
      	var index = items.indexOf(item);
        items.splice(index,1);
      }
    }
  },
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
