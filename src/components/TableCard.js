import React from "react";
import "../App.css";

const TableCard = ({
  name,
  location,
  subLocation,
  status,
  isIsuess,
  enteries,
  subEnteries,
  risk,
}) => {
  return (
    <div className="table">
      <div className="card">
        <div className="row">
          <div className="checkbox-column">
            <input id="checkbox" type="checkbox" />
          </div>
          <div className="card-column">
            <b className="contents">{name}</b>
          </div>

          <div className="card-column">
            <b className="contents">{location}</b>
            <p>{subLocation}</p>
          </div>
          <div className="card-column">
			  <p></p>
			  <div className='center-card-content'>
				{isIsuess ? (
							<div className="isuess" style={{color: '#8C70FF', background: '#F6F3FF'}}>
								<b className="contents">{status}</b>
							</div>
							) : (
							<div className="isuess" style={{color: '#F4B400', background: '#FFF6DE'}}>
								<b className="contents">{status}</b>
							</div>
							)}
			  </div>
            
          </div>

          <div className="card-column">
            <b className="contents">{enteries}</b>
            <h6>{subEnteries}</h6>
          </div>
          <div className=''>
								
		  </div>
          <div className="card-column">
            <b className="contents">{risk}</b> &nbsp;&nbsp;
            <span class="v-elipses"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
