webpackJsonp([14],{310:function(n,t,e){"use strict";var i=e(8),A=e.n(i),o=e(2),a=e(3),p=e.n(a);t.a={name:"Record",data:function(){var n=this;return{tabcolumns:[{title:"工单",key:"workid"},{title:"执行时间",key:"date",sortType:"desc"},{title:"申请人",key:"person"},{title:"执行人",key:"reviewer"},{title:"执行区域",key:"area"},{title:"连接名称",key:"name"},{title:"库名",key:"base"},{title:"操作",key:"action",align:"center",render:function(t,e){return t("div",[t("Button",{props:{size:"small",type:"text"},on:{click:function(){n.$router.push({name:"orderlist",query:{workid:e.row.workid,id:e.row.id,status:1,type:e.row.type}})}}},"详细信息")])}}],TableDataNew:[],pagenumber:1}},methods:{getrecordinfo:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;A.a.get(o.a.url+"/record/all?page="+t+"&username="+p.a.get("user")).then(function(t){n.TableDataNew=t.data.data,n.pagenumber=t.data.page}).catch(function(t){n.$Notice.error({title:"警告",desc:t})})},splicpage:function(n){this.getrecordinfo(n)}},mounted:function(){this.getrecordinfo()}}},686:function(n,t,e){var i=e(687);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(78)("5420addd",i,!0,{})},687:function(n,t,e){t=n.exports=e(77)(!0),t.push([n.i,".margin-top-8{margin-top:8px}.margin-top-10{margin-top:10px}.margin-top-20{margin-top:20px}.margin-left-10{margin-left:10px}.margin-bottom-10{margin-bottom:10px}.margin-bottom-100{margin-bottom:100px}.margin-right-10{margin-right:10px}.padding-left-6{padding-left:6px}.padding-left-8{padding-left:5px}.padding-left-10{padding-left:10px}.padding-left-20{padding-left:20px}.height-100{height:100%}.height-120px{height:100px}.height-200px{height:200px}.height-492px{height:492px}.height-460px{height:460px}.line-gray{height:0;border-bottom:2px solid #dcdcdc}.notwrap{word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.padding-left-5{padding-left:10px}[v-cloak]{display:none}.dragging-tip-enter-active{opacity:1;-webkit-transition:opacity .3s;transition:opacity .3s}.dragging-tip-enter,.dragging-tip-leave-to{opacity:0;-webkit-transition:opacity .3s;transition:opacity .3s}.dragging-tip-con{display:block;text-align:center;width:100%;height:50px}.dragging-tip-con span{font-size:18px}.record-tip-con{display:block;width:100%;height:292px;overflow:auto}.record-item{-webkit-box-sizing:content-box;box-sizing:content-box;display:block;overflow:hidden;height:24px;line-height:24px;padding:8px 10px;border-bottom:1px dashed #dcdcdc}.record-tip-con span{font-size:14px}.edittable-test-con{min-height:600px}.edittable-testauto-con{height:100%}.edittable-table-height-con{min-height:600px}.edittable-table-height1-con{height:200px}.edittable-con-1{-webkit-box-sizing:content-box;box-sizing:content-box;padding:15px 0 0;height:550px}.exportable-table-download-con1{padding:16px 0 16px 20px;border-bottom:1px dashed #c3c3c3;margin-bottom:16px}.exportable-table-download-con2{padding-left:20px}.show-image{padding:20px 0}.show-image img{display:block;width:100%;height:auto}","",{version:3,sources:["/Users/yeshaobin/Yearning/webpage/src/components/Management/Record.vue"],names:[],mappings:"AACA,cACE,cAAgB,CACjB,AACD,eACE,eAAiB,CAClB,AACD,eACE,eAAiB,CAClB,AACD,gBACE,gBAAkB,CACnB,AACD,kBACE,kBAAoB,CACrB,AACD,mBACE,mBAAqB,CACtB,AACD,iBACE,iBAAmB,CACpB,AACD,gBACE,gBAAkB,CACnB,AACD,gBACE,gBAAkB,CACnB,AACD,iBACE,iBAAmB,CACpB,AACD,iBACE,iBAAmB,CACpB,AACD,YACE,WAAa,CACd,AACD,cACE,YAAc,CACf,AACD,cACE,YAAc,CACf,AACD,cACE,YAAc,CACf,AACD,cACE,YAAc,CACf,AACD,WACE,SAAU,AACV,+BAAiC,CAClC,AACD,SACE,oBAAqB,AACrB,mBAAoB,AACpB,gBAAiB,AACjB,sBAAwB,CACzB,AACD,gBACE,iBAAmB,CACpB,AACD,UACE,YAAc,CACf,AACD,2BACE,UAAW,AACX,+BAAiC,AACjC,sBAAyB,CAC1B,AACD,2CAEE,UAAW,AACX,+BAAiC,AACjC,sBAAyB,CAC1B,AACD,kBACE,cAAe,AACf,kBAAmB,AACnB,WAAY,AACZ,WAAa,CACd,AACD,uBACE,cAAgB,CACjB,AACD,gBACE,cAAe,AACf,WAAY,AACZ,aAAc,AACd,aAAe,CAChB,AACD,aACE,+BAAgC,AACxB,uBAAwB,AAChC,cAAe,AACf,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,iBAAkB,AAClB,gCAAoC,CACrC,AACD,qBACE,cAAgB,CACjB,AACD,oBACE,gBAAkB,CACnB,AACD,wBACE,WAAa,CACd,AACD,4BACE,gBAAkB,CACnB,AACD,6BACE,YAAc,CACf,AACD,iBACE,+BAAgC,AACxB,uBAAwB,AAChC,iBAAkB,AAClB,YAAc,CACf,AACD,gCACE,yBAA0B,AAC1B,iCAAkC,AAClC,kBAAoB,CACrB,AACD,gCACE,iBAAmB,CACpB,AACD,YACE,cAAgB,CACjB,AACD,gBACE,cAAe,AACf,WAAY,AACZ,WAAa,CACd",file:"Record.vue",sourcesContent:["\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.dragging-tip-enter-active {\n  opacity: 1;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n}\n.dragging-tip-enter,\n.dragging-tip-leave-to {\n  opacity: 0;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n}\n.dragging-tip-con {\n  display: block;\n  text-align: center;\n  width: 100%;\n  height: 50px;\n}\n.dragging-tip-con span {\n  font-size: 18px;\n}\n.record-tip-con {\n  display: block;\n  width: 100%;\n  height: 292px;\n  overflow: auto;\n}\n.record-item {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  display: block;\n  overflow: hidden;\n  height: 24px;\n  line-height: 24px;\n  padding: 8px 10px;\n  border-bottom: 1px dashed gainsboro;\n}\n.record-tip-con span {\n  font-size: 14px;\n}\n.edittable-test-con {\n  min-height: 600px;\n}\n.edittable-testauto-con {\n  height: 100%;\n}\n.edittable-table-height-con {\n  min-height: 600px;\n}\n.edittable-table-height1-con {\n  height: 200px;\n}\n.edittable-con-1 {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  padding: 15px 0 0;\n  height: 550px;\n}\n.exportable-table-download-con1 {\n  padding: 16px 0 16px 20px;\n  border-bottom: 1px dashed #c3c3c3;\n  margin-bottom: 16px;\n}\n.exportable-table-download-con2 {\n  padding-left: 20px;\n}\n.show-image {\n  padding: 20px 0;\n}\n.show-image img {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n"],sourceRoot:""}])},688:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("Row",[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"android-send"}}),n._v("\n        历史工单执行记录\n      ")],1),n._v(" "),e("Row",[e("Col",{attrs:{span:"24"}},[e("Table",{staticClass:"tabletop",staticStyle:{background:"#5cadff"},attrs:{border:"",columns:n.tabcolumns,data:n.TableDataNew}}),n._v(" "),e("br"),n._v(" "),e("Page",{ref:"page",attrs:{total:this.pagenumber,"show-elevator":"","page-size":10},on:{"on-change":n.splicpage}})],1)],1)],1)],1)],1)},A=[],o={render:i,staticRenderFns:A};t.a=o},96:function(n,t,e){"use strict";function i(n){e(686)}Object.defineProperty(t,"__esModule",{value:!0});var A=e(310),o=e(688),a=e(1),p=i,g=a(A.a,o.a,!1,p,null,null);t.default=g.exports}});
//# sourceMappingURL=14.a4adea0701f8402c2895.js.map