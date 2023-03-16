import { Grid, Typography, Container } from '@mui/material';
import { Error } from '../../../components/Error/Error';
import { Spinner } from '../../../components/Spinner/Spinner';
import { useGetPlanets } from '../api/planetsApi';
import { Planet } from './Planet';

export const Planets = (): JSX.Element => {
  const { data: planets, status, error } = useGetPlanets();

  return (
    <>
      <Container sx={{ marginLeft: '20%' }}>
        <Typography color="#1d3557" ml={2} pt={2} variant="h2" sx={{ marginBottom: '40px' }}>
          Planets
        </Typography>
        {status === 'loading' ? (
          <Spinner />
        ) : status === 'error' ? (
          <Error error={error} />
        ) : (
          <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
            {planets?.results.map((planet) => (
              <Planet key={planet.url} data={planet} />
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};
