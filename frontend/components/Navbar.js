import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-700">
      <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
        <Link href="/">
          <a className="text-base md:text-2xl">GetBook
            <span className="text-red-600">App</span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
