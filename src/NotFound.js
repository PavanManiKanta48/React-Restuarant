import React from "react";
import Header from "./Container/Header";

const NotFound = () => {
  return (
    <div>
      <center>
        <div>
          <Header />
          <h4 className="mt-3 text-danger">Page Not Found 404 error</h4>
        </div>
      </center>
    </div>
  );
};

export default NotFound;
