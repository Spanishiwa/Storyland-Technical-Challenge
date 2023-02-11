import { useEffect, useReducer } from 'react';
import { GET_POLICYHOLDERS_URL } from '../../constants/instructions';
import fetchGetReducer, {
  setFetchFail,
  setFetching,
  setFetchSuccess,
} from './fetchGetReducer';

const initialState = {
  data: null,
  error: null,
  isFetching: false,
};

const useFetchGetPolicyholders = () => {
  const [state, dispatch] = useReducer(fetchGetReducer, initialState);

  useEffect(() => {
    const fetchGetPolicyholders = async () => {
      dispatch(setFetching());

      try {
        const res = await fetch(GET_POLICYHOLDERS_URL);
        const data = await res.json();
        dispatch(setFetchSuccess(data));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(setFetchFail(err));
        }
      }
    };

    fetchGetPolicyholders();
  }, []);

  return state;
};

export default useFetchGetPolicyholders;
