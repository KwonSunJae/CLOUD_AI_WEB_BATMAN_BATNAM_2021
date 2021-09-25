import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "white",
  p: 4,
};

const ModalBox = ({ children, open, onClose, width }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={width ? { ...style, width: width } : style}>{children}</Box>
    </Modal>
  );
};

export default ModalBox;
