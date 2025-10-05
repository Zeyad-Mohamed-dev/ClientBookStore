import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, CardActions, CardMedia, TextField, Typography } from "@mui/material";
import { Button, CardHeader } from "react-bootstrap";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import PopupModal from "./PopupModal";
import FormPopup from "./FormPopup";
export default function Book({ book, addDelete, onDelete, role }) {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart(book));
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  }
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
        {role === "admin" ? <Button onClick={() => onDelete(book._id)}>Delete</Button> : <></>}   
      </CardActions>
      <PopupModal open={open} onClose={handleClose} title={book.title}/>
      {/* <FormPopup handleClose={handleClose} show={editMode}/> */}
    </Card>
  );
}
