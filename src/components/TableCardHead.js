import React from "react";

const TableCardHead = () => {
  return (
    <div className="table-card-header">
      <div className="card">
        <div className="row">
          {/* <input id="checkbox" type="checkbox" /> */}
          <b className="contentes">NAME</b>
          <b className="contentes1">LOCATION</b>
          <b className="contentes2">STATUS</b>
          <b className="contentes3">ENTRIES</b>
          <b className="contentes4">RISK PROFILE</b>
        </div>
      </div>
    </div>
  );
};

export default TableCardHead;
