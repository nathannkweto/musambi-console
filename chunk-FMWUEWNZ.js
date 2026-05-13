import{a as y,b}from"./chunk-OM5CYUSR.js";import{$ as m,Ec as h,Jb as f,Lb as n,Ra as c,Sa as l,Ta as p,Z as o,ba as s,kb as e,lb as a,nc as v,yb as g,zb as u}from"./chunk-USYAONA7.js";var S=["*"];var A=new m("MAT_CARD_CONFIG"),x=(()=>{class t{appearance;constructor(){let r=s(A,{optional:!0});this.appearance=r?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=c({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,d){i&2&&f("mat-mdc-card-outlined",d.appearance==="outlined")("mdc-card--outlined",d.appearance==="outlined")("mat-mdc-card-filled",d.appearance==="filled")("mdc-card--filled",d.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:S,decls:1,vars:0,template:function(i,d){i&1&&(g(),u(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})();var C=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=p({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var M=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=l({type:t});static \u0275inj=o({imports:[h]})}return t})();var D=class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=c({type:t,selectors:[["app-student-overview"]],decls:33,vars:0,consts:[[1,"page-header"],[2,"margin","0"],[1,"subtitle"],[1,"card-grid"],["appearance","outlined",1,"metric-card"],[1,"metric-header"],[1,"metric-title"],["color","primary"],[1,"metric-value"],["color","accent"],["color","warn"]],template:function(r,i){r&1&&(e(0,"div",0)(1,"h1",1),n(2,"SIS Overview"),a(),e(3,"p",2),n(4,"Welcome to the Student Information System."),a()(),e(5,"div",3)(6,"mat-card",4)(7,"mat-card-content")(8,"div",5)(9,"span",6),n(10,"Total Enrolled"),a(),e(11,"mat-icon",7),n(12,"school"),a()(),e(13,"h2",8),n(14,"1,248"),a()()(),e(15,"mat-card",4)(16,"mat-card-content")(17,"div",5)(18,"span",6),n(19,"Pending Applications"),a(),e(20,"mat-icon",9),n(21,"pending_actions"),a()(),e(22,"h2",8),n(23,"56"),a()()(),e(24,"mat-card",4)(25,"mat-card-content")(26,"div",5)(27,"span",6),n(28,"Active Courses"),a(),e(29,"mat-icon",10),n(30,"menu_book"),a()(),e(31,"h2",8),n(32,"42"),a()()()())},dependencies:[v,M,x,C,b,y],styles:[".page-header[_ngcontent-%COMP%]{margin-bottom:24px}.subtitle[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);margin-top:4px}.card-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:24px}.metric-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.metric-title[_ngcontent-%COMP%]{font-size:.875rem;font-weight:500;color:var(--mat-sys-on-surface-variant);text-transform:uppercase;letter-spacing:.5px}.metric-value[_ngcontent-%COMP%]{font-size:2.5rem;margin:0;font-weight:400}"]})};export{D as OverviewComponent};
