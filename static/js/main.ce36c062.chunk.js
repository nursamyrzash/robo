(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=(n(17),n(3)),l=n(4),s=n(6),i=n(5),u=n(7),h=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},d=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},b=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},f=(n(19),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(i.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(m,{robots:a}))):r.a.createElement("h1",null,"Loading")}}]),t}(a.Component));n(21);Object(c.createRoot)(document.getElementById("root")).render(r.a.createElement(f,null))},8:function(e,t,n){e.exports=n(23)}},[[8,2,1]]]);
//# sourceMappingURL=main.ce36c062.chunk.js.map