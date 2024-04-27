import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-layer">
      <div className="welcome-section">
        <h1 className="font-primary font-black fsize-header font-bold welcome.heading">
          Welcome To Hi-Ho
        </h1>
        <p className="font-primary font-bold fsize-small">
          Your one-stop shop for all your needs!
        </p>
      </div>
    </div>
  );
}

export default Home;
