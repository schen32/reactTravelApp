import { Header } from "components";
import React from "react";
import { Outlet } from "react-router";

const dashboard = () => {
  const user = { name: "Adrian" };

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Track activity, trends, and popular destinations in real time"
      ></Header>
      Dashboard
    </main>
  );
};

export default dashboard;
