import "./Nav.css";
import { MdGroups2 } from "react-icons/md";
import { GiRecycle } from "react-icons/gi";
import { LuMessageSquare } from "react-icons/lu";
import { BiDotsVerticalRounded, BiSearchAlt2 } from "react-icons/bi";

import React from "react";

function Nav() {
  return (
    <div className="container">
      <div className="nav_left">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt=""
        ></img>
        <div className="nav_left_buttons">
          <h2>
            <MdGroups2 />
          </h2>
          <h2>
            <GiRecycle />
          </h2>
          <h2>
            <LuMessageSquare />
          </h2>
          <h2>
            <BiDotsVerticalRounded />
          </h2>
        </div>
      </div>

      <div className="nav_right">
        <div className="nav_right_info">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          ></img>
          <div className="contact_info">
            <h4>Samet</h4>
            <h6>Samet</h6>
          </div>
        </div>
        <div className="nav_right_buttons">
          <h2>
            <BiSearchAlt2 />
          </h2>
          <h2>
            <BiDotsVerticalRounded />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Nav;
