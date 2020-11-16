import React from 'react';
import { Container} from 'reactstrap';
function WrongUser(){
    return(
        <>
                <Container className="text-center text-danger">
                    Wrong Username or Server Busy!
                </Container>
        </>
    )
}
export default WrongUser;