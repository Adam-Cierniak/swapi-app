import { type PlanetData } from '../api/planetsApi';
import { Box, Typography, Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Planet = ({ data }: { data: PlanetData }) => {
  return (
    <>
      <Grid item lg={3} md={3} sm={3} xl={3} xs={3}>
        <Box
          sx={{ backgroundColor: 'background.paper', boxShadow: 2, width: '100%', height: '100%' }}
        >
          <Typography color="secondary" ml={2} pt={2} variant="h4">
            {data.name}
          </Typography>
          <Box
            p={1}
            sx={{ width: '100%', height: '90%', display: 'flex', justifyContent: 'center' }}
          >
            <Box sx={{ width: '100%', height: { xl: '92%', lg: '90%', sm: '93%', xs: '90%' } }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                }}
              >
                <Button onClick={() => console.log('click')} endIcon={<ArrowForwardIcon />}>
                  show
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
// export const Planet = ({ data }: { data: PlanetData }) => {
//   return (
//     <>
//       <Box
//         sx={{
//           width: '7rem',
//           height: '4rem',
//           backgroundColor: 'primary.dark',
//           '&:hover': {
//             backgroundColor: 'primary.main',
//             opacity: [0.9, 0.8, 0.7],
//           },
//         }}
//       >
//         <Typography variant="h5">{data.name}</Typography>
//       </Box>
//     </>
//   );
// };
