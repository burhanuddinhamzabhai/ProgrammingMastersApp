(self.webpackChunkprogramming_masters=self.webpackChunkprogramming_masters||[]).push([[3952],{3952:(n,o,t)=>{"use strict";t.r(o),t.d(o,{HomePageModule:()=>p});var e=t(8583),i=t(665),c=t(3083),r=t(2316),g=t(9141),a=t(4963),Z=t(639),s=t(2794);const d=[{path:"",component:(()=>{class n{constructor(n,o,t){this.platform=n,this.appCommon=o,this.route=t,this.username="",this.auth=(0,g.v0)(),this.slidesOptions={slidesPerView:1.5};const e=this.auth.currentUser.uid,i=(0,a.iH)((0,a.N8)());(0,a.U2)((0,a.iU)(i,`users/${e}`)).then(n=>{n.exists()?this.username=n.val().username:console.log("No data available")}).catch(n=>{console.error(n)}),this.platform.backButton.subscribeWithPriority(10,()=>{this.appCommon.exit(),console.log("back")})}ngOnInit(){}logout(){this.auth.signOut().then(()=>{this.route.navigate(["/welcome"])})}}return n.\u0275fac=function(o){return new(o||n)(Z.Y36(c.t4),Z.Y36(s.o),Z.Y36(r.F0))},n.\u0275cmp=Z.Xpm({type:n,selectors:[["app-home"]],decls:81,vars:2,consts:[[1,"ion-no-border"],["slot","start"],["id","first"],["name","apps"],["slot","end"],["fill","solid","color","light",1,"bordered",3,"click"],["name","exit"],["lines","none"],["name","person-circle","size","large",1,"ion-margin-end"],[1,"slides","ion-margin-bottom"],[3,"options"],[1,"main"],["color","primary","name","videocam","size","large"],[1,"ion-text-left"],[1,"ion-margin-bottom"],[1,"ion-text-right"],["color","primary","name","mic","size","large"],["color","primary","name","book","size","large"],[1,"container"],[1,"ion-align-items-center"],["size","3"],["color","light","fill","clear"],["slot","icon-only","name","document"],["size","7"],["size","2"],["slot","icon-only","name","ellipsis-vertical"],["slot","icon-only","name","film"]],template:function(n,o){1&n&&(Z.TgZ(0,"ion-header",0),Z.TgZ(1,"ion-toolbar"),Z.TgZ(2,"ion-buttons",1),Z.TgZ(3,"ion-menu-button",2),Z._UZ(4,"ion-icon",3),Z.qZA(),Z.qZA(),Z.TgZ(5,"ion-buttons",4),Z.TgZ(6,"ion-button",5),Z.NdJ("click",function(){return o.logout()}),Z._UZ(7,"ion-icon",6),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(8,"ion-item",7),Z._UZ(9,"ion-icon",8),Z.TgZ(10,"ion-label"),Z.TgZ(11,"p"),Z._uU(12,"Hello,"),Z.qZA(),Z.TgZ(13,"h3"),Z._uU(14),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(15,"ion-content"),Z.TgZ(16,"div",9),Z.TgZ(17,"ion-slides",10),Z.TgZ(18,"ion-slide"),Z.TgZ(19,"ion-card"),Z.TgZ(20,"ion-card-header"),Z.TgZ(21,"div",11),Z._UZ(22,"ion-icon",12),Z.qZA(),Z.qZA(),Z.TgZ(23,"ion-card-content",13),Z.TgZ(24,"ion-card-title",14),Z._uU(25,"Video Lectures"),Z.qZA(),Z.TgZ(26,"ion-card-subtitle",15),Z._uU(27,"10/50GB"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(28,"ion-slide"),Z.TgZ(29,"ion-card"),Z.TgZ(30,"ion-card-header"),Z.TgZ(31,"div",11),Z._UZ(32,"ion-icon",16),Z.qZA(),Z.qZA(),Z.TgZ(33,"ion-card-content",13),Z.TgZ(34,"ion-card-title",14),Z._uU(35,"Audio Lectures"),Z.qZA(),Z.TgZ(36,"ion-card-subtitle",15),Z._uU(37,"10/50GB"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(38,"ion-slide"),Z.TgZ(39,"ion-card"),Z.TgZ(40,"ion-card-header"),Z.TgZ(41,"div",11),Z._UZ(42,"ion-icon",17),Z.qZA(),Z.qZA(),Z.TgZ(43,"ion-card-content",13),Z.TgZ(44,"ion-card-title",14),Z._uU(45,"Visual Contents"),Z.qZA(),Z.TgZ(46,"ion-card-subtitle",15),Z._uU(47,"10/50GB"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(48,"div",18),Z.TgZ(49,"h2"),Z._uU(50,"Recent Comments"),Z.qZA(),Z.TgZ(51,"ion-item",7),Z.TgZ(52,"ion-grid"),Z.TgZ(53,"ion-row",19),Z.TgZ(54,"ion-col",20),Z.TgZ(55,"ion-button",21),Z._UZ(56,"ion-icon",22),Z.qZA(),Z.qZA(),Z.TgZ(57,"ion-col",23),Z.TgZ(58,"ion-label"),Z.TgZ(59,"h4"),Z._uU(60,"Project.PDF"),Z.qZA(),Z.TgZ(61,"h6"),Z._uU(62,"Google Drive/Docs"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(63,"ion-col",24),Z.TgZ(64,"ion-button",21),Z._UZ(65,"ion-icon",25),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(66,"ion-item",7),Z.TgZ(67,"ion-grid"),Z.TgZ(68,"ion-row",19),Z.TgZ(69,"ion-col",20),Z.TgZ(70,"ion-button",21),Z._UZ(71,"ion-icon",26),Z.qZA(),Z.qZA(),Z.TgZ(72,"ion-col",23),Z.TgZ(73,"ion-label"),Z.TgZ(74,"h4"),Z._uU(75,"Project.MP4"),Z.qZA(),Z.TgZ(76,"h6"),Z._uU(77,"Dropbox/Videos"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(78,"ion-col",24),Z.TgZ(79,"ion-button",21),Z._UZ(80,"ion-icon",25),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()),2&n&&(Z.xp6(14),Z.Oqu(o.username),Z.xp6(3),Z.Q6J("options",o.slidesOptions))},directives:[c.Gu,c.sr,c.Sm,c.fG,c.gu,c.YG,c.Ie,c.Q$,c.W2,c.Hr,c.A$,c.PM,c.Zi,c.FN,c.gZ,c.tO,c.jY,c.Nd,c.wI],styles:["ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:#f1f5f8;background:#f1f5f8;padding:0 10px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .bordered[_ngcontent-%COMP%]{--border-radius:10px;--box-shadow:5px 5px 10px #d1d1d1,-5px -5px 10px #fff}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;font-size:14px}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:14px}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{--border-radius:40%}ion-content[_ngcontent-%COMP%]{--background:linear-gradient(90deg,#2b5a94,#2d70e5 35%,#2d70e5)}ion-content[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]{background:#f1f5f8;padding:4px 10px 20px;border-radius:0 0 28px 28px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:100%;box-shadow:none;border-radius:14px;padding:14px;background:#fffc}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50px;background:#fff;box-shadow:7px 7px 20px #dbdfe2,-7px -7px 20px #fff;display:flex;align-items:center;justify-content:center}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .files[_ngcontent-%COMP%]{padding-top:14px}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:6px 20px;color:#fff}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:#ffffff1a;padding:0;margin:14px 0;--border-radius:14px;color:#fff;font-weight:600}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding:6px 0}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:16px}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#ffffffa8}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-bottom:8px}"]}),n})()}];let l=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=Z.oAB({type:n}),n.\u0275inj=Z.cJS({imports:[[r.Bz.forChild(d)],r.Bz]}),n})(),p=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=Z.oAB({type:n}),n.\u0275inj=Z.cJS({imports:[[e.ez,i.u5,c.Pc,l]]}),n})()}}]);