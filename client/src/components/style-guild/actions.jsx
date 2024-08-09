import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Actions = ({ type, id }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/" + type + "/" + id + "/edit");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Ellipsis className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left">
        <DropdownMenuItem
          className="space-x-5 cursor-pointer"
          onClick={handleEdit}
        >
          <Pencil size={20} />
          <span>Edit</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="space-x-5 cursor-pointer"
          onClick={() => toast.success("deleted")}
        >
          <Trash2 size={20} />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;
