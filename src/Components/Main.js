import React,{ Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Form, FormGroup, Input, Button } from 'reactstrap';

class Main extends Component{
    render(){
        const { handleChange, handleSubmit } = this.props;
        return (
            <>
                <Jumbotron className="text-center text-info">
                    <h2>Welcome to Codeforces Analyzer</h2>
                </Jumbotron>
                <Jumbotron>
                    <Container className="text-center">
                            <Row className="text-center justify-content-center">Enter your username:</Row>
                            <br/>
                            <Row className="justify-content-center">
                                <Col className="col-6">
                                    <Form onSubmit={handleSubmit}>
                                        <FormGroup>
                                            <Input type="text" onChange={handleChange}/>
                                        </FormGroup>
                                        <FormGroup className="text-center">
                                            <Button className="bg-info">Enter</Button>
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Row>
                        
                    </Container>
                </Jumbotron>
            </>
        );
    };
};

export default Main;