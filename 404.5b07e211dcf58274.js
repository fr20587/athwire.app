"use strict";(self.webpackChunkath=self.webpackChunkath||[]).push([[404],{9404:(N,p,a)=>{a.r(p),a.d(p,{StatementsModule:()=>Q});var m=a(5357),g=a(2455),S=a(3075),h=a(6087),l=a(4847),E=a(9646),y=a(7579),v=a(2722),x=a(5620);const b=(0,x.P1)(n=>n.statements,n=>n.statements);var I=a(5700),e=a(5e3),F=a(2755),A=a(7967),B=a(1927),u=a(5303),T=a(5245),o=a(9808),k=a(7423),c=a(2181);function j(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",34),e.\u0275\u0275listener("click",function(){const d=e.\u0275\u0275restoreView(t).$implicit;return e.\u0275\u0275nextContext(3).viewStatement(d._id)}),e.\u0275\u0275elementStart(2,"div",35),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",36),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div",29),e.\u0275\u0275text(7),e.\u0275\u0275pipe(8,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"div",29),e.\u0275\u0275text(10),e.\u0275\u0275pipe(11,"currency"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"div",30),e.\u0275\u0275text(13),e.\u0275\u0275pipe(14,"currency"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"div",31),e.\u0275\u0275text(16),e.\u0275\u0275pipe(17,"currency"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()}if(2&n){const t=i.$implicit;e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",t.accountName," "),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",t.no," "),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(8,6,t.emitDate)," "),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(11,8,t.initBalance)," "),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(14,10,t.endBalance)," "),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(17,12,t.operation.length)," ")}}function w(n,i){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,j,18,14,"ng-container",33),e.\u0275\u0275elementContainerEnd()),2&n){const t=i.ngIf,r=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t)("ngForTrackBy",r.trackByFn)}}function R(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",16),e.\u0275\u0275elementStart(2,"div",17),e.\u0275\u0275text(3,"Registro de Estados de Cuentas"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",18),e.\u0275\u0275elementStart(5,"button",19),e.\u0275\u0275element(6,"mat-icon",20),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"mat-menu",null,21),e.\u0275\u0275elementStart(9,"button",22),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().exportAsExcelFile()}),e.\u0275\u0275text(10,"Exportar a excel"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"button",22),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().exportAsCsvFile()}),e.\u0275\u0275text(12,"Exportar a csv"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"div",23),e.\u0275\u0275elementStart(14,"div",24),e.\u0275\u0275elementStart(15,"div"),e.\u0275\u0275text(16," Nombre de la cuenta "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"div",25),e.\u0275\u0275elementStart(18,"div",26),e.\u0275\u0275text(19," Consecutivo "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"div",27),e.\u0275\u0275elementStart(21,"div",28),e.\u0275\u0275text(22," Fecha de emisi\xf3n "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"div",29),e.\u0275\u0275text(24," Balance inicial "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"div",30),e.\u0275\u0275text(26," Balance final "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"div",31),e.\u0275\u0275text(28," Cantidad de operaciones "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(29,w,2,2,"ng-container",32),e.\u0275\u0275pipe(30,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()}if(2&n){const t=e.\u0275\u0275reference(8),r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("matMenuTriggerFor",t),e.\u0275\u0275advance(1),e.\u0275\u0275property("svgIcon","heroicons_solid:dots-vertical"),e.\u0275\u0275advance(12),e.\u0275\u0275property("mat-sort-header","no"),e.\u0275\u0275advance(3),e.\u0275\u0275property("mat-sort-header","emitDate"),e.\u0275\u0275advance(8),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(30,5,r.statements$))}}function D(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",37),e.\u0275\u0275text(1,"A\xfan no se ha generado ning\xfan estado cuenta!"),e.\u0275\u0275elementEnd())}const O=[{path:"",component:(()=>{class n{constructor(t,r,s,d,f,V){this._statementsService=t,this._athConfirmationService=r,this._changeDetectorRef=s,this._fileSaverService=d,this._router=f,this.store=V,this.statements=[],this.statements$=(0,E.of)([]),this.searchInputControl=new S.FormControl,this._unsubscribeAll=new y.x}ngOnInit(){this.statements$=this.store.select(b),this.statements$.pipe((0,v.R)(this._unsubscribeAll)).subscribe(t=>{this.statements=t,this._changeDetectorRef.markForCheck()}),this._statementsService.pagination$.pipe((0,v.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}viewStatement(t){this._router.navigateByUrl(`/statements/${t}`)}exportAsExcelFile(){this._fileSaverService.exportAsExcelFile(this.statements,"statements")}exportAsCsvFile(){this._fileSaverService.exportAsCsvFile(this.statements,"statements")}trackByFn(t,r){return r.id||t}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(F.k),e.\u0275\u0275directiveInject(A.C),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(B.m),e.\u0275\u0275directiveInject(m.F0),e.\u0275\u0275directiveInject(x.yh))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ath-statements"]],viewQuery:function(t,r){if(1&t&&(e.\u0275\u0275viewQuery(h.NW,5),e.\u0275\u0275viewQuery(l.YE,5)),2&t){let s;e.\u0275\u0275queryRefresh(s=e.\u0275\u0275loadQuery())&&(r._paginator=s.first),e.\u0275\u0275queryRefresh(s=e.\u0275\u0275loadQuery())&&(r._sort=s.first)}},decls:23,vars:6,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","sm:flex-row","flex-0","sm:items-center","sm:justify-between","pb-22","sm:pt-12","sm:pb-28","sm:px-10","bg-mine-50","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"whitespace-nowrap","text-primary-700"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","flex-shrink-0","mt-6","sm:mt-0","sm:ml-4"],[1,"flex-auto","p-6","-mt-16","bg-mine-200","shadow","sm:p-10","rounded-t-2xl"],[1,"w-full","p-8","md:p-16","shadow","rounded-2xl","bg-card","print:w-auto","print:rounded-none","print:shadow-none","print:bg-transparent"],[4,"ngIf","ngIfElse"],["noStatements",""],[1,"flex","items-center","justify-between","mb-5"],[1,"text-2xl","font-semibold","leading-tight"],[1,"-mr-3"],["mat-icon-button","",3,"matMenuTriggerFor"],[1,"icon-size-5",3,"svgIcon"],["listStatementsMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","statements-grid","md:px-8","text-md","text-secondary","bg-mine-50","dark:bg-black","dark:bg-opacity-5"],[1,"justify-center","hidden","truncate","sm:flex"],[1,"text-center","truncate",3,"mat-sort-header"],[1,"justify-center","hidden","text-center","sm:flex"],[1,"text-center",3,"mat-sort-header"],[1,"hidden","text-center","sm:block"],[1,"text-center"],[1,"hidden","text-center","lg:block"],[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","statements-grid","md:px-8",3,"click"],[1,"truncate"],[1,"text-center","hidden","sm:block"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","sm:p-16"]],template:function(t,r){if(1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275elementStart(3,"div"),e.\u0275\u0275elementStart(4,"div",3),e.\u0275\u0275elementStart(5,"div"),e.\u0275\u0275elementStart(6,"a",4),e.\u0275\u0275text(7,"Estados de Cuentas"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",5),e.\u0275\u0275elementStart(9,"a",6),e.\u0275\u0275element(10,"mat-icon",7),e.\u0275\u0275elementStart(11,"span",8),e.\u0275\u0275text(12,"Regresar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"div",9),e.\u0275\u0275elementStart(14,"h2",10),e.\u0275\u0275text(15," Registro de Estados de Cuentas "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(16,"div",11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"div",12),e.\u0275\u0275elementStart(18,"div",13),e.\u0275\u0275template(19,R,31,7,"ng-container",14),e.\u0275\u0275pipe(20,"async"),e.\u0275\u0275template(21,D,2,0,"ng-template",null,15,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const s=e.\u0275\u0275reference(22);e.\u0275\u0275advance(9),e.\u0275\u0275property("routerLink","./.."),e.\u0275\u0275advance(1),e.\u0275\u0275property("svgIcon","heroicons_solid:chevron-left"),e.\u0275\u0275advance(9),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(20,4,r.statements$).length>0)("ngIfElse",s)}},directives:[u.PQ,m.yS,T.Hw,o.O5,k.lW,c.p6,c.VK,c.OP,l.YE,l.nU,o.sg],pipes:[o.Ov,o.uU,o.H9],encapsulation:2,data:{animation:I.p},changeDetection:0}),n})()},{path:":statementId",component:a(4063).N}];let Q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[m.Bz.forChild(O),u.ZD,g.m]]}),n})()}}]);