import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import {postdata } from '../saga/api'
import Avatar from '@material-ui/core/Avatar';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import {Insert} from '../actions/action'
import { useDispatch, useSelector } from "react-redux"



const useStyles = makeStyles((theme) => ({
  // root: {
  //   
  //   width:'100px',
  //   '& > *': {
  //     margin: theme.spacing(1),
  //     width: theme.spacing(16),
  //     height: theme.spacing(16),
  //   },
  // },
  paper: {
    //   display: 'flex',
    //   // height: theme.spacing(70),
    //   // width: theme.spacing(62),
    //   // marginTop: theme.spacing(1),
    //   // marginBottom: theme.spacing(2),
    //   padding: theme.spacing(3),
    marginLeft: theme.spacing(25),
    marginRight: theme.spacing(25),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(5),
    },
  },

    input: {
      display: 'none',
    },
    // textField: {
    //   marginLeft: theme.spacing(1),
    //   marginRight: theme.spacing(1),
    //   width: 200,
    // },
 
}));


function RegistrationForm(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [firstname, setfirstname] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [fathername, setfathername] = React.useState("");
  const [email, setemail] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [mobileno, setmobileno] = React.useState();
  const [gender, setgender] = React.useState("");
  const [dob, setdob] = React.useState("");
  const [country, setcountry] = React.useState("");
  const [isValidE, setisValidE] = React.useState("");
  const [errorem, seterrorem] = React.useState("");
  const [isValidM, setisValidM] = React.useState("");
  const [errormo, seterrormo] = React.useState("");

  const submitdata = async () => {
    let  body = { firstname, lastname, fathername, email, address, mobileno, gender, dob, country };
    let result=await postdata('api/insert',body)
    console.log(result.data)
    dispatch(Insert(result.data))

  };

  const validateMail = async (event)=> {
    let emailid = event.target.value;
    setemail(emailid)
    if (typeof (emailid !== "undefined")) {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
      if (!pattern.test(emailid)) {
        seterrorem("please enter valid email.")
         setisValidE(false)
      }
      else {
        seterrorem("")
         setisValidE(true)
      }
    }
  }
  const validateMobile =(event)=>{
    let number = event.target.value;
    setmobileno(number)
    if (typeof (number) !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(number)) {
        seterrormo("please only no.")
        setisValidM(false)
      }
      else if (number.length !== 10) {
        seterrormo("please enter valid no.")
        setisValidM(false)
      }
      else {
        setisValidM(true)
        seterrormo("")
      }
    }
  }


  return (
    <div>
      <Paper className={classes.paper}>
        <FormControl component="fieldset">
          <Typography variant="h6" gutterBottom>
            Registration Form
      </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First Name"
                fullWidth
                autoComplete="given-name"
                required
                onChange={(e) => setfirstname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last Name"
                fullWidth
                autoComplete="family-name"
                required
                onChange={(e) => setlastname(e.target.value)} />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="fatherName"
                name="fatherName"
                label="Father Name"
                fullWidth
                autoComplete="given-name"
                required
                onChange={(e) => setfathername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="emailId"
                name="emailId"
                label="Email Id"
                fullWidth
                autoComplete="email"
                required
                onChange={(e) => validateMail(e)}
              />
              <div style={{fontSize:"10px",color:"red"}}>{errorem}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address"
                name="address"
                label="Address line"
                fullWidth
                autoComplete="shipping address-line2"
                required
                onChange={(e) => setaddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="mobileNo"
                name="mobileNo"
                label="Mobile No."
                fullWidth
                autoComplete="mobile number"
                required
                onChange={(e) => validateMobile(e)}
              />
              <div style={{fontSize:"10px",color:"red"}}>{errormo}</div>
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup row aria-label="position" name="position" defaultValue="top" required onChange={(e) => setgender(e.target.value)}>
                <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              fullWidth 
              id="dob"
              label="DOB"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              required
              onChange={(e) => setdob(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6}>
            <FormControl required fullWidth className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label">Country</InputLabel>
        <Select
          
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={country}
          onChange={(e)=>setcountry(e.target.value)}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="China">China</MenuItem>
          <MenuItem value="Nepal">Nepal</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="England">England</MenuItem>
          <MenuItem value="Japan">Japan</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
              {/* <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                required
                onChange={(e) => setcountry(e.target.value)}
              /> */}
            </Grid>
            <Grid item xs={6}>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span" >
                  Upload
                </Button>
              </label>
            </Grid>
            <Grid item xs={6}>
              <Avatar alt="Remy Sharp" src="/images/cart.png" />
            </Grid>
            <Grid item xs={6}>

              <Button variant="contained" color="primary" onClick={()=>submitdata()}>Save</Button>
            </Grid>

            <Grid item xs={6}>

              <Button variant="contained" color="primary" type="reset">Reset</Button>
            </Grid>

          </Grid>
        </FormControl>
      </Paper>
    </div>
  );
}

export default RegistrationForm;