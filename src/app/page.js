"use client";

import BookForm from '@/components/my-library/BookForm';
import BookModal from '@/components/my-library/BookModal';
import LibraryContextProvider from '@/contexts/LibraryContext';
import Books from '@/components/my-library/Books';

const Library = () => {
  return (
    <LibraryContextProvider>
      <div className="flex flex-wrap w-full h-full">
        <BookForm/>
        <Books />
      </div>

      <BookModal />
    </LibraryContextProvider>
  )
}

export default Library;