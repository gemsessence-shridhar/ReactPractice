const Library = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col gap-4 items-center w-1/2 border-r-2">
        <h1 className="text-3xl font-bold mt-4">Create Book</h1>
        <form className="flex flex-col gap-4 px-2 py-4">
          <div className="flex justify-between gap-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-solid border-2 rounded-md"
            />
          </div>

          <div className="flex justify-between gap-4">
            <label htmlFor="tagLine">Tag Line</label>
            <input
              type="text"
              name="tagLine"
              id="tagLine"
              className="border-solid border-2 rounded-md"
            />
          </div>

          <div className="flex justify-between gap-4">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              className="border-solid border-2 rounded-md"
            />
          </div>


          <div className="flex justify-between gap-4">
            <label htmlFor="noOfPages">No of Pages</label>
            <input
              type="number"
              name="noOfPages"
              id="noOfPages"
              className="border-solid border-2 rounded-md"
            />
          </div>

          <div className="flex gap-4 justify-center mt-8">
            <input type="button" value="Reset" className="px-4 py-2 border-solid border-2 rounded-md" />
            <input type="submit" value="Save" className="px-4 py-2 border-solid border-2 rounded-md" />
          </div>
        </form>
      </div>
      <div className="flex w-1/2"></div>
    </div>
  )
}

export default Library;