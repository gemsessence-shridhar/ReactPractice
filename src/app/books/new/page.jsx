"use client"

import { useSelector, useDispatch } from "react-redux";
import { addBook, updateBook } from "@/features/library/bookSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BookForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentBook, isEditingBook } = useSelector(state => state.library)

  const getDefaultValue = (fieldName) => {
    if (!isEditingBook) { return "" }
    return currentBook[fieldName];
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    isEditingBook ? dispatch(updateBook({ formData })) : dispatch(addBook({ formData }));
    event.target.reset();
    router.push("/");
  }

  return (
    <div className="basis-full lg:basis-2/5 flex flex-col gap-4 items-center lg:border-r-2">
      <div className='flex justify-center items-center p-2 w-full bg-teal-700'>
        <h1 className="text-2xl text-slate-50 font-bold">Add Book</h1>
      </div>

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

          <Link href="/">Books Page</Link>
        </div>
      </form>
    </div>
  )
}

export default BookForm;
