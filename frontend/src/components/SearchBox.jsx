import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox() {
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      alert("Please enter a lottery number.");
      return;
    }

    alert(`Searching for: ${value}`);
  };

  return (
    <form className="search-box" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter Lottery Number..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}
