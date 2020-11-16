import React,{ Component } from 'react';
import { Col, Row, Jumbotron, Container } from 'reactstrap';
import ContestInfo from './ContestInfo';
import IsLoading from './IsLoading';
import ProblemInfo from './ProblemInfo';
import { Table, TableBody, TableCell, Paper, TableRow } from '@material-ui/core';
 
class Home extends Component{
    state={
        cfdata:null,
        pidata:null
    }
    componentDidMount(){
        const user=this.props.username;
        var link ='https://codeforces.com/api/user.info?handles='+user;
        fetch(link).then((response) => response.json())
        .then((jsonData) => {
            if(jsonData.status==="OK"){
                this.props.gotUserinfo();
            }
            this.setState({
                cfdata:jsonData
            });
        })
        .catch((error) => {
            console.error(error)
        })
        link="https://codeforces.com/api/user.status?handle="+user;
        fetch(link).then((response) => response.json())
        .then((jsonData) => {
            this.setState({
                pidata:JSON.stringify(jsonData)
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    render(){
        const data=this.state.cfdata;
        const data2=this.state.pidata;
        if(data===null || data2===null){
            return(
                <>
                    <div className="mt-5">
                        <IsLoading/>
                    </div>
                </>
            )
        }
        else{
            if(data.status==="OK"){
                const imagelink="http://"+data.result[0].avatar;
                var view=null;   
                var tried=new Map();
                var solved=new Map();
                const pidata=JSON.parse(data2);
                var array=pidata.result;
                array.map((data)=>{
                    let s=data.problem.contestId+data.problem.index;
                    if(!tried.has(s))
                        tried.set(s,1);
                    if(!solved.has(s) && data.verdict==="OK"){
                        solved.set(s,1);
                    }
                    return null
                })
                var avg=array.length;
                var solvedCount=solved.size;
                avg/=solvedCount;
                avg=avg.toFixed(2);
                switch(this.props.curView){
                    case 1:
                        view=<>
                            <Jumbotron>
                                <Row className="justify-content-center">
                                    <Col className="col-md-8">
                                        <Table>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className="bg-info text-white">Tried </TableCell>
                                                    <TableCell className="bg-info text-white">{tried.size}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="bg-info text-white">Solved </TableCell>
                                                    <TableCell className="bg-info text-white">{solved.size}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="bg-info text-white">Average attemps </TableCell>
                                                    <TableCell className="bg-info text-white">{avg}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Jumbotron>
                        </> 
                        break
                    case 11:
                        view=
                            <ProblemInfo username={this.props.username}/>
                            break
                    case 12:
                        view=
                            <ContestInfo username={this.props.username}/>
                            break
                    case 0:
                        this.props.noUser();
                        break
                    default:
                        view=<></>
                }
                return(
                    <>
                    <div className="bg-info" >
                    <Container className="bg-info">
                        <Jumbotron className="justify-content-center bg-info">
                            <Row>
                                <Col className="col-6">
                                    <Table component={Paper}>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell size="small" className="text-white bg-dark">Handle</TableCell>
                                                <TableCell size="small">{data.result[0].handle}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell size="small" className="text-white bg-dark">Rank</TableCell>
                                                <TableCell size="small">{data.result[0].rank}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell size="small" className="text-white bg-dark">Max Rank</TableCell>
                                                <TableCell size="small">{data.result[0].maxRank}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell size="small" className="text-white bg-dark">Rating</TableCell>
                                                <TableCell size="small">{data.result[0].rating}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell size="small" className="text-white bg-dark">Max Rating</TableCell>
                                                <TableCell size="small">{data.result[0].maxRating}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>   
                                </Col>
                                <Col className="col-6 text-center align-self-center">
                                    <img src={imagelink} alt="user-image" height="150" width="150"/>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Container>
                    </div>
                    <div className="">
                        {view}
                    </div>
                    </>
                )
            }
            else{
                this.props.wrongUser();
                this.props.noUser();
                return null;
            }
        }
    }
}

export default Home;