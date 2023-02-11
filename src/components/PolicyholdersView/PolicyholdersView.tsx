import { Typography } from '@mui/material';
import InfoTable from '../InfoTable';
import useFetchGetPolicyholders from './useFetchGetPolicyholders';

type TAddress = {
  line1: string;
  line2: string | undefined;
  city: string;
  state: string;
  postalCode: string;
};

function PolicyholdersView() {
  const { data, error, isFetching } = useFetchGetPolicyholders();

  const formatAddress = (address: TAddress): string => {
    const { line1, line2, city, state, postalCode } = address;

    const formattedAddress = `${line1},${
      line2 ? ' ' + line2 + ',' : ''
    } ${city}, ${state} ${postalCode}`;

    return formattedAddress;
  };

  const formattedAge = (age: number): string => {
    return `${age} year${age > 1 ? 's' : ''} young`;
  };

  return (
    <>
      {isFetching ? (
        <Typography component="span" variant="body2">
          'Fetching Policy Holder Information. . .'
        </Typography>
      ) : (
        ''
      )}
      {data?.policyHolders.map((policyHolder) => {
        const { name, age, address, phoneNumber, isPrimary } = policyHolder;
        const infoTableRows = [
          { key: 'Name', value: name },
          { key: 'Age', value: formattedAge(age) },
          { key: 'Address', value: formatAddress(address) },
          { key: 'Phone Number', value: phoneNumber },
          { key: 'Primary policyholder?', value: isPrimary ? 'Yes' : 'No' },
        ];

        return (
          <InfoTable
            header="Policy Holder InfoTable"
            key={name + age + phoneNumber}
            rows={infoTableRows}
          />
        );
      })}
      {error ? (
        <Typography color="error" component="span" variant="body2">
          `An error occurred while fetching the Policy Holder Information:
          {error.message}`
        </Typography>
      ) : (
        ``
      )}
    </>
  );
}

export default PolicyholdersView;
