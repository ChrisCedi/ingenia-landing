import {
  Dialog,
  DialogBody,
  DialogFooter,
} from "../../atoms/MaterialTailwindComponent";
import { Button } from "../../atoms/Button";

export const Modal = ({ open, handleOpen, children }) => {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogBody>{children}</DialogBody>
      <DialogFooter>
        <Button onClick={handleOpen}>OK</Button>
      </DialogFooter>
    </Dialog>
  );
};
