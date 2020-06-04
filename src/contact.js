import React from "react"; 
import {  TextField } from '@material-ui/core/';
import {
  withStyles,
} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';


class Content extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
      name :'',
      mail : '',
      message: '',
      mailSent: false
    };
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.messageChange = this.messageChange.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
  }

  nameChange = (event) => {
    this.setState({name:event.target.value});
    console.log('name is being typed...');
  };
  emailChange = (event) => {
    this.setState({email:event.target.value});
    console.log('email is being typed...');
  };
  messageChange = (event) => {
    this.setState({message:event.target.value});
    console.log('message is being typed....');
  };

  clearInputs = () => {
    console.log("clearing form...")
    this.setState({name:''});
    this.setState({email:''});
    this.setState({message:''});
    console.log("name: "+ this.state.name);
    console.log("name: "+ this.state.email);
    console.log("name: "+ this.state.message);
  };

  checkInputs = () => {
    if(this.state.name == '' || this.state.mail == '' || this.state.message==''){
      return true;
    }else{
      return false;
    }
  }
 
  sendMail = (props) => {
    console.log('send the mail now');
    console.log('name'+ this.state.name);
    console.log('email'+this.state.email);
    console.log('message'+this.state.message);
    if(this.state.name=='' || this.state.email == '' || this.state.message == ''){
      swal("Failed", "Please Fill all the details..", "error");
      return;
    }
    var emailParams = {
      'from_name': this.state.name,
      'email': this.state.email,
      'message_html': this.state.message,
      'to_name': 'sathvik'
    }

    var service_id ='gmail';  
    var template_id = 'template_rjEXvpLN';
    var user_id ='user_ishH85RysqiVJXw8CLgcJ';

    emailjs.send(service_id,template_id,emailParams,user_id)
    .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
      swal("Message received!", "Will Reply Back Soon..", "success");
   }, function(error) {
      console.log('FAILED...', error);
      swal("Failed", "Please try again in sometime..", "error");
   });

   this.clearInputs();
};
  
  render(){ 
    return (
        <div className="contact-form-division">
          <h2>GOT QUESTIONS?</h2>
          <p>The easiest thing to do is connect with me on 
           <a href="https://www.linkedin.com/in/sathvik-sanagavarapu-77330a98/"> linkedin</a>.
          </p>
          <ThemeProvider theme= {darkTheme}>
          <form className="form" noValidate autoComplete="off" style={FormStyle} onSubmit={this.sendMail}>
              <CssTextField id="outlined-basic" label="Name" variant="outlined" width ="100%" size="large" style={{margin:16}} onChange={this.nameChange} value={this.state.name} required="true" />
              <CssTextField id="outlined-basic" label="Email" variant="outlined" width ="50%" size="large" suffix="@gmail.com" style={{margin:16}} onChange={this.emailChange} value={this.state.email} required="true"/>
              <CssTextField id="standard-multiline-flexible" label="Message" variant="outlined" multiline="true" rows={5} style={{margin:16}} onChange={this.messageChange} value={this.state.message} required="true"/>
              <Button style={Buttonstyle} type="submit" >Send Mail</Button>
          </form>
          </ThemeProvider>
        </div>
      );
    }

};

var ack = false;

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  action:{
    disabled: "#fff"
  },
  primary: {
    light: "#18ffff",
    main: "#18ffff",
    dark: "#18ffff"

  },
  secondary: {
      light: "#84ffff",
      main: "#84ffff",
      dark: "#84ffff"
  },
});



// We can use inline-style
const Buttonstyle = {
  background: 'linear-gradient(45deg, #00FFFF 30%, #00FFBF 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  margin:16,
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(0, 196, 147, .8)',
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
      color: "aqua"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "aqua"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "aqua",
      },
    
    }
  }
})(TextField);






export default Content;