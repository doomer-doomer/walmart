import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import "./SelectWalmart.css"
 // Create a CSS file and copy the styles to it

function SelectWalmart() {
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  const selectWalmart = (walmartId) => {
    // Select Walmart logic using the walmartId
    console.log(`Selected ${walmartId}`);
  };

  return (
    <div className="page-container">
      <button className="toggle-button" onClick={toggleTable}>
        {showTable ? 'Hide Stores' : 'Show stores in 10km range'} 
      </button>
      <table className={showTable ? 'visible' : 'hidden'} id="walmartTable">
        <thead>
          <tr>
            <th>Walmart Code</th>
            <th>Address</th>
            <th>Distance (km)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>WM001</td>
            <td>123 Walmart St</td>
            <td>5</td>
            <td>
              <div className="action-buttons">
              <Link to="/BookSlots">
                            
                            <button className="select-button" onClick={() => selectWalmart('WM003')}>
                              Select Walmart
                            </button>
                                        </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>WM002</td>
            <td>456 Walmart Ave</td>
            <td>8</td>
            <td>
              <div className="action-buttons">
              <Link to="/BookSlots">
                            
                            <button className="select-button" onClick={() => selectWalmart('WM003')}>
                              Select Walmart
                            </button>
                                        </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>WM003</td>
            <td>789 Walmart Blvd</td>
            <td>10</td>
            <td>
              <div className="action-buttons">
              <Link to="/BookSlots">
                            
                <button className="select-button" onClick={() => selectWalmart('WM003')}>
                  Select Walmart
                </button>
                            </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SelectWalmart;