import React from "react";
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { BiMenu } from 'react-icons/bi';  // 导入三条横线的图标
import db from "../../Database";
import './TopNavigation.css';

function TopNavigation() {
    const location = useLocation();
    const { courseId } = useParams();
    const courseName = db.courses.find(course => course.id === courseId)?.name || courseId;


    const lastPartOfURL = location.pathname.split('/').pop();

    const leftIndentStyle = {
        marginLeft: '20px'  // 可以调整这个值以满足你的需要
      };
  return (
    <div className="top-navigation">
      <BiMenu style={leftIndentStyle} size={30} />
      <span >{courseName} {'>'} {lastPartOfURL  || "Home"}</span>
    </div>
  );
}

export default TopNavigation;
