import React from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function About(){
    return(
        <>
            <Jumbotron>
                <div className="justify-content-center text-center mt-5">
                    <h3>Made by Hipranshu</h3>
                </div>  
                <Container className="text-center">
                    This is made by me to help you in any way it can<br/>
                    There is no compare between users feature since I dont like it! Maybe in future :-) <br/>
                    Feel free to put up ur suggestions in the Suggestions page<br/>
                    Connect to me if you want to do some web project or microservices project with me :-) <br/>
                </Container>  
            </Jumbotron>
            <Jumbotron>
                <div className="justify-content-center text-center">
                    <Button className="bg-info"><a href="https://www.instagram.com/hipsi_ig/" style={{textDecoration:'None',color:'white'}}><InstagramIcon/><span> Instagram</span></a></Button>
                    <br/><br/>
                    <Button className="bg-info"><a href="https://www.linkedin.com/in/hipranshu-bargurjer-493160171/" style={{textDecoration:'None',color:'white'}}><LinkedInIcon/><span> LinkedIn</span></a></Button>
                </div>
            </Jumbotron>
        </>
    )
}

export default About;