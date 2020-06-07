import React from "react";

const Profiles = () => {
  return (
    <div>
      <Nav />
      <div className="top-container">
        <div className="side-menu">
          <SideNav />
        </div>
        <div className="form">{/* <Profiles /> */}</div>
        <Profiles />
      </div>
    </div>
  );
};

export default Profiles;
