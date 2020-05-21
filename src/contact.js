import React from "react"; 
import { TextField, Button} from '@material-ui/core/';
import {
  withStyles
} from "@material-ui/core/styles";

class Content extends React.Component{ 
    render(){
    return (
        <div className="contact-form-division">
          <h2>GOT QUESTIONS?</h2>
          <p>The easiest thing to do is connect with me on 
           <a href="https://www.linkedin.com/in/sathvik-sanagavarapu-77330a98/">  linkedin</a>.
          </p>
          <form className="form" noValidate autoComplete="off" style={FormStyle}>
              <CssTextField id="outlined-basic" label="Name" variant="outlined" width ="100%" size="large" style={{margin:16}}/>
              <CssTextField id="outlined-basic" label="Email" variant="outlined" width ="50%" size="large" style={{margin:16}}/>
              <CssTextField id="standard-multiline-flexible" label="Message" variant="outlined" multiline="true" rows={5} style={{margin:16}} />
                  <Button style = {Buttonstyle}>Send Mail</Button>
              </form>
        </div>
      );
    }

};
// We can use inline-style
const Buttonstyle = {
  background: 'linear-gradient(45deg, #00eff0 30%, #0ff 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const FormStyle = {
  display : "flex",
  flexDirection:"column",
  justifyContent: "center",
  alignContent: "center",
  width : "60%",
  padding: 10
};

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      },
      "&::placeholder": {
        color: "red"
      }
    }
  }
})(TextField);






export default Content;