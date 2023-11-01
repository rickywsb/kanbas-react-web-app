import React from 'react';
import { FaFileImport, FaFilter, FaFileExport, FaCog } from 'react-icons/fa';
// import './ButtonGroup.css';
function ButtonGroup() {
    return (
        <div className="col-md-9 custom-padding">
            {/* 按钮部分 */}
            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-secondary mr-2">
                    <FaFileImport /> Import
                </button>
                
                {/* Export dropdown button */}
                <div className="btn-group mr-2">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FaFileExport /> Export
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Option 1</a>
                        <a className="dropdown-item" href="#">Option 2</a>
                        {/* ... other options ... */}
                    </div>
                </div>
                
                <button className="btn btn-secondary">
                    <FaCog />
                </button>
            </div>

            <div className="custom-padding">
                <div className="d-flex justify-content-between">
                    {/* Student Names Part */}
                    <div className="w-50 mr-3" style={{paddingRight: "20px"}}>
                        <label htmlFor="studentNamesDropdown"><strong> Student Names</strong> </label>
                        <select className="form-control" id="studentNamesDropdown">
                            <option value="">Select a student</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sibo Wu">Sibo Wu</option>
                            {/* ... other student names ... */}
                        </select>
                    </div>
                    
                    {/* Assignment Name Part */}
                    <div className="w-50 pl-3">
                        <label htmlFor="assignmentNamesDropdown"><strong> Assignment Names</strong></label>
                        <select className="form-control" id="assignmentNamesDropdown">
                            <option value="">Select an assignment</option>
                            <option value="A1 - HTML">A1 - HTML</option>
                            <option value="A2 - CSS">A2 - CSS</option>
                            {/* ... other assignment names ... */}
                        </select>
                    </div>
                </div>
            </div>
            
            <div className="mb-3 mt-2">
                <button className="btn btn-secondary">
                    <FaFilter /> Apply Filters
                </button>
            </div>
        </div>

    );
}

export default ButtonGroup;
