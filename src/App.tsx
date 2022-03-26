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
import { MemberCreateForm } from "./containers/members";
import { YearCreateForm } from "./containers/year";

function App() {
  return (
    <div className="px-96">
      <YearCreateForm />
    </div>
  );
}

export default App;
