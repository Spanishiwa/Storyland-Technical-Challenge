type TPolicyHolders = {
  policyHolders: [
    {
      name: string;
      age: number;
      address: {
        line1: string;
        line2: string | undefined;
        city: string;
        state: string;
        postalCode: string;
      };
      phoneNumber: string;
      isPrimary: boolean;
    }
  ];
};

type TFetchResult = {
  data: null | TPolicyHolders;
  error: null | Error;
  isFetching: boolean;
};

type TAction = {
  type: string;
  payload?: { error?: Error; data?: TPolicyHolders };
};

const ACTION_TYPES = {
  SET_FETCHING: 'SET_FETCHING',
  SET_FETCH_FAIL: 'SET_FETCH_FAIL',
  SET_FETCH_SUCCESS: 'SET_FETCH_SUCCESS',
};

const { SET_FETCHING, SET_FETCH_FAIL, SET_FETCH_SUCCESS } = ACTION_TYPES;

const setFetchFail = (err: Error): TAction => {
  return {
    type: SET_FETCH_FAIL,
    payload: { error: err },
  };
};

const setFetching = (): TAction => {
  return { type: SET_FETCHING };
};

const setFetchSuccess = (data: TPolicyHolders): TAction => {
  return {
    type: SET_FETCH_SUCCESS,
    payload: { data: data },
  };
};

const fetchGetReducer = (
  state: TFetchResult,
  action: TAction
): TFetchResult => {
  switch (action.type) {
    case SET_FETCHING:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case SET_FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        data: action.payload?.data ? action.payload.data : null,
      };
    case SET_FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload?.error ? action.payload.error : null,
      };
    default:
      return state;
  }
};

export default fetchGetReducer;
export { setFetchFail, setFetching, setFetchSuccess };
export type { TFetchResult };
