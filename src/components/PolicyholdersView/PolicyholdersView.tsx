import { Typography } from '@mui/material';
import { useContext } from 'react';
import { toDoList } from '.';
import { PolicyholdersContext } from '../Contexts/PolicyholdersContext';
import InfoTable from '../InfoTable';
import Instructions from '../Instructions';
import { PostRequestButton } from './PostRequestButton';
import useFetchPolicyholders from './useFetchPolicyholders';

type TAddress = {
  line1: string;
  line2: string | undefined;
  city: string;
  state: string;
  postalCode: string;
};

function PolicyholdersView() {
  const { state } = useContext(PolicyholdersContext);
  const { data, error, isFetching } = state;

  useFetchPolicyholders();

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
            sx={{ mb: 2 }}
            header={`${name}'s Policy Holder InfoTable`}
            key={name + age + phoneNumber}
            rows={infoTableRows}
          />
        );
      })}
      {isFetching ? (
        <Typography component="p" sx={{ mb: 2 }} variant="body2">
          'Fetching Policy Holder Information. . .'
        </Typography>
      ) : (
        ''
      )}
      <PostRequestButton />
      {error ? (
        <Typography color="error" component="p" sx={{ mt: 2 }} variant="body2">
          `An error occurred while fetching the Policy Holder Information:
          {error.message}`
        </Typography>
      ) : (
        ``
      )}
      <Typography component="p" variant="h6" sx={{ mt: 4 }}>
        Challenge #9 remaining to-do's before release:
      </Typography>
      <Instructions instructions={toDoList}></Instructions>
    </>
  );
}

export default PolicyholdersView;
