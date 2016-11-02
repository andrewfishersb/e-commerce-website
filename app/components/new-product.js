import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveItem(){
      if(this.get("name")&&this.get('price')){
        var params = {
          name: this.get("name"),
          description: this.get("description") ? this.get('description'): "",
          price: parseInt(this.get('price')),
          image: this.get("image") ? this.get('image'): "",
        }
        this.set('name','');
        this.set('description',"");
        this.set('price','');
        this.set('image','');
        this.sendAction("saveItem", params)
      }
      alert("Must Enter a product and price");
    }
  }
});
