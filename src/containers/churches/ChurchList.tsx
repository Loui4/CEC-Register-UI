import { GridColDef } from "@mui/x-data-grid";
import { BaseButton } from "../../components/atoms";
import { BaseTable } from "../../components/organisms";

export default function ChurchList() {
  const columns: GridColDef[] = [
    { field: "name", headerName: "Church Name", minWidth: 300 },
    { field: "location", headerName: "Location", minWidth: 400 },
    {
      field: "Option",
      width: 200,
      renderCell: (cellValues) => {
        return (
          <BaseButton
            title="something"
            onClick={() => console.log(cellValues)}
            color="primary"
          />
        );
      },
    },
  ];
  const churches = [
    { id: 1, name: "Area 25", location: "Area 25 ljahjehjwe jhfdka jshefj" },
    { id: 2, name: "Area 51", location: "Area 51" },
    { id: 3, name: "Area 52", location: "Area 52" },
  ];
  return <BaseTable columns={columns} rows={churches} />;
}
