"use client"

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addAuthor } from "@/features/authors/authorSlice";

const NewAuthor = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { authors } = useSelector(state => state.authors)

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const authorObj = {}
    debugger
    formData.forEach((value, key) => { authorObj[key] = value; })

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(authorObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => dispatch(addAuthor({ author: json })));
    event.target.reset();
    router.push("/authors");
  }

  const getDefaultValue = (fieldName) => {
    return "";
  }

  return (
    <div className="basis-full lg:basis-2/5 flex flex-col gap-4 items-center lg:border-r-2">
      <div className='flex justify-center items-center p-2 w-full bg-teal-700'>
        <h1 className="text-2xl text-slate-50 font-bold">Add Author</h1>
      </div>

      <form className="flex flex-col w-full lg:w-4/5 gap-6 lg:gap-4 px-4 lg:px-2 py-4" onSubmit={handleFormSubmit}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={getDefaultValue("name")}
            className="w-full lg:w-4/5 border-2 rounded-md p-3"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-4">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            defaultValue={getDefaultValue("userName")}
            className="w-full lg:w-4/5 border-2 rounded-md p-3"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={getDefaultValue("email")}
            className="w-full lg:w-4/5 border-2 rounded-md p-3"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-4">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            defaultValue={getDefaultValue("phone")}
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
    </div>
  )
}

export default NewAuthor;
