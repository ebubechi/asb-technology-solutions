import React from 'react'

const TableCardHead = () => {
    return (
        <div className="table-card-header">
           <div className="card">
        <div className="row">
          <input id='checkbox' type="checkbox" />
          <b className="contentes">NAME</b>
          <b className="contentes">LOCATION</b>
          <b className="contentes">STATUS</b>
          <b className="contentes">ENTERIES</b>
          <b className="contentes">RISK PROFILE</b>
        </div>
      </div> 
        </div>
    )
}

export default TableCardHead
