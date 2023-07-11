import logo from "../assets/karakocimer.svg";

const Navbar = () => {
  return (
    <div className="navbar z-10  fixed bg-blend-multiply backdrop-blur-sm bg-white/50">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          <img src={logo} alt="Karakószörcsök" className="h-11" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="bg-white/80 hover:bg-white ">Menü</summary>
              <ul className="p-2">
                <li>
                  <a>Hírek</a>
                </li>
                <li>
                  <a>Galéria</a>
                </li>
                <li>
                  <a>Falutörténet</a>
                </li>
                <li>
                  <a
                    href="https://www.tuskevarikozoshivatal.hu/?module=news&fname=dok-karakoszorcsok"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dokumentumtár
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li className="bg-white/80 rounded-md ml-3 hover:bg-white">
            <a className="hover:bg-white">Kapcsolat</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
