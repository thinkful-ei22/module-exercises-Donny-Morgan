'use strict';


const store = (function () {

  const foot = 'bar';  
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];

  const hideCheckedItems = false;
  const searchTerm = '';
  
  const findById = function(id) {
    return items.find(item => item.id === id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(error) {
      console.log(error);
    }
  };

  const findAndToggleChecked = function(id) {
    const foundItem = this.findById(id);
    console.log("yes");
    console.log(foundItem);
    foundItem.checked = !foundItem.checked;
  };

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      const foundItem = this.findById(id);
      foundItem.name = newName;
    } catch(error) {
      console.log(`Cannot update name: ${error}`);
    }
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(object => object.id !== id);
  };


  const toggleCheckedFilter= function(){

    this.hideCheckedItems = !this.hideCheckedItems;    
  }

  const setSearchTerm = function(newSearchTerm){
    this.searchTerm = newSearchTerm;
  }




  return{
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };

}() );