import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiHistory, BiHelpCircle } from "react-icons/bi";
import { RiDashboard3Fill, RiInboxArchiveFill, RiMovie2Fill } from "react-icons/ri";
import { FaBook, FaBroadcastTower } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import "./index.css";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon account-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <RiInboxArchiveFill className="wd-icon" />,
    History: <BiHistory className="wd-icon" />,
    Studio: <RiMovie2Fill className="wd-icon" />, // Using a movie icon for Studio
    Commons: <FaBroadcastTower className="wd-icon" />, // Using a broadcast icon for Commons
    Help: <BiHelpCircle className="wd-icon" />
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 85 }}>
       {/* Add Northeastern University logo at the top */}
       <img src="https://images.bonanzastatic.com/afu/images/2824/6287/91/NCAA_Northeastern_Huskies_Logo_Neon_Sign_16__x_16__2.jpg" alt="Northeastern University Logo" style={{ width: '95%', marginBottom: '5px' }} />
      
       {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item ${pathname.startsWith(`/Kanbas/${link}`) && "active"}`}
          >
            {linkToIconMap[link]}
            <br/>
            {link}
          </Link>
        ))}

    </div>
  );
}

export default KanbasNavigation;
