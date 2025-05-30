import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import { IoSearchOutline } from "react-icons/io5";
import { Navigation } from "../constants/Navigation";

const Header = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header className="container fixed top-0 w-full h-16 bg-neutral-600/75 z-40 ">
      <div className="container mx-auto px-3 flex items-center h-full">
        <Link to="/">
          <img src={logo} alt="logo" width={120} />
        </Link>
        <nav className="hidden lg:flex items-center ml-5 gap-1">
          {Navigation.map((nav, index) => (
            <div key={index}>
              <NavLink
                key={nav.label + "header" + index}
                to={nav.href}
                className={({ isActive }) =>
                  `px-3 hover:text-neutral-100 ${
                    isActive && "text-neutral-100"
                  }`
                }
              >
                {nav.label}
              </NavLink>
            </div>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-5">
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
              // onChange={(e) => setSearchInput(e.target.value)}
              // value={searchInput}
            />
            <button className="text-2xl text-white">
              <IoSearchOutline />
            </button>
          </form>
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img src={userIcon} width="w-ful h-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
