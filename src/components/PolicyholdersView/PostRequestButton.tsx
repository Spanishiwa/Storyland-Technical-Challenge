import { PersonAdd } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useContext } from 'react';
import {
  newPolicyholder,
  POLICYHOLDERS_URL,
} from '../../constants/instructions';
import { PolicyholdersContext } from '../Contexts/PolicyholdersContext';
import { setFetchFail, setFetching, setFetchSuccess } from './fetchReducer';

type TPostBody = {
  method: string;
  headers: { 'Content-Type': string };
  body: string;
};

export const PostRequestButton = () => {
  const { dispatch } = useContext(PolicyholdersContext);

  const getPOSTBody = (): TPostBody => {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPolicyholder()),
    };
  };

  const handleClickFetchPost = async () => {
    dispatch(setFetching());

    try {
      const res = await fetch(POLICYHOLDERS_URL, getPOSTBody());
      const data = await res.json();

      dispatch(setFetchSuccess(data));
    } catch (err) {
      if (err instanceof Error) {
        dispatch(setFetchFail(err));
      }
    }
  };

  return (
    <Button
      onClick={handleClickFetchPost}
      size="small"
      startIcon={<PersonAdd />}
      sx={{ py: '10px' }}
      type="button"
      variant="contained"
    >
      Add a Policyholder
    </Button>
  );
};
