import { useState } from "react";
import Image from "next/image";
import BookInfoModal from "./BookInfoModal";

const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  }

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div 
        className="bg-white shadow-sm rounded-md cursor-pointer"
        onClick={openModal}
      >
        <Image src={`/book.jpg`} 
          width={700} 
          height={800} 
          className="rounded-t-md" 
          alt={book.name} 
        />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1">{book.name}</div>
          <p className="text-gray-700 text-base mb-1">{book.author.name}</p>
        </div>
      </div>
      <BookInfoModal  showModal={showModal} onClose={closeModal} book={book}/>
    </>
  );
};

export default BookCard;
