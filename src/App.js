import "./styles.css";
import Card from "./components/card";
import Houses from "./components/houses";
import Footer from "./components/footer";
export default function App() {
  return (
    <div style={{ display: "inline-block" }}>
      {Houses.map(function (house) {
        return (
          <Card
            key={house.key}
            name={house.type}
            img={house.image}
            desc={house.desc}
            cost={house.cost}
          />
        );
      })}
      <Footer />
    </div>
  );
}
