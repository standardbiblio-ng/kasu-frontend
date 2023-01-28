const statusColorMap = {
  available: `#00923F2E`,
  unavailable: `#D0D5D0`
  // etc 
}

export const COLUMNS = [

  {
    Header: "Hostel name",
    Footer: "Hostel name",
    accessor: "hostel_name",
  },
  {
    Header: "Room number",
    Footer: "Room number",
    accessor: "room_number",
  },
  {
    Header: "Number of bed",
    Footer: "Number of bed",
    accessor: "number_of_bed",
  },
  {
    Header: "Cost",
    Footer: "Cost",
    accessor: "cost",
  },
  {
    Header: "Status",
    Footer: "Status",
    accessor: "status",
    Cell: (props) => (
      <p className={statusColorMap[props.value] === props.value ? `px-4 w-fit py-1 mx-auto border rounded-lg text-[${statusColorMap[props.value]}] bg-[${statusColorMap[props.value]}]` : ``}>{props.value}</p>
    )
  },
  {
    Header: "Action",
    Footer: "Action",
    accessor: "action",

  },
];
