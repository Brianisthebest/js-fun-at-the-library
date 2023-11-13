function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(book);
  };
}

function unshelfBook(book, shelf) {
  for(i = 0; i < shelf.length; i++ ) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1);
    }
  }
  return shelf;
}

function listTitles(shelf) {
  var titles = []

  for(i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  return titles.join(", ");
}

function searchShelf(shelf, title) {
  var included = false;

  for(i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      included = true;
    }
  }
  return included
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};