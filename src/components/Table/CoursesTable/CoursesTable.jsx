// import moment from "moment";
import React, { useMemo, useState } from "react";
import { useTable, useSortBy, usePagination, useFilters } from "react-table";
import { COLUMNS } from "./columns";
import MOCKDATA from "./MOCK_DATA.json";

export function CoursesTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(
    () =>
      MOCKDATA.map((mockdata) => ({
        ...mockdata,
        // timestamp: moment
        //   .unix(Number(mockdata.timestamp) / 1000)
        //   .format("DD MMMM YYYY [\n] HH:mm"),
      })),
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    prepareRow,
    setFilter,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;
  return (
    <div className="w-full  ">
      <div className="flex flex-col bg-white w-[50vw] rounded-lg">
        <table
          {...getTableProps()}
          className="bg-white  w-full border-black/20 text-center text-sm relative shadow-sm"
        >
          <thead className="bg-white rounded-lg">
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className=" bg-white rounded-lg border-b-primary text-primary font-extrabold border border-black/20"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="py-6 rounded-lg w-auto px-20"
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? "1" : "2") : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            className="text-black/60 font-semibold "
            {...getTableBodyProps()}
          >
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className=" border-b border-black/20 hover:bg-secondary/20 cursor-pointer"
                >
                  {row.cells.map((cell) => (
                    <td className="py-4 " {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* pagination */}
        <div className="bg-white mx-auto grid grid-cols-4 items-center justify-between my-6 text-sm">
          {/* 1 */}
          <div className="w-full">
            <span className="text-[#031625B2]/70">
              {pageSize * pageOptions.length} items
            </span>
          </div>

          {/* 2 */}
          <div className="w-full flex col-span-2 items-center justify-between px-4">
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className={
                !canPreviousPage
                  ? "text-[#000]/40 cursor-not-allowed"
                  : "text-primary"
              }
            >
              <strong> Previous</strong>
            </button>
            <span className="text-[#031625B2]/70">
              Page
              <input
                type="text"
                className="w-8 mx-2 text-sm text-center border border-[#031625B2]/20 rounded-md"
                value={pageIndex + 1}
                onChange={(e) => {
                  const newPage = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(newPage);
                }}
              />
              of &nbsp; {pageOptions.length} &nbsp;
            </span>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className={
                !canNextPage
                  ? "text-[#000]/40 cursor-not-allowed"
                  : "text-primary"
              }
            >
              <strong>Next</strong>
            </button>
          </div>

          {/* 3 */}
          <div className="w-full flex items-center justify-end p-4">
            Show &nbsp;
            <select
              className="text-sm border border-[#031625B2]/20 rounded-md shadow-lg font-semibold text-center"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 15, 20, 25].map((pageBySize) => (
                <option key={pageBySize} value={pageBySize}>
                  {pageBySize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
