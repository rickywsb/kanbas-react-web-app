
import HelloWorld from "./Labs/a3/HelloWorld";
import Labs from "./Labs";
import Project from "./project";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
function App() {
  return (
    <HashRouter>
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="Kanbas" />} />
        <Route path="/Hello" element={<HelloWorld />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
        <Route path="/Lectures" element={<StateManagement />} />
      </Routes>
      {/* {screen === "Hello" && <HelloWorld />}
      {screen === "Labs" && <Labs />}
      {screen === "Kanbas" && <Kanbas />} */}
    </div>
  </HashRouter>
  );
}

export default App;


