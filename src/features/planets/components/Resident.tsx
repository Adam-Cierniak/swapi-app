import { usePersonViaUrl } from '../api/peopleApi';
import Typography from '@mui/material/Typography';

export const Resident = ({ url }: { url: string }): JSX.Element => {
  const { data } = usePersonViaUrl(url);
  console.log(data);
  return (
    <>
      {data?.status === 'loading' ? (
        <div>Loading...</div>
      ) : data?.status === 'error' ? (
        <div>Error: {data?.error.message}</div>
      ) : (
        <div>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {data?.name}
          </Typography>
        </div>
      )}
    </>
  );
};
