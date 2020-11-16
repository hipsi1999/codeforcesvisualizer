import React,{ Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import Home from './Components/Home';
import Suggestion from './Components/Suggestion';
import About from './Components/About';
import WrongUser from './Components/WrongUser';
import { Grid } from '@material-ui/core';

class App extends Component {
  state={
    username:'',
    gotUsername:false,
    gotUser:false,
    curView:0,
    wrongUser:false,
  }
  handleChange = (event) => {
    this.setState({
      username:event.target.value
    });
  }
  handleSubmit = (event) => {
    const name=this.state.username;
    this.setState({
        username:name,
        gotUsername:true,
    })
    event.preventDefault();
  }
  noUser = () => {
    this.setState({
      username:'',
      gotUsername:false,
      gotUser:false,
    })
  }
  gotUserinfo = (op) =>{
    this.setState({
      gotUser:true,
      curView:1
    })
  }
  changeView = (event,val) =>{
    this.setState({
      curView: val,
    })
  }
  wrongUser = () =>{
    this.setState({
      wrongUser:true,
    })
  }
  render(){
    const { username, gotUsername} = this.state;
    let main=null;
    let wrongUser=null;
    if(gotUsername){
          main= 
          <>
            <Home username={username} noUser={this.noUser} gotUserinfo={this.gotUserinfo} curView={this.state.curView} wrongUser={this.wrongUser}/>
          </>
    }
    else{
      if(this.state.wrongUser)
        wrongUser=<WrongUser/>
      else
        wrongUser=<></>
      switch(this.state.curView){
        case 0:
          main= <>
            <Main username={username}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            {wrongUser}
          </>
          break
        case 2:
          main= <>
            <Suggestion/>
          </>
          break
        case 3:
          main= <>
            <About/>
          </>
          break
        default:
          main = <></>
      }
    }
    return(
      <Grid container className="noscroll" >
        <Grid item xs={3} md={2} p={0}>
          <Sidebar expand={this.state.gotUser} changeView={this.changeView}/>
        </Grid>
        <Grid item xs={9} md={10} style={{backgroundColor:"#e9ecef",height:"100vh",overflow:"scroll"}} className="noscroll">
          {main}    
        </Grid>
      </Grid>
    );
  };
}
export default App;
