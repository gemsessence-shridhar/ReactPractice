import { useContext } from 'react';
import { Modal } from 'antd';
import { LibraryContext } from '@/contexts/LibraryContext';

const BookModal = () => {
  const { currentBook, isEditingBook, isModalOpen, dispatch } = useContext(LibraryContext);

  if (!currentBook || isEditingBook)
    return null;

  return (
    <Modal
      title={`#${currentBook.id} - ${currentBook.title}`}
      open={isModalOpen}
      onCancel={() => dispatch({ type: "closedModal" })}
      footer={[]}
    >
      <p>Title: {currentBook.title}</p>
      <p>Tag Line: {currentBook.tagLine}</p>
      <p>Author: {currentBook.author}</p>
      <p>Publisher: {currentBook.publisher}</p>
      <p>Genre: {currentBook.genre}</p>
      <p>Language: {currentBook.language}</p>
      <p>Number of Pages: {currentBook.noOfPages}</p>
    </Modal>
  );
};
export default BookModal;
