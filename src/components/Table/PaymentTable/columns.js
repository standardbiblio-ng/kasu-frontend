import DropdownOptions from "./DropdownOptions";



export const COLUMNS = [
  //   {
  //     Header: "Id",
  //     accessor: "id",
  //   },

  {
    Header: "Category",
    Footer: "Category",
    accessor: "feeType",
  },
  {
    Header: "Session",
    Footer: "Session",
    accessor: "session",
  },
  {
    Header: "Amount",
    Footer: "Amount",
    accessor: "totalAmount",
  },
  {
    Header: "Status",
    Footer: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    Footer: "Action",
    accessor: "action",
    disableSortBy: true,
    Cell: () => (
      <DropdownOptions />
    )
  },
];
