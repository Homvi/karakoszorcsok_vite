import logo from "../assets/karakocimer.svg";

const Navbar = () => {
  return (
    <div className="navbar fixed bg-blend-multiply bg-white/50">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          <img src={logo} alt="Karakószörcsök" className="h-11" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Menü</summary>
              <ul className="p-2 bg-white/80 ">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
