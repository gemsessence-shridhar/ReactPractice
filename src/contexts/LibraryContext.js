import { useReducer, createContext } from "react";
import booksReducer from "@/reducers/library";

const initialBooksInTheSelf = [
  {
    "id": 1,
    "title": "The Great Gatsby",
    "tagLine": "A story of the Jazz Age in 1920s America",
    "author": "F. Scott Fitzgerald",
    "publisher": "Scribner",
    "genre": "Fiction",
    "language": "English",
    "noOfPages": 180
  },
  {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "tagLine": "A gripping, heart-wrenching, and wholly remarkable tale",
    "author": "Harper Lee",
    "publisher": "J.B. Lippincott & Co.",
    "genre": "Fiction",
    "language": "English",
    "noOfPages": 281
  },
  {
    "id": 3,
    "title": "1984",
    "tagLine": "A dystopian social science fiction novel and cautionary tale",
    "author": "George Orwell",
    "publisher": "Secker & Warburg",
    "genre": "Dystopian, Political Fiction",
    "language": "English",
    "noOfPages": 328
  },
  {
    "id": 4,
    "title": "One Hundred Years of Solitude",
    "tagLine": "A landmark novel of magical realism",
    "author": "Gabriel García Márquez",
    "publisher": "Harper & Row",
    "genre": "Magical Realism",
    "language": "Spanish",
    "noOfPages": 417
  },
  {
    "id": 5,
    "title": "The Catcher in the Rye",
    "tagLine": "A novel about adolescent alienation and loss of innocence",
    "author": "J.D. Salinger",
    "publisher": "Little, Brown and Company",
    "genre": "Fiction",
    "language": "English",
    "noOfPages": 234
  },
  {
    "id": 6,
    "title": "Pride and Prejudice",
    "tagLine": "A classic novel about manners, marriage, and society",
    "author": "Jane Austen",
    "publisher": "T. Egerton",
    "genre": "Fiction",
    "language": "English",
    "noOfPages": 432
  },
  {
    "id": 7,
    "title": "Moby-Dick",
    "tagLine": "The epic tale of a man's obsession with conquering a white whale",
    "author": "Herman Melville",
    "publisher": "Harper & Brothers",
    "genre": "Adventure, Fiction",
    "language": "English",
    "noOfPages": 635
  },
  {
    "id": 8,
    "title": "War and Peace",
    "tagLine": "A historical novel that intertwines the lives of multiple families during the Napoleonic Wars",
    "author": "Leo Tolstoy",
    "publisher": "The Russian Messenger",
    "genre": "Historical Fiction",
    "language": "Russian",
    "noOfPages": 1225
  },
  {
    "id": 9,
    "title": "The Hobbit",
    "tagLine": "A fantasy novel about the journey of Bilbo Baggins",
    "author": "J.R.R. Tolkien",
    "publisher": "George Allen & Unwin",
    "genre": "Fantasy",
    "language": "English",
    "noOfPages": 310
  },
  {
    "id": 10,
    "title": "Crime and Punishment",
    "tagLine": "A psychological drama about the moral dilemmas of a young man",
    "author": "Fyodor Dostoevsky",
    "publisher": "The Russian Messenger",
    "genre": "Psychological Fiction",
    "language": "Russian",
    "noOfPages": 671
  },
  {
    "id": 11,
    "title": "Emotional Intelligence: Why It Can Matter More Than IQ",
    "tagLine": "A groundbreaking book that explores the role of emotional intelligence in personal and professional success",
    "author": "Daniel Goleman",
    "publisher": "Bantam Books",
    "genre": "Psychology, Self-Help",
    "language": "English",
    "noOfPages": 384
  }
]
const initialStates = {
  books: initialBooksInTheSelf,
  currentBook: {},
  isModalOpen: false,
  isEditingBook: false,
}

export const LibraryContext = createContext();

const LibraryContextProvider = ({ children }) => {
  const [states, dispatch] = useReducer(booksReducer, initialStates);
  return (
    <LibraryContext.Provider value={{...states, dispatch}}>
      {children}
    </LibraryContext.Provider>
  )
}

export default LibraryContextProvider;
