"use client"

export default function Profile(props) {
  return (
    <>
      <img
        src="URL"
        alt="Katherine Johnson"
      />
      <Article {...props} />
    </>
  )
}


function Article({ name, details="Default Details" }) {
  return (
    <article>
      <h1>{name}</h1>
      <ol>
        <li>{details}</li>
        <li>Defining a Component</li>
        <li style={{backgroundColor: "green"}}>Using a Component</li>
      </ol>
    </article>
  )
}

const profiles = [
  {
    id: 1,
    name: "Mr. Rahul",
    Address: "Indore MP"
  }, {
    id: 2,
    name: "Mr. Rajiv",
    Address: "Bhopal MP"
  }
]

const numbers = [1, 2, 3, 4, 5]

export {
  profiles, numbers
};