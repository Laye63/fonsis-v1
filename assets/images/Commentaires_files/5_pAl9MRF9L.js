if (self.CavalryLogger) { CavalryLogger.start_js(["p8HkZ"]); }

__d("ChatProxyConnectionState",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){this.auxiliaryIrisQueues={};this.aiq=null}h.prototype.subscribeIrisQueue=function(i,j){this.auxiliaryIrisQueues[i]=j;this.updateCaches()};h.prototype.unsubscribeIrisQueue=function(i){delete this.auxiliaryIrisQueues[i];this.updateCaches()};h.prototype.updateCaches=function(){var i=[];for(var j in this.auxiliaryIrisQueues)if(Object.prototype.hasOwnProperty.call(this.auxiliaryIrisQueues,j)){i.push(j);i.push(this.auxiliaryIrisQueues[j])}if(i.length===0)this.aiq=null;else this.aiq=i.join(",")};f.exports=h}),null);
__d("ChannelDefaults",[],(function a(b,c,d,e,f,g){f.exports={LONGPOLL_TIMEOUT:6e4,STALL_THRESHOLD:18e4,MIN_RETRY_INTERVAL:5e3,MAX_RETRY_INTERVAL:3e4}}),null);
__d("ChannelStateMap",[],(function a(b,c,d,e,f,g){f.exports={pull:{ok:"pull!",error:"pull",error_missing:"pull",error_msg_type:"pull",clock_anomaly:"pull!",visible:"pull!",hidden:"idle!",refresh_0:"reconnect",refresh_110:"reconnect!",refresh_111:"reconnect",refresh_112:"pull",refresh_113:"pull",refresh_117:"reconnect"},reconnect:{ok:"pull!",error:"reconnect",clock_anomaly:"reconnect!",visible:"pull!",hidden:"idle!"},idle:{ok:"idle!",clock_anomaly:"idle!",visible:"pull!",hidden:"idle!"},shutdown:{clock_anomaly:"shutdown!",visible:"shutdown!",hidden:"shutdown!"}}}),null);
__d("RTISession",["getCrossOriginTransport","URI","XHRRequest","invariant","ErrorUtils","PHPQuerySerializer"],(function a(b,c,d,e,f,g,h,i,j,k,l,m){"use strict";__p&&__p();var n=".facebook.com";function o(p,q,r,s,t,u,v,w,x){__p&&__p();p||k(0);s||k(0);t||k(0);this.domain=p;this.port=q;this.edgePoolName=r;this.stickyToken=s;this.loggedInId=t;this.accountId=u;this.clientProfile=v||"desktop";this.clientId=w;this.capabilities=x}o.prototype.issueRequest=function(p,q,r,s,t){__p&&__p();p||k(0);q||k(0);s||k(0);var u=this.domain.length-n.length,v=u>0&&this.domain.indexOf(n,u)!==-1,w=v?this.domain:this.domain+n,x=(1048576*Math.random()|0).toString(36),y={cb:x,sticky_token:this.stickyToken,uid:this.loggedInId,viewer_uid:this.accountId,sticky_pool:this.edgePoolName,profile:this.clientProfile,clientid:this.clientId,cap:this.capabilities};for(var z in y)!q[z]||k(0);Object.assign(y,q);var A=new i(p).setDomain(w).setPort(this.port).setSecure(new i(window.location.href).isSecure()).setQueryData(y),B=r?"POST":"GET",C={};new j(A).setTransportBuilder(h.withCredentials).setTimeout(t?t*1e3:3e4).setMethod(B).setDataSerializer(function(D){return m.serialize(JSON.stringify(D))}).setData(r).setRequestHeader("Content-Type","application/x-www-form-urlencoded").setResponseHandler(function(D){var E=D.substring("for (;;);".length);C.data=JSON.parse(E);C.error=null;l.applyWithGuard(s,this,[C])}.bind(this)).setErrorHandler(function(D){C.data=null;C.error=D.errorMsg||"error";l.applyWithGuard(s,this,[C])}.bind(this)).send()};f.exports=o}),null);
__d("StateMachine",["setTimeoutAcrossTransitions","EventEmitter","ex"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k,l,m=0;function n(q,r){"use strict";this.idx=m++;this.machine=q;this.asap=r&&r.substr(-1)=="!";this.name=this.asap?r.substr(0,r.length-1):r;this.progress=p.NEW;this.status=null}n.prototype.enter=function(){"use strict";this.machine.enter_private(this)};n.prototype.exit=function(q){"use strict";this.machine.exit_private(this,q)};n.prototype.toString=function(){"use strict";return this.name+"("+this.progress+","+this.status+")"};var o="_ABORT_";k=babelHelpers.inherits(p,i);l=k&&k.prototype;function p(q,r){"use strict";l.constructor.call(this);this.$StateMachine1=q;this.$StateMachine2=r;this.$StateMachine3=0;this.$StateMachine4=[];this.$StateMachine5=Date.now()}p.prototype.$StateMachine6=function(q){"use strict";this.$StateMachine4.push(Date.now()-this.$StateMachine5+": "+q);if(this.$StateMachine4.length>40)this.$StateMachine4=this.$StateMachine4.splice(-20)};p.prototype.getState=function(){"use strict";return this.$StateMachine7};p.prototype.setDelay=function(q){"use strict";this.$StateMachine3=q||0;return this};p.prototype.getDelay=function(){"use strict";return this.$StateMachine3};p.prototype.enter=function(q){"use strict";this.enter_private(new n(this,q))};p.prototype.enter_private=function(q){"use strict";__p&&__p();this.$StateMachine6("enter "+q+", "+this.$StateMachine7);if(this.$StateMachine7&&this.$StateMachine7!=q)this.$StateMachine7.exit(o);this.$StateMachine7=q;if(q.asap){delete q.asap;if(this.$StateMachine2.enter)this.$StateMachine2.enter(q);q.progress=p.ENTERED}else{q.progress=p.PENDING;q.asap=true;q.$StateMachine8=h(function(){q.enter()},this.$StateMachine3)}this.emit(p.ENTER,q)};p.prototype.exit=function(q){"use strict";this.exit_private(this.$StateMachine7,q)};p.prototype.exit_private=function(q,r){"use strict";__p&&__p();this.$StateMachine6("exit "+q+", "+r+", "+this.$StateMachine7);if(!q||q!=this.$StateMachine7)throw new Error(j("Invalid state: %s, history: %s",q,this.$StateMachine4.join("|")));if(q.progress==p.EXITED)return;q.status=r;q.progress=p.EXITED;if(q.$StateMachine8){clearInterval(q.$StateMachine8);q.$StateMachine8=null}this.$StateMachine7=null;if(q&&this.$StateMachine2.exit)this.$StateMachine2.exit(q);q.exited=true;this.emit(p.EXIT,q);if(r!=o){var s=this.$StateMachine1[q.name];if(!s||!s[r])throw new Error(j("No exit for state:%s, status: %s",q.name,r));this.enter(s[r])}};p.ENTER="enter";p.EXIT="exit";p.NEW="new";p.PENDING="pending";p.ENTERED="entered";p.EXITED="exited";f.exports=p}),null);
__d("rand32",[],(function a(b,c,d,e,f,g){function h(){return Math.floor(Math.random()*4294967295)}f.exports=h}),null);
__d("MChannelManager",["Banzai","ChannelClientConfig","ChannelClientID","ChannelDefaults","ChannelEventEmitter","ChannelEventType","ChannelStateMap","ChatProxyConnectionState","Clock","LogHistory","FBLogger","MRequest","MURI","RTISession","StateMachine","URI","Visibility","rand32","setTimeoutAcrossTransitions"],(function aa(a,ba,ca,da,b,ea,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){__p&&__p();var v,w="ok",x="error",fa="error_missing",y=6e4,z=null,A=null,B=null,C=null,D=null,E=-1,F=null,G=0,H=e.getID(),I=false,J={enter:function U(V){__p&&__p();if(C){C.abort();C=null}switch(V.name){case"pull":if(!A.uri)break;if(A.disabled)break;var W=new r(A.uri),X={channel:A.user_channel,seq:B,clientid:H,profile:"mobile",partition:A.partition,sticky_token:E,msgs_recv:G,qp:"y",cb:t()};if(E==-1&&A.msgr_region)X.msgr_region=A.msgr_region;if(A.chat_enabled)X.state="active";if(F)X.sticky_pool=F;if(A.uid&&A.viewerUid){X.uid=A.uid;X.viewer_uid=A.viewerUid}if(A.state.aiq)X.aiq=A.state.aiq;C=new n(W+"").setCORS(true).setMethod("GET").setData(X).setRaw(true);C.listen("open",function(Z){Z.getTransport().withCredentials=true});C.listen("done",function(Z){O(V,Z)});C.listen("error",function(){O(V)});break;case"reconnect":var Y=new o("/a/channel/reconnect.php");C=new n(Y+"").setMethod("GET");C.listen("done",function(Z){M(V,Z)});C.listen("error",function(Z){Z.isHandled=true;M(V)});break;default:}if(C)C.send()},exit:function U(V){__p&&__p();if(V.status==="ok"){if(V.name==="pull")v.setDelay(0)}else if(!(V.status==null)){var W=v.getDelay();W=W>0?W*2:z.MIN_RETRY_INTERVAL;W=Math.min(W,z.MAX_RETRY_INTERVAL);v.setDelay(W)}if(C){C.abort();C=null}}};function K(){var U=null;if(I&&A&&A.host&&E&&A.uid)U=new p(A.host,null,F,E,A.uid,A.viewerUid,"mobile",H,0);g.emit(h.RTI_SESSION,U)}function L(U){D=U}function M(U,V){__p&&__p();if(!V){m("FIXME").warn("_onReconnectError: reconnect request error");U.exit(x)}else if(V.user_channel){A=V;A.state=new j();B=A.seq;U.exit(w)}else{m("FIXME").warn("_onReconnectError: bad reconnect response - %s",JSON.stringify(V));U.exit(x)}}function N(){I=true;K()}function O(U,V){__p&&__p();var W=w;if(!V){U.exit(x);return}switch(V.t){case"refresh":case"refreshDelay":W="refresh_"+(V.reason||0);break;case"fullReload":W=w;if(V.seq==0)N();if("ms"in V)P(V);break;case"continue":break;case"lb":var X=V.lb_info;if(X){E=X.sticky;var Y="http://";if(A.is_secure_uri)Y="https://";if("pool"in X)F=X.pool;else{A.uri=Y+X.vip+".facebook.com/pull";A.host=X.vip}}else m("FIXME").mustfix("bad lb info from channel proxy");break;case"msg":P(V);break;case"batched":var Z=V.batches,$;for($=0;$<Z.length;$++)O(U,Z[$]);break;case"heartbeat":break;default:W=x;if(c.isEnabled("mchannel_detailed_log"))m("FIXME").warn("_onRequestSuccess: invalid channel response, resending request: %s",JSON.stringify(V));else m("FIXME").warn("_onRequestSuccess: invalid channel response, sending request again.");break}if("seq"in V)B=V.seq;U.exit(W)}function P(U){__p&&__p();var V=U.seq-U.ms.length;for(var W=0;W<U.ms.length;W++){var X=V+W;G++;if(X>=B){if(D)U.ms[W]=D(U.ms[W]);try{if(U.ms[W].type==="skywalker")g.emit(h.SKYWALKER_MESSAGE,U.ms[W]);else if(U.ms[W].type==="qprimer")N();else v.emit(v.CHANNEL_MESSAGE,U.ms[W])}catch(Y){if(c.isEnabled("mchannel_detailed_log"))m("FIXME").warn("_processMessages: threw exception emitting: ex:%s payload:%s",Y,JSON.stringify(U.ms[W]));else m("FIXME").warn("_processMessages: failed to emit message")}}}}function Q(){__p&&__p();if(!v.xhrEnabled||z)return;z=Object.assign(f,d.config);A=d.info;A.state=new j();B=A.seq;k.addListener(k.ANOMALY,function(){v.exit("clock_anomaly")});s.addListener(s.HIDDEN,function(){v.exit("hidden")});s.addListener(s.VISIBLE,function(){v.exit("visible")});a.onbeforeunload=function(){if(C)C.abort()};if("sticky_token"in A)E=A.sticky_token;R()}function ga(U,V){A.state.subscribeIrisQueue(U,V)}function ha(U){A.state.subscribeIrisQueue(U)}function R(){v.setDelay(z.MIN_RETRY_INTERVAL);v.enter(A.uri?"pull!":"reconnect!")}v=new q(i,J);v.startChannel=Q;v.setTransform=L;v.xhrEnabled=!!a.XMLHttpRequest;v.CHANNEL_MESSAGE="channel_message";v.subscribeIrisQueue=ga;v.unsubscribeIrisQueue=ha;var S;function ia(){v.emit(q.ENTER,{name:"stall",progress:q.ENTERED});if(c.isEnabled("mchannel_jumpstart"))R()}function T(U){l.getInstance("channel").log(U.name,U.status||U.progress);if(U.name!=="stall"){clearTimeout(S);S=u(ia,y)}}v.addListener(q.ENTER,T);v.addListener(q.EXIT,T);g.addListener(h.GET_RTI_SESSION_REQUEST,K);b.exports=v}),null);
__d("MTouchChannelManager",["Bootloader","MChannelManager","Stratcom"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k=false;function l(){if(k)return;k=true;i.addListener(i.CHANNEL_MESSAGE,function(m){return h.loadModules(["MTouchChannelPayloadRouter"],function(n){return n.route(m)},"MTouchChannelManager")});j.listen(["m:onload","m:jewels:init-counts"],null,i.startChannel);i.startChannel()}g.initialize=l}),null);
__d("MChat",["Bootloader","ChannelEventType","DOM","Stratcom","MChannelManager","MTouchChannelManager","$"],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n){"use strict";__p&&__p();var o=function o(q){__p&&__p();m.initialize();if(q.killDynatemplate)k.listen([i.MESSAGE,i.PAGES_MESSAGE],null,function(event){p(q,event);k.removeCurrentListener()});else h.loadModules(["MMessages"],function(r){var s=new r(q),t=[k.listen([i.MESSAGE,i.PAGES_MESSAGE],null,s.handleMessageReceived.bind(s)),k.listen("typ",null,s.handleUserTyping.bind(s))];k.listen("m:page:unload",null,function(){s=null;for(var u=0;u<t.length;u++)t[u].remove();t=[];k.removeCurrentListener()})},"MChat");if(q.pageID)l.subscribeIrisQueue(q.pageID.toString(),"0")};function p(q,event){h.loadModules(["MReactComponentRenderer","MMessageThread.react"],function(r,s){var t=j.create("div"),u={downloadLink:q.downloadLink,initialEvent:event,isCanonical:q.isCanonicalThread,otherUserFBID:q.messageOtherUserFBID,pageID:q.pageID,shouldParseEmoticons:q.parseEmoticons,threadFBID:q.messageThreadFBID,userProfileUris:q.usersProfileUri,userShortNames:q.usersShortNames};r(s,t,u);j.appendContent(n("messageGroup"),t)},"MChat")}g.main=o}),null);
__d("MPresenceIcon",["setTimeoutAcrossTransitions","DOM","MLegacyDataStore","MRequest","MURI","Stratcom"],(function a(b,c,d,e,f,g,h,i,j,k,l,m){__p&&__p();var n=0,o=1,p=2,q;function r(){__p&&__p();var s=i.scry(document.body,"i","presence-icon"),t=[];for(var u=0,v=s.length;u<v;++u){var w=j.get(s[u]);if(w.userid&&!t[w.userid])t[w.userid]=1}var x=new l("/chat/presence_icon.php").toString(),y=new k(x).setData({ids:Object.keys(t)}).setIgnoreErrors(true);y.listen("done",function(z){for(var u=0,v=s.length;u<v;++u){var A=j.get(s[u]);if(A&&A.userid&&m.hasSigil(s[u],"online-icon")&&z[A.userid]==o||m.hasSigil(s[u],"mobile-icon")&&z[A.userid]==p)i.show(s[u]);else i.hide(s[u])}});y.listen("finally",function(z){clearTimeout(q);q=h(r,n)});y.send()}n=n?n*100:6e4;r()}),null);
__d("CallbackManagerController",["ErrorUtils"],(function a(b,c,d,e,f,g,h){__p&&__p();function i(j){"use strict";this.$CallbackManagerController1=[];this.$CallbackManagerController2=[undefined];this.$CallbackManagerController3=j}i.prototype.executeOrEnqueue=function(j,k,l){"use strict";l=l||{};var m=this.$CallbackManagerController4(k,j,l);if(m)return 0;this.$CallbackManagerController2.push({fn:k,request:j,options:l});var n=this.$CallbackManagerController2.length-1;this.$CallbackManagerController1.push(n);return n};i.prototype.unsubscribe=function(j){"use strict";delete this.$CallbackManagerController2[j]};i.prototype.reset=function(){"use strict";this.$CallbackManagerController2=[]};i.prototype.getRequest=function(j){"use strict";return this.$CallbackManagerController2[j]};i.prototype.runPossibleCallbacks=function(j){"use strict";__p&&__p();var k=this.$CallbackManagerController1;this.$CallbackManagerController1=[];var l=[];k.forEach(function(m){var n=this.$CallbackManagerController2[m];if(!n)return;var o=this.$CallbackManagerController3(n.request,babelHelpers["extends"]({},n.options,j));if(o)l.push({args:o,id:m});else this.$CallbackManagerController1.push(m)}.bind(this));l.forEach(function(m){var n=m.args,o=m.id,p=this.$CallbackManagerController2[o];if(!p)return;delete this.$CallbackManagerController2[o];this.$CallbackManagerController5(p.fn,n,p.request)}.bind(this))};i.prototype.$CallbackManagerController4=function(j,k,l){"use strict";var m=this.$CallbackManagerController3(k,l);if(m)this.$CallbackManagerController5(j,m,k);return!!m};i.prototype.$CallbackManagerController5=function(j,k,l){"use strict";var m={ids:l};h.applyWithGuard(j,m,k)};f.exports=i}),18);
__d("KeyedCallbackManager",["CallbackManagerController","ErrorUtils"],(function a(b,c,d,e,f,g,h,i){__p&&__p();function j(){"use strict";this.$KeyedCallbackManager1={};this.$KeyedCallbackManager2=new h(this.$KeyedCallbackManager3.bind(this))}j.prototype.executeOrEnqueue=function(k,l){"use strict";__p&&__p();if(!(k instanceof Array)){var m=k,n=l;k=[k];l=function l(o){n(o[m])}}k=k.filter(function(o){var p=o!==null&&o!==undefined;if(!p)i.applyWithGuard(function(){throw new Error("KeyedCallbackManager.executeOrEnqueue: key "+JSON.stringify(o)+" is invalid")});return p});return this.$KeyedCallbackManager2.executeOrEnqueue(k,l)};j.prototype.unsubscribe=function(k){"use strict";this.$KeyedCallbackManager2.unsubscribe(k)};j.prototype.reset=function(){"use strict";this.$KeyedCallbackManager2.reset();this.$KeyedCallbackManager1={}};j.prototype.getUnavailableResources=function(k){"use strict";var l=this.$KeyedCallbackManager2.getRequest(k),m=[];if(l)m=l.request.filter(function(n){return!this.$KeyedCallbackManager1[n]}.bind(this));return m};j.prototype.getUnavailableResourcesFromRequest=function(k){"use strict";var l=Array.isArray(k)?k:[k];return l.filter(function(m){if(m!==null&&m!==undefined)return!this.$KeyedCallbackManager1[m]},this)};j.prototype.addResourcesAndExecute=function(k){"use strict";Object.assign(this.$KeyedCallbackManager1,k);this.$KeyedCallbackManager2.runPossibleCallbacks()};j.prototype.setResource=function(k,l){"use strict";this.$KeyedCallbackManager1[k]=l;this.$KeyedCallbackManager2.runPossibleCallbacks()};j.prototype.getResource=function(k){"use strict";return this.$KeyedCallbackManager1[k]};j.prototype.getAllResources=function(){"use strict";return this.$KeyedCallbackManager1};j.prototype.dumpResources=function(){"use strict";var k={};for(var l in this.$KeyedCallbackManager1){var m=this.$KeyedCallbackManager1[l];if(typeof m==="object")m=babelHelpers["extends"]({},m);k[l]=m}return k};j.prototype.$KeyedCallbackManager3=function(k){"use strict";var l={};for(var m=0;m<k.length;m++){var n=k[m],o=this.$KeyedCallbackManager1[n];if(typeof o=="undefined")return false;l[n]=o}return[l]};f.exports=j}),18);
__d("MMessageServerResourceFetcher",["KeyedCallbackManager","MRequest"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();function j(k,l){this.$MMessageServerResourceFetcher3=k;this.$MMessageServerResourceFetcher4=l;this.$MMessageServerResourceFetcher1=new h();this.$MMessageServerResourceFetcher2={}}j.prototype.get=function(k,l){this.getMulti([k],function(m){l(m[k])})};j.prototype.getMulti=function(k,l){__p&&__p();var m=!this.$MMessageServerResourceFetcher1.executeOrEnqueue(k,l);if(m)return;var n=k.filter(function(p){var q=!this.$MMessageServerResourceFetcher1.getResource(p)&&!this.$MMessageServerResourceFetcher2[p];if(q)this.$MMessageServerResourceFetcher2[p]=true;return q}.bind(this));if(n.length===0)return;var o=new i(this.$MMessageServerResourceFetcher3(n)).setMethod("GET");o.listen("done",function(p){if(!p||!p.payload)return;var q=this.$MMessageServerResourceFetcher4(p.payload);if(q)this.$MMessageServerResourceFetcher1.addResourcesAndExecute(q)}.bind(this));o.listen("finally",function(p){n.forEach(function(){delete this.$MMessageServerResourceFetcher2[p]}.bind(this))}.bind(this));o.send()};j.prototype.set=function(k,l){var m={};m[k]=l;this.$MMessageServerResourceFetcher1.addResourcesAndExecute(m)};f.exports=j}),null);
__d("MMessagesReadReceipts",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=undefined,i={};function j(m,n){h=m;i=n}function k(m,n){__p&&__p();if(m!==h)return;for(var o in n){if(!Object.prototype.hasOwnProperty.call(n,o))continue;var p=n[o].action,q=i[o].action;if(q===undefined)i[o]=n[o];else i[o]=Math.max(q,p)===q?i[o]:n[o]}}function l(m,n,o){__p&&__p();if(m!==h)return{};var p={};for(var q in i){if(!Object.prototype.hasOwnProperty.call(i,q))continue;else if(o.indexOf(q)!==-1)continue;else if(i[q].action<n)continue;p[q]=i[q].action}return p}f.exports={init:j,update:k,getSeenBy:l}}),null);
__d("XChatUserInfoAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/chat/user_info/",{ids:{type:"IntVector",defaultValue:[]}})}),null);
__d("MShortProfiles",["MMessageServerResourceFetcher","XChatUserInfoAsyncController"],(function a(b,c,d,e,f,g,h,i){"use strict";var j=new h(function(l){return i.getURIBuilder().setIntVector("ids",l).getURI().toString()},function(l){return l.profiles}),k={get:function l(m,n){j.get(m,n)},getMulti:function l(m,n){j.getMulti(m,n)},set:function l(m,n){j.set(m,n)}};f.exports=k}),null);
__d("MMessagesReplyComposer",["MMultiPhotoUploaderAttachmentState","CSS","ChannelEventType","CurrentUser","DOM","fbt","MMessagesConfig","MRequest","Stratcom","SubscriptionsHandler","cx"],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){__p&&__p();var s="m-messaging-error-message",t="m-messaging-error-resend-btn",u=1e3;function v(w,x,y,z,A){"use strict";__p&&__p();this.form=w;this.textbox=x;this.sendButton=y;this.likeButton=z;this.userID=k.getID();this.threadID=A;this.state={isFocused:false,isTyping:false,hasPhotos:false};this.photosState=h.getDefaultState();this.prevSendRequest=null;this.pageListeners=new q();this.pageListeners.addSubscriptions(l.listen(this.textbox,"focus",null,this.$MMessagesReplyComposer1.bind(this)),l.listen(this.textbox,"blur",null,this.$MMessagesReplyComposer2.bind(this)),l.listen(this.textbox,["keyup","keydown","change","input"],null,this.$MMessagesReplyComposer3.bind(this)),l.listen(this.sendButton,"click",null,this.$MMessagesReplyComposer4.bind(this)),l.listen(this.likeButton,"click",null,this.$MMessagesReplyComposer5.bind(this)),p.listen("click",[t],this.$MMessagesReplyComposer6.bind(this)),p.listen("MMultiPhotoUploader:attachments:change",null,this.$MMessagesReplyComposer7.bind(this)));p.listen("m:page:unload",null,function(){this.pageListeners.release();p.removeCurrentListener()}.bind(this));this.$MMessagesReplyComposer8();this.$MMessagesReplyComposer9();i.removeClass(this.form,"_3ci_")}v.prototype.$MMessagesReplyComposer7=function(event){"use strict";this.photosState=event.getData();this.$MMessagesReplyComposer10("hasPhotos",this.photosState[h.UPLOADED]>0||this.photosState[h.SENDING]>0);this.$MMessagesReplyComposer9()};v.prototype.$MMessagesReplyComposer1=function(){"use strict";this.$MMessagesReplyComposer10("isFocused",true)};v.prototype.$MMessagesReplyComposer2=function(){"use strict";this.$MMessagesReplyComposer10("isFocused",false)};v.prototype.$MMessagesReplyComposer3=function(){"use strict";this.$MMessagesReplyComposer10("isTyping",this.textbox.value!=="");this.$MMessagesReplyComposer9()};v.prototype.$MMessagesReplyComposer9=function(){"use strict";var w=this.photosState[h.SENDING]===0&&(!/^\s*$/.test(this.textbox.value)||this.photosState[h.UPLOADED]>0);if(!w)this.sendButton.setAttribute("disabled",true);else this.sendButton.removeAttribute("disabled")};v.prototype.$MMessagesReplyComposer11=function(){"use strict";this.likeButton.setAttribute("disabled",true);setTimeout(function(){this.likeButton.removeAttribute("disabled")}.bind(this),u)};v.prototype.$MMessagesReplyComposer10=function(w,x){"use strict";this.state[w]=x;this.$MMessagesReplyComposer8()};v.prototype.$MMessagesReplyComposer8=function(){"use strict";i.conditionClass(this.form,"_3ciz",this.state.isFocused||this.state.isTyping);i.conditionClass(this.form,"_3cj0",this.state.hasPhotos)};v.prototype.$MMessagesReplyComposer6=function(){"use strict";this.sendRequest(this.prevSendRequest.url,this.prevSendRequest.data);l.hide(l.find(document,"div",s))};v.prototype.$MMessagesReplyComposer5=function(event){"use strict";this.$MMessagesReplyComposer12(event,true)};v.prototype.$MMessagesReplyComposer4=function(event){"use strict";this.$MMessagesReplyComposer12(event,false)};v.prototype.$MMessagesReplyComposer12=function(event,w){"use strict";__p&&__p();var x=this.form,y=l.convertFormToDictionary(x),z=x.action;x.reset();this.$MMessagesReplyComposer3();if(event)event.prevent();if(w)y.sticker_id=369239263222822;this.sendRequest(z,y);this.$MMessagesReplyComposer11()};v.prototype.sendRequest=function(w,x){"use strict";var y={start:function A(B){l.hide(l.find(document,"div",s))},process:function A(B){},error:function A(B){l.show(l.find(document,"div",s))},fail:function A(B){y.error(B)},postprocess:function A(B){p.invoke("m:ajax:complete")}};this.prevSendRequest={data:x,url:w};var z=this.$MMessagesReplyComposer13(x,w,y);z.send()};v.prototype.$MMessagesReplyComposer13=function(w,x,y){"use strict";__p&&__p();w.action_time=Date.now();var z=l.find(document,"*","m-messaging-composer-container"),A="async_composer",B=new o(x);B.addData(w);B.setMethod("POST");if(n.msgrRegion)B.setRequestHeader("X-MSGR-Region",n.msgrRegion);var C=A+"_saving",D=function D(F){i.conditionClass(z,A,!F);i.conditionClass(z,C,F)};B.listen("start",D.bind(null,true));B.listen("finally",D.bind(null,false));for(var E in y)B.listen(E,y[E]);return B};v.handleSendError=function(){"use strict";l.show(l.find(document,"div",s))};v.handleRecipientUnavailableError=function(){"use strict";alert(m._("Cette personne n\u2019est pas disponible pour le moment."))};f.exports=v}),null);
__d("MHeaderSelect",["Stratcom","MViewport"],(function a(b,c,d,e,f,g,h,i){h.listen("focus","header-select",i.scrollToHeader)}),null);
__d("MSelectLink",["setTimeoutAcrossTransitions","MLegacyDataStore","Stratcom","MJSEnvironment","MPageController","MRequest"],(function a(b,c,d,e,f,g,h,i,j,k,l,m){__p&&__p();var n=k.IS_APPLE_WEBKIT_IOS&&parseInt(k.OS_VERSION,10)>=6?"blur":"change";j.listen(n,"select-link",function(o){var p=o.getNode("tag:select"),q=i.get(o.getNode("select-link")),r=q.method==="POST"?"POST":"GET";h(function(){var s=p.options[p.selectedIndex].getAttribute("value"),t=p.options[p.selectedIndex].getAttribute("title");if(t==="mrequest"){var u=new m(s);u.setMethod(r).send()}else s&&l.load(s,{replace:true,method:r})},0)})}),null);
__d("MobileZeroRewriteURL",["MChannelManager"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=null,j=null;function k(o){__p&&__p();if(!o)return;i=o.regex_matcher;j=o.regex_replacer;for(var p=0;p<i.length;p++){var q=i[p];if(q.indexOf("^")===0)q=q.substr(1);var r=new RegExp(q,"i");i[p]=r}h.setTransform(l)}function l(o){if(!i)return o;m(o);return o}function m(o){if(!o)return;if(Array.isArray(o))for(var p=0;p<o.length;p++)n(o,p);else for(var q in o)if(Object.prototype.hasOwnProperty.call(o,q))n(o,q)}function n(o,p){__p&&__p();var q=o[p],r=typeof q;if(r==="object")m(q);else if(r==="string"&&q.indexOf("<img")>=0){q=q.replace(/<img[^>]*>/gi,function(s){for(var t=0;t<i.length;t++){var u=i[t];if(u.test(s))return s.replace(u,j[t])}return s});o[p]=q}}g.main=k}),null);
__d("XQuickPromotionSimpleLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/qp/action/log/",{qp_id:{type:"Int",required:true},qp_action:{type:"Enum",enumType:1},qp_instance_log_data:{type:"StringToStringMap",defaultValue:{}},qp_event:{type:"String"}})}),null);
__d("MessagingEvent",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({DELETE:"delete",DELETE_MESSAGES:"delete_messages",DELIVER:"deliver",ERROR:"error",READ:"read",REPORT_SPAM:"report_spam",REPORT_SPAM_MESSAGES:"report_spam_messages",UNMARK_SPAM:"unmark_spam",SUBSCRIBE:"subscribe",CHANGE_MUTE_SETTINGS:"change_mute_settings",TAG:"tag",UNREAD:"unread",UNSUBSCRIBE:"unsubscribe",DELIVER_LOG:"deliver_log",MARK_ALL_READ:"mark_all_read",MARK_ALL_SEEN:"mark_all_seen",MORE_THREADS:"more_threads",READ_ALL:"read_all",READ_RECEIPT:"read_receipt",DELIVERY_RECEIPT:"delivery_receipt",SENT_PUSH:"sent_push",DELIVER_FAST_PAST:"deliver_fast_path",MESSENGER_STATUS:"messenger_status",UPDATE_PINNED_THREADS:"update_pinned_threads",CHANGE_PAGE_THREAD_FLAG:"change_page_thread_flag",CREATE_PAGE_ADMIN_NOTE:"create_page_admin_note",NO_OP:"no_op"})}),null);