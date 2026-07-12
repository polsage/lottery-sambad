import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">

      <div className="container navbar">

        <Link to="/" className="logo">
          Lottery Sambad
        </Link>

        <nav>

          <Link to="/">Home</Link>

          <Link to="/results">Results</Link>

          <Link to="/archive">Archive</Link>

          <Link to="/search">Search</Link>

        </nav>

      </div>

    </header>
  );
}
