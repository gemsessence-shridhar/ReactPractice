"use client"

import { useDispatch } from 'react-redux';
import { deleteBook, selectToView, selectToEdit } from '@/features/library/bookSlice';
import { Popconfirm } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const confirm = () => {
    dispatch(deleteBook({ bookId: book.id }))
  };

  return (
    <div className="flex w-full justify-between border-2 hover:border-cyan-700 shadow-lg duration-500 transition-transform transform hover:scale-105 rounded-md p-4">
      <div>
        <div className='flex gap-4 font-bold'>
          <span className='text-cyan-700'>{book.title} - {book.author}</span>
        </div>

        <div>
          <span className='text-sm'>{book.tagLine}</span>
        </div>
      </div>

      <div className='flex items-start md:items-center gap-4'>
        <button onClick={() => dispatch(selectToView({ book }))}>
          <FontAwesomeIcon icon={faEye} />
        </button>

        <button onClick={() => dispatch(selectToEdit({ book }))}>
          <FontAwesomeIcon icon={faPencil} className='text-cyan-700' />
        </button>

        <Popconfirm
          placement="left"
          title="Delete the book"
          description="Are you sure to delete this book?"
          onConfirm={confirm}
          onCancel={() => {}}
          okText="Yes"
          cancelText="No"
        >
          <button>
            <FontAwesomeIcon icon={faTrash} className='text-red-700' />
          </button>
        </Popconfirm>
      </div>
    </div>
  )
}

export default BookCard;
