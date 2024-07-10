"use client"

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import BookCard from '@/components/my-library/BookCard';
// import { Button } from 'antd';

const Books = () => {
  const { books } = useSelector(state => state.library);
  const router = useRouter();

  // const handleButtonClick = () => {
  //   router.push("/books/new")
  // }

  return (
    <div className="basis-full lg:basis-3/5 flex flex-col mt-8 lg:mt-0 items-center max-h-full">
      <div className='flex justify-center items-center p-2 w-full bg-cyan-700'>
        <h1 className="text-2xl text-slate-50 font-bold">Book Self</h1>
      </div>

      {/* <Button type='primary' onClick={handleButtonClick}>+ Add New Book</Button> */}
      <Link href="/books/new">+ Add New Book</Link>

      <div className='flex flex-col gap-4 py-8 lg:px-20 w-full max-h-[95%] overflow-auto'>
        {books.length > 0 && books.map(book => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  )
}

export default Books;
