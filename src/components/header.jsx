import { Link } from "react-router-dom";

export default function Header() {
    return (    
        <div className="w-full h-[100px] flex justify-center">
            <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative">
              <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] m-1 object-cover border-[3px] absolute left-1 rounded-full" />
              <Link to="/" className="text-[25px] font-bold m-1">
              Home
              </Link>
              <Link to="/contact" className="text-[25px] font-bold m-1">
              Contact
              </Link>
              {/*gallery */}
              <Link to="/gallery" className="text-[25px] font-bold m-1">
              Gallery
              </Link>
              {/*items */}
              <Link to="/items" className="text-[25px] font-bold m-1">
              Items
              </Link>
            </header>
        </div>
    )
}