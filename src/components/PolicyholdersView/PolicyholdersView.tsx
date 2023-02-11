import useFetchGetPolicyholders from './useFetchGetPolicyholders';

function PolicyholdersView() {
  const { data, error, isFetching } = useFetchGetPolicyholders();

  return null;
}

export default PolicyholdersView;
