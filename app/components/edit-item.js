import Ember from 'ember';

export default Ember.Component.extend({
  showEdit: false,
  actions:{
      editItem(item){
        var params = {
          name: this.get("name"),
          description: this.get("description"),
          price: this.get('price'),
          image: this.get("image")
        }
        if(params.price){
          params.price = parseInt(params.price);
        }
        this.set('name',"");
        this.set('description',"");
        this.set('price',"");
        this.set('image',"");


        this.sendAction("editItem", item, params);
        this.set('showEdit',false)

    },
    showForm(){
      this.set('showEdit',true);
    }
  }
});
