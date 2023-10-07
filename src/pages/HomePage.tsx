import Page from "../layouts/Page";
import "../styles/HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Page>
      <h1>DC23_CS-STREAMING</h1>
      <div className="button-container">
        <div className="long-button-container">
          <Link to="/dummy1">
            <button className="long-button">Dummy 1</button>
          </Link>
        </div>
        <div className="bottom-buttons">
          <Link to="/dummy2">
            <button>Dummy 2</button>
          </Link>
          <Link to="/dummy3">
            <button>Dummy 3</button>
          </Link>
        </div>
      </div>
    </Page>
  );
}

export default HomePage;
