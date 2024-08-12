import InBox from "./components/InBox";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-[#F6F8FC] h-screen">
      <NavBar />
      <div className="flex">
        <SideBar />
        <InBox />
      </div>
    </div>
  );
}

export default App;
