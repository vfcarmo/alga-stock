import React from "react";
import "./Table.scss";
import Products from "./Table.mockdata";

const headers = [
  { key: "name", value: "Product" },
  { key: "price", value: "Price", orientation: "right" },
  { key: "stock", value: "Available Stock", orientation: "right" },
];

const Table = () => {
  return (
    <table className="AppTable">
      <thead>
        <tr>
          {headers.map((header) => (
            <th className={header.orientation} key={header.key}>
              {header.value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td className="right">{product.price}</td>
              <td className="right">{product.stock}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
