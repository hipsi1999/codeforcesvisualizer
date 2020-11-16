import React, {Component} from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Jumbotron, Row, Col, Container } from 'reactstrap';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import { randomColor } from 'randomcolor';
import IsLoading from './IsLoading';
import "../App.css";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

class ProblemInfo extends Component{
    state={
        pidata:null,
    }
    componentDidMount(){
        var name=this.props.username;
        var link="https://codeforces.com/api/user.status?handle="+name;
        fetch((link)).then((response)=>response.json())
        .then((jsonData)=>{
            this.setState({
                pidata:JSON.stringify(jsonData)
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render(){
        var data=this.state.pidata;
        if(data===null){
            return (
                <IsLoading/>
            )
        }
        else{
            var d=JSON.parse(data);
            var array=d.result;
            var ratings={};
            var language={};
            var op={};
            let lowestdate=null;
            let highestdate=null;
            var indexes={
                'A':0,
                'B':0,
                'C':0,
                'D':0,
                'E':0,
                'F':0,
                'G':0
            };
            var tags={}
            var tried = new Map();
            var solved = new Map();
            array.map((data)=>{
                var t=new Date(1970,0,1);
                var s=data.problem.contestId+data.problem.index;
                console.log(data.problem);
                if(!solved.has(s) && data.verdict==="OK"){
                    solved.set(s,1);
                    console.log(s);
                    ratings[data.problem.rating]=ratings[data.problem.rating]?ratings[data.problem.rating]+1:1;
                    indexes[data.problem.index[0]]=indexes[data.problem.index[0]]?indexes[data.problem.index[0]]+1:1;
                    language[data.programmingLanguage]=language[data.programmingLanguage]?language[data.programmingLanguage]+1:1;
                    data.problem.tags.map((tag)=>{
                        tags[tag]=tags[tag]?tags[tag]+1:1;
                        return null
                    })
                }
                t.setSeconds(data.creationTimeSeconds);
                if(lowestdate==null){
                    lowestdate=data.creationTimeSeconds;
                }
                else if(lowestdate>data.creationTimeSeconds){
                    lowestdate=data.creationTimeSeconds;
                }
                if(highestdate==null){
                    highestdate=data.creationTimeSeconds;
                }
                else if(highestdate<data.creationTimeSeconds){
                    highestdate=data.creationTimeSeconds;
                }
                let date=t.getDate();
                let month=t.getMonth()+1;
                let year=t.getFullYear();
                let tt=year+'-'+month+'-'+date;
                op[tt]=op[tt]?op[tt]+1:1;
                return null;
            })
            var dataset={
                labels:[],
                datasets:[{
                    barPercentage: 0.5,
                    barThickness: 12,
                    maxBarThickness: 20,
                    minBarLength: 2,
                    data:[],
                    backgroundColor:[]
                }]
            }
            for(var key in ratings){
                if(key!=='undefined'){
                    dataset.labels.push(key);
                    dataset.datasets[0].data.push(ratings[key]);
                    dataset.datasets[0].backgroundColor.push('#5bc0de');
                }
            }
            var dataset2={
                labels:[],
                datasets:[{
                    barPercentage: 0.5,
                    barThickness: 12,
                    maxBarThickness: 20,
                    minBarLength: 2,
                    data:[],
                    backgroundColor:[]
                }]
            }
            for(key in indexes){
                dataset2.labels.push(key);
                dataset2.datasets[0].data.push(indexes[key]);
                dataset2.datasets[0].backgroundColor.push('#5bc0de');
            }
            var dataset3={
                labels:[],
                datasets:[{
                    data:[],
                    backgroundColor:[]
                }]
            }
            for(key in tags){
                dataset3.labels.push(key);
                dataset3.datasets[0].data.push(tags[key]);
                dataset3.datasets[0].backgroundColor.push(randomColor());
            }
            var dataset4={
                labels:[],
                datasets:[{
                    data:[],
                    backgroundColor:[]
                }]
            }
            for(key in language){
                dataset4.labels.push(key);
                dataset4.datasets[0].data.push(language[key]);
                dataset4.datasets[0].backgroundColor.push(randomColor());
            }
            let startdate=new Date(1970,0,1);
            let enddate=new Date(1970,0,1);
            startdate.setSeconds(lowestdate);
            enddate.setSeconds(highestdate);
            var startyear=[]
            var endyear=[]
            var iota=[]
            var sy=startdate.getFullYear();
            var tmp=sy;
            var ey=enddate.getFullYear();
            var i=0;
            while(1){
                startyear.push(sy);
                endyear.push(tmp);
                iota.push(i);
                if(ey===tmp)
                    break;
                sy++;
                tmp++;
                i++;
            }
            var heatmap=[];
            for(key in op){
                heatmap.push({
                    date:key,
                    count:op[key]
                })
            }
            return(
                <>
                <Jumbotron className="text-center">
                    <h5>Language Used:</h5>
                    <Row className="justify-content-center"> 
                        <Col className="col-md-12 col-sm-12 mt-5" style={{height:"500px"}}>
                            <Pie
                                    data={{
                                        labels:dataset4.labels,
                                        datasets:dataset4.datasets
                                    }}
                                    options={{
                                        responsive:true,
                                        maintainAspectRatio:false,
                                        legend:{
                                            align:'start',
                                            position:'right',
                                            labels:{
                                                boxWidth:10,
                                                fontSize:12,
                                                padding:5,
                                                usePointStyle:true,
                                                pointStyle:"circle"
                                            }
                                        }
                                    }}
                                />
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <h5>Tags solved:</h5>
                    <br/>
                    <Row className="justify-content-center">
                    <br/>    
                        <Col className="col-md-8 col-sm-8 noscroll" style={{maxHeight:"400px",overflow:"scroll"}}>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell size="small" className="bg-info text-white">Tags</TableCell>
                                        <TableCell size="small" className="bg-info text-white">Questions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        Object.keys(tags).map(function(keyName, keyIndex){
                                            return(
                                                <>
                                                    <TableRow className="bg-dark">
                                                        <TableCell size="small" className="text-white">{keyName}</TableCell>
                                                        <TableCell size="small" className="text-white">{tags[keyName]}</TableCell>
                                                    </TableRow>
                                                </>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <h5>Rating Based Questions Solved:</h5>
                    <br/>
                    <Row className="text-center justify-content-center noscroll">
                    <br/>
                        <div className="canva noscroll" style={{overflow:'scroll'}}>
                            <Bar
                                data={{
                                    labels:dataset.labels,
                                    datasets:dataset.datasets
                                }}
                                options={{
                                
                                    maintainAspectRatio:false,
                                    responsive:true,
                                    legend:{
                                        display:false
                                    }
                                }}
                            />
                        </div>
                    </Row>
                    <br/>
                    <br/>
                    <h5>Indexing Based Qustions Solved:</h5>
                    <br/>
                    <Row className="text-center justify-content-center noscroll">
                    <br/>
                        <div className="canva noscroll" style={{overflow:"scroll"}}>
                            <Bar 
                                data={{
                                    labels:dataset2.labels,
                                    datasets:dataset2.datasets
                                }}
                                
                                options={{
                                    maintainAspectRatio:false,
                                    responsive:true,
                                    legend:{
                                        display:false
                                    }
                                }}
                            />
                        </div>
                </Row>
                <br/>
                <br/>
                <h5>Tags solved:</h5>
                <Row className="justify-content-center">
                    <Col className="col-md-12 col-sm-12 mt-5" style={{height:"500px"}}>
                        <Pie
                            data={{
                                labels:dataset3.labels,
                                datasets:dataset3.datasets
                                }}
                            options={{
                                responsive:true,
                                maintainAspectRatio:false,
                                legend:{
                                    align:'start',
                                    position:'right',
                                    labels:{
                                        boxWidth:10,
                                        fontSize:10,
                                        padding:5,
                                        usePointStyle:true,
                                        pointStyle:"circle"
                                    }
                                }
                            }}
                        />
                    </Col>
                </Row>
                <br/>
                </Jumbotron>
                <Jumbotron className="text-center justify-content-center">
                        <h5>Submission Heatmap</h5>
                        <br/>
                        {iota.map(function(i){
                            var s=startyear[i]+"-01-01";
                            var e=endyear[i]+"-12-31";
                            return(
                            <>
                            <Container className="bg-white p-3  noscroll" style={{overflow:'auto'}}>
                                <h6>{startyear[i]}</h6>
                                <CalendarHeatmap
                                startDate={s}
                                endDate={e}
                                values={
                                    heatmap
                                }
                                showOutofRangeDay={false}
                                
                                classForValue={(value) => {
                                    if (!value) {
                                        return 'color-empty';
                                    }
                                    else if(value.count>0 && value.count<=5){
                                        return `color-scale-1`;
                                    }
                                    else if(value.count>5 && value.count<=15){
                                        return `color-scale-2`;
                                    }
                                    else if(value.count>15 && value.count<=30){
                                        return `color-scale-3`;
                                    }   
                                    else{
                                        return `color-scale-4`;
                                    }
                                }}
                                />
                            </Container>
                            <br/>
                            <br/>
                            </>)
                        })}     
                </Jumbotron>
                </>
            )
        }
    }
}
export default ProblemInfo;