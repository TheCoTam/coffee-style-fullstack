import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Ellipsis, Pencil, Trash2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

const Actions = ({ type, id, fetchData }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/" + type + "/" + id + "/edit");
  };

  const handleDelete = async () => {
    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      const res = await axios.delete(
        url + "/api/" + (type === "product" ? "mug" : type) + "/" + id
      );

      if (res.data.success) {
        toast.success("Product deleted");
        fetchData();
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
          <DialogClose
            className="bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
            onClick={handleDelete}
          >
            Delete
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Actions;
