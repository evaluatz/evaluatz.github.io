(window["webpackJsonpevaluatz-page"]=window["webpackJsonpevaluatz-page"]||[]).push([[8],{72:function(_,e,a){},79:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _Users_GNG_Projects_Evaluatz_page_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(32),_Users_GNG_Projects_Evaluatz_page_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(33),_Users_GNG_Projects_Evaluatz_page_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(35),_Users_GNG_Projects_Evaluatz_page_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(34),_Users_GNG_Projects_Evaluatz_page_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(37),_Users_GNG_Projects_Evaluatz_page_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(36),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_login_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(72),_login_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_login_css__WEBPACK_IMPORTED_MODULE_7__),jquery__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(39),jquery__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__),react_redux__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(13),react_cookie__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(14),_actions_user__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(44),_actions_navigation__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(42),Login=function(_React$Component){function Login(_){var e;Object(_Users_GNG_Projects_Evaluatz_page_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Login),(e=Object(_Users_GNG_Projects_Evaluatz_page_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Users_GNG_Projects_Evaluatz_page_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Login).call(this,_))).closeLogin=function(){jquery__WEBPACK_IMPORTED_MODULE_8___default()(".login-mask").removeClass("bounceInDown"),jquery__WEBPACK_IMPORTED_MODULE_8___default()(".login-mask").addClass("bounceOutUp"),jquery__WEBPACK_IMPORTED_MODULE_8___default()(".login-mask").addClass("animated"),setTimeout((function(){return e.props.dispatch(Object(_actions_navigation__WEBPACK_IMPORTED_MODULE_12__.e)())}),1e3)},e.changeValue=function(){e.isReg?(jquery__WEBPACK_IMPORTED_MODULE_8___default()(".register-info-box").fadeOut(),jquery__WEBPACK_IMPORTED_MODULE_8___default()(".login-info-box").fadeIn(),jquery__WEBPACK_IMPORTED_MODULE_8___default()(".white-panel").addClass("right-log"),jquery__WEBPACK_IMPORTED_MODULE_8___default()(".register-show").addClass("show-log-panel"),jquery__WEBPACK_IMPORTED_MODULE_8___default()(".login-show").removeClass("show-log-panel")):(jquery__WEBPACK_IMPORTED_MODULE_8___default()(".register-info-box").fadeIn(),jquery__WEBPACK_IMPORTED_MODULE_8___default()(".login-info-box").fadeOut(),jquery__WEBPACK_IMPORTED_MODULE_8___default()(".white-panel").removeClass("right-log"),jquery__WEBPACK_IMPORTED_MODULE_8___default()(".login-show").addClass("show-log-panel"),jquery__WEBPACK_IMPORTED_MODULE_8___default()(".register-show").removeClass("show-log-panel")),e.isReg=!e.isReg},e.doLogin=function(_){_.preventDefault();var a=jquery__WEBPACK_IMPORTED_MODULE_8___default()("#login_email").val(),t=jquery__WEBPACK_IMPORTED_MODULE_8___default()("#login_password").val();e.props.dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_11__.a)(a,t,(function(){e.props.dispatch(Object(_actions_navigation__WEBPACK_IMPORTED_MODULE_12__.b)())}),(function(){e.cookies.remove("token",{path:"/"})})))},e.doRegister=function(_){_.preventDefault();var a=jquery__WEBPACK_IMPORTED_MODULE_8___default()("#register_firstname").val(),t=jquery__WEBPACK_IMPORTED_MODULE_8___default()("#register_lastname").val(),r=jquery__WEBPACK_IMPORTED_MODULE_8___default()("#register_username").val(),l=jquery__WEBPACK_IMPORTED_MODULE_8___default()("#register_email").val(),s=jquery__WEBPACK_IMPORTED_MODULE_8___default()("#register_password").val(),o=jquery__WEBPACK_IMPORTED_MODULE_8___default()("#register_password_c").val();if(e.validateField("#register_firstname",a,["isRequired"])&e.validateField("#register_username",r,["isRequired"])&e.validateField("#register_email",l,["isRequired","isEmail"])&e.validateField("#register_password",s,["isRequired"])&e.validateField("#register_password_c",o,["isRequired"])){jquery__WEBPACK_IMPORTED_MODULE_8___default()("#register_btn").prop("disabled",!0),jquery__WEBPACK_IMPORTED_MODULE_8___default()(".evaluatz_mask_load").removeClass("hidden");var i="".concat(e.url,"/signup/classic?firstname=").concat(a,"&lastname=").concat(t,"&username=").concat(r,"&email=").concat(l,"&password=").concat(s);jquery__WEBPACK_IMPORTED_MODULE_8___default.a.ajax(i).done((function(a){try{jquery__WEBPACK_IMPORTED_MODULE_8___default()("#login_email").val(r),jquery__WEBPACK_IMPORTED_MODULE_8___default()("#login_password").val(s),e.doLogin(_)}catch(t){console.log(t)}})).fail((function(_){alert(_.statusText)})).always((function(){jquery__WEBPACK_IMPORTED_MODULE_8___default()(".evaluatz_mask_load").addClass("hidden"),jquery__WEBPACK_IMPORTED_MODULE_8___default()("#register_btn").prop("disabled",!1)}))}};var a=_.cookies;return e.cookies=a,e.isReg=!0,e.url="https://api.evaluatz.com",e.doLogin=e.doLogin.bind(Object(_Users_GNG_Projects_Evaluatz_page_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.doRegister=e.doRegister.bind(Object(_Users_GNG_Projects_Evaluatz_page_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e}return Object(_Users_GNG_Projects_Evaluatz_page_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(Login,_React$Component),Object(_Users_GNG_Projects_Evaluatz_page_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Login,[{key:"componentDidMount",value:function(){jquery__WEBPACK_IMPORTED_MODULE_8___default()(".login-info-box").fadeOut(),jquery__WEBPACK_IMPORTED_MODULE_8___default()(".login-show").addClass("show-log-panel"),this.isReg=!0}},{key:"validateField",value:function validateField(fieldName,value,methods){for(var i=0;i<methods.length;i++){var error=eval("this."+methods[i]+"(value)");if(error)return jquery__WEBPACK_IMPORTED_MODULE_8___default()(fieldName).addClass("evaluatz_input_error"),jquery__WEBPACK_IMPORTED_MODULE_8___default()(fieldName+"_error").removeClass("d-none"),jquery__WEBPACK_IMPORTED_MODULE_8___default()(fieldName+"_error").html(error),!1}return jquery__WEBPACK_IMPORTED_MODULE_8___default()(fieldName).removeClass("evaluatz_input_error"),jquery__WEBPACK_IMPORTED_MODULE_8___default()(fieldName+"_error").addClass("d-none"),!0}},{key:"isRequired",value:function(_){return _.length>0?"":"Value is required"}},{key:"isEmail",value:function(_){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(_)?"":"Invalid email address"}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"login-mask bounceInDown animated faster"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"login-mask-close",onClick:this.closeLogin},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,"X")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"evaluatz_login_container"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img",{alt:"",src:"/logox70.png"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"evaluatz_login_inner_container text-white"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a",{className:"nav-item nav-link active",id:"nav-home-tab","data-toggle":"tab",href:"#nav-login",role:"tab","aria-controls":"nav-login","aria-selected":"true"},"Login"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a",{className:"nav-item nav-link",id:"nav-profile-tab","data-toggle":"tab",href:"#nav-register",role:"tab","aria-controls":"nav-register","aria-selected":"false"},"Register")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"tab-content",id:"nav-tabContent"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"tab-pane fade show active",id:"nav-login",role:"tabpanel","aria-labelledby":"nav-home-tab"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form",{action:"/",onSubmit:this.doLogin,className:"evaluatz_form_login"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{type:"text",className:"form-control",id:"login_email","aria-describedby":"emailHelp",placeholder:"Enter email"})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{type:"password",className:"form-control",id:"login_password",placeholder:"Password"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small",{id:"login_error",className:"evaluatz_error_text mb-2"},this.props.error)),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{type:"submit",id:"login_btn",className:"btn btn-secondary evaluatz_login_submit"},"Login"))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"tab-pane fade",id:"nav-register",role:"tabpanel","aria-labelledby":"nav-profile-tab"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form",{action:"/",onSubmit:this.doRegister,className:"evaluatz_form_register "},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{type:"text",className:"form-control",id:"register_firstname","aria-describedby":"emailHelp",placeholder:"First name","data-toggle":"tooltip","data-placement":"right",title:"Tooltip on right"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small",{id:"register_firstname_error",className:"evaluatz_error_text d-none"})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{type:"text",className:"form-control",id:"register_lastname","aria-describedby":"emailHelp",placeholder:"Last name"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small",{id:"register_lastname_error",className:"evaluatz_error_text d-none"})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{type:"email",className:"form-control",id:"register_email","aria-describedby":"emailHelp",placeholder:"Enter email"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small",{id:"register_email_error",className:"evaluatz_error_text d-none"})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{type:"text",className:"form-control",id:"register_username","aria-describedby":"emailHelp",placeholder:"Username"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small",{id:"register_username_error",className:"evaluatz_error_text d-none"})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{type:"password",className:"form-control",id:"register_password",placeholder:"Password"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small",{id:"register_password_error",className:"evaluatz_error_text d-none"})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{type:"password",className:"form-control",id:"register_password_c",placeholder:"Confirm Password"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small",{id:"register_password_c_error",className:"evaluatz_error_text d-none"})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{type:"submit",id:"register_btn",className:"btn btn-secondary evaluatz_login_submit"},"Register")))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"evaluatz_login_social_container"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a",{href:"#",className:"evaluatz_login_social_container_item text-white evaluatz_btn-facebook","data-toggle":"tooltip","data-placement":"top",title:"Facebook"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i",{className:"fa fa-facebook fa-2x"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{className:"hidden-xs"})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a",{href:this.url+"/auth/getGoogleAuthLink",className:"evaluatz_login_social_container_item text-white evaluatz_btn-google-plus","data-toggle":"tooltip","data-placement":"top",title:"Google Plus"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i",{className:"fa fa-google-plus fa-2x"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{className:"hidden-xs"})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a",{href:"#",className:"evaluatz_login_social_container_item text-white evaluatz_btn-github","data-toggle":"tooltip","data-placement":"top",title:"GitHub"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i",{className:"fa fa-github fa-2x"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{className:"hidden-xs"}))))))}}]),Login}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component),mapStateToProps=function(_){return{isShowLogin:_.navigation.isShowLogin,error:_.user.error}};__webpack_exports__.default=Object(react_redux__WEBPACK_IMPORTED_MODULE_9__.b)(mapStateToProps)(Object(react_cookie__WEBPACK_IMPORTED_MODULE_10__.b)(Login))}}]);
//# sourceMappingURL=8.e2294fc3.chunk.js.map