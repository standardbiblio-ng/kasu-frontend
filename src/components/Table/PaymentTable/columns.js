import DropdownOptions from "./DropdownOptions";



export const COLUMNS = [
  //   {
  //     Header: "Id",
  //     accessor: "id",
  //   },

  {
    Header: "Category",
    Footer: "Category",
    accessor: "category",
  },
  {
    Header: "Session",
    Footer: "Session",
    accessor: "session",
  },
  {
    Header: "Amount",
    Footer: "Amount",
    accessor: "amount",
  },
  {
    Header: "Outstanding",
    Footer: "Outstanding",
    accessor: "outstanding",
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
