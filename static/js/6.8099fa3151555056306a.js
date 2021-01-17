webpackJsonp([6],{"3hxQ":function(e,t){},"8TLk":function(e,t,a){e.exports=a.p+"static/img/header.c72081b.png"},"8wNA":function(e,t){},CLsb:function(e,t){},FrhX:function(e,t){},GEUB:function(e,t){},KLbg:function(e,t){},L7bl:function(e,t){},MKMi:function(e,t,a){e.exports=a.p+"static/img/concept_3.e2d5507.png"},VZcq:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("P1kx"),r=a("GQGC"),n=a("Wt7X"),s=a("8TLk"),o=a.n(s),c={name:"IgnLanding",components:{VueImage:i.a,Width50:r.a,Width100:n.a},data:function(){return{banner:o.a}}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Width100",[t("VueImage",{attrs:{src:this.banner,alt:"Landing banner",isExpandable:!0}})],1)},staticRenderFns:[]};var l=a("VU/8")(c,h,!1,function(e){a("GEUB")},"data-v-4671474c",null).exports,p={name:"ProjectHeader",props:{title:String}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"project-header-container"},[this.title?t("h1",{staticClass:"title"},[this._v(this._s(this.title))]):this._e()])},staticRenderFns:[]};var m=a("VU/8")(p,d,!1,function(e){a("ZgOP")},"data-v-6969d5e3",null).exports,u=a("LBRD"),g=a("uIM0"),f={name:"UnorderedList",props:{items:{type:Array},title:{type:String},titleColor:{type:String}},computed:{titleStyles:function(){return{color:this.titleColor?this.titleColor:"black"}}}},A={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"unordered_list"},[e.title?a("h3",{staticClass:"title",style:e.titleStyles},[e._v(e._s(e.title))]):e._e(),e._v(" "),a("ul",e._l(e.items,function(t){return a("li",{staticClass:"list_item"},[e._v("\n      "+e._s(t)+"\n    ")])}),0)])},staticRenderFns:[]};var M=a("VU/8")(f,A,!1,function(e){a("Vxp4")},"data-v-2575602d",null).exports,v={components:{LineBreak:g.a,ProjectHeader:m,Paragraph:u.a,VueImage:i.a,Width50:r.a,Width100:n.a}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Width100",{attrs:{addPadding:!0}},[t("Width50",[t("Width100",[t("Paragraph",{attrs:{subtitle:"What is Sumi?",paragraph:"An Android app that allows you to select ambience sounds of your choice and help calm your mind for a better night sleep."}})],1),this._v(" "),t("Width100",[t("Paragraph",{attrs:{subtitle:"The Problem",paragraph:"Due to constant stress people experience everyday, it's more difficult to get a good night sleep. Modern apps are built with multiple features that enables  people to keep their mind awake when they are attemping to sleep."}})],1),this._v(" "),t("Width100",[t("Paragraph",{attrs:{subtitle:"The Solution",paragraph:"Create a simpler and more efficient way for people to find sounds that helps them sleep better."}})],1),this._v(" "),t("Width100",[t("Paragraph",{attrs:{subtitle:"The Team",paragraph:"I designed this app mysef and was developed by Anthony Wang."}})],1),this._v(" "),t("Width100",[t("Paragraph",{attrs:{subtitle:"Tools",paragraph:"Invision, Sketch"}})],1)],1),this._v(" "),t("Width50",[t("div",{staticClass:"marvel-container"},[t("iframe",{attrs:{src:"https://marvelapp.com/eh14dgh?emb=1&iosapp=false&frameless=false",title:"Prototype",width:"100%",height:"784",allowTransparency:"true",frameborder:"0"}})])])],1)],1)},staticRenderFns:[]};var b=a("VU/8")(v,w,!1,function(e){a("CLsb")},"data-v-34a1551b",null).exports,P={name:"ParagraphWithLeadingTitle",props:{title:String,paragraph:String}},z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"paragraph-container"},[t("p",{staticClass:"paragraph"},[t("b",[this._v(this._s(this.title)+": ")]),this._v(this._s(this.paragraph)+"\n  ")])])},staticRenderFns:[]};var y=a("VU/8")(P,z,!1,function(e){a("8wNA")},"data-v-b4b7beac",null).exports,W=a("74wK"),O=a("S2BS"),Z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-100"},[t("div",{staticClass:"ctr"},[t("div",{staticClass:"ctr"},[this._t("default")],2)])])},staticRenderFns:[]};var B=a("VU/8")({name:"Width70"},Z,!1,function(e){a("teUU")},"data-v-601df98b",null).exports,x={props:{href:{type:String,default:""},source:{type:String,default:""},target:{type:String,default:""}}},G={render:function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:this.href,target:this.target}},[this._v("\n  Source: "),t("b",[this._v(this._s(this.source))])])},staticRenderFns:[]};var D=a("VU/8")(x,G,!1,function(e){a("vpMO")},"data-v-6722fd47",null).exports,T=a("l1Jv"),Y=a.n(T),L={components:{AnchorButton:O.a,CenteredText:W.a,Paragraph:u.a,VueImage:i.a,Width50:r.a,Width70Centered:B,Width100:n.a,UnorderedList:M,ParagraphWithLeadingTitle:y,SourceLink:D},data:function(){return{graph:Y.a,article:'In an article documenting "How Electronics Affects Sleep" they specifically outline: "Light from electronics has the potential to disrupt sleep because it sends alerting signals to the brain. Blue light, a type of life which the brain interprets as daylight, makes you feel awake past bedtime."',observationDataPoints:["Twenty-three out of thirty of participants said they downloaded apps to help them monitor their sleeping pattern, but has not improved their sleeping.","Seven of thirty said they meditate or exercise to clear their mind before going to bed.","Eighteen out of thirty of them prefer to sleep with background noises such as fans.","Twelve out of thirty of them prefer to sleep with absolute silence"],keyInsightsDataPoints:["The longer phone screen time, the higher chance people will have problems falling asleep at a reasonable time.","People who prefer white noise is often because sleeping  with complete silence is unsettling.","Although majority of our participant prefer white noise,  we cannot ultimately determine if it will help people sleep due to how complex the human mind is."]}}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Width100",[a("Paragraph",{attrs:{title:"Discovery",subtitle:"Research",paragraph:"Researching sleeping behaviors revealed many articles that analyzed how phones impacts the human mind during night time. According to the Harvard study, reading a screen before sleeping will cause you to feel more sleepy and sluggish when you wake up the next day. Looking at screens will trigger your brain to stay awake and you'll be less likely to feel like going to bed.",center:!0}})],1),e._v(" "),a("Width100",[a("SourceLink",{attrs:{source:"Psychology Today",target:"_blank",href:"https://www.psychologytoday.com/us/blog/prescriptions-life/201804/6-ways-night-time-phone-use-destroys-your-sleep"}})],1),e._v(" "),a("Width100",[a("Paragraph",{attrs:{paragraph:e.article,center:!0}})],1),e._v(" "),a("Width100",[a("SourceLink",{attrs:{source:"SleepFoundation.org",target:"_blank",href:"https://www.sleepfoundation.org/bedroom-environment/see/how-electronics-affect-sleep"}})],1),e._v(" "),a("Width100",[a("ParagraphWithLeadingTitle",{attrs:{title:"Confirming the Need",paragraph:"I started by informally surveying friends and families regarding their sleeping routine, and 30 out of 30 of them have experience sleeping issues due to high anxiety or stress at work."}})],1),e._v(" "),a("Width70Centered",[a("Width50",[a("UnorderedList",{attrs:{title:"Observations",items:e.observationDataPoints}})],1),e._v(" "),a("Width50",[a("UnorderedList",{attrs:{title:"Key Insights",items:e.keyInsightsDataPoints}})],1)],1),e._v(" "),a("Width100",[a("div",{staticClass:"img-container"},[a("VueImage",{attrs:{src:e.graph,alt:"Observations",isExpandable:!0}})],1)])],1)},staticRenderFns:[]};var S=a("VU/8")(L,C,!1,function(e){a("mOFw")},"data-v-53fb3fae",null).exports,E=a("mYU+"),N=a.n(E),k={components:{Paragraph:u.a,VueImage:i.a,Width70Centered:B,Width100:n.a},data:function(){return{persona:N.a}}},I={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Width100",[t("Paragraph",{attrs:{title:"Personas",paragraph:"I created different personas to understand the type of person I was designing for. This helped examined the process and workflow that the users would prefer to utilize to achieve their objectives in interacting with Sumi.",center:!0}})],1),this._v(" "),t("Width100",[t("div",{staticClass:"img-ctr"},[t("VueImage",{attrs:{src:this.persona,alt:"Persona",isExpandable:!0}})],1)])],1)},staticRenderFns:[]};var F=a("VU/8")(k,I,!1,function(e){a("KLbg")},"data-v-0331f83d",null).exports,X=a("jdjy"),j=a.n(X),R={components:{Paragraph:u.a,ParagraphWithLeadingTitle:y,VueImage:i.a,Width100:n.a},data:function(){return{sitemap:j.a}}},V={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Width100",[t("Paragraph",{attrs:{title:"Information Architecture",paragraph:"The average user would be using the application most likely at night right before going to bed. This emphasizes the importance of simplicity and the usage of dark colors. I needed to make all of the gestures and buttons easily accessible and quick.",center:!0}})],1),this._v(" "),t("Width100",[t("ParagraphWithLeadingTitle",{attrs:{title:"Skip Login",paragraph:"When allowed to skip, users don't have to tediously input their information when they just want to sleep.This will decreases the extra friction for our fatigue users."}})],1),this._v(" "),t("Width100",[t("div",{staticClass:"img-container"},[t("VueImage",{attrs:{src:this.sitemap,alt:"Sitemap",isExpandable:!0}})],1)])],1)},staticRenderFns:[]};var H=a("VU/8")(R,V,!1,function(e){a("L7bl")},"data-v-6f7cf777",null).exports,U=a("ksVS"),q=a.n(U),Q=a("MKMi"),J=a.n(Q),K={components:{Paragraph:u.a,ParagraphWithLeadingTitle:y,VueImage:i.a,UnorderedList:M,Width70Centered:B,Width100:n.a},data:function(){return{concept:q.a,concept_3:J.a,concepts:["Concept 1: Homescreen begins with a categories","Concept 2: Homescreen begins with categories with relative sounds"]}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Width100",[a("Paragraph",{attrs:{title:"Prototyping & Testing",subtitle:"Wireframes",center:!0}})],1),e._v(" "),a("Width100",[a("ParagraphWithLeadingTitle",{attrs:{title:"Initial Sketches",paragraph:"Based on my reseach, the longer users look at their phone screen, the harder it will be to fall asleep. To help make the process of finding sounds faster, I really wanted the applications overall design to feel very minimalist as possible. If designed with too much content, it could seem distracting and keep users starting at their screen. I narrowed it down to two options:"}})],1),e._v(" "),a("Width70Centered",[a("UnorderedList",{attrs:{items:e.concepts}})],1),e._v(" "),a("Width70Centered",[a("div",{staticClass:"img-container"},[a("VueImage",{attrs:{src:e.concept,alt:"Wireframe",isExpandable:!0}})],1)]),e._v(" "),a("Width100",[a("Paragraph",{attrs:{paragraph:"I chose Concept 2 because I learned through user testing that users would like to see their options as quick as possible in order to not spend too much screen time on the app searching.",center:!0}})],1),e._v(" "),a("Width100",[a("Paragraph",{attrs:{paragraph:"However, with the new findings through mock tests, I tweaked the design in Concept 2 and landed on Concept 3 to further simplify interactions.",center:!0}})],1),e._v(" "),a("Width100",[a("ParagraphWithLeadingTitle",{attrs:{title:"Concept 3",paragraph:"Homescreen is the music player. Users can directly search for songs, favorite, and edit the duration. Users will find sounds faster and not stare at the screen for too long. Users can favorite songs and find it on the first tab for quick access."}})],1),e._v(" "),a("Width70Centered",[a("div",{staticClass:"img-container"},[a("VueImage",{attrs:{src:e.concept_3,alt:"Wireframe",isExpandable:!0}})],1)])],1)},staticRenderFns:[]};var $=a("VU/8")(K,_,!1,function(e){a("3hxQ")},"data-v-78964cf7",null).exports,ee=a("zrqZ"),te=a.n(ee),ae={components:{Paragraph:u.a,VueImage:i.a,Width70Centered:B,Width100:n.a},data:function(){return{high_fidelity:te.a}}},ie={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Width100",[t("Paragraph",{attrs:{title:"High Fidelity Wireframes",paragraph:"I wanted to make the app feel relaxing and calm. To accomplish this, I used dark colors that promotes sleep such as soft blue, purple, and grey . Since users will be using the app right beofre they sleep, I strictly avoided lights colors to provide a better night experience.",center:!0}})],1),this._v(" "),t("Width70Centered",[t("div",{staticClass:"img-container"},[t("VueImage",{attrs:{src:this.high_fidelity,alt:"High fidelity Wireframe",isExpandable:!0}})],1)])],1)},staticRenderFns:[]};var re=a("VU/8")(ae,ie,!1,function(e){a("FrhX")},"data-v-65ca1bd6",null).exports,ne=a("aU4j"),se=a.n(ne),oe={components:{Paragraph:u.a,VueImage:i.a,Width70Centered:B,Width100:n.a},data:function(){return{Sumi_Prototype:se.a}}},ce={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Width100",[t("Paragraph",{attrs:{subtitle:"Prototyping",center:!0}})],1),this._v(" "),t("Width70Centered",[t("div",{staticClass:"img-ctr"},[t("VueImage",{attrs:{src:this.Sumi_Prototype,alt:"Prototype gif",isExpandable:!0}})],1)])],1)},staticRenderFns:[]};var he={name:"Sumi",components:{Landing:l,Introduction:b,ResearchAndUsabilityStudies:S,Personas:F,InformationArchitecture:H,Prototyping:$,HighFidelityWireframes:re,PrototypeGif:a("VU/8")(oe,ce,!1,function(e){a("mtfd")},"data-v-b1fb28b6",null).exports,NextProjectRouter:a("IytV").a},mounted:function(){this.$ga.page({page:"/sumi",title:"Sumi",location:window.location.href})}},le={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Landing"),e._v(" "),a("Introduction"),e._v(" "),a("ResearchAndUsabilityStudies"),e._v(" "),a("Personas"),e._v(" "),a("InformationArchitecture"),e._v(" "),a("Prototyping"),e._v(" "),a("HighFidelityWireframes"),e._v(" "),a("PrototypeGif"),e._v(" "),a("NextProjectRouter",{attrs:{currentIdx:0}})],1)},staticRenderFns:[]},pe=a("VU/8")(he,le,!1,null,null,null);t.default=pe.exports},Vxp4:function(e,t){},ZgOP:function(e,t){},aU4j:function(e,t,a){e.exports=a.p+"static/img/Sumi_Prototype.bd3a2ef.gif"},jdjy:function(e,t){e.exports="data:image/png;base64,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"},ksVS:function(e,t,a){e.exports=a.p+"static/img/Group_12.f581510.png"},l1Jv:function(e,t,a){e.exports=a.p+"static/img/graph.2e64c99.png"},mOFw:function(e,t){},"mYU+":function(e,t,a){e.exports=a.p+"static/img/persona.8b9a438.png"},mtfd:function(e,t){},teUU:function(e,t){},vpMO:function(e,t){},zrqZ:function(e,t,a){e.exports=a.p+"static/img/high_fidelity.0d42ba0.png"}});
//# sourceMappingURL=6.8099fa3151555056306a.js.map