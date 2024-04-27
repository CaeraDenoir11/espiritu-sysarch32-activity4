import { Link } from "react-router-dom";
function Header() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  const username = localStorage.getItem("username");
  return (
    <header>
      <div className="logo">
        <Link
          to="/"
          className="text-deco color-white font-primary fsize-header font-spacing"
        >
          Hi-Ho
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link className="text-deco nav-label font-primary" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="text-deco nav-label font-primary" to="/orders">
              Orders
            </Link>
          </li>
          <li>
            <a
              onClick={handleLogout}
              className="text-deco nav-label font-primary onHover"
            >
              {username ? username : "Login/Register"}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;