import { Link, Box } from '@mui/material';
import { Link as RouterLink, NavLink } from 'react-router-dom';
type TNavBar = {
  links: {
    isActive?: boolean;
    text: string;
    href: string;
    'data-testid'?: string;
  }[];
};

function NavBar({ links }: TNavBar) {
  return (
    <Box
      component="aside"
      sx={{
        background: '#0c2975',
        padding: '16px',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Link
        component={RouterLink}
        to="/"
        sx={{ cursor: 'pointer', marginBottom: '80px', marginTop: '40px' }}
      >
        <img src="/storyland_logo_black.svg" alt="logo"></img>
      </Link>

      {links.map(({ text, href, 'data-testid': dataTestId, isActive }) => (
        <Link
          aria-current={isActive ? 'page' : false}
          component={NavLink}
          key={href}
          to={href}
          color="#fff"
          underline="hover"
          sx={{
            '&.active': { fontSize: '30px' },
            cursor: 'pointer',
            '&:not(:last-of-type)': {
              marginBottom: '16px',
            },
          }}
          data-testid={dataTestId}
        >
          {text}
        </Link>
      ))}
    </Box>
  );
}

export default NavBar;
