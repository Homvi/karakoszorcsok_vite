import { useRef } from "react";
import logo from "../assets/karakocimer.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const drawerRef = useRef();

  function closeMenu() {
    if (typeof drawerRef.current === "undefined") return;
    drawerRef.current.click();
  }

  return (
    <div className="navbar z-10  fixed bg-blend-multiply backdrop-blur-sm bg-white/50">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          <img src={logo} alt="Karakószörcsök logo" className="h-11" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary ref={drawerRef} className="bg-white/80 hover:bg-white ">
                Menü
              </summary>
              <ul className="p-2">
                <li>
                  <Link onClick={closeMenu} to="/">
                    Főoldal
                  </Link>
                </li>
                <li>
                  <Link onClick={closeMenu} to="/gallery">
                    Galéria
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link to="/story">Falutörténet</Link>
                </li>
                <li onClick={closeMenu}>
                  <a
                    href="https://www.tuskevarikozoshivatal.hu/?module=news&fname=dok-karakoszorcsok"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dokumentumtár
                  </a>
                </li>
                <li onClick={closeMenu}>
                  <Link to="/docs">Közműv. dokumentumok</Link>
                </li>
              </ul>
            </details>
          </li>
          <li onClick={closeMenu} className="bg-white/80 rounded-md ml-3 hover:bg-white">
            <Link to="/contact" className="hover:bg-white">
              Kapcsolat
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
