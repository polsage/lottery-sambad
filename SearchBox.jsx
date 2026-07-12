import { useEffect, useState } from "react";
import api from "../services/api";
import ResultCard from "./ResultCard";

export default function ResultList() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResults();
  }, []);

  async function loadResults() {
    try {
      const res = await api.get("/results");
      setResults(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="container">
        <h2>Loading Results...</h2>
      </div>
    );
  }

  return (
    <div
      className="container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "25px",
        marginTop: "40px",
        marginBottom: "60px",
      }}
    >
      {results.map((item) => (
        <ResultCard
          key={item.id}
          title={item.draw}
          time={item.time}
          number={item.number}
        />
      ))}
    </div>
  );
}
