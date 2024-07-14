import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function OutlinedCard(props) {
    const {number, project } = props
    console.log(number)
    const card = (
        <React.Fragment>
          <CardContent>
          <AccountCircleOutlinedIcon />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {number}
            </Typography>
            <Typography variant="h5" component="div">
              {project}
            </Typography>
          </CardContent>
        </React.Fragment>
      );
  return (
    <Box sx={{ minWidth: 250 }} >
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}