"use client"

import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '@/features/library/bookSlice';
import { Modal } from 'antd';

const BookModal = () => {
  const dispatch = useDispatch();
  const { currentBook, isEditingBook, isModalOpen } = useSelector(state => state.library)

  if (!currentBook || isEditingBook)
    return null;

  return (
    <Modal
      title={`#${currentBook.id} - ${currentBook.title}`}
      open={isModalOpen}
      onCancel={() => dispatch(closeModal())}
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
