import React,{Component} from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';



class Sidebar extends Component{
    
    op(){
       if(this.props.expand){
           return(
                <>
                <ListItem button onClick={(event)=>{this.props.changeView(event,1)}}>
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem button onClick={(event)=>{this.props.changeView(event,11)}}>
                    <ListItemText>Problem Info</ListItemText>
                </ListItem>
                <ListItem button onClick={(event)=>{this.props.changeView(event,12)}}>
                    <ListItemText>Contest Info</ListItemText>
                </ListItem>
                <ListItem button onClick={(event)=>{this.props.changeView(event,0)}}>
                    <ListItemText>Back</ListItemText>
                </ListItem> 
                </>
           )
       }
       else{
           return(
               <>
            <ListItem button onClick={(event)=>{this.props.changeView(event,0)}}>
                <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button onClick={(event)=>{this.props.changeView(event,2)}}>
                <ListItemText>Suggestions</ListItemText>
            </ListItem>
            <ListItem button onClick={(event)=>{this.props.changeView(event,3)}}>
                <ListItemText>About</ListItemText>
            </ListItem>
            </>
           )
       } 
    }
    render(){
        return (
            <List>
                {this.op()}
            </List>
        );
    }
}

export default Sidebar;