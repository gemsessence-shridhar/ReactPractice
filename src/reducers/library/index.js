import { findIndex } from "lodash";

const booksReducer = (states, action) => {
  switch (action.type) {
    case 'added': {
      // TODO:: fetch the maximum id from the books array and increase by 1
      const bookObj = { id: states.books.length + 1 }
      action.formData.forEach((value, key) => { bookObj[key] = value; })
      return { ...states, books: [...states.books, bookObj] }
    }
    case 'updated': {
      const bookObj = {...states.currentBook}
      action.formData.forEach((value, key) => { bookObj[key] = value; })
      const booksCopy = [...states.books];
      var index = findIndex(booksCopy, { id: states.currentBook.id });
      booksCopy.splice(index, 1, bookObj);
      return { ...states, books: booksCopy, isEditingBook: false, currentBook: undefined }
    }
    case 'deleted': {
      const filteredBooks = states.books.filter((book) => book.id !== action.bookId)
      return { ...states, books: filteredBooks }
    }
    case 'selectedToView': {
      return { ...states, currentBook: action.book, isModalOpen: true }
    }
    case 'selectedToEdit': {
      return { ...states, currentBook: action.book, isEditingBook: true }
    }
    case 'closedModal': {
      return { ...states, currentBook: undefined, isModalOpen: false,  }
    }
  }
}

export default booksReducer;
