import { Button, Box } from '@mui/material';

type TInstructionsBar = {
  onClick: () => void;
};

function InstructionsBar({ onClick }: TInstructionsBar) {
  return (
    <Box
      sx={{
        paddingTop: '16px',
        textAlign: 'center',
      }}
    >
      <Button
        color="primary"
        onClick={onClick}
        size="large"
        variant="contained"
      >
        View challenges
      </Button>
    </Box>
  );
}

export default InstructionsBar;
