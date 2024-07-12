"use client"

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAuthors, deleteAuthor } from "@/features/authors/authorSlice";
import { Button } from "antd";
import Link from "next/link";

const Authors = () => {
  const dispatch = useDispatch();
  const { authors } = useSelector(state => state.authors)

  useEffect(() => {
    if (authors.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => dispatch(addAuthors({ authors: json })));
    }
  }, []);

  const handleDeleteAuthor = (authorId) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`, { method: 'DELETE' })
      .then((response) => {
        if (response.status === 200) {
          dispatch(deleteAuthor({ authorId }))
        }
      })
  }


  if (authors.length === 0) {
    return <h1>No authors found</h1>
  }

  return (
    <div>
      <Link href="/authors/new">+ Add Author</Link>

      {authors.map(author => (
        <div className="flex flex-col mb-8">
          <div className="flex gap-4">
            <h1>ID</h1>
            <h1>{author.id}</h1>
          </div>
  
          <div className="flex  gap-4">
            <h1>Name</h1>
            <h1>{author.name}</h1>
          </div>
  
          <div className="flex  gap-4">
            <h1>Username</h1>
            <h1>{author.username}</h1>
          </div>
  
          <div className="flex  gap-4">
            <h1>Email</h1>
            <h1>{author.email}</h1>
          </div>
  
          <div className="flex  gap-4">
            <h1>Phone</h1>
            <h1>{author.phone}</h1>
          </div>
  
          <Button size="small" type="primary" onClick={() => handleDeleteAuthor(author.id)}>Delete</Button>
        </div>
      ))}
    </div>
  )
}

export default Authors;


// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },