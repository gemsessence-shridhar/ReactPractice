"use client"

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAuhors } from "@/features/authors/authorSlice";

const Authors = () => {
  const dispatch = useDispatch();
  const { authors } = useSelector(state => state.authors)

  useEffect(() => {
    if (authors.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          response.json().then(
            (response) => {
              dispatch(addAuhors({ authors: response }))
            }
          )})
        .then((json) => console.log(json));
    }
  }, []);

  if (authors.length === 0) {
    return <h1>No authors found</h1>
  }


  return (
    authors.map(author => (
      <div>
        <div>
          <h1>ID</h1>
          <h1>{author.id}</h1>
        </div>
      
        <div>
          <h1>ID</h1>
          <h1>{author.id}</h1>
        </div>

        <div>
          <h1>Name</h1>
          <h1>{author.name}</h1>
        </div>

        <div>
          <h1>Username</h1>
          <h1>{author.username}</h1>
        </div>

        <div>
          <h1>Email</h1>
          <h1>{author.email}</h1>
        </div>

        <div>
          <h1>Phone</h1>
          <h1>{author.phone}</h1>
        </div>
      </div>
    ))
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