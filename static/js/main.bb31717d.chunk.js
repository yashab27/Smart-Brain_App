(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[0],{328:function(e,t,n){},330:function(e,t,n){},331:function(e,t,n){},333:function(e,t,n){"use strict";n.r(t);var a=n(8),s=n.n(a),i=n(78),c=n.n(i),o=(n(85),n(20)),r=n(21),l=n(23),d=n(22),h=(n(86),n(79)),b=n.n(h),u=(n(328),n(2)),m=function(e){var t=e.imageUrl,n=e.box;return Object(u.jsx)("div",{className:"center ma",children:Object(u.jsxs)("div",{className:"absolute mt2",children:[Object(u.jsx)("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),Object(u.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})},p=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(u.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(u.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})}):Object(u.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(u.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(u.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})},j=n(80),g=n.p+"static/media/brain.e943b488.jpg",f=(n(330),function(){return Object(u.jsx)("div",{className:"ma4 mt0",children:Object(u.jsx)(j.a,{className:"Tilt-img br-2 shadow-5",style:{max:55,height:150,width:150},children:Object(u.jsx)("div",{className:"Tilt-inner pa3",children:Object(u.jsx)("img",{style:{paddingTop:"5px"},src:g,alt:"logo"})})})})}),O=function(e){var t=e.name,n=e.entries;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"white f3",children:"".concat(t,",your current enrty count is..")}),Object(u.jsx)("div",{className:"white f1",children:n})]})},x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://warm-woodland-35440.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(u.jsx)("article",{className:"br3 ba shadow-5 b--black-10 mv4 w-100 1-50-m w-25-l mw6 center",children:Object(u.jsx)("main",{className:"pa4 black-80",children:Object(u.jsxs)("div",{className:"measure",children:[Object(u.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(u.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(u.jsxs)("div",{className:"mv3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(u.jsx)("div",{className:"lh-copy mt3",children:Object(u.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db",children:"Register"})})]})})})}}]),n}(s.a.Component),w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("https://warm-woodland-35440.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsx)("article",{className:"br3 ba shadow-5 b--black-10 mv4 w-100 1-50-m w-25-l mw6 center",children:Object(u.jsx)("main",{className:"pa4 black-80",children:Object(u.jsxs)("div",{className:"measure",children:[Object(u.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(u.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(u.jsxs)("div",{className:"mv3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(s.a.Component),v=(n(331),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"f3",children:"This brain can recognize faces,put an image url and give it a try.THANK YOU!"}),Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(u.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),Object(u.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),N={particles:{number:{value:300,density:{enable:!0,value_area:800}}}},C={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFacelocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFacebox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://warm-woodland-35440.herokuapp.com/imageUrl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://warm-woodland-35440.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFacebox(e.calculateFacelocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(C):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=C,e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,a=e.route,s=e.box;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b.a,{className:"particles",params:N}),Object(u.jsx)(p,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{}),Object(u.jsx)(O,{name:this.state.user.name,entries:this.state.user.entries}),Object(u.jsx)(v,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(u.jsx)(m,{box:s,imageUrl:n})]}):"signin"===a?Object(u.jsx)(x,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(u.jsx)(w,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,334)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};n(332);c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),S()},85:function(e,t,n){},86:function(e,t,n){}},[[333,1,2]]]);
//# sourceMappingURL=main.bb31717d.chunk.js.map