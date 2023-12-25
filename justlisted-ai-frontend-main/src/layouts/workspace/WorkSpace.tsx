import React from "react";
import "./workspace.scss";
import WorkSideBar from "../../components/navbar/WorkSideBar";
import { Outlet } from "react-router-dom";
function WorkSpace() {
  return (
    <div className="workspace">
      <div className="workspaceMainBody">
        <div className="sidebar">
          <WorkSideBar />
        </div>
        <div className="workspacecontainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default WorkSpace;
