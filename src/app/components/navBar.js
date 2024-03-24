"use client"
import Link from 'next/link';

function Navbar() {

  return (
    <nav className="bg-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <img src="/FictiCorp.webp" alt="Logo" className="w-8 h-8 mr-2 cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
