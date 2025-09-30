import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, CardActions, CardMedia, Typography } from "@mui/material";
import { Button, CardHeader } from "react-bootstrap";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
export default function Book({ book, addDelete, onDelete }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
  const handleAddToCart = () => {
    dispatch(addToCart(book));
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card
      sx={{
        width: { sm: "60%", md: "40%", lg: "30%" },
        display: "flex",
        flexDirection: "column",
        margin: "10px",
      }}
    >
      <CardMedia
        image="/public/def.svg"
        component="img"
        sx={{ objectFit: "contain", height: 194 }}
      ></CardMedia>
      <CardHeader>
        <h2>{book.title}</h2>
      </CardHeader>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2">{book.description}</Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h6">{book.price}$</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleAddToCart}>Add to cart</Button>
        {addDelete ? <Button onClick={() => onDelete(book)}>Delete</Button> : <></>}   
      </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={{...style, width: 400 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {book.title} added to your cart
          </Typography>
        </Box>
      </Modal>
    </Card>
  );
}
