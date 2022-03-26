import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

type IProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
};

function BaseTable({ columns, rows }: IProps) {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} disableSelectionOnClick />
    </div>
  );
}

export default BaseTable;
