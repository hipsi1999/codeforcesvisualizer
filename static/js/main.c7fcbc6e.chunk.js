(this.webpackJsonpfun=this.webpackJsonpfun||[]).push([[0],{214:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),s=t.n(r),c=(t(95),t(10)),m=t(11),i=t(13),o=t(12),u=(t(43),t(248)),g=t(249),h=t(230),E=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"op",value:function(){var e=this;return this.props.expand?l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{button:!0,onClick:function(a){e.props.changeView(a,1)}},l.a.createElement(g.a,null,"Home")),l.a.createElement(u.a,{button:!0,onClick:function(a){e.props.changeView(a,11)}},l.a.createElement(g.a,null,"Problem Info")),l.a.createElement(u.a,{button:!0,onClick:function(a){e.props.changeView(a,12)}},l.a.createElement(g.a,null,"Contest Info")),l.a.createElement(u.a,{button:!0,onClick:function(a){e.props.changeView(a,0)}},l.a.createElement(g.a,null,"Back"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{button:!0,onClick:function(a){e.props.changeView(a,0)}},l.a.createElement(g.a,null,"Home")),l.a.createElement(u.a,{button:!0,onClick:function(a){e.props.changeView(a,2)}},l.a.createElement(g.a,null,"Suggestions")),l.a.createElement(u.a,{button:!0,onClick:function(a){e.props.changeView(a,3)}},l.a.createElement(g.a,null,"About")))}},{key:"render",value:function(){return l.a.createElement(h.a,null,this.op())}}]),t}(n.Component),d=t(231),b=t(232),f=t(233),p=t(234),w=t(235),v=t(236),N=t(237),x=t(238),k=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.handleChange,t=e.handleSubmit;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"text-center text-info"},l.a.createElement("h2",null,"Welcome to Codeforces Analyzer")),l.a.createElement(d.a,null,l.a.createElement(b.a,{className:"text-center"},l.a.createElement(f.a,{className:"text-center justify-content-center"},"Enter your username:"),l.a.createElement("br",null),l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(p.a,{className:"col-6"},l.a.createElement(w.a,{onSubmit:t},l.a.createElement(v.a,null,l.a.createElement(N.a,{type:"text",onChange:a})),l.a.createElement(v.a,{className:"text-center"},l.a.createElement(x.a,{className:"bg-info"},"Enter"))))))))}}]),t}(n.Component),y=t(240),S=t(241),j=t(242),z=t(243),C=t(244),O=t(239);var F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"justify-content-center text-center"},l.a.createElement(O.a,null)))},U=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={cidata:null},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.username;fetch("https://codeforces.com/api/user.rating?handle="+a).then((function(e){return e.json()})).then((function(a){e.setState({cidata:JSON.stringify(a)})})).catch((function(e){console.error(e)}))}},{key:"show",value:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"small",className:"text-center bg-dark text-white"},e.contestId),l.a.createElement(S.a,{size:"small",className:"text-center bg-dark text-white"},e.contestName),l.a.createElement(S.a,{size:"small",className:"text-center bg-dark text-white"},e.rank),l.a.createElement(S.a,{size:"small",className:"text-center bg-dark text-white"},e.oldRating),l.a.createElement(S.a,{size:"small",className:"text-center bg-dark text-white"},e.newRating),l.a.createElement(S.a,{size:"small",className:"text-center bg-dark text-white"},e.newRating-e.oldRating)))}},{key:"render",value:function(){var e=this,a=this.state.cidata;if(null===a)return l.a.createElement(F,null);var t=JSON.parse(a).result,n=t.length,r=0,s=5e3,c=2e5,m=0,i="-",o="-";t.map((function(e){var a=e.newRating-e.oldRating;return a>r&&(r=a,o=e.contestName),a<s&&(s=a,i=e.contestName),e.rank>m&&(m=e.rank),e.rank<c&&(c=e.rank),null}));var u=0;if(n<5)u="Less than 5 contest given";else{for(var g=0;g<5;g++)u+=t[g].rank;u/=5}var h=0;if(n<10)u="Less than 10 contest given";else{for(g=0;g<10;g++)h+=t[g].rank;h/=10}return u=u.toFixed(2),h=h.toFixed(2),t.reverse(),l.a.createElement(d.a,{className:"text-center"},l.a.createElement(b.a,{className:"noscroll",style:{overflowY:"scroll"}},l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(p.a,{className:"col-lg-8 col-md-10"},l.a.createElement(j.a,{style:{borderRadius:"10%"}},l.a.createElement(z.a,null,l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"medium",align:"left",className:"text-white bg-info"},"Number of contests "),l.a.createElement(S.a,{size:"medium",align:"right",className:"text-white bg-dark"},n)),l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"medium",align:"left",className:"text-white bg-info"},"Best Rank"),l.a.createElement(S.a,{size:"medium",align:"right",className:"text-white bg-dark"},c)),l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"medium",align:"left",className:"text-white bg-info"},"Worst Rank"),l.a.createElement(S.a,{size:"medium",align:"right",className:"text-white bg-dark"},m)),l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"medium",align:"left",className:"text-white bg-info"},"Maximum Change"),l.a.createElement(S.a,{size:"medium",align:"right",className:"text-white bg-dark"},r)),l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"medium",align:"left",className:"text-white bg-info"},"Minimum Change"),l.a.createElement(S.a,{size:"medium",align:"right",className:"text-white bg-dark"},s)),l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"medium",align:"left",className:"text-white bg-info"},"Best Contest"),l.a.createElement(S.a,{size:"medium",align:"right",className:"text-white bg-dark"},o)),l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"medium",align:"left",className:"text-white bg-info"},"Worst Contest"),l.a.createElement(S.a,{size:"medium",align:"right",className:"text-white bg-dark"},i)),l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"medium",align:"left",className:"text-white bg-info"},"Avg last 5 contests rank"),l.a.createElement(S.a,{size:"medium",align:"right",className:"text-white bg-dark"},u)),l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"medium",align:"left",className:"text-white bg-info"},"Avg last 10 contests rank"),l.a.createElement(S.a,{size:"medium",align:"right",className:"text-white bg-dark"},h))))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h5",null,"Rating Changes"),l.a.createElement(b.a,{className:"noscroll p-0",style:{maxHeight:"90%",overflowY:"auto"}},l.a.createElement(f.a,null,l.a.createElement(j.a,{stickyHeader:!0},l.a.createElement(C.a,null,l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"medium",align:"center",className:"bg-info text-white"},"Contest Id"),l.a.createElement(S.a,{size:"medium",align:"center",className:"bg-info text-white"},"Name"),l.a.createElement(S.a,{size:"medium",align:"center",className:"bg-info text-white"},"Rank"),l.a.createElement(S.a,{size:"medium",align:"center",className:"bg-info text-white"},"Old Rating"),l.a.createElement(S.a,{size:"medium",align:"center",className:"bg-info text-white"},"New Rating"),l.a.createElement(S.a,{size:"medium",align:"center",className:"bg-info text-white"},"Change"))),l.a.createElement(z.a,null,t.map((function(a){return e.show(a)})))))))}}]),t}(n.Component),R=t(33),B=t(53),V=t(85),M=t.n(V),D=(t(195),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={pidata:null},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.username;fetch("https://codeforces.com/api/user.status?handle="+a).then((function(e){return e.json()})).then((function(a){e.setState({pidata:JSON.stringify(a)})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.pidata;if(null===e)return l.a.createElement(F,null);var a=JSON.parse(e).result,t={},n={},r={},s=null,c=null,m={A:0,B:0,C:0,D:0,E:0,F:0,G:0},i={},o=(new Map,new Map);a.map((function(e){var a=new Date(1970,0,1),l=e.problem.contestId+e.problem.index;console.log(e.problem),o.has(l)||"OK"!==e.verdict||(o.set(l,1),console.log(l),t[e.problem.rating]=t[e.problem.rating]?t[e.problem.rating]+1:1,m[e.problem.index[0]]=m[e.problem.index[0]]?m[e.problem.index[0]]+1:1,n[e.programmingLanguage]=n[e.programmingLanguage]?n[e.programmingLanguage]+1:1,e.problem.tags.map((function(e){return i[e]=i[e]?i[e]+1:1,null}))),a.setSeconds(e.creationTimeSeconds),(null==s||s>e.creationTimeSeconds)&&(s=e.creationTimeSeconds),(null==c||c<e.creationTimeSeconds)&&(c=e.creationTimeSeconds);var u=a.getDate(),g=a.getMonth()+1,h=a.getFullYear()+"-"+g+"-"+u;return r[h]=r[h]?r[h]+1:1,null}));var u={labels:[],datasets:[{barPercentage:.5,barThickness:12,maxBarThickness:20,minBarLength:2,data:[],backgroundColor:[]}]};for(var g in t)"undefined"!==g&&(u.labels.push(g),u.datasets[0].data.push(t[g]),u.datasets[0].backgroundColor.push("#5bc0de"));var h={labels:[],datasets:[{barPercentage:.5,barThickness:12,maxBarThickness:20,minBarLength:2,data:[],backgroundColor:[]}]};for(g in m)h.labels.push(g),h.datasets[0].data.push(m[g]),h.datasets[0].backgroundColor.push("#5bc0de");var E={labels:[],datasets:[{data:[],backgroundColor:[]}]};for(g in i)E.labels.push(g),E.datasets[0].data.push(i[g]),E.datasets[0].backgroundColor.push(Object(B.randomColor)());var w={labels:[],datasets:[{data:[],backgroundColor:[]}]};for(g in n)w.labels.push(g),w.datasets[0].data.push(n[g]),w.datasets[0].backgroundColor.push(Object(B.randomColor)());var v=new Date(1970,0,1),N=new Date(1970,0,1);v.setSeconds(s),N.setSeconds(c);for(var x=[],k=[],O=[],U=v.getFullYear(),V=U,D=N.getFullYear(),T=0;x.push(U),k.push(V),O.push(T),D!==V;)U++,V++,T++;var A=[];for(g in r)A.push({date:g,count:r[g]});return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"text-center"},l.a.createElement("h5",null,"Language Used:"),l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(p.a,{className:"col-md-12 col-sm-12 mt-5",style:{height:"500px"}},l.a.createElement(R.Pie,{data:{labels:w.labels,datasets:w.datasets},options:{responsive:!0,maintainAspectRatio:!1,legend:{align:"start",position:"right",labels:{boxWidth:10,fontSize:12,padding:5,usePointStyle:!0,pointStyle:"circle"}}}}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h5",null,"Tags solved:"),l.a.createElement("br",null),l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement("br",null),l.a.createElement(p.a,{className:"col-md-8 col-sm-8 noscroll",style:{maxHeight:"400px",overflow:"scroll"}},l.a.createElement(j.a,{stickyHeader:!0},l.a.createElement(C.a,null,l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"small",className:"bg-info text-white"},"Tags"),l.a.createElement(S.a,{size:"small",className:"bg-info text-white"},"Questions"))),l.a.createElement(z.a,null,Object.keys(i).map((function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{className:"bg-dark"},l.a.createElement(S.a,{size:"small",className:"text-white"},e),l.a.createElement(S.a,{size:"small",className:"text-white"},i[e])))})))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h5",null,"Rating Based Questions Solved:"),l.a.createElement("br",null),l.a.createElement(f.a,{className:"text-center justify-content-center noscroll"},l.a.createElement("br",null),l.a.createElement("div",{className:"canva noscroll",style:{overflow:"scroll"}},l.a.createElement(R.Bar,{data:{labels:u.labels,datasets:u.datasets},options:{maintainAspectRatio:!1,responsive:!0,legend:{display:!1}}}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h5",null,"Indexing Based Qustions Solved:"),l.a.createElement("br",null),l.a.createElement(f.a,{className:"text-center justify-content-center noscroll"},l.a.createElement("br",null),l.a.createElement("div",{className:"canva noscroll",style:{overflow:"scroll"}},l.a.createElement(R.Bar,{data:{labels:h.labels,datasets:h.datasets},options:{maintainAspectRatio:!1,responsive:!0,legend:{display:!1}}}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h5",null,"Tags solved:"),l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(p.a,{className:"col-md-12 col-sm-12 mt-5",style:{height:"500px"}},l.a.createElement(R.Pie,{data:{labels:E.labels,datasets:E.datasets},options:{responsive:!0,maintainAspectRatio:!1,legend:{align:"start",position:"right",labels:{boxWidth:10,fontSize:10,padding:5,usePointStyle:!0,pointStyle:"circle"}}}}))),l.a.createElement("br",null)),l.a.createElement(d.a,{className:"text-center justify-content-center"},l.a.createElement("h5",null,"Submission Heatmap"),l.a.createElement("br",null),O.map((function(e){var a=x[e]+"-01-01",t=k[e]+"-12-31";return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{className:"bg-white p-3  noscroll",style:{overflow:"auto"}},l.a.createElement("h6",null,x[e]),l.a.createElement(M.a,{startDate:a,endDate:t,values:A,showOutofRangeDay:!1,classForValue:function(e){return e?e.count>0&&e.count<=5?"color-scale-1":e.count>5&&e.count<=15?"color-scale-2":e.count>15&&e.count<=30?"color-scale-3":"color-scale-4":"color-empty"}})),l.a.createElement("br",null),l.a.createElement("br",null))}))))}}]),t}(n.Component)),T=t(245),A=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={cfdata:null,pidata:null},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.username,t="https://codeforces.com/api/user.info?handles="+a;fetch(t).then((function(e){return e.json()})).then((function(a){"OK"===a.status&&e.props.gotUserinfo(),e.setState({cfdata:a})})).catch((function(e){console.error(e)})),t="https://codeforces.com/api/user.status?handle="+a,fetch(t).then((function(e){return e.json()})).then((function(a){e.setState({pidata:JSON.stringify(a)})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.cfdata,a=this.state.pidata;if(null===e||null===a)return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5"},l.a.createElement(F,null)));if("OK"===e.status){var t="http://"+e.result[0].avatar,n=null,r=new Map,s=new Map,c=JSON.parse(a).result;c.map((function(e){var a=e.problem.contestId+e.problem.index;return r.has(a)||r.set(a,1),s.has(a)||"OK"!==e.verdict||s.set(a,1),null}));var m=c.length;switch(m=(m/=s.size).toFixed(2),this.props.curView){case 1:n=l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(p.a,{className:"col-md-8"},l.a.createElement(j.a,null,l.a.createElement(z.a,null,l.a.createElement(y.a,null,l.a.createElement(S.a,{className:"bg-info text-white"},"Tried "),l.a.createElement(S.a,{className:"bg-info text-white"},r.size)),l.a.createElement(y.a,null,l.a.createElement(S.a,{className:"bg-info text-white"},"Solved "),l.a.createElement(S.a,{className:"bg-info text-white"},s.size)),l.a.createElement(y.a,null,l.a.createElement(S.a,{className:"bg-info text-white"},"Average attemps "),l.a.createElement(S.a,{className:"bg-info text-white"},m))))))));break;case 11:n=l.a.createElement(D,{username:this.props.username});break;case 12:n=l.a.createElement(U,{username:this.props.username});break;case 0:this.props.noUser();break;default:n=l.a.createElement(l.a.Fragment,null)}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"bg-info"},l.a.createElement(b.a,{className:"bg-info"},l.a.createElement(d.a,{className:"justify-content-center bg-info"},l.a.createElement(f.a,null,l.a.createElement(p.a,{className:"col-6"},l.a.createElement(j.a,{component:T.a},l.a.createElement(z.a,null,l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"small",className:"text-white bg-dark"},"Handle"),l.a.createElement(S.a,{size:"small"},e.result[0].handle)),l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"small",className:"text-white bg-dark"},"Rank"),l.a.createElement(S.a,{size:"small"},e.result[0].rank)),l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"small",className:"text-white bg-dark"},"Max Rank"),l.a.createElement(S.a,{size:"small"},e.result[0].maxRank)),l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"small",className:"text-white bg-dark"},"Rating"),l.a.createElement(S.a,{size:"small"},e.result[0].rating)),l.a.createElement(y.a,null,l.a.createElement(S.a,{size:"small",className:"text-white bg-dark"},"Max Rating"),l.a.createElement(S.a,{size:"small"},e.result[0].maxRating))))),l.a.createElement(p.a,{className:"col-6 text-center align-self-center"},l.a.createElement("img",{src:t,alt:"user-image",height:"150",width:"150"})))))),l.a.createElement("div",{className:""},n))}return this.props.wrongUser(),this.props.noUser(),null}}]),t}(n.Component),I=t(27),J=t(54),H=t.n(J),L=t(246),W=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleSubmit=function(e){var a=n.state,t={author:a.author,body:a.body};H.a.post("/suggestions",t).then((function(e){console.log(e)}))},n.handleChangeSug=function(e){n.setState({body:e.target.value})},n.handleChangeName=function(e){n.setState({author:e.target.value})},n.state={author:"",body:"",suggestions:null},n.handleChangeName=n.handleChangeName.bind(Object(I.a)(n)),n.handleChangeSug=n.handleChangeSug.bind(Object(I.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(I.a)(n)),n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;H.a.get("/suggestions").then((function(a){e.setState({suggestions:JSON.stringify(a)})}))}},{key:"render",value:function(){var e;null===this.state.suggestions?e=l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement(F,null)):e=JSON.parse(this.state.suggestions).data.map((function(e){return l.a.createElement("div",{style:{padding:"10px",borderBottom:"1px solid black"}},l.a.createElement("p",{style:{marginBottom:"0px"}},l.a.createElement("span",{className:"font-weight-bold"},e.author),l.a.createElement("span",{className:"font-weight-light",style:{fontSize:"12px"}}," "," "," ","(",e.date,")")),l.a.createElement("p",{style:{marginBottom:"0px"}},e.body))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"mb-0"},l.a.createElement(b.a,{style:{maxWidth:"600px"}},l.a.createElement(w.a,{onSubmit:this.handleSubmit},l.a.createElement(v.a,null,l.a.createElement(L.a,null,"Name"),l.a.createElement(N.a,{type:"text",size:"sm",onChange:this.handleChangeName})),l.a.createElement(v.a,null,l.a.createElement(L.a,null,"Suggestion"),l.a.createElement(N.a,{type:"textarea",size:"sm",onChange:this.handleChangeSug})),l.a.createElement(v.a,null,l.a.createElement(x.a,null,"Send"))))),l.a.createElement(d.a,null,l.a.createElement(b.a,null,l.a.createElement("div",{className:"text-info text-center pb-2",style:{borderBottom:"1px solid black"}},l.a.createElement("h4",null,"Suggestions")),e)))}}]),t}(n.Component),P=t(86),Y=t.n(P),K=t(87),Q=t.n(K);var G=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement("div",{className:"justify-content-center text-center mt-5"},l.a.createElement("h3",null,"Made by Hipranshu")),l.a.createElement(b.a,{className:"text-center"},"This is made by me to help you in any way it can",l.a.createElement("br",null),"There is no compare between users feature since I dont like it! Maybe in future :-) ",l.a.createElement("br",null),"Feel free to put up ur suggestions in the Suggestions page",l.a.createElement("br",null),"Connect to me if you want to do some web project or microservices project with me :-) ",l.a.createElement("br",null))),l.a.createElement(d.a,null,l.a.createElement("div",{className:"justify-content-center text-center"},l.a.createElement(x.a,{className:"bg-info"},l.a.createElement("a",{href:"https://www.instagram.com/hipsi_ig/",style:{textDecoration:"None",color:"white"}},l.a.createElement(Y.a,null),l.a.createElement("span",null," Instagram"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,{className:"bg-info"},l.a.createElement("a",{href:"https://www.linkedin.com/in/hipranshu-bargurjer-493160171/",style:{textDecoration:"None",color:"white"}},l.a.createElement(Q.a,null),l.a.createElement("span",null," LinkedIn"))))))};var $=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{className:"text-center text-danger"},"Wrong Username or Server Busy!"))},_=t(247),q=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={username:"",gotUsername:!1,gotUser:!1,curView:0,wrongUser:!1},e.handleChange=function(a){e.setState({username:a.target.value})},e.handleSubmit=function(a){var t=e.state.username;e.setState({username:t,gotUsername:!0}),a.preventDefault()},e.noUser=function(){e.setState({username:"",gotUsername:!1,gotUser:!1})},e.gotUserinfo=function(a){e.setState({gotUser:!0,curView:1})},e.changeView=function(a,t){e.setState({curView:t})},e.wrongUser=function(){e.setState({wrongUser:!0})},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state,a=e.username,t=null,n=null;if(e.gotUsername)t=l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{username:a,noUser:this.noUser,gotUserinfo:this.gotUserinfo,curView:this.state.curView,wrongUser:this.wrongUser}));else switch(n=this.state.wrongUser?l.a.createElement($,null):l.a.createElement(l.a.Fragment,null),this.state.curView){case 0:t=l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{username:a,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),n);break;case 2:t=l.a.createElement(l.a.Fragment,null,l.a.createElement(W,null));break;case 3:t=l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null));break;default:t=l.a.createElement(l.a.Fragment,null)}return l.a.createElement(_.a,{container:!0,className:"noscroll"},l.a.createElement(_.a,{item:!0,xs:3,md:2,p:0},l.a.createElement(E,{expand:this.state.gotUser,changeView:this.changeView})),l.a.createElement(_.a,{item:!0,xs:9,md:10,style:{backgroundColor:"#e9ecef",height:"100vh",overflow:"scroll"},className:"noscroll"},t))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(213);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,a,t){},90:function(e,a,t){e.exports=t(214)},95:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.c7fcbc6e.chunk.js.map