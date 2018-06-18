/* global shoppingList, cuid */
'use strict';

// eslint-disable-next-line no-unused-vars



//console.log(store);
//console.log(foo);

//console.log(Item);
//console.log(foo);
console.log(store.items);


$(document).ready(function() {
  shoppingList.bindEventListeners();
  
  shoppingList.render();
});