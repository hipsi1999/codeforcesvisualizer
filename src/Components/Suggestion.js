import React,{Component} from 'react';
import axios from 'axios';
import { Jumbotron, Container, Form, FormGroup, Input, Button, Label } from 'reactstrap';
import IsLoading from './IsLoading';

class Suggestion extends Component{
    constructor(props){
        super(props);
        this.state={
            author:'',
            body:'',
            suggestions:null
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSug = this.handleChangeSug.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        axios.get('/suggestions')
        .then(res=>{
            this.setState({
                suggestions:JSON.stringify(res)
            })
        })
    }
    handleSubmit = (event) => {
        // event.preventDefault();
        const { author, body } = this.state;
        const data = {
            author: author,
            body: body
        }
        axios.post('/suggestions',data)
        .then(res=>{
            console.log(res)
        })
    }
    handleChangeSug = (event) => {
        this.setState({
            body:event.target.value
        })
    }
    handleChangeName = (event) => {
        this.setState({
            author:event.target.value
        })
    }
    render(){
        let SuggestionContainer;
        if(this.state.suggestions === null){
            SuggestionContainer = 
            <>
                <br/>
                <IsLoading/>
            </>
        }
        else{
            const suggestions = JSON.parse(this.state.suggestions)
            SuggestionContainer =
                suggestions.data.map(suggestion=>(
                    <div style={{padding:"10px",borderBottom:"1px solid black"}}>
                        <p style={{marginBottom:"0px"}}><span className="font-weight-bold">{suggestion.author}</span><span className="font-weight-light" style={{fontSize:"12px"}}>{" "}{" "}{" "}({suggestion.date})</span></p>
                        <p style={{marginBottom:"0px"}}>{suggestion.body}</p>
                    </div>             
                ))
            
        }
        return(
            <>
                <Jumbotron className="mb-0">
                    <Container style={{maxWidth:"600px"}}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input type="text" size="sm" onChange={this.handleChangeName}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Suggestion</Label>
                                <Input type="textarea" size="sm" onChange={this.handleChangeSug}/>
                            </FormGroup>
                            <FormGroup>
                                <Button>Send</Button>
                            </FormGroup>
                        </Form>
                    </Container>
                </Jumbotron>
                <Jumbotron>
                    <Container>
                        <div className="text-info text-center pb-2" style={{borderBottom:"1px solid black"}}>
                            <h4>Suggestions</h4>
                        </div>
                        {SuggestionContainer}
                    </Container>
                </Jumbotron>
            </>
        )
    }
}
export default Suggestion;