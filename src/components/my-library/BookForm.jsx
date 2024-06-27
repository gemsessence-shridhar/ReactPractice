import { findIndex } from "lodash";

const BookForm = ({ books, setBooks, isEditingBook, currentBook, setIsEditingBook }) => {
  const getDefaultValue = (fieldName) => {
    if (!isEditingBook) { return "" }
    return currentBook[fieldName];
  }

  const initializeBookInformation = () => {
    return {
      id: books.length + 1
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const bookObj = isEditingBook ? {...currentBook} : initializeBookInformation()
    const formData = new FormData(event.target);    
    formData.forEach((value, key) => {
      bookObj[key] = value;
    })

    if (isEditingBook) {
      const booksCopy = [...books];
      var index = findIndex(booksCopy, { id: currentBook.id });
      booksCopy.splice(index, 1, bookObj);
      setBooks(booksCopy);
      setIsEditingBook(false);
    } else {
      setBooks([...books, bookObj])
    }

    event.target.reset();
  }

  return (
    <form className="flex flex-col w-full lg:w-4/5 gap-6 lg:gap-4 px-4 lg:px-2 py-4" onSubmit={handleFormSubmit}>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-4">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={getDefaultValue("title")}
          className="w-full lg:w-4/5 border-2 rounded-md p-3"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-4">
        <label htmlFor="tagLine">Tag Line</label>
        <input
          type="text"
          name="tagLine"
          id="tagLine"
          defaultValue={getDefaultValue("tagLine")}
          className="w-full lg:w-4/5 border-2 rounded-md p-3"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-4">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          defaultValue={getDefaultValue("author")}
          className="w-full lg:w-4/5 border-2 rounded-md p-3"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-4">
        <label htmlFor="publisher">Publisher</label>
        <input
          type="text"
          name="publisher"
          id="publisher"
          defaultValue={getDefaultValue("publisher")}
          className="w-full lg:w-4/5 border-2 rounded-md p-3"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-4">
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          name="genre"
          id="genre"
          defaultValue={getDefaultValue("genre")}
          className="w-full lg:w-4/5 border-2 rounded-md p-3"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-4">
        <label htmlFor="language">Language</label>
        <input
          type="text"
          name="language"
          id="language"
          defaultValue={getDefaultValue("language")}
          className="w-full lg:w-4/5 border-2 rounded-md p-3"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-4">
        <label htmlFor="noOfPages">No of Pages</label>
        <input
          type="number"
          name="noOfPages"
          id="noOfPages"
          defaultValue={getDefaultValue("noOfPages")}
          className="w-full lg:w-4/5 border-2 rounded-md p-3"
        />
      </div>

      <div className="flex gap-4 justify-center mt-2 lg:mt-8">
        <input
          type="button"
          value="Reset"
          className="px-4 py-2 border-solid border-2 rounded-md"
          onClick={(e) => e.target.form.reset()}
        />

        <input
          type="submit"
          value="Save"
          className="px-4 py-2 border-solid border-2 rounded-md"
        />
      </div>
    </form>
  )
}

export default BookForm;
