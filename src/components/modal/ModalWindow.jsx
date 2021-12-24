import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  textAlign: 'center',
  borderRadius: '8px',
  p: 4,
};

const ModalWindow = ({ open, setOpen, title, action, children }) => (
  <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Are you sure what you want to {children}: {title}?
      </Typography>
      <Stack spacing={2} direction="row" marginTop="20px" justifyContent="center">
        <Link to="/" className="link__btn">
          <Button variant="contained" onClick={action}>
            {children}
          </Button>
        </Link>
        <Button variant="contained" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Stack>
    </Box>
  </Modal>
);

export default ModalWindow;
