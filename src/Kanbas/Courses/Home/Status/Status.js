import { FaFolder, FaBell, FaChartLine, FaHome, FaStream, FaBullhorn, FaChartBar } from 'react-icons/fa';
import './Status.css';
function Status() {
    return (
        <div className="status-section">
            <div className="status-buttons">
                <button><FaFolder /> Import Existing Content</button>
                <button><FaBell /> Import from Commons</button>
                <button><FaHome /> Choose Home Page</button>
                <button><FaStream /> View Course Stream</button>
                <button><FaBullhorn /> New Announcement</button>
                <button><FaChartBar /> New Analytics</button>
                <button><FaChartLine /> View Course Notifications</button>
            </div>
            <div className="status-todo">
                <h3>To Do</h3>
            </div>
            <div className="status-links">
                <p className="red-link">Grade A1 - ENV + HTML</p>
                <p className="red-link">Grade A2 - CSS + BOOTSTRAP</p>
            </div>
        </div>
    );
}

export default Status;
