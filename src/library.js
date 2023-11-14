function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

function checkoutBook(library, book, genre) {
  if (library.shelves[genre].length > 0) {
    for (i = 0; i < library.shelves[genre].length; i++) {
      if (library.shelves[genre][i].title === book) {
        library.shelves[genre].splice(i, 1);
        return `You have now checked out ${book} from the ${library.name}.`
      }
    }
  } else {
    return `Sorry, there are currently no copies of ${book} available at the Denver Public Library.`
  }
}

function takeStock(library, genre) {
  if (genre) {
    var count = library.shelves[genre].length;
    return `There are a total of ${count} ${genre} books at the ${library.name}.`;
  } else {
    fanCount = library.shelves.fantasy.length
    ficCount = library.shelves.fiction.length
    nonCount = library.shelves.nonFiction.length
    total = fanCount += ficCount += nonCount
   return `There are a total of ${total} books at the ${library.name}.`
 }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};