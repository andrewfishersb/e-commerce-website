import Ember from 'ember';

export function itemRating(params) {
  // debugger;
  console.log(params);
  var reviewRating = params[0]
  var displayStars ="";
  var fullStars =reviewRating;
  var emptyStars=5-reviewRating;
  for(var i = 0; i<fullStars;i++){
    displayStars+='<span class="glyphicon glyphicon-star"></span>'
  }
  for(var i = 0; i <emptyStars;i++){
    displayStars+='<span class="glyphicon glyphicon-star-empty"></span>'
  }
  return Ember.String.htmlSafe(displayStars);


}

export default Ember.Helper.helper(itemRating);
