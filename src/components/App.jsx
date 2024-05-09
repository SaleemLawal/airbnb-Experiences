import NavBar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import dataList from "../data.jsx";

function App() {
    let cards = dataList.map((data) => {
    return (
      <Card
        item = {data}
        key={data.id}
      />
    );
    
  });

  return (
    <div className=" min-h-[853px] max-w-[550px] rounded-lg bg-white">
      <NavBar />
      <Hero />
      <div className="grid grid-flow-col gap-4 mt-12 overflow-x-auto px-9">{cards}</div>
    </div>
  );
}

export default App;
