"use client"

import { useSelector } from "react-redux";

const BookDetails = ({ params }) => {
  const { books } = useSelector(state => state.library);  
  const book = books.find(book => book.id === parseInt(params.bookId));

  if (!book) {
    return (<h1>Book not found</h1>)
  }

  return (
    <>
      <p>Title: {book.title}</p>
      <p>Tag Line: {book.tagLine}</p>
      <p>Author: {book.author}</p>
      <p>Publisher: {book.publisher}</p>
      <p>Genre: {book.genre}</p>
      <p>Language: {book.language}</p>
      <p>Number of Pages: {book.noOfPages}</p>
    </>
  )
}

export default BookDetails;
