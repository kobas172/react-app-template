import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          <button className="header-content-item">DC23_CS-STREAMING</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
