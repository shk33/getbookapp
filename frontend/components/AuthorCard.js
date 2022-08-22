import Image from "next/image";

const AuthorCard = ({ author }) => {
  return (
    <div className="bg-white shadow-sm rounded-md cursor-pointer">
      <Image src={`/author.jpg`} 
        width={700} 
        height={800} 
        className="rounded-t-md" 
        alt={author.name} 
      />
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-1">{author.name}</div>
        <p className="text-gray-700 text-base mb-1">Books Written: {author.books.length}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
