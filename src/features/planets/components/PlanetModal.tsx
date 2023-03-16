import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { formatName } from '../../../utils/formatName';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PeoplesModal } from './PeoplesModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const PlanetModal = ({ data }: { data: any }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const propertiesToShow = [
    'climate',
    'diameter',
    'gravity',
    'orbital_period',
    'population',
    'rotation_period',
    'terrain',
  ];

  const filteredData = Object.keys(data)
    .filter((key: string) => propertiesToShow.includes(key))
    .reduce((obj: any, key: string) => {
      obj[key] = data[key];
      return obj;
    }, {});

  const mapFilteredData = () =>
    Object.entries(filteredData).map((entry) => {
      const [key, value] = entry;
      return (
        <>
          <div>
            <Typography display={'inline'} variant="h6" sx={{ fontWeight: 'bold' }}>
              {formatName(key)}
            </Typography>
            {': '}
            <Typography display={'inline'} variant="h6">
              {String(value)}
            </Typography>
          </div>
        </>
      );
    });

  return (
    <div>
      <Button onClick={handleOpen} sx={{ color: '#a8dadc' }}>
        <ArrowForwardIcon />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h2">{data.name}</Typography>
          {mapFilteredData()}

          <Typography variant="h4">But who lives here?</Typography>

          <PeoplesModal urls={data.residents} />
        </Box>
      </Modal>
    </div>
  );
};
