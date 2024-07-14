import * as React from 'react';
import { useHistory } from "react-router-dom";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useDispatch, useSelector } from "react-redux"
import {actions} from "../../Stores/store"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
const history = useHistory();
// const login = useSelector((state)=>state.login)
const dispatch = useDispatch();
const focus = new driver();
var item = JSON.parse(localStorage.getItem('loginTime'));
// var item = JSON.parse(localStorage.getItem('l'));
const intialOptions = {
    email : "",
    password : ""
}
const [value, setValue] = React.useState(intialOptions)
const [tour, setTour] = React.useState(true);
const [login, setLogin] = React.useState(0);


  const handleSubmit = (event) => {
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    if(value?.email === "manideepakgollapudi29@gmail.com" && value?.password === "Deepak@2001"){
        event.preventDefault();
        // login.setLoginTime(1);     
         // dispatch(actions.increamentLogin())
        //  let item = JSON.parse(localStorage.getItem('loginTime'));
        // setLogin(item++)
        // localStorage.setItem('loginTime', login);
        history.push({
            pathname : "/Dashboard",
            value : tour
        }
        )
        document.location.reload();
         console.log("Signed In")
    }else{
        console.log("wrond creds")
    }

  };

  const onChange = (e, name) => {
    setValue({...value, [name]: e.target.value})
  }

//   React.useEffect(()=>{
//     focus.highlight({
//         element: "#submit",
//         popover: {
//           title: "Signup to get to dashboard",
//           description: "Please enter username and password to signup"
//         }
//       });
//   })

  React.useEffect(()=>{
    console.log(login,"login")
    if(item > 5){
        setTour(false)
    }else{
        focus.highlight({
            element: "#submit",
            popover: {
              title: "Signup to get to dashboard",
              description: "Please enter username and password to signup"
            }
          });
    }
  },[login])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url("login.png")',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'left',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={value.email}
                onChange={(e) => onChange(e, "email")}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={value.password}
                onChange={(e)=> onChange(e, "password")}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                id="submit"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}