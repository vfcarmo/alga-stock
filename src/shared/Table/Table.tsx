import React from "react";
import { NavLink, useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import organizeData from "../../utils/organizeDataForTable";
import paginate from "../../utils/paginate";
import "./Table.scss";
import Button from "../Button";

export interface TableHeader {
  key: string;
  value: string;
  right?: boolean;
}

declare interface TableProps {
  headers: TableHeader[];
  data: any[];
  itemsPerPage?: number;
  enableAction?: boolean;

  onDetail?: (item: any) => void;
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
}

const Table: React.FC<TableProps> = (props) => {
  const location = useLocation()

  const [organizedData, indexedHeaders] = organizeData(
    props.data,
    props.headers
  );
  const itensPerPage = props.itemsPerPage ? props.itemsPerPage : organizedData.length
  const page = parseInt(parse(location.search).page as string) || 1
  const paginatedData = paginate(organizedData, itensPerPage, page) || []
  const totalPages = Math.ceil(organizedData.length / itensPerPage)
  return (
    <>
      <table className="AppTable">
        <thead>
          <tr>
            {props.headers.map((header) => (
              <th className={header.right ? "right" : ""} key={header.key}>
                {header.value}
              </th>
            ))}
            {props.enableAction
              && <th className="right">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, i) => {
            return (
              <tr key={i}>
                {Object.keys(row).map((item, i) =>
                  item !== "$original" ? (
                    <td
                      key={row.$original._id + i}
                      className={indexedHeaders[item].right ? "right" : ""}
                    >
                      {row[item]}
                    </td>
                  ) : null
                )}
                {props.enableAction
                  && (
                    <td className="actions right">
                      {props.onDetail && <Button onClick={() => props.onDetail && props.onDetail(row)}>Detail</Button>}
                      {props.onEdit && <Button onClick={() => props.onEdit && props.onEdit(row)}>Edit</Button>}
                      {props.onDelete && <Button onClick={() => props.onDelete && props.onDelete(row)}>Delete</Button>}
                    </td>
                  )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="Table__pagination">
        {totalPages > 1 ?
          (Array(totalPages)
            .fill('')
            .map((_, i) => {
              return <NavLink key={i}
                activeClassName='selected'
                to={{
                  pathname: location.pathname,
                  search: `?page=${i + 1}`
                }}
                isActive={() => page === i + 1}>
                {i + 1}
              </NavLink>
            })) : null
        }
      </div>
    </>
  );
};

export default Table;
