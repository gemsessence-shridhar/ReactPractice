import { useContext } from 'react';
import { Popconfirm } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { LibraryContext } from '@/contexts/LibraryContext';

const BookCard = ({ book }) => {
  const { dispatch } = useContext(LibraryContext);

  const confirm = (e) => {
    console.log(e);
    dispatch({ type: 'deleted', bookId: book.id })
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
        <button onClick={() => dispatch({ type: 'selectedToView', book })}>
          <FontAwesomeIcon icon={faEye} />
        </button>

        <button onClick={() => dispatch({ type: 'selectedToEdit', book })}>
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
