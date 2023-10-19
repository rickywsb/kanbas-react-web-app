import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaCheck, FaChevronDown, FaPlus, FaEllipsisV } from 'react-icons/fa';

import db from "../../Database";
import "./ModuleList.css";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;

    const [expandedModule, setExpandedModule] = useState(null);

    const toggleModule = (moduleId) => {
        if (expandedModule === moduleId) {
            setExpandedModule(null);
        } else {
            setExpandedModule(moduleId);
        }
    };

    return (
        <div>
            {/* 顶部的按钮 */}
            <div className="module-buttons">
                <button>Collapse All</button>
                <button>View Progress</button>
                <button>Publish All</button>
                <button className="add-module-btn">+ Module</button>
                <button >⋮</button> {/* 三个竖点的icon */}
            </div>

            <ul className="list-group">
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
            <div className="module-header">
                <h3 onClick={() => {
                  if (expandedModule === module.name) {
                    setExpandedModule(null);
                  } else {
                    setExpandedModule(module.name);
                  }
                }}>
                  {module.name}
                </h3>

                <div className="module-icons">
                  <button className="icon-btn"><FaCheck color="green" /></button> {/* 绿色对号 */}
                  <button className="icon-btn"><FaChevronDown /></button>          {/* 下拉箭头 */}
                  <button className="icon-btn"><FaPlus /></button>                 {/* 加号 */}
                  <button className="icon-btn"><FaEllipsisV /></button>            {/* 三个竖点的icon */}
                </div>

            </div> 
             <p>{module.description}</p>
             {
               expandedModule === module.name && module.lessons && (  // 根据状态来决定是否展示课程内容
                 <ul className="list-group">
                     {
                         module.lessons.map((lesson, index) => (
                             <li key={index} className="list-group-item">
                                 <h4>{lesson.name}</h4>
                                 <p>{lesson.description}</p>
                             </li>
                         ))
                     }
                 </ul>
               )
             }
           </li>
        ))
      }
    </ul>
        </div>
    );
}

export default ModuleList;
