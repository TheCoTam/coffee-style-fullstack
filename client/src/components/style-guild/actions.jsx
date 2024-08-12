import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Actions = ({ type, id }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/" + type + "/" + id + "/edit");
  };

  const handleDelete = async () => {
    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      const res = await axios.delete(
        url + "/api/" + type === "product" ? "mug" : type + "/" + id
      );

      if (res.data.success) {
        toast.success("Product deleted");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("[delete-product]", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Ellipsis className="cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="left">
          <DropdownMenuItem
            className="space-x-4 cursor-pointer"
            onClick={handleEdit}
          >
            <Pencil size={20} />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DialogTrigger>
              <div className="flex gap-4 cursor-pointer">
                <Trash2 size={20} />
                <span>Delete</span>
              </div>
            </DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="uppercase">Delete {type}</DialogTitle>
          <DialogDescription>
            When deleted, you will not be able to recover this {type}.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="mr-4">Cancel</DialogClose>
          <DialogClose>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Actions;
