import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard() {
  const courses = db.courses;

  // 左缩进样式
  const leftIndentStyle = {
    marginLeft: '20px'  // 可以调整这个值以满足你的需要
  };
  return (
    <div>

      <h1 style={leftIndentStyle}>Dashboard</h1>
      <hr style={leftIndentStyle} />
      <h2 style={leftIndentStyle}>Published Courses ({courses.length})</h2>


      <div className="row row-cols-1 row-cols-md-3 g-4" style={leftIndentStyle}>      
          {courses.map((course, index) => (
          <div className="col">
            <div className="card h-100">
              <img src="https://img.freepik.com/free-photo/background_53876-32169.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1697587200&semt=ais" className="card-img-top" alt="Course Image" />
              <div className="card-body">
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  style={{ color: 'blue', textDecoration: 'none' }}  // Applying blue color and removing underline
                >
                  <h5 className="card-title">{course.name}</h5>
                </Link>
                <p className="card-text">
                  CS{course.number}<br />
                  {course.startDate} - {course.endDate}
                </p>
              </div>
            </div>
          </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
