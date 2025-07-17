import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Home() {
  const [navOpen, setnavOpen] = useState(false);

  return (
    <div className="">
      <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-3 items-center gap-4">
          
          
          <h1 className="min-w-0">
            <a href="#" className="logo block">
              <img
                src="/images/favSWA.png"
                width={40}
                height={40}
                alt="Shwe Win Aung"
              />
            </a>
          </h1>

          <div className="flex md:justify-self-center justify-end">
        
            <button
              className="menu-btn md:hidden "
              onClick={() => setnavOpen((prev) => !prev)}
            >
              <span>{navOpen ? <CloseIcon /> : <MenuIcon />}</span>
            </button>


            <Navbar navOpen={navOpen} />
          </div>


          <div className="justify-self-end hidden md:block">
            <a
              href="#contact"
              className="btn btn-secondary"
            >
              Contact Me
            </a>
          </div>

        </div>
      </header>
    </div>
  );
}
