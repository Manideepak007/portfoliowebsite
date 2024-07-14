import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import {loadStripe} from "@stripe/stripe-js"

const cart = [
  {
    id: "1",
    product: "Pen",
    price: "10",
  },
  {
    id: "2",
    product: "Gamecard",
    price: "20",
  },
]


const Payment = async () =>{
  console.log("payment")
  const stripe = await loadStripe("pk_test_51PcDERApwgaya2rBRDHqohzG1WDdKcPeRLxAT7fmseXxl0FJwnPzAnmy1axkc2B0u5Ht9j82rlXzy1xlSJsfCZMk001tatzwbU")

  const body = {
    value : cart
  }

  const headers = {
    "Content-type" : "application/json"
  }

  const response  = await fetch("http://localhost:7000/api/create-checkout-session",{
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  })

  const session = await response.json();

  const result = stripe.redirectToCheckout({
    sessionId : session.id,
  }).then(res => console.log("success")).catch(err=>console.log("error"))
  }

const categories = [
  {
    id: 'Build',
    children: [
      {
        id: 'Dashboard',
        icon: <PeopleIcon />,
        active: true,
      },
      { id: 'Projects', icon: <DnsRoundedIcon />,},
      { id: 'Users', icon: <PermMediaOutlinedIcon /> },
      { id: 'Payment', icon: <PublicIcon /> },

    ],
  },
];



const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          Paperbase
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Project Overview</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, onClick }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={item} onClick={childId === "Payment" ? Payment : null}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
