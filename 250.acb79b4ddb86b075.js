"use strict";(self.webpackChunkath=self.webpackChunkath||[]).push([[250],{5250:(C,a,o)=>{o.r(a),o.d(a,{AuthSignOutModule:()=>T});var s=o(5357),m=o(7423),r=o(3214),d=o(2455),l=o(7579),g=o(2805),h=o(8746),x=o(2529),f=o(2722),v=o(8505),p=o(5700),t=o(5e3),A=o(8951),c=o(9808);function Z(n,e){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"i18nPlural"),t.BQk()),2&n){const i=t.oxw();t.xp6(1),t.hij(" Redireccionando en ",t.xi3(2,1,i.countdown,i.countdownMapping)," ")}}function S(n,e){1&n&&(t.ynx(0),t._uU(1," Esta siendo redireccionado al inicio de sesi\xf3n. "),t.BQk())}const O=function(){return["/sign-in"]},y=[{path:"",component:(()=>{class n{constructor(i,u){this._authService=i,this._router=u,this.countdown=5,this.countdownMapping={"=1":"# segundo",other:"# segundos"},this._unsubscribeAll=new l.x}ngOnInit(){this._authService.signOut(),(0,g.H)(1e3,1e3).pipe((0,h.x)(()=>{this._router.navigate(["sign-in"])}),(0,x.o)(()=>this.countdown>0),(0,f.R)(this._unsubscribeAll),(0,v.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(A.e),t.Y36(s.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["auth-sign-out"]],decls:15,vars:5,consts:[[1,"flex","flex-col","items-center","flex-auto","min-w-0","sm:justify-center","bg-mine-900"],[1,"w-full","px-4","py-8","sm:w-auto","sm:p-12","sm:rounded-sm","sm:shadow","sm:bg-card"],[1,"w-full","mx-auto","max-w-80","sm:w-80","sm:mx-0"],[1,"w-12","mx-auto"],["src","assets/images/logo/logo-wiremid-green.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight","text-center","text-mine-200","sm:text-mine-800"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","font-medium","text-center","text-md","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(i,u){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Ha cerrado sesi\xf3n correctamente."),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,Z,3,4,"ng-container",7),t.YNc(9,S,2,0,"ng-container",7),t.qZA(),t.TgZ(10,"div",8),t.TgZ(11,"span"),t._uU(12,"Ir a"),t.qZA(),t.TgZ(13,"a",9),t._uU(14,"Iniciar Sesi\xf3n "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(1),t.Q6J("@fadeInBottom",void 0),t.xp6(7),t.Q6J("ngIf",u.countdown>0),t.xp6(1),t.Q6J("ngIf",0===u.countdown),t.xp6(4),t.Q6J("routerLink",t.DdM(4,O)))},directives:[c.O5,s.yS],pipes:[c.Gx],encapsulation:2,data:{animation:p.p}}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.Bz.forChild(y),m.ot,r.j,d.m]]}),n})()}}]);