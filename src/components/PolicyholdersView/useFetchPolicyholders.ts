import { useContext, useEffect } from 'react';
import { POLICYHOLDERS_URL } from '../../constants/instructions';
import { setFetchFail, setFetching, setFetchSuccess } from './fetchReducer';
import type { TFetchResult } from './fetchReducer';
import { PolicyholdersContext } from '../Contexts/PolicyholdersContext';

const useFetchPolicyholders = (): TFetchResult => {
  const { state, dispatch } = useContext(PolicyholdersContext);

  useEffect(() => {
    const fetchPolicyholders = async () => {
      dispatch(setFetching());

      try {
        const res = await fetch(POLICYHOLDERS_URL);
        const data = await res.json();
        dispatch(setFetchSuccess(data));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(setFetchFail(err));
        }
      }
    };

    fetchPolicyholders();
  }, [dispatch]);

  return state;
};

export default useFetchPolicyholders;
