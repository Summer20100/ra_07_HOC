import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material';
import { name } from './../package.json'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export function MyLinkButton({link, children}) {
  return (
    <NavLink to={ link }>
      <Button variant="contained" size='large' sx={{ bgcolor: `primary.dark`, fontSize: 20 }} >
        { children }
      </Button>
    </NavLink>
  )
}

export function NameLesson() {
  return (
    <div className='exersize' sx={{ bgcolor: `primary.dark`, fontSize: 20 }} >
      LESSON:<br/> { name }
    </div>
  )
}
