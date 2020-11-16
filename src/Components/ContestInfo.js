import React, {Component} from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Table, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';
import IsLoading from './IsLoading';
import '../App.css';

class ContestInfo extends Component{
    state={
        cidata:null,
    }
    componentDidMount(){
        const user=this.props.username;
        const link='https://codeforces.com/api/user.rating?handle='+user;
        fetch(link).then((response) => response.json())
        .then((jsonData) => {
            this.setState({
                cidata:JSON.stringify(jsonData)
            })
        })
        .catch((error) => {
            console.error(error);
        })
    }
    show(data){
        return(
            <>
            <TableRow>
                <TableCell size="small" className="text-center bg-dark text-white">{data.contestId}</TableCell>
                <TableCell size="small" className="text-center bg-dark text-white">{data.contestName}</TableCell>
                <TableCell size="small" className="text-center bg-dark text-white">{data.rank}</TableCell>
                <TableCell size="small" className="text-center bg-dark text-white">{data.oldRating}</TableCell>
                <TableCell size="small" className="text-center bg-dark text-white">{data.newRating}</TableCell>
                <TableCell size="small" className="text-center bg-dark text-white">{data.newRating-data.oldRating}</TableCell>
            </TableRow>
            </>
        )
    }
    render(){
        const data=this.state.cidata;
        if(data===null){
            return (
                <IsLoading/>
            )
        }
        else{
            var obj=JSON.parse(data).result;
            var len=obj.length;
            var maxUp=0;
            var maxDown=5000;
            var bestRank=200000;
            var worstRank=0;
            var worstContest="-";
            var bestContest="-";
            obj.map((d)=>{
                let change=d.newRating-d.oldRating;
                if(change>maxUp){
                    maxUp=change;
                    bestContest=d.contestName;
                }
                if(change<maxDown){
                    maxDown=change;
                    worstContest=d.contestName;
                }
                if(d.rank>worstRank)
                    worstRank=d.rank;
                if(d.rank<bestRank)
                    bestRank=d.rank;
                return null;
            })
            var avglast5=0;
            if(len<5){
                avglast5="Less than 5 contest given";
            }
            else{
                for(var i=0;i<5;i++){
                    avglast5+=obj[i].rank;
                }
                avglast5/=5;
            }
            var avglast10=0;
            if(len<10){
                avglast5="Less than 10 contest given";
            }
            else{
                for(i=0;i<10;i++){
                    avglast10+=obj[i].rank;
                }
                avglast10/=10;
            }
            avglast5=avglast5.toFixed(2);
            avglast10=avglast10.toFixed(2);
            obj.reverse();
            return(
                <Jumbotron className="text-center">
                    <Container className="noscroll" style={{overflowY:"scroll"}}>
                        <Row className="justify-content-center">
                            <Col className="col-lg-8 col-md-10">
                                <Table style={{borderRadius:"10%"}}>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell size="medium" align="left" className="text-white bg-info">Number of contests </TableCell>
                                            <TableCell size="medium" align="right" className="text-white bg-dark">{len}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell size="medium" align="left"  className="text-white bg-info">Best Rank</TableCell>
                                            <TableCell size="medium" align="right" className="text-white bg-dark">{bestRank}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell size="medium" align="left"  className="text-white bg-info">Worst Rank</TableCell>
                                            <TableCell size="medium" align="right" className="text-white bg-dark">{worstRank}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell size="medium" align="left"  className="text-white bg-info">Maximum Change</TableCell>
                                            <TableCell size="medium" align="right" className="text-white bg-dark">{maxUp}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell size="medium" align="left"  className="text-white bg-info">Minimum Change</TableCell>
                                            <TableCell size="medium" align="right" className="text-white bg-dark">{maxDown}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell size="medium" align="left"  className="text-white bg-info">Best Contest</TableCell>
                                            <TableCell size="medium" align="right" className="text-white bg-dark">{bestContest}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell size="medium" align="left"  className="text-white bg-info">Worst Contest</TableCell>
                                            <TableCell size="medium" align="right" className="text-white bg-dark">{worstContest}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell size="medium" align="left"  className="text-white bg-info">Avg last 5 contests rank</TableCell>
                                            <TableCell size="medium" align="right" className="text-white bg-dark">{avglast5}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell size="medium" align="left"  className="text-white bg-info">Avg last 10 contests rank</TableCell>
                                            <TableCell size="medium" align="right" className="text-white bg-dark">{avglast10}</TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                    <br/>
                    <br/>
                    <br/>
                    <h5>Rating Changes</h5>
                    <Container className="noscroll p-0" style={{maxHeight:"90%",overflowY:"auto"}}>
                        <Row>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell size="medium" align="center" className="bg-info text-white">Contest Id</TableCell>
                                        <TableCell size="medium" align="center" className="bg-info text-white">Name</TableCell>
                                        <TableCell size="medium" align="center" className="bg-info text-white">Rank</TableCell>
                                        <TableCell size="medium" align="center" className="bg-info text-white">Old Rating</TableCell>
                                        <TableCell size="medium" align="center" className="bg-info text-white">New Rating</TableCell>
                                        <TableCell size="medium" align="center" className="bg-info text-white">Change</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {obj.map(data=>this.show(data))}
                                </TableBody>
                            </Table>
                        </Row>
                    </Container>
                </Jumbotron>
            )
        }
    }
}
export default ContestInfo;