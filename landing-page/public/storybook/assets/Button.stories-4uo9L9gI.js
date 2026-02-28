import{d as i,r as m,c as u,a,b as s,e as d,o as n,h as f}from"./iframe-BRmBCH8v.js";import"./preload-helper-D1UD9lgW.js";const p={class:"moulify-btn"},c=i({__name:"index",props:{iconLeft:{default:void 0},iconRight:{default:void 0}},setup(t){const e=t;return(l,_)=>{const r=m("moulify-icon");return n(),u("button",p,[e.iconLeft?(n(),a(r,{key:0,name:e.iconLeft},null,8,["name"])):s("",!0),d(l.$slots,"default"),e.iconRight?(n(),a(r,{key:1,name:e.iconRight},null,8,["name"])):s("",!0)])}}}),k={component:c},o={render:(t,{slots:e})=>f(c,t,{default:()=>e?.default?e.default():"click me"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args, {
    slots
  }) => {
    return h(MoulifyButton, args, {
      default: () => slots?.default ? slots.default() : 'click me'
    });
  }
}`,...o.parameters?.docs?.source}}};const g=["Primary"];export{o as Primary,g as __namedExportsOrder,k as default};
