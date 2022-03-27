import { IconButton } from "../molecules";
import EditIcon from "@mui/icons-material/Edit";
import EyeIcon from "@mui/icons-material/RemoveRedEyeRounded";
import DeleteIcon from "@mui/icons-material/Delete";

type PropTypes = {
  onClickView: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
};

export default function TableOptions({
  onClickDelete,
  onClickEdit,
  onClickView,
}: PropTypes) {
  return (
    <div>
      <IconButton
        onClick={onClickView}
        color="secondary"
        icon={<EyeIcon />}
        className="text-gray-md focus:ring-2 focus:ring-primary"
      />
      <IconButton
        onClick={onClickEdit}
        color="secondary"
        icon={<EditIcon />}
        className="text-gray-md focus:ring-2 focus:ring-primary"
      />
      <IconButton
        className="text-gray-md focus:ring-2 focus:ring-primary"
        onClick={onClickDelete}
        color="secondary"
        icon={<DeleteIcon />}
      />
    </div>
  );
}
