import { Header } from "components";
import React from "react";

const allUsers = () => {
  return (
    <main className="dashboard wrapper">
      <Header
        title="Trips Page"
        description="Check out our current users in real time"
      ></Header>
      All Users
    </main>
  );
};

export default allUsers;
