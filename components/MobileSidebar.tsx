import type { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import React from "react";
import { Link } from "react-router";

const MobileSidebar = () => {
  let sidebar: SidebarComponent;

  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img
            src="/assets/icons/logo.svg"
            alt="logo"
            className="size-[30px]"
          />
        </Link>

        <h1>Tourvisto</h1>
        <button
          onClick={() => {
            sidebar.toggle();
          }}
        >
          <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
        </button>
      </header>
    </div>
  );
};

export default MobileSidebar;
