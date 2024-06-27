import { Modal } from 'antd';

const BookModal = ({ book, isModalOpen, handleCloseModal }) => {
  return (
    <Modal title={`#${book.id} - ${book.title}`} open={isModalOpen} onCancel={handleCloseModal} footer={[]}>
      
      <p>Title: {book.title}</p>
      <p>Tag Line: {book.tagLine}</p>
      <p>Author: {book.author}</p>
      <p>Publisher: {book.publisher}</p>
      <p>Genre: {book.genre}</p>
      <p>Language: {book.language}</p>
      <p>Number of Pages: {book.noOfPages}</p>
    </Modal>
  );
};
export default BookModal;
