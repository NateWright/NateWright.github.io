"use strict";(self.webpackChunkrocketLeagueWebsite=self.webpackChunkrocketLeagueWebsite||[]).push([["src_app_swiss-to-single_swiss-to-single_module_ts"],{5714:(At,A,d)=>{d.r(A),d.d(A,{SwissToSingleModule:()=>Wt});var w=d(4666),M=d(2543),R=d(4522),q=d(2642),N=d(8987),T=d(2156),f=d(1169),C=d(4304),W=d(1267),L=d(206),m=d(4410),Q=d(4466),c=d(6803),y=d(248),t=d(7708),x=d(253),Z=d(1803);class u{constructor(s=-1,e=-1,n=0,a=0){this.team1=s,this.team2=e,this.team1Wins=n,this.team2Wins=a}isValid(){return(this.team1Wins>this.team2Wins||this.team1Wins<this.team2Wins)&&(3===this.team1Wins||3===this.team2Wins)}static checkWin(s,e){return u.checkWinDiff(s,e)>0}static checkWinDiff(s,e){return s===e.team1?e.team1Wins-e.team2Wins:e.team2Wins-e.team1Wins}static teamWon(s){return s.team1Wins>s.team2Wins?[s.team1,s.team2]:[s.team2,s.team1]}}class _{constructor(s,e){this.swissMatchup=[],this.gameDiff=0,this.teamBlacklist=[],this.teamIndex=s,this.swissMatchup=e}update(){if(this.gameDiff=0,this.swissMatchup.length<=0)return;for(let a of this.swissMatchup)this.gameDiff+=u.checkWinDiff(this.teamIndex,a);const s=this.swissMatchup[this.swissMatchup.length-1],[e,n]=u.teamWon(s);this.teamBlacklist.push(this.teamIndex==e?n:e)}static sortFunctionAllMatches(s,e){let n=0,a=0,o=0,p=0;for(let h of s.swissMatchup)u.checkWin(s.teamIndex,h)?n++:a++;for(let h of e.swissMatchup)u.checkWin(e.teamIndex,h)?o++:p++;if(n>o||a<p)return-1;if(n<o||a>p)return 1;const l=s.gameDiff,r=e.gameDiff;return l>r?-1:r>l?1:s.teamIndex-e.teamIndex}static sortFunctionSwissRound(s,e){const n=u.checkWin(s.teamIndex,s.swissMatchup[s.swissMatchup.length-1]),a=u.checkWin(e.teamIndex,e.swissMatchup[e.swissMatchup.length-1]);if(!n&&a)return-1;if(!a&&n)return 1;const o=s.gameDiff,p=e.gameDiff;return o>p?-1:p>o?1:s.teamIndex-e.teamIndex}}function I(i,s){if(1&i&&(t.TgZ(0,"mat-chip-list")(1,"mat-chip",1),t._UZ(2,"img",2),t._uU(3),t.qZA()()),2&i){const e=t.oxw();t.xp6(2),t.s9C("src",e.team.imagePath,t.LSH),t.s9C("alt",e.team.teamName),t.xp6(1),t.hij(" ",e.team.teamName," ")}}function O(i,s){1&i&&(t.TgZ(0,"mat-chip-list")(1,"mat-chip",1),t._UZ(2,"img",3),t._uU(3),t.qZA()()),2&i&&(t.xp6(3),t.hij(" ","NONE"," "))}let S=(()=>{class i{constructor(e){this.teamDb=e}ngOnDestroy(){this.idSub&&this.idSub.unsubscribe()}ngOnInit(){"number"==typeof this.id?this.team=this.teamDb.getTeam(this.id):this.idSub=this.id.subscribe(e=>{this.team=this.teamDb.getTeam(e)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(Z.n))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-team"]],inputs:{id:"id"},decls:2,vars:2,consts:[[4,"ngIf"],["color","accent"],["matChipAvatar","",3,"src","alt"],["matChipAvatar","","src","assets/test-image.jpg","alt","NONE"]],template:function(e,n){1&e&&(t.YNc(0,I,4,3,"mat-chip-list",0),t.YNc(1,O,4,1,"mat-chip-list",0)),2&e&&(t.Q6J("ngIf",n.team),t.xp6(1),t.Q6J("ngIf",!n.team))},dependencies:[w.O5,f.qn,f.HS,f.EC],styles:[".container[_ngcontent-%COMP%]{display:flex;columns:7}.item[_ngcontent-%COMP%]{width:100px;height:50px}"]}),i})();function D(i,s){1&i&&(t.TgZ(0,"th",9),t._uU(1,"Team 1"),t.qZA())}function V(i,s){if(1&i&&(t.TgZ(0,"td",10),t._UZ(1,"app-team",11),t.qZA()),2&i){const e=s.$implicit;t.xp6(1),t.Q6J("id",e.team1)}}function v(i,s){1&i&&(t.TgZ(0,"th",9),t._uU(1,"Wins"),t.qZA())}function B(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"td",10)(1,"mat-form-field",12)(2,"mat-label"),t._uU(3,"Score"),t.qZA(),t.TgZ(4,"input",13),t.NdJ("ngModelChange",function(a){const p=t.CHM(e).$implicit;return t.KtG(p.team1Wins=a)})("input",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.checkValid())}),t.qZA()()()}if(2&i){const e=s.$implicit;t.xp6(4),t.Q6J("ngModel",e.team1Wins)}}function H(i,s){1&i&&(t.TgZ(0,"th",9),t._uU(1,"Losses"),t.qZA())}function P(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"td",10)(1,"mat-form-field",14)(2,"mat-label"),t._uU(3,"Score"),t.qZA(),t.TgZ(4,"input",13),t.NdJ("ngModelChange",function(a){const p=t.CHM(e).$implicit;return t.KtG(p.team2Wins=a)})("input",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.checkValid())}),t.qZA()()()}if(2&i){const e=s.$implicit;t.xp6(4),t.Q6J("ngModel",e.team2Wins)}}function Y(i,s){1&i&&(t.TgZ(0,"th",9),t._uU(1,"Team 2"),t.qZA())}function F(i,s){if(1&i&&(t.TgZ(0,"td",10),t._UZ(1,"app-team",11),t.qZA()),2&i){const e=s.$implicit;t.xp6(1),t.Q6J("id",e.team2)}}function k(i,s){1&i&&t._UZ(0,"tr",15)}function E(i,s){1&i&&t._UZ(0,"tr",16)}let j=(()=>{class i{constructor(){this.isValid=new t.vpe,this.tableUpdate=new t.vpe,this.displayedColumns=["team1","score1","score2","team2"]}ngOnInit(){}checkValid(){this.tableUpdate.next();for(let e of this.round.data)if(!e.isValid())return void this.isValid.emit(!1);this.isValid.emit(!0)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-swiss-matchup"]],inputs:{round:"round"},outputs:{isValid:"isValid",tableUpdate:"tableUpdate"},decls:15,vars:3,consts:[["mat-table","",3,"dataSource"],["matColumnDef","team1"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","score1"],["matColumnDef","score2"],["matColumnDef","team2"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"id"],["appearance","fill","color","primary",2,"width","100px"],["matInput","","type","number","min","0","max","3",3,"ngModel","ngModelChange","input"],["appearance","fill","color","primary",2,"width","100px","padding","0"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"table",0),t.ynx(1,1),t.YNc(2,D,2,0,"th",2),t.YNc(3,V,2,1,"td",3),t.BQk(),t.ynx(4,4),t.YNc(5,v,2,0,"th",2),t.YNc(6,B,5,1,"td",3),t.BQk(),t.ynx(7,5),t.YNc(8,H,2,0,"th",2),t.YNc(9,P,5,1,"td",3),t.BQk(),t.ynx(10,6),t.YNc(11,Y,2,0,"th",2),t.YNc(12,F,2,1,"td",3),t.BQk(),t.YNc(13,k,1,0,"tr",7),t.YNc(14,E,1,0,"tr",8),t.qZA()),2&e&&(t.Q6J("dataSource",n.round),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns))},dependencies:[c.Fj,c.wV,c.JJ,c.qQ,c.Fd,c.On,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,C.KE,C.hX,W.Nt,S],styles:["table[_ngcontent-%COMP%], form[_ngcontent-%COMP%]{width:100%}"]}),i})();var $=d(7379);let z=(()=>{class i{constructor(e){this.teamDb=e,this.opponent=0,this.wins=0,this.losses=0,this.opponentTeam=new $.S}ngOnInit(){this.opponent=this.teamIndex===this.matchup.team1?this.matchup.team2:this.matchup.team1,this.wins=this.teamIndex===this.matchup.team1?this.matchup.team1Wins:this.matchup.team2Wins,this.losses=this.teamIndex===this.matchup.team1?this.matchup.team2Wins:this.matchup.team1Wins,this.opponentTeam=this.teamDb.getTeam(this.opponent)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(Z.n))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-swiss-opponent"]],inputs:{teamIndex:"teamIndex",matchup:"matchup"},decls:4,vars:5,consts:[["selected","",3,"color"],["matChipAvatar","",3,"src","alt"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-chip-list")(1,"mat-chip",0),t._UZ(2,"img",1),t._uU(3),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("color",n.wins>n.losses?"primary":"accent"),t.xp6(1),t.s9C("src",n.opponentTeam.imagePath,t.LSH),t.s9C("alt",n.opponentTeam.teamName),t.xp6(1),t.AsE(" ",n.wins," - ",n.losses," "))},dependencies:[f.qn,f.HS,f.EC]}),i})();function X(i,s){1&i&&(t.TgZ(0,"th",12),t._uU(1,"Seed"),t.qZA())}function G(i,s){if(1&i&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&i){const e=s.$implicit,n=t.oxw();t.xp6(1),t.hij(" ",n.teamDb.getTeam(e.teamIndex).seed," ")}}function K(i,s){1&i&&(t.TgZ(0,"th",12),t._uU(1,"Team Name"),t.qZA())}function tt(i,s){if(1&i&&(t.TgZ(0,"td",13),t._UZ(1,"app-team",14),t.qZA()),2&i){const e=s.$implicit;t.xp6(1),t.Q6J("id",e.teamIndex)}}function et(i,s){1&i&&(t.TgZ(0,"th",12),t._uU(1,"Round 1"),t.qZA())}function nt(i,s){if(1&i&&(t.TgZ(0,"td",13),t._UZ(1,"app-swiss-opponent",15),t.qZA()),2&i){const e=s.$implicit;t.xp6(1),t.Q6J("teamIndex",e.teamIndex)("matchup",e.swissMatchup[0])}}function it(i,s){1&i&&(t.TgZ(0,"th",12),t._uU(1,"Round 2"),t.qZA())}function st(i,s){if(1&i&&t._UZ(0,"app-swiss-opponent",15),2&i){const e=t.oxw().$implicit;t.Q6J("teamIndex",e.teamIndex)("matchup",e.swissMatchup[1])}}function at(i,s){if(1&i&&(t.TgZ(0,"td",13),t.YNc(1,st,1,2,"app-swiss-opponent",16),t.qZA()),2&i){const e=s.$implicit;t.xp6(1),t.Q6J("ngIf",e.swissMatchup[1])}}function ot(i,s){1&i&&(t.TgZ(0,"th",12),t._uU(1,"Round 3"),t.qZA())}function mt(i,s){if(1&i&&t._UZ(0,"app-swiss-opponent",15),2&i){const e=t.oxw().$implicit;t.Q6J("teamIndex",e.teamIndex)("matchup",e.swissMatchup[2])}}function pt(i,s){if(1&i&&(t.TgZ(0,"td",13),t.YNc(1,mt,1,2,"app-swiss-opponent",16),t.qZA()),2&i){const e=s.$implicit;t.xp6(1),t.Q6J("ngIf",e.swissMatchup[2])}}function lt(i,s){1&i&&(t.TgZ(0,"th",12),t._uU(1,"Round 4"),t.qZA())}function dt(i,s){if(1&i&&t._UZ(0,"app-swiss-opponent",15),2&i){const e=t.oxw().$implicit;t.Q6J("teamIndex",e.teamIndex)("matchup",e.swissMatchup[3])}}function ut(i,s){if(1&i&&(t.TgZ(0,"td",13),t.YNc(1,dt,1,2,"app-swiss-opponent",16),t.qZA()),2&i){const e=s.$implicit;t.xp6(1),t.Q6J("ngIf",e.swissMatchup[3])}}function rt(i,s){1&i&&(t.TgZ(0,"th",12),t._uU(1,"Round 5"),t.qZA())}function ht(i,s){if(1&i&&t._UZ(0,"app-swiss-opponent",15),2&i){const e=t.oxw().$implicit;t.Q6J("teamIndex",e.teamIndex)("matchup",e.swissMatchup[4])}}function ct(i,s){if(1&i&&(t.TgZ(0,"td",13),t.YNc(1,ht,1,2,"app-swiss-opponent",16),t.qZA()),2&i){const e=s.$implicit;t.xp6(1),t.Q6J("ngIf",e.swissMatchup[4])}}function _t(i,s){1&i&&t._UZ(0,"tr",17)}function gt(i,s){1&i&&t._UZ(0,"tr",18)}let ft=(()=>{class i{constructor(e){this.teamDb=e,this.displayedColumns=["teamName","Round 1"]}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(Z.n))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-leader-board"]],inputs:{teams:"teams",displayedColumns:"displayedColumns"},decls:24,vars:3,consts:[["mat-table","",3,"dataSource"],["matColumnDef","seed"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","teamName"],["matColumnDef","Round 1"],["matColumnDef","Round 2"],["matColumnDef","Round 3"],["matColumnDef","Round 4"],["matColumnDef","Round 5"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"id"],[3,"teamIndex","matchup"],[3,"teamIndex","matchup",4,"ngIf"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"table",0),t.ynx(1,1),t.YNc(2,X,2,0,"th",2),t.YNc(3,G,2,1,"td",3),t.BQk(),t.ynx(4,4),t.YNc(5,K,2,0,"th",2),t.YNc(6,tt,2,1,"td",3),t.BQk(),t.ynx(7,5),t.YNc(8,et,2,0,"th",2),t.YNc(9,nt,2,2,"td",3),t.BQk(),t.ynx(10,6),t.YNc(11,it,2,0,"th",2),t.YNc(12,at,2,1,"td",3),t.BQk(),t.ynx(13,7),t.YNc(14,ot,2,0,"th",2),t.YNc(15,pt,2,1,"td",3),t.BQk(),t.ynx(16,8),t.YNc(17,lt,2,0,"th",2),t.YNc(18,ut,2,1,"td",3),t.BQk(),t.ynx(19,9),t.YNc(20,rt,2,0,"th",2),t.YNc(21,ct,2,1,"td",3),t.BQk(),t.YNc(22,_t,1,0,"tr",10),t.YNc(23,gt,1,0,"tr",11),t.qZA()),2&e&&(t.Q6J("dataSource",n.teams),t.xp6(22),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns))},dependencies:[w.O5,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,S,z],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),i})(),wt=(()=>{class i{constructor(){this.teamsTop8=new t.vpe,this.displayedColumns=["teamName","Round 1"],this.teamsUnsorted=[],this.teamsSorted=new m.by([]),this.round1=new m.by([]),this.round2High=new m.by([]),this.round2Low=new m.by([]),this.round2HighValid=!1,this.round2LowValid=!1,this.round3High=new m.by([]),this.round3Mid=new m.by([]),this.round3Low=new m.by([]),this.round3HighValid=!1,this.round3MidValid=!1,this.round3LowValid=!1,this.round4High=new m.by([]),this.round4Low=new m.by([]),this.round4HighValid=!1,this.round4LowValid=!1,this.round5=new m.by([])}ngOnInit(){this.sub=this.loadBracket.subscribe(()=>{let e=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];for(let n of e)this.teamsUnsorted.push(new _(n,[]));this.teamsSorted.data=this.teamsUnsorted.slice().sort(_.sortFunctionAllMatches),this.initiateBracket()})}ngOnDestroy(){this.sub.unsubscribe()}resetTable(){this.teamsUnsorted=[],this.teamsSorted=new m.by([]),this.round1=new m.by([]),this.round2High=new m.by([]),this.round2Low=new m.by([]),this.round2HighValid=!1,this.round2LowValid=!1,this.round3High=new m.by([]),this.round3Mid=new m.by([]),this.round3Low=new m.by([]),this.round3HighValid=!1,this.round3MidValid=!1,this.round3LowValid=!1,this.round4High=new m.by([]),this.round4Low=new m.by([]),this.round4HighValid=!1,this.round4LowValid=!1,this.round5=new m.by([])}refreshData(){let e=this.teamsSorted.data.slice().sort(_.sortFunctionAllMatches);this.teamsSorted.data=[],this.teamsSorted.data=e}initiateBracket(){this.round1.data=this.fillTeams(this.teamsUnsorted)}generateRound2(){for(let a of this.teamsUnsorted)a.swissMatchup=a.swissMatchup.slice(0,1),a.update();let e=[],n=[];for(let a of this.round1.data){const[o,p]=u.teamWon(a);e.push(this.teamsUnsorted[o]),n.push(this.teamsUnsorted[p])}e.sort(_.sortFunctionSwissRound),n.sort(_.sortFunctionSwissRound),this.round2High.data=this.fillTeams(e),this.round2Low.data=this.fillTeams(n),this.refreshData()}initiateRound2(e){!e||(this.generateRound2(),this.displayedColumns.length<3&&this.displayedColumns.push("Round 2"))}round2H(e){this.round2HighValid=e,this.initiateRound3()}round2L(e){this.round2LowValid=e,this.initiateRound3()}initiateRound3(){this.round2HighValid&&this.round2LowValid&&(this.generateRound3(),this.displayedColumns.length<4&&this.displayedColumns.push("Round 3"),this.refreshData())}generateRound3(){for(let o of this.teamsUnsorted)o.swissMatchup=o.swissMatchup.slice(0,2),o.update();let e=[],n=[],a=[];for(let o of this.round2High.data){const[p,l]=u.teamWon(o);e.push(this.teamsUnsorted[p]),n.push(this.teamsUnsorted[l])}for(let o of this.round2Low.data){const[p,l]=u.teamWon(o);n.push(this.teamsUnsorted[p]),a.push(this.teamsUnsorted[l])}e.sort(_.sortFunctionSwissRound),n.sort(_.sortFunctionSwissRound),a.sort(_.sortFunctionSwissRound),this.round3High.data=this.fillTeams(e),this.round3Mid.data=this.fillTeams(n),this.round3Low.data=this.fillTeams(a)}round3H(e){this.round3HighValid=e,this.initiateRound4()}round3M(e){this.round3MidValid=e,this.initiateRound4()}round3L(e){this.round3LowValid=e,this.initiateRound4()}initiateRound4(){this.round3HighValid&&this.round3MidValid&&this.round3LowValid&&(this.generateRound4(),this.displayedColumns.length<5&&this.displayedColumns.push("Round 4"),this.refreshData())}generateRound4(){for(let a of this.teamsUnsorted)a.swissMatchup=a.swissMatchup.slice(0,3),a.update();let e=[],n=[];for(let a of this.round3High.data){const[o,p]=u.teamWon(a);e.push(this.teamsUnsorted[p])}for(let a of this.round3Mid.data){const[o,p]=u.teamWon(a);e.push(this.teamsUnsorted[o]),n.push(this.teamsUnsorted[p])}for(let a of this.round3Low.data){const[o,p]=u.teamWon(a);n.push(this.teamsUnsorted[o])}e.sort(_.sortFunctionSwissRound),n.sort(_.sortFunctionSwissRound),this.round4High.data=this.fillTeams(e),this.round4Low.data=this.fillTeams(n)}round4H(e){this.round4HighValid=e,this.initiateRound5()}round4L(e){this.round4LowValid=e,this.initiateRound5()}initiateRound5(){this.round4HighValid&&this.round4LowValid&&(this.generateRound5(),this.refreshData(),this.displayedColumns.length<6&&this.displayedColumns.push("Round 5"))}generateRound5(){for(let n of this.teamsUnsorted)n.swissMatchup=n.swissMatchup.slice(0,4),n.update();let e=[];for(let n of this.round4High.data){const[a,o]=u.teamWon(n);e.push(this.teamsUnsorted[o])}for(let n of this.round4Low.data){const[a,o]=u.teamWon(n);e.push(this.teamsUnsorted[a])}e.sort(_.sortFunctionSwissRound),this.round5.data=this.fillTeams(e)}round5Val(e){if(e){this.refreshData();let n=[];for(let a of this.teamsSorted.data.slice(0,8))n.push(a.teamIndex);this.teamsTop8.next(n)}}testButton(){}fillTeams(e){let n=[],a=l=>{if(l.length<1)return[];let r=l[0].teamIndex;for(var h=0;h<l.length-1;h++){let b=l[l.length-1-h].teamIndex;if(void 0!==this.teamsUnsorted[b].teamBlacklist.find(yt=>yt==r))continue;let U=a(l.slice(1,l.length-1-h).concat(l.slice(l.length-h)));if(void 0===U)continue;let J=[new u(r,b)];return J.push(...U),J}},o=a(e);if(void 0===o){console.log("matchups undefined");for(var p=0;p<e.length/2;p++){let l=e[p].teamIndex,r=e[e.length-1-p].teamIndex,h=new u(l,r);n[p]=h,this.teamsUnsorted[l].swissMatchup.push(h),this.teamsUnsorted[r].swissMatchup.push(h)}}else{n=o;for(let l of n){let h=l.team2;this.teamsUnsorted[l.team1].swissMatchup.push(l),this.teamsUnsorted[h].swissMatchup.push(l)}}return n}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-swiss-stage"]],inputs:{loadBracket:"loadBracket"},outputs:{teamsTop8:"teamsTop8"},decls:69,vars:11,consts:[[1,"container"],[1,"item",2,"flex-grow","1"],[3,"teams","displayedColumns"],[1,"item",2,"flex-grow","2"],[2,"width","100%",3,"round","isValid","tableUpdate"],[2,"width","100%",3,"round","isValid"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-toolbar"),t._uU(1," Swiss Stage\n"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1),t._UZ(4,"app-leader-board",2),t.qZA(),t.TgZ(5,"div",3)(6,"mat-toolbar"),t._uU(7," Round 1 "),t.qZA(),t.TgZ(8,"app-swiss-matchup",4),t.NdJ("isValid",function(o){return n.initiateRound2(o)})("tableUpdate",function(){return n.refreshData()}),t.qZA(),t.TgZ(9,"mat-toolbar"),t._uU(10," Round 2 "),t.qZA(),t.TgZ(11,"div",0)(12,"div",1)(13,"mat-card")(14,"mat-card-title"),t._uU(15,"High"),t.qZA(),t.TgZ(16,"mat-card-content")(17,"app-swiss-matchup",5),t.NdJ("isValid",function(o){return n.round2H(o)}),t.qZA()()()(),t.TgZ(18,"div",1)(19,"mat-card")(20,"mat-card-title"),t._uU(21,"Low"),t.qZA(),t.TgZ(22,"mat-card-content")(23,"app-swiss-matchup",5),t.NdJ("isValid",function(o){return n.round2L(o)}),t.qZA()()()()(),t.TgZ(24,"mat-toolbar"),t._uU(25," Round 3 "),t.qZA(),t.TgZ(26,"div",0)(27,"div",1)(28,"mat-card")(29,"mat-card-title"),t._uU(30,"High"),t.qZA(),t.TgZ(31,"mat-card-content")(32,"app-swiss-matchup",5),t.NdJ("isValid",function(o){return n.round3H(o)}),t.qZA()()()(),t.TgZ(33,"div",1)(34,"mat-card")(35,"mat-card-title"),t._uU(36,"Mid"),t.qZA(),t.TgZ(37,"mat-card-content")(38,"app-swiss-matchup",5),t.NdJ("isValid",function(o){return n.round3M(o)}),t.qZA()()()(),t.TgZ(39,"div",1)(40,"mat-card")(41,"mat-card-title"),t._uU(42,"Low"),t.qZA(),t.TgZ(43,"mat-card-content")(44,"app-swiss-matchup",5),t.NdJ("isValid",function(o){return n.round3L(o)}),t.qZA()()()()(),t.TgZ(45,"mat-toolbar"),t._uU(46," Round 4 "),t.qZA(),t.TgZ(47,"div",0)(48,"div",1)(49,"mat-card")(50,"mat-card-title"),t._uU(51,"High"),t.qZA(),t.TgZ(52,"mat-card-content")(53,"app-swiss-matchup",5),t.NdJ("isValid",function(o){return n.round4H(o)}),t.qZA()()()(),t.TgZ(54,"div",1)(55,"mat-card")(56,"mat-card-title"),t._uU(57,"Low"),t.qZA(),t.TgZ(58,"mat-card-content")(59,"app-swiss-matchup",5),t.NdJ("isValid",function(o){return n.round4L(o)}),t.qZA()()()()(),t.TgZ(60,"mat-toolbar"),t._uU(61," Round 5 "),t.qZA(),t.TgZ(62,"div",0)(63,"div",1)(64,"mat-card")(65,"mat-card-title"),t._uU(66,"High"),t.qZA(),t.TgZ(67,"mat-card-content")(68,"app-swiss-matchup",5),t.NdJ("isValid",function(o){return n.round5Val(o)}),t.qZA()()()()()()()),2&e&&(t.xp6(4),t.Q6J("teams",n.teamsSorted)("displayedColumns",n.displayedColumns),t.xp6(4),t.Q6J("round",n.round1),t.xp6(9),t.Q6J("round",n.round2High),t.xp6(6),t.Q6J("round",n.round2Low),t.xp6(9),t.Q6J("round",n.round3High),t.xp6(6),t.Q6J("round",n.round3Mid),t.xp6(6),t.Q6J("round",n.round3Low),t.xp6(9),t.Q6J("round",n.round4High),t.xp6(6),t.Q6J("round",n.round4Low),t.xp6(9),t.Q6J("round",n.round5))},dependencies:[M.Ye,T.a8,T.dn,T.n5,j,ft],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center}table[_ngcontent-%COMP%]{width:90%;margin:auto}.formItem[_ngcontent-%COMP%]{flex-grow:1}"]}),i})();var Tt=d(7654);class g extends x.x{constructor(s=1/0,e=1/0,n=Tt.l){super(),this._bufferSize=s,this._windowTime=e,this._timestampProvider=n,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,s),this._windowTime=Math.max(1,e)}next(s){const{isStopped:e,_buffer:n,_infiniteTimeWindow:a,_timestampProvider:o,_windowTime:p}=this;e||(n.push(s),!a&&n.push(o.now()+p)),this._trimBuffer(),super.next(s)}_subscribe(s){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(s),{_infiniteTimeWindow:n,_buffer:a}=this,o=a.slice();for(let p=0;p<o.length&&!s.closed;p+=n?1:2)s.next(o[p]);return this._checkFinalizedStatuses(s),e}_trimBuffer(){const{_bufferSize:s,_timestampProvider:e,_buffer:n,_infiniteTimeWindow:a}=this,o=(a?1:2)*s;if(s<1/0&&o<n.length&&n.splice(0,n.length-o),!a){const p=e.now();let l=0;for(let r=1;r<n.length&&n[r]<=p;r+=2)l=r;l&&n.splice(0,l+1)}}}let Ct=(()=>{class i{constructor(){this.team=-1,this.teamWon=new t.vpe,this.teamScore=0}ngOnInit(){}checkWin(){4===this.teamScore&&this.teamWon.next()}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-single-matchup"]],inputs:{team:"team",top:"top"},outputs:{teamWon:"teamWon"},decls:4,vars:3,consts:[[1,"",3,"ngClass"],[3,"id"],["matInput","","type","number","min","0","max","4",3,"ngModel","ngModelChange","input"]],template:function(e,n){1&e&&(t.TgZ(0,"li",0),t._UZ(1,"app-team",1),t.TgZ(2,"mat-form-field")(3,"input",2),t.NdJ("ngModelChange",function(o){return n.teamScore=o})("input",function(){return n.checkWin()}),t.qZA()()()),2&e&&(t.Q6J("ngClass",n.top?"game game-top":"game game-bottom"),t.xp6(1),t.Q6J("id",n.team),t.xp6(2),t.Q6J("ngModel",n.teamScore))},dependencies:[c.Fj,c.wV,c.JJ,c.qQ,c.Fd,c.On,w.mk,C.KE,W.Nt,S],styles:[".teamContainer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center}mat-form-field[_ngcontent-%COMP%]{width:50px}.round[_ngcontent-%COMP%]   .game-spacer[_ngcontent-%COMP%]{flex-grow:1}li[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center}li.game[_ngcontent-%COMP%]{padding-left:20px}li.game.winner[_ngcontent-%COMP%]{font-weight:700}li.game[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right;margin-right:5px}li.game-top[_ngcontent-%COMP%]{border-bottom:1px solid #aaa}li.game-spacer[_ngcontent-%COMP%]{border-right:1px solid #aaa;min-height:40px}li.game-bottom[_ngcontent-%COMP%]{border-top:1px solid #aaa}"]}),i})(),Zt=(()=>{class i{constructor(){this.teams=Array(8),this.match1Winner=new g,this.match2Winner=new g,this.match3Winner=new g,this.match4Winner=new g,this.round2Match1Winner=new g,this.round2Match2Winner=new g,this.winner=new g;for(let e=0;e<8;e++)this.teams[e]=new g}ngOnDestroy(){this.teamsChanged.unsubscribe()}ngOnInit(){this.teamsChanged=this.teamsSubject.subscribe(e=>{for(let n=0;n<e.length&&n<this.teams.length;n++)this.teams[n].next(e[n])})}updateResults(e,n){e.subscribe(o=>{n.next(o)}).unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-single-elim"]],inputs:{teamsSubject:"teamsSubject"},decls:61,vars:29,consts:[[1,"container"],[1,"tournament"],[1,"round","round-2"],[1,"spacer"],[3,"top","team","teamWon"],[1,"game","game-spacer"],[1,"round","round-3"],[1,"round","round-4"],[1,"round","round-5"],[3,"id"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-toolbar"),t._uU(1," Single Elimination Stage\n"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1)(4,"ul",2)(5,"li",3),t._uU(6,"\xa0"),t.qZA(),t.TgZ(7,"app-single-matchup",4),t.NdJ("teamWon",function(){return n.updateResults(n.teams[0],n.match1Winner)}),t.qZA(),t.TgZ(8,"li",5),t._uU(9,"\xa0"),t.qZA(),t.TgZ(10,"app-single-matchup",4),t.NdJ("teamWon",function(){return n.updateResults(n.teams[7],n.match1Winner)}),t.qZA(),t.TgZ(11,"li",3),t._uU(12,"\xa0"),t.qZA(),t.TgZ(13,"app-single-matchup",4),t.NdJ("teamWon",function(){return n.updateResults(n.teams[3],n.match2Winner)}),t.qZA(),t.TgZ(14,"li",5),t._uU(15,"\xa0"),t.qZA(),t.TgZ(16,"app-single-matchup",4),t.NdJ("teamWon",function(){return n.updateResults(n.teams[4],n.match2Winner)}),t.qZA(),t.TgZ(17,"li",3),t._uU(18,"\xa0"),t.qZA(),t.TgZ(19,"app-single-matchup",4),t.NdJ("teamWon",function(){return n.updateResults(n.teams[1],n.match3Winner)}),t.qZA(),t.TgZ(20,"li",5),t._uU(21,"\xa0"),t.qZA(),t.TgZ(22,"app-single-matchup",4),t.NdJ("teamWon",function(){return n.updateResults(n.teams[6],n.match3Winner)}),t.qZA(),t.TgZ(23,"li",3),t._uU(24,"\xa0"),t.qZA(),t.TgZ(25,"app-single-matchup",4),t.NdJ("teamWon",function(){return n.updateResults(n.teams[2],n.match4Winner)}),t.qZA(),t.TgZ(26,"li",5),t._uU(27,"\xa0"),t.qZA(),t.TgZ(28,"app-single-matchup",4),t.NdJ("teamWon",function(){return n.updateResults(n.teams[5],n.match4Winner)}),t.qZA(),t.TgZ(29,"li",3),t._uU(30,"\xa0"),t.qZA()(),t.TgZ(31,"ul",6)(32,"li",3),t._uU(33,"\xa0"),t.qZA(),t.TgZ(34,"app-single-matchup",4),t.NdJ("teamWon",function(){return n.updateResults(n.match1Winner,n.round2Match1Winner)}),t.qZA(),t.TgZ(35,"li",5),t._uU(36,"\xa0"),t.qZA(),t.TgZ(37,"app-single-matchup",4),t.NdJ("teamWon",function(){return n.updateResults(n.match2Winner,n.round2Match1Winner)}),t.qZA(),t.TgZ(38,"li",3),t._uU(39,"\xa0"),t.qZA(),t.TgZ(40,"app-single-matchup",4),t.NdJ("teamWon",function(){return n.updateResults(n.match3Winner,n.round2Match2Winner)}),t.qZA(),t.TgZ(41,"li",5),t._uU(42,"\xa0"),t.qZA(),t.TgZ(43,"app-single-matchup",4),t.NdJ("teamWon",function(){return n.updateResults(n.match4Winner,n.round2Match2Winner)}),t.qZA(),t.TgZ(44,"li",3),t._uU(45,"\xa0"),t.qZA()(),t.TgZ(46,"ul",7)(47,"li",3),t._uU(48,"\xa0"),t.qZA(),t.TgZ(49,"app-single-matchup",4),t.NdJ("teamWon",function(){return n.updateResults(n.round2Match1Winner,n.winner)}),t.qZA(),t.TgZ(50,"li",5),t._uU(51,"\xa0"),t.qZA(),t.TgZ(52,"app-single-matchup",4),t.NdJ("teamWon",function(){return n.updateResults(n.round2Match2Winner,n.winner)}),t.qZA(),t.TgZ(53,"li",3),t._uU(54,"\xa0"),t.qZA()(),t.TgZ(55,"ul",8)(56,"li",3),t._uU(57,"\xa0"),t.qZA(),t._UZ(58,"app-team",9),t.TgZ(59,"li",3),t._uU(60,"\xa0"),t.qZA()()()()),2&e&&(t.xp6(7),t.Q6J("top",1)("team",n.teams[0]),t.xp6(3),t.Q6J("top",0)("team",n.teams[7]),t.xp6(3),t.Q6J("top",1)("team",n.teams[3]),t.xp6(3),t.Q6J("top",0)("team",n.teams[4]),t.xp6(3),t.Q6J("top",1)("team",n.teams[1]),t.xp6(3),t.Q6J("top",0)("team",n.teams[6]),t.xp6(3),t.Q6J("top",1)("team",n.teams[2]),t.xp6(3),t.Q6J("top",0)("team",n.teams[5]),t.xp6(6),t.Q6J("top",1)("team",n.match1Winner),t.xp6(3),t.Q6J("top",0)("team",n.match2Winner),t.xp6(3),t.Q6J("top",1)("team",n.match3Winner),t.xp6(3),t.Q6J("top",0)("team",n.match4Winner),t.xp6(6),t.Q6J("top",1)("team",n.round2Match1Winner),t.xp6(3),t.Q6J("top",0)("team",n.round2Match2Winner),t.xp6(6),t.Q6J("id",n.winner))},dependencies:[M.Ye,S,Ct],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}.tournament[_ngcontent-%COMP%]{display:flex;flex-direction:row}.round[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;width:300px;list-style:none;padding:0}.round[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex-grow:1}.round[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]:first-child, .round[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]:last-child{flex-grow:.5}.round[_ngcontent-%COMP%]   .game-spacer[_ngcontent-%COMP%]{flex-grow:1.45}body[_ngcontent-%COMP%]{font-family:sans-serif;font-size:small;padding:10px;line-height:1.4em}li.game[_ngcontent-%COMP%]{padding-left:20px}li.game.winner[_ngcontent-%COMP%]{font-weight:700}li.game[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right;margin-right:5px}li.game-top[_ngcontent-%COMP%]{border-bottom:1px solid #aaa}li.game-spacer[_ngcontent-%COMP%]{border-right:1px solid #aaa;min-height:40px}li.game-bottom[_ngcontent-%COMP%]{border-top:1px solid #aaa}"]}),i})();const St=[{path:"",component:(()=>{class i{constructor(e,n){this.teamsDb=e,this.route=n,this.params=[],this.teamsTop16=[],this.teamsTop8=new x.x,this.initiateBracket=new t.vpe,this.teamsChanged=this.teamsDb.teamsChanged.subscribe(()=>{this.teamsTop16=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],this.initiateBracket.next()})}ngOnDestroy(){this.teamsChanged.unsubscribe()}ngOnInit(){this.route.queryParams.subscribe(e=>{let n=e.teams;void 0!==n&&(this.params=n.split(" "),this.teamsDb.initiateTeamsDb(this.params))})}getTeams(){return this.teamsTop16.slice()}setTop8(e){this.teamsTop8.next(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(Z.n),t.Y36(y.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-swiss-to-single"]],decls:3,vars:2,consts:[[1,"container"],[1,"item",3,"loadBracket","teamsTop8"],[1,"item",3,"teamsSubject"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"app-swiss-stage",1),t.NdJ("teamsTop8",function(o){return n.setTop8(o)}),t.qZA(),t._UZ(2,"app-single-elim",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("loadBracket",n.initiateBracket),t.xp6(1),t.Q6J("teamsSubject",n.teamsTop8))},dependencies:[wt,Zt],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.item[_ngcontent-%COMP%]{width:100%}"]}),i})()}];let Mt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[y.Bz.forChild(St),y.Bz]}),i})(),Wt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.u5,w.ez,M.g0,R.ot,q.N6,T.QW,m.p0,f.Hi,W.c,C.lN,L.LD,N.JF,Q.m,Mt]}),i})()}}]);
//# sourceMappingURL=src_app_swiss-to-single_swiss-to-single_module_ts.js.map