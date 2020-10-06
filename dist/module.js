/*! For license information please see module.js.LICENSE.txt */
define(["react","d3","emotion","@grafana/data","@grafana/ui"],(function(t,e,n,a,r){return function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=5)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e){t.exports=a},function(t,e){t.exports=r},function(t,e,n){"use strict";n.r(e);var a=n(3);var r=function(){return(r=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function o(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var a,r,o=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(a=o.next()).done;)i.push(a.value)}catch(t){r={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return i}function i(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(o(arguments[e]));return t}function l(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var s=n(0),c=n.n(s),u=n(2),p=n(4),d=n(1);function f(t,e,n){var a=e.options,r=e.width,o=e.height,i=n.theme,l=n.tooltipRef,s=n.tooltipContentRef,c=a.vitalBreakpointVal,u=a.isCopyLabelVisible,p={initCopyText:"Click on bar to copy data",copyText:"",dataCopied:"Copied data!"},f=Object(d.max)(t.y)||0,b=Object(d.min)(t.y)||0,m=o-40,h=r-40,x=Object(d.scaleBand)().range([0,h-20]).padding(a.barPadding),y=Object(d.scaleLinear)().range([m,0]),g=Object(d.scaleLinear)().range([m,0]),v=Object(d.line)().x((function(e,n){return x(t.xAxisLabels[n])||0})).y((function(t,e){return m-t.p*m/100-20})),w=t.p.map((function(e,n){return{x:t.xAxisLabels[n]||"",p:e||0}}))||null,O=t.p.map((function(e,n){return{x:t.xAxisLabels[n]||"",p:c}}))||null,j=t.p.map((function(t,e){return{x:e,p:0}})),k=t.p[0]/t.p.length;return x.domain(t.xAxisLabels),y.domain([b-k,f+k]),{padding:20,x:x,y:y,p:g,chartHeight:m,chartWidth:h,tooltipHandler:function(t){var e,n,a=(l||{current:null}).current,r=(s||{current:null}).current,o=(null===(e=t.currentTarget)||void 0===e?void 0:e.dataset)||{},c=o.labelHeader,f=o.label,b=o.isVital,m=o.count,h=!!["mouseover","mousemove"].includes(t.type);"mouseout"===t.type&&(p.copyText=p.initCopyText),a&&(Object(d.select)(a).style("opacity",h?.9:0).style("left",t.pageX+"px").style("top",t.pageY-28+"px"),Object(d.select)(r).style("background","true"===b?i.palette.greenBase:i.palette.redBase).html('<label class="label-header">'+c+" "+(!!p.copyText&&(n=p.copyText,'<span class="tooltip-copy-label '+(u?"":"hidden")+'">'+n+"</span>"))+'</label>\n        <label class="label-value">Percentage of sum: '+f+"</label>\n        <strong>"+m+"</strong>\n      "))},barClickHandler:function(t){var e,n=(null===(e=t.currentTarget)||void 0===e?void 0:e.dataset.labelHeader)||"No Content",a=document.createElement("textarea");a.innerText=n;var r=l.current?l.current:document.body;r&&r.appendChild(a),a.select(),document.execCommand("copy"),document.getElementsByClassName("tooltip-copy-label")[0].innerHTML=p.dataCopied,a.remove()},line:v,pathData:w,cutOffXPathData:O,bottomLineData:j,pLabels:function(t,e){return 0!==e&&t&&t?100*t+" %":""},Component:T}}var b,m,h,x,y,g,v,w,O,j,k,E,T=function(t){var e=t.data,n=t.styles,a=t.theme,r=t.padding,o=t.x,i=t.y,l=t.chartHeight,s=t.chartWidth,u=t.tooltipHandler,p=t.barClickHandler,f=t.vitalBreakpointVal,b=t.showVitalFew,m=t.showBarValue,h=t.valToFixed,x=!1;return c.a.createElement("g",{className:"bars",transform:"translate("+r+", 0)"},e.y.map((function(t,y){var g=o(e.xAxisLabels[y])||0,v=Math.trunc(s/10/o.bandwidth()),w=function(){return c.a.createElement("text",{transform:"translate(0, -"+r/2+")",className:n.barValue,x:g+o.bandwidth()/2,y:i(t)},h>=0?e.y[y].toFixed(h):e.y[y])};return c.a.createElement(c.a.Fragment,null,c.a.createElement("rect",{className:n.bar,x:g,y:i(t),width:o.bandwidth(),height:l-i(t),fill:e.p[y]>f?a.palette.redBase:a.palette.greenBase,"data-label-header":e.x[y],"data-label":e.tooltipLabel[y],"data-count":e.y[y],"data-is-vital":e.p[y]<f,onMouseUp:p,onMouseOver:u,onMouseMove:u,onMouseOut:u}),m&&o.bandwidth()>=30||m&&o.bandwidth()<30&&y%v==0?c.a.createElement(w,null):c.a.createElement(c.a.Fragment,null),c.a.createElement(c.a.Fragment,null,e.p[y]>f&&b&&!x&&(x=!0,!0)&&c.a.createElement("line",{className:n.lineCutOff,transform:"translate(0, 0)",ref:function(t){Object(d.select)(t).attr("x1",g+o.bandwidth()/2).attr("x2",g+o.bandwidth()/2).attr("y1",0).attr("y2",l)}})))})))},V=function(t){var e=t.styles,n=t.padding,a=t.x,r=t.pathData,o=t.line,i=t.showVitalFew,l=t.cutOffXPathData;return c.a.createElement("g",{className:e.paths},c.a.createElement("path",{className:e.line,transform:"translate("+(n+a.bandwidth()/2)+", "+n+")",ref:function(t){Object(d.select)(t).datum(r).attr("d",o)}}),i&&c.a.createElement("path",{className:e.lineCutOff,transform:"translate("+(n+a.bandwidth()/2)+", "+n+")",ref:function(t){Object(d.select)(t).datum(l).attr("d",o)}}))},B=function(t){var e=t.data,n=t.styles,a=t.showBottomAxis,r=t.padding,i=t.chartHeight,l=t.chartWidth,s=t.x,u=t.y,p=t.p,f=t.pLabels,b=t.vitalBreakpointVal;return c.a.createElement("g",{className:"axis"},a&&c.a.createElement("g",{className:"axis-bottom",transform:"translate("+r+", "+i+")",ref:function(t){var n=o(e.p.filter((function(t,n){return e.p[n]<b})).sort((function(t,e){return e-t})),1)[0],a=Object(d.axisBottom)(s).tickValues(s.domain().filter((function(t,a){return e.p[a]===n||e.p.length-1===a})));Object(d.select)(t).call(a).selectAll("text").attr("y",r/2).attr("x",0).style("text-anchor","center")}}),!a&&c.a.createElement("line",{className:n.lineBottomAxis,transform:"translate("+r+", 0)",ref:function(t){Object(d.select)(t).attr("x1",0).attr("x2",l-r).attr("y1",i).attr("y2",i)}}),c.a.createElement("g",{className:"axis-left",transform:"translate("+r+", 0)",ref:function(t){Object(d.select)(t).call(Object(d.axisLeft)(u).ticks(i/30))}}),c.a.createElement("g",{className:"axis-right",transform:"translate("+(l+r)+", 0)",ref:function(t){Object(d.select)(t).call(Object(d.axisLeft)(p).ticks(4).tickFormat(f))}}))},N=function(){function t(t){var e=o(t.request.targets,1)[0].resultFormat,n=o(t.series,1)[0],a=n.fields,r=n.meta;r&&r.executedQueryString&&"time_series"!==e?(this.dataType="table",this.results=this.setTableData(a)):"time_series"===e?(this.dataType="series",this.results=this.setTimeSeriesData(t.series)):(this.dataType="series",this.results=this.setSeriesData(a))}return t.prototype.getResults=function(){return this.results},t.prototype.setTableData=function(t){var e=t.find((function(t){return t.type===a.FieldType.string})),n=t.find((function(t){return t.type===a.FieldType.number})),r=e.values.toArray().map((function(t,e){return""+t})),o=n.values.toArray();return this.setResults(r,o,this.sumYVals(o))},t.prototype.setSeriesData=function(t){var e=o(t,2),n=e[0],a=e[1],r=n.values.toArray().map((function(t,e){return e})),i=a.values.toArray();return this.setResults(r,i,this.sumYVals(i))},t.prototype.setTimeSeriesData=function(t){var e=this,n=t.map((function(t,n){var a=t.name;return e.stripName(a)})),a=t.map((function(t,e){var n=o(t.fields,2);return o(n[1].values.toArray(),1)[0]}));return this.setResults(n,a,this.sumYVals(a))},t.prototype.sumYVals=function(t){return t.reduce((function(t,e){return t+e}),0)},t.prototype.stripName=function(t){var e=o(t.match(/\{.*:+(.*)\}/),2),n=e[0],a=e[1];return a?a.trim():n?n.trim():t},t.prototype.setResults=function(t,e,n){return this.results=e.map((function(e,n){return{i:n,x:t[n],y:e}})).sort((function(t,e){return e.y-t.y})).reduce((function(t,a,o){var l,s=100*a.y/n,c=((null===(l=t)||void 0===l?void 0:l.p[o-1])?t.p[o-1]:0)+s,u=o===e.length-1?Math.trunc(Math.ceil(c))+" %":c.toFixed(2)+" %",p=s.toFixed(2)+" %";return r(r({},t),{x:i(t.x,[a.x]),y:i(t.y,[a.y]),p:i(t.p,[c]),xAxisLabels:i(t.xAxisLabels,[u]),tooltipLabel:i(t.tooltipLabel,[p])})}),{x:[],y:[],p:[],xAxisLabels:[],tooltipLabel:[]}),this.results},t}(),S=Object(p.stylesFactory)((function(){var t=Object(p.useTheme)();return{wrapper:Object(u.css)(b||(b=l(["\n      position: relative;\n    "],["\n      position: relative;\n    "]))),svg:Object(u.css)(m||(m=l(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "],["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),tooltipContainer:Object(u.css)(h||(h=l(["\n      position: fixed;\n      z-index: 100;\n      min-width: 20vw;\n      display: flex;\n      top: -100vh;\n      left: -100vw;\n    "],["\n      position: fixed;\n      z-index: 100;\n      min-width: 20vw;\n      display: flex;\n      top: -100vh;\n      left: -100vw;\n    "]))),tooltip:Object(u.css)(x||(x=l(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      border: 1px solid ",";\n      padding: 4px 10px;\n      max-width: 100%;\n      color: white;\n\n      strong {\n        position: absolute;\n        top: -1px;\n        left: 100%;\n        padding: 4px;\n        bottom: -1px;\n        min-width: 50px;\n        text-align: center;\n        background: inherit;\n        border: 1px solid ",";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 1.4rem;\n      }\n\n      label {\n        display: block;\n        background: inherit;\n        padding: 0 0 4px 0;\n\n        &.label-header {\n          font-weight: bold;\n          font-size: 1.2rem;\n          max-width: 100%;\n        }\n      }\n\n      .tooltip-copy-label {\n        position: absolute;\n        top: calc(100% + 4px);\n        left: 0;\n        background: ",";\n        color: ",";\n        font-size: 10px;\n        height: 20px;\n        box-sizing: border-box;\n        padding: 2px 4px;\n\n        &.hidden {\n          opacity: 0;\n          z-index: -1;\n        }\n      }\n    "],["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      border: 1px solid ",";\n      padding: 4px 10px;\n      max-width: 100%;\n      color: white;\n\n      strong {\n        position: absolute;\n        top: -1px;\n        left: 100%;\n        padding: 4px;\n        bottom: -1px;\n        min-width: 50px;\n        text-align: center;\n        background: inherit;\n        border: 1px solid ",";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 1.4rem;\n      }\n\n      label {\n        display: block;\n        background: inherit;\n        padding: 0 0 4px 0;\n\n        &.label-header {\n          font-weight: bold;\n          font-size: 1.2rem;\n          max-width: 100%;\n        }\n      }\n\n      .tooltip-copy-label {\n        position: absolute;\n        top: calc(100% + 4px);\n        left: 0;\n        background: ",";\n        color: ",";\n        font-size: 10px;\n        height: 20px;\n        box-sizing: border-box;\n        padding: 2px 4px;\n\n        &.hidden {\n          opacity: 0;\n          z-index: -1;\n        }\n      }\n    "])),t.colors.border2,t.colors.border2,t.colors.border2,t.colors.text),textBox:Object(u.css)(y||(y=l(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "],["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "]))),bar:Object(u.css)(g||(g=l(["\n      cursor: pointer;\n\n      &:hover {\n        fill: ",";\n      }\n    "],["\n      cursor: pointer;\n\n      &:hover {\n        fill: ",";\n      }\n    "])),t.colors.text),barValue:Object(u.css)(v||(v=l(["\n      fill: ",";\n      text-anchor: middle;\n    "],["\n      fill: ",";\n      text-anchor: middle;\n    "])),t.colors.text),line:Object(u.css)(w||(w=l(["\n      fill: none;\n      stroke: ",";\n      stroke-width: 2px;\n    "],["\n      fill: none;\n      stroke: ",";\n      stroke-width: 2px;\n    "])),t.isDark?"rgba(255,255,255,.5)":"rgba(0,0,0,.5)"),lineCutOff:Object(u.css)(O||(O=l(["\n      fill: none;\n      stroke: rgba(255, 0, 0, 0.75);\n      stroke-width: 2px;\n      stroke-dasharray: 5px;\n    "],["\n      fill: none;\n      stroke: rgba(255, 0, 0, 0.75);\n      stroke-width: 2px;\n      stroke-dasharray: 5px;\n    "]))),lineBottomAxis:Object(u.css)(j||(j=l(["\n      fill: none;\n      stroke: rgba(255, 255, 255, 1);\n      stroke-width: 0.75px;\n    "],["\n      fill: none;\n      stroke: rgba(255, 255, 255, 1);\n      stroke-width: 0.75px;\n    "]))),paths:Object(u.css)(k||(k=l(["\n      position: relative;\n    "],["\n      position: relative;\n    "])))}}));n.d(e,"plugin",(function(){return C}));var C=new a.PanelPlugin((function(t){var e=t.options,n=t.data,a=t.width,o=t.height;if(!n||!n.series.length)return c.a.createElement(c.a.Fragment,null,"No Data");var i=Object(p.useTheme)(),d=S(),b=Object(s.useRef)(null),m=Object(s.useRef)(null),h=new N(n).getResults(),x={theme:i,tooltipRef:b,tooltipContentRef:m},y=f(h,{options:e,width:a,height:o},x),g=r(r(r({data:h,styles:d},e),x),y),v=y.Component;return c.a.createElement("div",{className:Object(u.cx)(d.wrapper,Object(u.css)(E||(E=l(["\n          width: ","px;\n          height: ","px;\n        "],["\n          width: ","px;\n          height: ","px;\n        "])),a,o))},c.a.createElement("div",{ref:b,className:d.tooltipContainer},c.a.createElement("div",{ref:m,className:d.tooltip})),c.a.createElement("svg",{className:d.svg,width:a,height:o,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 "+a+" "+o},c.a.createElement("g",{transform:"translate("+y.padding+", "+y.padding+")",className:"wrapper"},c.a.createElement(v,r({},g)),c.a.createElement(V,r({},g)),c.a.createElement(B,r({},g)))))})).setPanelOptions((function(t){return t.addBooleanSwitch({path:"showBottomAxis",name:"Show bottom axis?",description:"The bottom axis contains the vital few breakpoint value in %",defaultValue:!1}).addBooleanSwitch({path:"showVitalFew",name:"Show vital few line?",description:"Indicates that many defects come from relatively few causes.",defaultValue:!0}).addNumberInput({path:"vitalBreakpointVal",name:"Vital few value (%)",description:"Default is 80 based on the 80/20 rule. But, you are able to customize this.",defaultValue:20}).addBooleanSwitch({path:"showBarValue",name:"Show bar values?",description:"Show the bar values on top of the bars?",defaultValue:!1}).addNumberInput({path:"valToFixed",name:"Number of decimals?",description:"Set number of decimals in bar values.",settings:{min:0},showIf:function(t){return t.showBarValue}}).addNumberInput({path:"barPadding",name:"Bar padding",description:"Space between bars. Should be a value between 0 and 1.",defaultValue:.2,settings:{min:0,max:1}}).addBooleanSwitch({path:"isCopyLabelVisible",name:"Show copy content label?",description:"This label below the tooltip hints users to copy content of the entered bar.",defaultValue:!0})}))}])}));
//# sourceMappingURL=module.js.map