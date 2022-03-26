import BaseButton from "./components/atoms/buttons/BaseButton";
import BaseCard from "./components/atoms/card/BaseCard";
import BaseFormInput from "./components/atoms/form-input/BaseFormInput";
import Label from "./components/atoms/form-label/label";
import BaseFormSelect from "./components/atoms/form-select/BaseFormSelect";
import ErrorText from "./components/atoms/texts/ErrorText";
import {
  FormInputWithLabel,
  FormSelectWithLabel,
} from "./components/molecules/form";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { BaseTable } from "./components/organisms";

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
  {
    field: "options",
    headerName: "options",
    width: 150,
    renderCell: (cellValues) => {
      return (
        <BaseButton
          color="primary"
          onClick={() => console.log(cellValues)}
          title="title"
        />
      );
    },
  },
];

function App() {
  return <BaseTable columns={columns} rows={rows} />;
}

export default App;
