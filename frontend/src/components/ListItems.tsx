import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ScienceIcon from '@mui/icons-material/Science';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import HelpIcon from '@mui/icons-material/Help';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { Logout } from '@mui/icons-material';

export const mainListItems = (
  <div className='py-2'>
    <Link to="/home" style={{textDecoration: 'none', color: 'inherit'}}>
      <ListItemButton>
        <ListItemIcon>
          <GridViewIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="/appointments" style={{textDecoration: 'none', color: 'inherit'}}>
      <ListItemButton>
        <ListItemIcon>
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Appointments" />
      </ListItemButton>
    </Link>
    <Link to="/doctors" style={{textDecoration: 'none', color: 'inherit'}}>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Doctors" />
      </ListItemButton>
    </Link>
    <Link to="/specialities" style={{textDecoration: 'none', color: 'inherit'}}>
      <ListItemButton>
        <ListItemIcon>
          <VaccinesIcon />
        </ListItemIcon>
        <ListItemText primary="Specialities" />
      </ListItemButton>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div className='flex-col space-between'>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> */}
    <div>
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="Help & support" />
      </ListItemButton>
    </div>
    <div>
      <Link to="/auth/login" style={{textDecoration: 'none', color: 'inherit'}}>
        <ListItemButton>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </Link>
    </div>
  </div>
);