import ModuleList from "../Modules/ModuleList";
import Status from "./Status/Status.js";

function Home() {
  return (
    <div className="row">
        <div className="col-10">
            
            <ModuleList />
        </div>
        <div className="col-2">
            <Status />
        </div>
    </div>
  );
}
export default Home;