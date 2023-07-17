import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SayHi() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h2" color="text.primary" gutterBottom mb="2px">
          Hi Hello zak!
        </Typography>
        <Typography variant="h5" component="div">
          be{bull} the {bull} Best {bull}version
        </Typography>
        
        <Typography variant="body2">
          well meaning and kindly revise all your lessons.
        </Typography>
      </CardContent>
      <CardActions>
          <Typography variant="body2">
          You have 3 Task to Do good luck.
        </Typography>
        <Button size="small">Learn More about your task</Button>
      </CardActions>
    </Card>
  );
}
