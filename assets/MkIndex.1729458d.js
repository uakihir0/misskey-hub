import{r as u,o as a,c as r,F as i,h as _,i as p,j as f,b as m,w as h,a as o,t as n}from"./app.7cb9050b.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";const g={props:{sort:{type:Function,required:!1,default:null}},setup(e){const s=p().value.childPages||[];return e.sort&&s.sort(e.sort),{childPages:s}}},x={class:"mk-index"};function k(e,l,s,c,y,P){const d=u("RouterLink");return a(),r("div",x,[(a(!0),r(i,null,_(c.childPages,t=>f(e.$slots,"default",{page:t},()=>[m(d,{class:"page",to:t.path},{default:h(()=>[o("header",null,n(t.title),1),o("div",null,n(t.summary),1)]),_:2},1032,["to"])],!0)),256))])}var j=v(g,[["render",k],["__scopeId","data-v-09987ede"]]);export{j as default};
