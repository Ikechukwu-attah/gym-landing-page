import { useState } from "react";
import NavBar from "./scenes/Navbar";
import viteLogo from "/vite.svg";
import { SelectedPage } from "@/scenes/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div className="bg-gray-20">
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
