// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection; 
    this.itemsPerPage = itemsPerPage;   
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage); 
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
   if (pageIndex < 0 || pageIndex >= this.pageCount()) { 
      return -1;
    } else if (pageIndex === this.pageCount() - 1) {
      return this.itemCount() % this.itemsPerPage;
    }
    return this.itemsPerPage;            
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex < 0 || itemIndex >= this.itemCount()) return -1; 
    return itemIndex / this.itemsPerPage | 0; 
}







/*
BEST PRACTICE: 

function declareWinner(fighter1, fighter2, firstAttacker) {
  if (fighter1.name !== firstAttacker) return declareWinner(fighter2, fighter1, fighter2.name)
  if (fighter1.health <= 0) return fighter2.name
  if (fighter2.health <= 0) return fighter1.name

  return declareWinner(new Fighter(fighter2.name, fighter2.health - fighter1.damagePerAttack, fighter2.damagePerAttack), fighter1, fighter2.name)
}


*/