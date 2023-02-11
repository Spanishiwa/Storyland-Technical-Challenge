import { createContext, PropsWithChildren, useMemo, useReducer } from 'react';
import fetchReducer from '../PolicyholdersView/fetchReducer';
import type { TAction, TFetchResult } from '../PolicyholdersView/fetchReducer';

type PolicyholdersContextProviderProps = {};

const initialState = {
  data: null,
  error: null,
  isFetching: false,
};

export const PolicyholdersContext = createContext<{
  state: TFetchResult;
  dispatch: React.Dispatch<TAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const PolicyholdersContextProvider = ({
  children,
}: PropsWithChildren<PolicyholdersContextProviderProps>) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const memoizedPolicyholdersContextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <PolicyholdersContext.Provider value={memoizedPolicyholdersContextValue}>
      {children}
    </PolicyholdersContext.Provider>
  );
};
