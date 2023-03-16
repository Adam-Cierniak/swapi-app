import { type PlanetData } from '../api/planetsApi';
import { Box, Typography, Grid } from '@mui/material';
import { PlanetModal } from './PlanetModal';

export const Planet = ({ data }: { data: PlanetData }) => {
  return (
    <>
      <Grid item lg={3} md={3} sm={3} xl={3} xs={3}>
        <Box
          sx={{
            backgroundColor: '#1d3557',
            '&:hover': {
              backgroundColor: '#457b9d',
              opacity: [0.9, 0.8, 0.7],
            },
            boxShadow: 2,
            width: '100%',
            height: '100%',
          }}
        >
          <Typography color="#f1faee" ml={2} pt={2} variant="h4">
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
                <PlanetModal data={data} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
