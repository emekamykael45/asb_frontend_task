import React from "react";

import Pagination from "../pagination/pagination";

import "./table.scss";

const Table = ({ headers, children, pageCount, changeData }) => (
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
        <tbody>{children}</tbody>
      </table>
    </div>
    {pageCount && <Pagination pageCount={pageCount} changeData={changeData} />}
  </React.Fragment>
);

export default Table;
