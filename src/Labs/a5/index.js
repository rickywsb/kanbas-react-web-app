import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import AssignmentUpdater from "./AssignmentUpdater.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href="http://localhost:8000/a5/welcome"
             className="list-group-item">
            Welcome
          </a>
        </div>
        <EncodingParametersInURLs />
        <WorkingWithObjects />
        <AssignmentUpdater />
        <WorkingWithArrays />
      </div>
    );
  }
  export default Assignment5;