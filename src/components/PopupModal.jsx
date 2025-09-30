import { Box, Typography } from '@mui/material'
import React from 'react'
import Modal from "@mui/material/Modal";

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
export default function PopupModal({open, onClose, title}) {
  return (
        <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={{...style, width: 400 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {title} added to your cart
          </Typography>
        </Box>
      </Modal>
    
  )
}
