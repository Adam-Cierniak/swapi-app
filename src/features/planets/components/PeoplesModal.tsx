import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Resident } from './Resident';

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

export const PeoplesModal = ({ urls }: { urls: string[] }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} sx={{ color: '#1d3557', marginLeft: '40%' }}>
        <ArrowForwardIcon />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 200 }}>
          <h2>Residents</h2>
          {urls.map((url) => (
            <Resident url={url} />
          ))}
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </>
  );
};
