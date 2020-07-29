(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{341:function(module,exports,__webpack_require__){__webpack_require__(342),__webpack_require__(492),module.exports=__webpack_require__(493)},408:function(module,exports){},493:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(307);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(684)],module)}.call(this,__webpack_require__(494)(module))},684:function(module,exports,__webpack_require__){var map={"./Tree.docs.stories.js":885};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=684},885:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SimpleTree",(function(){return Tree_docs_stories_SimpleTree}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),slicedToArray=__webpack_require__(312),default_highlight=__webpack_require__(942),docco=__webpack_require__(927),Card=__webpack_require__(923),Container=__webpack_require__(924),makeStyles=__webpack_require__(921),Table=__webpack_require__(930),TableBody=__webpack_require__(934),TableCell=__webpack_require__(933),TableContainer=__webpack_require__(929),TableHead=__webpack_require__(931),TableRow=__webpack_require__(932),Typography=__webpack_require__(928),IconButton=__webpack_require__(941),Code=__webpack_require__(309),Code_default=__webpack_require__.n(Code),Grid=__webpack_require__(940),Timeline=__webpack_require__(935),TimelineItem=__webpack_require__(943),TimelineSeparator=__webpack_require__(936),TimelineConnector=__webpack_require__(938),TimelineContent=__webpack_require__(939),TimelineDot=__webpack_require__(937),AppBar=__webpack_require__(925),Toolbar=__webpack_require__(926),useStyles=Object(makeStyles.a)({cardV:{minWidth:275,paddingTop:20,paddingBottom:20},card:{minWidth:275,backgroundColor:"#f8f8ff"},codedisplay:{display:"none"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},table:{minWidth:650},appbar:{},desc:{marginTop:50,marginBottom:50},viewer:{overflowX:"scroll",overflowY:"scroll",maxHeight:"600px",scrollbarWidth:"none"}});function Viewer(props){var data=props.data,classes=useStyles();return react_default.a.createElement(Card.a,{className:[classes.cardV,classes.viewer],variant:"outlined"},react_default.a.createElement(Container.a,null,data))}function Utils(props){var code=props.code,classes=useStyles(),_useState=Object(react.useState)(!1),_useState2=Object(slicedToArray.a)(_useState,2),togcode=_useState2[0],settogcode=_useState2[1];return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(AppBar.a,{position:"static",className:classes.appbar,color:"transparent"},react_default.a.createElement(Toolbar.a,{variant:"dense"},react_default.a.createElement(IconButton.a,{edge:"start",color:"inherit","aria-label":"code"},react_default.a.createElement(Code_default.a,{onClick:function onClick(){return settogcode(!togcode)},color:"primary"})))),togcode?react_default.a.createElement(Card.a,{className:classes.card,variant:"outlined"},react_default.a.createElement(default_highlight.a,{language:"javascript",style:docco.a},code)):null)}function Description(props){var data=props.data,classes=useStyles();return react_default.a.createElement("div",{className:classes.desc},react_default.a.createElement(Typography.a,{variant:"body1",gutterBottom:!0},data))}function PropTable(props){var data=props.data,classes=useStyles();return react_default.a.createElement(TableContainer.a,null,react_default.a.createElement(Table.a,{className:classes.table,"aria-label":"simple table"},react_default.a.createElement(TableHead.a,null,react_default.a.createElement(TableRow.a,null,react_default.a.createElement(TableCell.a,null,"Name"),react_default.a.createElement(TableCell.a,null,"Type"),react_default.a.createElement(TableCell.a,null,"Description"))),react_default.a.createElement(TableBody.a,null,data.map((function(row){return react_default.a.createElement(TableRow.a,{key:row.name},react_default.a.createElement(TableCell.a,{component:"th",scope:"row"},row[0]),react_default.a.createElement(TableCell.a,null,row[1]),react_default.a.createElement(TableCell.a,null,row[2]))})))))}function RightNav(){return react_default.a.createElement(Timeline.a,{align:"left"},react_default.a.createElement(TimelineItem.a,null,react_default.a.createElement(TimelineSeparator.a,null,react_default.a.createElement(TimelineDot.a,null),react_default.a.createElement(TimelineConnector.a,null)),react_default.a.createElement(TimelineContent.a,null,react_default.a.createElement("div",{style:{width:"200px"}},"Demo"))),react_default.a.createElement(TimelineItem.a,null,react_default.a.createElement(TimelineSeparator.a,null,react_default.a.createElement(TimelineDot.a,null),react_default.a.createElement(TimelineConnector.a,null)),react_default.a.createElement(TimelineContent.a,null,react_default.a.createElement("div",{style:{width:"200px"}},"Code"))),react_default.a.createElement(TimelineItem.a,null,react_default.a.createElement(TimelineSeparator.a,null,react_default.a.createElement(TimelineDot.a,null),react_default.a.createElement(TimelineConnector.a,null)),react_default.a.createElement(TimelineContent.a,null,react_default.a.createElement("div",{style:{width:"200px"}},"Description"))),react_default.a.createElement(TimelineItem.a,null,react_default.a.createElement(TimelineSeparator.a,null,react_default.a.createElement(TimelineDot.a,null)),react_default.a.createElement(TimelineContent.a,null,react_default.a.createElement("div",{style:{width:"200px"}},"Props Table"))))}function Docify(props){var name=props.name,View=props.View,description=props.description,proptable=props.proptable,code=props.code;return react_default.a.createElement(Grid.a,{container:!0,spacing:2},react_default.a.createElement(Grid.a,{item:!0,xs:9},react_default.a.createElement(Container.a,{maxWidth:"md"},react_default.a.createElement(Typography.a,{variant:"h2",component:"h3",gutterBottom:!0},name),react_default.a.createElement(Viewer,{data:View}),react_default.a.createElement(Utils,{code:code}),react_default.a.createElement(Description,{data:description}),react_default.a.createElement(PropTable,{data:proptable}))),react_default.a.createElement(Grid.a,{item:!0,xs:3},react_default.a.createElement("div",{style:{position:"fixed"}},react_default.a.createElement(RightNav,null))))}Docify.__docgenInfo={description:"",methods:[],displayName:"Docify"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Docify.js"]={name:"Docify",docgenInfo:Docify.__docgenInfo,path:"src/stories/Docify.js"});var d3=__webpack_require__(65);function maxLength(d){return d.data.length+(d.children?d3.d(d.children,maxLength):0)}function Tree(props){var data=props.data,clickName=props.clickName,getConfig=props.getConfig,showBranchLength=props.showBranchLength,ref=Object(react.useRef)(),tree=function parse(s){for(var ancestors=[],tree={},tokens=s.split(/\s*(;|\(|\)|,|:)\s*/),i=0;i<tokens.length;i++){var token=tokens[i],subtree={};switch(token){case"(":tree.branchset=[subtree],ancestors.push(tree),tree=subtree;break;case",":ancestors[ancestors.length-1].branchset.push(subtree),tree=subtree;break;case")":tree=ancestors.pop();break;case":":break;default:var x=tokens[i-1];")"===x||"("===x||","===x?tree.name=token:":"===x&&(tree.length=parseFloat(token))}}return tree}(data),width=window.innerWidth/2-240,leafNodes=function CountLeafNodes(tree){return tree.branchset?tree.branchset.map((function(child){return CountLeafNodes(child)})).reduce((function(a,b){return a+b})):1}(tree);return Object(react.useEffect)((function(){var cluster=d3.b().size([20*leafNodes,width]).separation((function(a,b){return 1})),root=d3.c(tree,(function(d){return d.branchset})).sum((function(d){return d.branchset?0:1})).sort((function(a,b){return a.value-b.value||d3.a(a.data.length,b.data.length)}));cluster(root),function setBrLength(d,y0,k){d.radius=(y0+=Math.max(d.data.length,0))*k,d.children&&d.children.forEach((function(d){setBrLength(d,y0,k)}))}(root,root.data.length=0,width/maxLength(root)),ref.current.innerHTML="";var svg=d3.e(ref.current);function linkStep(sx,sy,tx,ty){return"M".concat(sy," ").concat(sx,"V").concat(tx,"H").concat(ty)}function mouseovered(active){return function(d){d3.e(this).classed("label--active",active)}}svg.append("g").attr("fill","none").attr("stroke","#000").selectAll("path").data(root.links()).join("path").attr("d",showBranchLength?function linkVariable(d){return linkStep(d.source.x,d.source.radius,d.target.x,d.target.radius)}:function linkConstant(d){return linkStep(d.source.x,d.source.y,d.target.x,d.target.y)}),svg.append("g").attr("fill","none").attr("stroke","#000").attr("stroke-opacity","0.2").selectAll("path").data(root.links().filter((function(d){return!d.target.children}))).enter().append("path").each((function(d){d.target.linkExtensionNode=this})).attr("d",showBranchLength?function linkExtensionVariable(d){return linkStep(d.target.x,d.target.radius,d.target.x,d.target.y)}:function linkExtensionConstant(d){return linkStep(d.target.x,d.target.y,d.target.x,d.target.y)}),svg.append("g").selectAll("text").data(root.leaves()).join("text").attr("x",(function(d){return d.y+5})).attr("y",(function(d){return d.x+4})).text((function(d){return d.data.name.replace(/_/g," ")})).on("mouseover",mouseovered(!0)).on("mouseout",mouseovered(!1)).on("click",(function(d){clickName(d)})),function prepareConfig(root,treeheight,storechFn){var data={},leafdata=[];root.leaves().forEach((function(d){leafdata.push({name:d.data.name,x:d.x,y:d.y})})),data.leafloc=leafdata,data.treeheight=treeheight,storechFn(data)}(root,20*leafNodes,getConfig)}),[data,clickName,getConfig,showBranchLength,width,leafNodes,tree]),react_default.a.createElement("svg",{width:width+210,height:20*leafNodes},react_default.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n            .link--active {\n                stroke: #000 !important;\n                stroke-width: 1.5px;\n            }\n            .label--active {\n                font-weight: bold;\n            }"}}),react_default.a.createElement("g",{ref:ref}))}Tree.defaultProps={data:"",clickName:null,getChildLoc:null,ChangebranchLengthID:"notpossible"},Tree.__docgenInfo={description:"",methods:[],displayName:"Tree",props:{data:{defaultValue:{value:"''",computed:!1},required:!1},clickName:{defaultValue:{value:"null",computed:!1},required:!1},getChildLoc:{defaultValue:{value:"null",computed:!1},required:!1},ChangebranchLengthID:{defaultValue:{value:"'notpossible'",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tree.js"]={name:"Tree",docgenInfo:Tree.__docgenInfo,path:"src/components/Tree.js"});__webpack_exports__.default={title:"Phylo-React overview"};var Tree_docs_stories_Stree=function Stree(){return react_default.a.createElement(Tree,{data:"(((((J03294.1/2297-2476:0.16693,M93419.1/332-511:0.18169):0.06995,(AP001513.1/19957-19775:0.16586,AP004598.1/253855-254037:0.19409):0.05349):0.04909,AP001517.1/215539-215348:0.28114):0.06663,((((Z99121.2/6040-5861:0.30380,AE013149.1/9167-9356:0.25995):0.04587,((AE017026.1/274819-274638:0.01762,AE017000.1/234265-234084:0.01905):0.01984,AE017267.1/95018-94836:0.04107):0.19441):0.02141,(((((AE017007.1/287994-288186:0.00973,AE017274.1/20257-20449:0.00470):0.01300,AE017033.1/217118-217310:0.00158):0.22337,AE007843.1/1920-1745:0.20784):0.07029,AP003194.2/187997-187828:0.25172):0.02557,(((AF269536.1/680-500:0.29465,AF270308.1/2156-2331:-0.05059):0.14883,AP004827.1/261938-261763:0.06197):0.26443,(AE015937.1/285886-286061:0.25621,AP003189.2/159236-159062:0.17616):0.03395):0.04009):0.00883):0.03746,(((((AE017003.1/180245-180059:0.01473,(AE017270.1/85304-85118:0.00193,AE017029.1/246029-245843:0.00525):0.01455):0.18162,((AL596166.1/112469-112272:0.02169,AL591976.1/186683-186486:0.01513):0.25227,AE016947.1/224792-224618:0.42485):0.02631):0.04069,(AE017028.1/200117-200298:0.00242,AE017269.1/77627-77808:0.00478):0.22792):0.01676,AP001512.1/119931-120105:0.32335):0.02583,AL935254.1/261916-262097:0.41357):0.01606):0.00435):0.02849,(((AP001518.1/272531-272358:0.17833,AP004601.1/22341-22165:0.26773):0.05269,(((AE016747.1/182196-182375:0.05593,((AF306669.1/1019-1194:0.08316,AP004826.1/205532-205707:-0.03117):0.01636,AP003362.3/86114-86289:-0.00898):0.08175):0.42566,(AE015829.1/4454-4280:0.24176,(((U00006.1/98763-98567:0.00283,(AE016770.1/235405-235209:0.04647,X00008.1/296-492:-0.02468):0.01924):0.00343,X15196.1/270-75:0.01880):0.30786,((AP005342.1/28132-28310:0.01559,AE004127.1/7715-7538:0.12567):0.02662,AP005082.1/169934-170112:0.04429):0.20718):0.06618):0.12822):0.10053,(AP003187.2/139222-139393:0.20864,((AE007576.1/1562-1747:0.19785,AE007856.1/5090-5262:0.25015):0.02151,AE015944.1/195870-195703:0.20865):0.03191):0.12368):0.05429):0.01627,(((AE015545.1/1265-1436:0.24517,AE004361.1/7554-7382:0.22892):0.01828,(AE004193.1/5679-5861:0.22444,(AP005076.1/290738-290918:0.09791,AP005335.1/123141-123320:0.07846):0.03081):0.07227):0.07172,((U32832.1/9495-9319:0.12117,AE006126.1/222-48:0.12126):0.01298,AE017154.1/86844-87014:0.20298):0.17443):0.04515):0.00292,((AE013039.1/9145-9323:0.36667,AE010489.1/2647-2468:0.21973):0.08030,(AE006448.1/6071-6253:0.38756,AE001799.1/20444-20268:0.46678):0.03318):0.10168);",clickName:function clickName(d){console.log(d)},getConfig:function getConfig(d){console.log(d)}})},Tree_docs_stories_proptable=[["data","string","You can do all of this code formatting on your own"],["clickName","function","You can do all of this code formatting on your own"],["getConfig","function","You can do all of this code formatting on your own"],["bgColor","bool","You can do all of this code formatting on your own"]],Tree_docs_stories_SimpleTree=function SimpleTree(){return react_default.a.createElement(Docify,{name:"Phylogenetic Tree",View:react_default.a.createElement(Tree_docs_stories_Stree,null),description:"Documentation for phylo-react components",proptable:Tree_docs_stories_proptable,code:'const treeData="<Newick Strings>"\nconst Stree = () => <Tree\n                            data={treedata}\n                            clickName = {(d) => {console.log(d)}}\n                            getConfig = {(d) => {console.log(d)}}\n                        />;'})};Tree_docs_stories_SimpleTree.__docgenInfo={description:"",methods:[],displayName:"SimpleTree"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Tree.docs.stories.js"]={name:"SimpleTree",docgenInfo:Tree_docs_stories_SimpleTree.__docgenInfo,path:"src/stories/Tree.docs.stories.js"})}},[[341,1,2]]]);
//# sourceMappingURL=main.e43256d9f7e6ad4168a2.bundle.js.map