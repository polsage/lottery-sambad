import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ResultCard from "../components/ResultCard";

export default function Home() {

  return (
    <>

      <Header />

      <Hero />

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          marginTop: "40px",
          marginBottom: "50px"
        }}
      >

        <ResultCard
          title="Morning Draw"
          time="10:00 AM"
          number="45821"
        />

        <ResultCard
          title="Day Draw"
          time="01:00 PM"
          number="90124"
        />

        <ResultCard
          title="Evening Draw"
          time="06:00 PM"
          number="67281"
        />

      </div>

      <Footer />

    </>
  );

}
