import { Grid, Pagination } from '@mui/material';
import { useGetPlanets } from '../api/planetsApi';
import { Planet } from './Planet';

export const Planets = (): JSX.Element => {
  const { data: planets, status, error } = useGetPlanets();

  return (
    <>
      <h2>Planets</h2>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>Error: {error.message}</div>
      ) : (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
          {planets?.results.map((planet) => (
            <Planet key={planet.url} data={planet} />
          ))}
        </Grid>
      )}
      <Pagination count={3} />
    </>
  );
};
