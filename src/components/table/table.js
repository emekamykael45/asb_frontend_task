import React from "react";

import Status from "../status/status";
import Risk from "../status/risk";
import DropDown from "../dropdown/dropdown";

import { chevronCircleIcon } from "../../assets/svg";

import "./table.scss";

const Table = ({ headers, data }) => (
  <React.Fragment>
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => (
            <tr key={i}>
              <td>
                <div className="stacked">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <img
                    src={chevronCircleIcon}
                    className="chevron_icon"
                    alt=""
                  />
                </div>
              </td>
              <td>{item.name}</td>
              <td>
                <div className="stacked">
                  <h6>{item.state}</h6>
                  <p>{item.address}</p>
                </div>
              </td>
              <td>
                <Status
                  type={item.issues > 0 ? "warning" : "success"}
                  text={
                    item.issues > 0
                      ? `${item.issues} Issues found`
                      : "No Issues"
                  }
                />
              </td>
              <td>
                <div className="stacked">
                  <h6>
                    <span></span> {`${item.entries} Unique Entries`}
                  </h6>
                  <p>{item.entry_type}</p>
                </div>
              </td>
              <td>
                <Risk type={item.risk} />
              </td>
              <td>
                <DropDown>
                  <button className="dropdown-item">View</button>
                </DropDown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </React.Fragment>
);

export default Table;
