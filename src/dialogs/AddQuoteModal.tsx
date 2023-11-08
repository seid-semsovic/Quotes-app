import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const textAreaStyle = {
  width: "100%",
  marginBottom: "16px",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
};

export default function BasicModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  function handleSave() {
    console.log("Author:", author, "Quote:", text);
    setAuthor("");
    setText("");
  }

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Text in a modal
          </Typography>
          <TextField
            id="outlined-basic"
            label="Author"
            variant="outlined"
            size="small"
            sx={{ marginBottom: "1rem" }}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <textarea
            placeholder="Text"
            onChange={(e) => setText(e.target.value)}
            rows={3}
          />

          <div style={buttonContainerStyle}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: "1rem" }}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: "1rem" }}
              onClick={onClose}
            >
              Discard
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
