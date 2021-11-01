// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: mozyr360_by_skin_dd_menu.ggsk
// Generated 2021-11-01T14:11:50

function pano2vrSkin(player,base) {
	player.addVariable('hs_state', 2, false);
	player.addVariable('mouse_over', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._menu_button=document.createElement('div');
		els=me._menu_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGcgaWQ9IkxheWVyXz'+
			'FfMV8iPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTTY1LDguOUMzNCw4LjksOC45LDM0LDguOSw2NWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFTMTIxLjEsOTYsMTIxLjEsNjVDMTIxLjEsMzQsOTYsOC45LDY1LDguOXogTTM1LjksNzUuMyYjeGE7JiN4OTsmI3g5O2MtNS43LDAtMTAuMy00LjYtMTAuMy0xMC4zYzAtNS43LDQuNi0xMC4zLDEwLjMtMTAuM2M1LjcsMCwxMC4zLDQuNiwxMC4zLDEwLjNDNDYuMyw3MC43LDQxLjcsNzUuMywzNS45LDc1LjN6IE02NSw3NS4zJiN4YTsmI3g5OyYjeDk7Yy01LjcsMC0xMC4zLTQuNi0xMC4zLTEwLjNjMC01LjcsNC42'+
			'LTEwLjMsMTAuMy0xMC4zYzUuNywwLDEwLjMsNC42LDEwLjMsMTAuM0M3NS4zLDcwLjcsNzAuNyw3NS4zLDY1LDc1LjN6IE05NC4xLDc1LjMmI3hhOyYjeDk7JiN4OTtjLTUuNywwLTEwLjMtNC42LTEwLjMtMTAuM2MwLTUuNyw0LjYtMTAuMywxMC4zLTEwLjNjNS43LDAsMTAuMyw0LjYsMTAuMywxMC4zQzEwNC40LDcwLjcsOTkuOCw3NS4zLDk0LjEsNzUuM3oiLz4KICA8Zz4KICAgPGNpcmNsZSBmaWxsLW9wYWNpdHk9IjEiIGN5PSI2NSIgZmlsbD0iI2ZmZmZmZiIgY3g9IjM1LjkiIHI9IjEwLjMiLz4KICAgPGNpcmNsZSBmaWxsLW9wYWNpdHk9IjEiIGN5PSI2NSIgZmlsbD0iI2ZmZmZmZiIgY3'+
			'g9IjY1IiByPSIxMC4zIi8+CiAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIxIiBjeT0iNjUiIGZpbGw9IiNmZmZmZmYiIGN4PSI5NC4xIiByPSIxMC4zIi8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiLz4KPC9zdmc+Cg==';
		me._menu_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._menu_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGcgaWQ9IkxheWVyXz'+
			'FfMV8iPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTTY1LDIuNkMzMC42LDIuNiwyLjYsMzAuNiwyLjYsNjVjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNEMxMjcuNCwzMC42LDk5LjQsMi42LDY1LDIuNnogTTMyLjcsNzYuNSYjeGE7JiN4OTsmI3g5O2MtNi4zLDAtMTEuNS01LjEtMTEuNS0xMS41YzAtNi4zLDUuMS0xMS41LDExLjUtMTEuNWM2LjMsMCwxMS41LDUuMSwxMS41LDExLjVDNDQuMiw3MS4zLDM5LjEsNzYuNSwzMi43LDc2LjV6IE02NSw3Ni41JiN4YTsmI3g5OyYjeDk7Yy02LjMsMC0xMS41LTUuMS0xMS41LTEx'+
			'LjVjMC02LjMsNS4xLTExLjUsMTEuNS0xMS41YzYuMywwLDExLjUsNS4xLDExLjUsMTEuNUM3Ni41LDcxLjMsNzEuMyw3Ni41LDY1LDc2LjV6IE05Ny4zLDc2LjUmI3hhOyYjeDk7JiN4OTtjLTYuMywwLTExLjUtNS4xLTExLjUtMTEuNWMwLTYuMyw1LjEtMTEuNSwxMS41LTExLjVjNi4zLDAsMTEuNSw1LjEsMTEuNSwxMS41QzEwOC44LDcxLjMsMTAzLjYsNzYuNSw5Ny4zLDc2LjV6Ii8+CiAgPGc+CiAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIxIiBjeT0iNjUiIGZpbGw9IiNmZmZmZmYiIGN4PSIzMi43IiByPSIxMS41Ii8+CiAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIxIiBjeT0iNjUiIGZpbG'+
			'w9IiNmZmZmZmYiIGN4PSI2NSIgcj0iMTEuNSIvPgogICA8Y2lyY2xlIGZpbGwtb3BhY2l0eT0iMSIgY3k9IjY1IiBmaWxsPSIjZmZmZmZmIiBjeD0iOTcuMyIgcj0iMTEuNSIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIi8+Cjwvc3ZnPgo=';
		me._menu_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="menu_button";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 23px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_button.onclick=function (e) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._menu_button.onmouseover=function (e) {
			me._menu_button__img.style.visibility='hidden';
			me._menu_button__imgo.style.visibility='inherit';
		}
		me._menu_button.onmouseout=function (e) {
			me._menu_button__img.style.visibility='inherit';
			me._menu_button__imgo.style.visibility='hidden';
		}
		me._menu_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hide_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=5000;
		el.ggId="hide_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer.ggIsActive=function() {
			return (me._hide_timer.ggTimestamp + me._hide_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_timer.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._hide_elements.style[domTransition]='none';
			} else {
				me._hide_elements.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._hide_elements.style.opacity='1';
			me._hide_elements.style.visibility=me._hide_elements.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._menu_button.style[domTransition]='none';
			} else {
				me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_button.style.opacity='0';
			me._menu_button.style.visibility='hidden';
		}
		me._hide_timer.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._menu_button.style[domTransition]='none';
			} else {
				me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_button.style.opacity='1';
			me._menu_button.style.visibility=me._menu_button.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._hide_elements.style[domTransition]='none';
			} else {
				me._hide_elements.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._hide_elements.style.opacity='0';
			me._hide_elements.style.visibility='hidden';
		}
		me._hide_timer.ggUpdatePosition=function (useTransition) {
		}
		me._menu_button.appendChild(me._hide_timer);
		me.divSkin.appendChild(me._menu_button);
		el=me._hide_elements=document.createElement('div');
		el.ggId="hide_elements";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_elements.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hide_elements.onmouseover=function (e) {
			me.elementMouseOver['hide_elements']=true;
		}
		me._hide_elements.onmouseout=function (e) {
			me.elementMouseOver['hide_elements']=false;
		}
		me._hide_elements.ontouchend=function (e) {
			me.elementMouseOver['hide_elements']=false;
		}
		me._hide_elements.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -80px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 192px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_bg=document.createElement('div');
		el.ggId="controller_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 3px;';
		hs+='border-radius : 3px;';
		hs+='background : rgba(63,63,63,0.498039);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -9px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_bg.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._controller_bg);
		el=me._fullscreen_off=document.createElement('div');
		els=me._fullscreen_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgeD0iLTIwNi4yIiB5PSIzOTciIHdpZHRoPSIzMi4xIiBoZWlnaHQ9IjIyLjIiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNjguNiw0MjAuM2MwLDIuMy0xLjksNC4yLTQuMiw0LjJoLTM0LjVj'+
			'LTIuMywwLTQuMi0xLjktNC4yLTQuMnYtMjQuNWMwLTIuMywxLjktNC4yLDQuMi00LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aDM0LjVjMi4zLDAsNC4yLDEuOSw0LjIsNC4yTC0xNjguNiw0MjAuM0wtMTY4LjYsNDIwLjN6IE0tMTM2LjgsMzcyLjZsLTE3LjUsMTIuNmMtMC4xLDAtMC4xLDAuMS0wLjIsMC4xbDAuNywwLjlsMy4zLDQuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4yLDAuMywwLjIsMC41LDAuMSwwLjljLTAuMiwwLjQtMC41LDAuNS0wLjgsMC41bC0xNi4yLDAuMWMtMC40LDAtMC42LTAuMS0wLjgtMC40Yy0wLjItMC4yLTAuMi0wLjUtMC4xLTAuOGw1LjItMTUuNCYjeG'+
			'Q7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xLTAuMywwLjQtMC42LDAuOC0wLjZjMC40LDAsMC43LDAuMSwwLjksMC4zbDMuMyw0LjZsMC42LDAuOGMwLDAsMC4xLTAuMSwwLjEtMC4xbDE3LjUtMTIuNmMwLjctMC41LDEuNi0wLjMsMi4xLDAuNGwxLjQsMS45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTM1LjksMzcxLjItMTM2LjEsMzcyLjEtMTM2LjgsMzcyLjZ6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzNi40LDM3MC41bC0xLjQtMS45Yy0wLjUtMC43LTEuNS0wLjgtMi4xLTAuNGwtMTcuNSwxMi42Yy0w'+
			'LjEsMC0wLjEsMC4xLTAuMSwwLjFsLTAuNi0wLjhsLTMuMy00LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuNC0wLjQtMC45LTAuM2MtMC40LDAtMC43LDAuMy0wLjgsMC42bC01LjIsMTUuNGMtMC4xLDAuMy0wLjEsMC42LDAuMSwwLjhjMC4yLDAuMywwLjQsMC40LDAuOCwwLjRsMTYuMi0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNCwwLDAuNy0wLjEsMC44LTAuNWMwLjItMC40LDAuMi0wLjYtMC4xLTAuOWwtMy4zLTQuN2wtMC43LTAuOWMwLjEsMCwwLjEtMC4xLDAuMi0wLjFsMTcuNS0xMi42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTM2LjEsMzcyLj'+
			'EtMTM1LjksMzcxLjItMTM2LjQsMzcwLjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTcyLjgsMzkxLjZoLTM0LjVjLTIuMywwLTQuMiwxLjktNC4yLDQuMnYyNC41YzAsMi4zLDEuOSw0LjIsNC4yLDQuMmgzNC41YzIuMywwLDQuMi0xLjksNC4yLTQuMnYtMjQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE2OC42LDM5My41LTE3MC41LDM5MS42LTE3Mi44LDM5MS42eiBNLTE3NCw0MTkuMmgtMzIuMVYzOTdoMzIuMVY0MTkuMnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._fullscreen_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgeD0iLTIwOS42IiB5PSIzOTciIHdpZHRoPSIzNS43IiBoZWlnaHQ9IjI0LjYiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTY3LjksNDIyLjljMCwyLjYtMi4xLDQuNy00Ljcs'+
			'NC43aC0zOC4zYy0yLjYsMC00LjctMi4xLTQuNy00Ljd2LTI3LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMi42LDIuMS00LjcsNC43LTQuN2gzOC4zYzIuNiwwLDQuNywyLjEsNC43LDQuN0wtMTY3LjksNDIyLjlMLTE2Ny45LDQyMi45eiBNLTEzMi41LDM2OS45bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAuNywxbDMuNyw1LjJjMC4yLDAuMywwLjIsMC42LDAuMSwxYy0wLjIsMC40LTAuNSwwLjYtMC45LDAuNmwtMTgsMC4xYy0wLjQsMC0wLjctMC4xLTAuOS0wLjRjLTAuMi0wLjMtMC4yLTAuNS0wLjEtMC45JiN4ZDsmI3hhOy'+
			'YjeDk7JiN4OTsmI3g5O2w1LjgtMTcuMWMwLjEtMC40LDAuNC0wLjcsMC44LTAuN2MwLjUsMCwwLjcsMC4xLDEsMC40bDMuNiw1LjFsMC43LDAuOWMwLjEsMCwwLjEtMC4xLDAuMi0wLjFsMTkuNS0xNGMwLjgtMC41LDEuOC0wLjQsMi40LDAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS41LDIuMUMtMTMxLjYsMzY4LjMtMTMxLjgsMzY5LjQtMTMyLjUsMzY5Ljl6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzMi4xLDM2Ny41bC0xLjUtMi4xYy0wLjUtMC44LTEuNi0wLjktMi40LTAuNGwtMTkuNSwxNGMtMC4x'+
			'LDAtMC4xLDAuMS0wLjIsMC4xbC0wLjctMC45bC0zLjYtNS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4yLTAuMy0wLjUtMC40LTEtMC40Yy0wLjUsMC0wLjcsMC4zLTAuOCwwLjdsLTUuOCwxNy4xYy0wLjEsMC40LTAuMSwwLjcsMC4xLDAuOWMwLjIsMC4zLDAuNSwwLjQsMC45LDAuNGwxOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNCwwLDAuOC0wLjIsMC45LTAuNmMwLjItMC40LDAuMi0wLjctMC4xLTFsLTMuNy01LjJsLTAuNy0xYzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxOS41LTE0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTMxLjgsMzY5LjQtMTMxLjYsMzY4Lj'+
			'MtMTMyLjEsMzY3LjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTcyLjYsMzkxaC0zOC4zYy0yLjYsMC00LjcsMi4xLTQuNyw0Ljd2MjcuMmMwLDIuNiwyLjEsNC43LDQuNyw0LjdoMzguM2MyLjYsMCw0LjctMi4xLDQuNy00Ljd2LTI3LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNjcuOSwzOTMuMS0xNzAsMzkxLTE3Mi42LDM5MXogTS0xNzMuOSw0MjEuNmgtMzUuN1YzOTdoMzUuN1Y0MjEuNnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._fullscreen_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="fullscreen_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_off.style[domTransition]='';
				if (me._fullscreen_off.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_off.style.visibility=(Number(me._fullscreen_off.style.opacity)>0||!me._fullscreen_off.style.opacity)?'inherit':'hidden';
					me._fullscreen_off.ggVisible=true;
				}
				else {
					me._fullscreen_off.style.visibility="hidden";
					me._fullscreen_off.ggVisible=false;
				}
			}
		}
		me._fullscreen_off.onclick=function (e) {
			player.exitFullscreen();
		}
		me._fullscreen_off.onmouseover=function (e) {
			me._fullscreen_off__img.style.visibility='hidden';
			me._fullscreen_off__imgo.style.visibility='inherit';
		}
		me._fullscreen_off.onmouseout=function (e) {
			me._fullscreen_off__img.style.visibility='inherit';
			me._fullscreen_off__imgo.style.visibility='hidden';
		}
		me._fullscreen_off.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._fullscreen_off);
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0yMDYuMiw0MTkuMmg2Mi4zdi00NC4zaC02Mi4zVjQxOS4yeiBNLTE3OC45LDM5Ny4zYzAsMCwxNy43LTEyLjcsMTcuNy0xMi43bC00LTUuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC4yLTAuNS0wLjEtMC45YzAuMi0wLjQsMC41LTAuNSwwLjgtMC41bDE2LjItMC4xYzAuNCwwLDAuNiwwLjEsMC44LDAuNGMwLjIsMC4yLDAuMiwwLjUsMC4xLDAuOGwtNS4yLDE1LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEsMC4zLTAuNCwwLjYtMC44LDAuNmMtMC40'+
			'LDAtMC43LTAuMS0wLjktMC4zbC0zLjktNS40YzAsMC0xNy43LDEyLjctMTcuNywxMi43Yy0wLjcsMC41LTEuNiwwLjMtMi4xLTAuNGwtMS40LTEuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE3OS43LDM5OC44LTE3OS41LDM5Ny44LTE3OC45LDM5Ny4zeiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Uy0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTEzOC40LDQyMC'+
			'4zYzAsMi4zLTEuOSw0LjItNC4yLDQuMmgtNjQuN2MtMi4zLDAtNC4yLTEuOS00LjItNC4ydi00Ni43YzAtMi4zLDEuOS00LjIsNC4yLTQuMmg2NC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjMsMCw0LjIsMS45LDQuMiw0LjJWNDIwLjN6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ3LjQsMzc3LjljLTAuMi0wLjMtMC40LTAuNC0wLjgtMC40bC0xNi4yLDAuMWMtMC40LDAtMC43LDAuMS0wLjgsMC41Yy0wLjIsMC40LTAuMiwwLjYsMC4xLDAuOWw0LDUuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjEsMC0xNy43LDEy'+
			'LjctMTcuNywxMi43Yy0wLjcsMC41LTAuOCwxLjUtMC40LDIuMWwxLjQsMS45YzAuNSwwLjcsMS41LDAuOCwyLjEsMC40YzAsMCwxNy42LTEyLjcsMTcuNy0xMi43bDMuOSw1LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIsMC4zLDAuNCwwLjQsMC45LDAuM2MwLjQsMCwwLjctMC4zLDAuOC0wLjZsNS4yLTE1LjRDLTE0Ny4yLDM3OC40LTE0Ny4yLDM3OC4xLTE0Ny40LDM3Ny45eiIvPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQyLjcsNDI0LjZoLTY0LjdjLTIuMywwLTQuMi0xLjktNC4yLTQuMnYtNDYuN2MwLTIuMywxLjktNC4yLDQuMi00LjJoNjQuN2MyLjMsMCw0LjIsMS45LDQuMi'+
			'w0LjJ2NDYuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzguNCw0MjIuNy0xNDAuMyw0MjQuNi0xNDIuNyw0MjQuNnogTS0yMDYuMiw0MTkuMmg2Mi4zdi00NC4zaC02Mi4zVjQxOS4yeiIvPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0yMDkuNiw0MjEuNmg2OS4zdi00OS4zaC02OS4zVjQyMS42eiBNLTE3OS4zLDM5Ny40YzAsMCwxOS42LTE0LjEsMTkuNy0xNC4xbC00LjUtNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4yLTAuMy0wLjItMC42LTAuMS0xYzAuMi0wLjQsMC41LTAuNiwwLjktMC42bDE4LTAuMWMwLjQsMCwwLjcsMC4xLDAuOSwwLjRjMC4yLDAuMywwLjIsMC41LDAuMSwwLjlsLTUuOCwxNy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDAuNC0wLjQsMC43LTAuOCwwLjdjLTAuNSww'+
			'LTAuNy0wLjEtMS0wLjRsLTQuMy02Yy0wLjEsMC4xLTE5LjcsMTQuMS0xOS43LDE0LjFjLTAuOCwwLjUtMS44LDAuNC0yLjQtMC40bC0xLjUtMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTgwLjIsMzk5LTE4MCwzOTcuOS0xNzkuMywzOTcuNHoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xMzQuNCw0Mj'+
			'IuOWMwLDIuNi0yLjEsNC43LTQuNyw0LjdoLTcxLjhjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3YtNTEuOGMwLTIuNiwyLjEtNC43LDQuNy00LjdoNzEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi42LDAsNC43LDIuMSw0LjcsNC43VjQyMi45eiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0NC4zLDM3NS44Yy0wLjItMC4zLTAuNS0wLjQtMC45LTAuNGwtMTgsMC4xYy0wLjQsMC0wLjgsMC4yLTAuOSwwLjZjLTAuMiwwLjQtMC4yLDAuNywwLjEsMWw0LjUsNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwwLTE5LjcsMTQu'+
			'MS0xOS43LDE0LjFjLTAuOCwwLjUtMC45LDEuNi0wLjQsMi40bDEuNSwyLjFjMC41LDAuOCwxLjYsMC45LDIuNCwwLjRjMCwwLDE5LjYtMTQuMSwxOS43LTE0LjFsNC4zLDYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIsMC4zLDAuNSwwLjQsMSwwLjRjMC41LDAsMC43LTAuMywwLjgtMC43bDUuOC0xNy4xQy0xNDQuMSwzNzYuMy0xNDQuMSwzNzYtMTQ0LjMsMzc1Ljh6Ii8+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzkuMSw0MjcuNmgtNzEuOGMtMi42LDAtNC43LTIuMS00LjctNC43di01MS44YzAtMi42LDIuMS00LjcsNC43LTQuN2g3MS44YzIuNiwwLDQuNywyLjEsNC43LDQuN3Y1MS'+
			'44JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEzNC40LDQyNS41LTEzNi41LDQyNy42LTEzOS4xLDQyNy42eiBNLTIwOS42LDQyMS42aDY5LjN2LTQ5LjNoLTY5LjNWNDIxLjZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen.style[domTransition]='';
				if (me._fullscreen.ggCurrentLogicStateVisible == 0) {
					me._fullscreen.style.visibility="hidden";
					me._fullscreen.ggVisible=false;
				}
				else {
					me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
					me._fullscreen.ggVisible=true;
				}
			}
		}
		me._fullscreen.onclick=function (e) {
			player.enterFullscreen();
		}
		me._fullscreen.onmouseover=function (e) {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
		}
		me._fullscreen.onmouseout=function (e) {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._fullscreen);
		el=me._movemode_1=document.createElement('div');
		els=me._movemode_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzNDFjLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTExOC45LDM2Ni4xLTE0NCwzNDEtMTc1LDM0MXogTS0xODguNywzNzAuNGwxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMC40LDAuNCwwLjksMC4xLDEuM2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdo'+
			'LTcuNmgtMC4xdjEzLjVjMCwwLjctMC40LDEuMS0xLDFsLTguMiwwYy0wLjYsMC4xLTEtMC4zLTEtMXYtMTMuNWgtNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOC0wLjItMS4xLTAuN0MtMTg5LjEsMzcxLjMtMTg5LDM3MC44LTE4OC43LDM3MC40eiBNLTE5OS43LDQwOS45YzAsMC41LTAuMiwwLjgtMC43LDEuMWMtMC41LDAuMy0xLDAuMi0xLjMtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjgtMTIuN2MtMC40LTAuMy0wLjYtMC42LTAuNi0xLjFjMC0wLjQsMC4yLTAuNywwLjYtMWwxNy44LTEyLjhjMC40LTAuMywwLjktMC40LDEuMy0wLjFjMC41LDAuMywwLjcsMC42LDAuNy'+
			'wxLjF2Ny42djAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7bDEzLjUsMGMwLjcsMCwxLjEsMC40LDEsMWwwLDguMmMwLjEsMC42LTAuMywxLTEsMWwtMTMuNSwwVjQwOS45eiBNLTE2MS4zLDQyMy45bC0xMi43LDE3LjhjLTAuMywwLjQtMC42LDAuNi0xLjEsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS0wLjZsLTEyLjgtMTcuOGMtMC4zLTAuNC0wLjQtMC45LTAuMS0xLjNjMC4zLTAuNSwwLjYtMC43LDEuMS0wLjdoNy42aDAuMWwwLTEzLjVjMC0wLjcsMC40LTEuMSwxLTFsOC4yLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYtMC4xLDEsMC4zLDEsMWwwLDEzLjVoNy43YzAu'+
			'NSwwLDAuOCwwLjIsMS4xLDAuN1MtMTYxLDQyMy41LTE2MS4zLDQyMy45eiBNLTEzMC40LDM5OC4xbC0xNy44LDEyLjhjLTAuNCwwLjMtMC45LDAuNC0xLjMsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNS0wLjMtMC43LTAuNi0wLjctMS4xdi03LjZ2LTAuMWgtMTMuNWMtMC43LDAtMS4xLTAuNC0xLTFsMC04LjJjLTAuMS0wLjYsMC4zLTEsMS0xaDEzLjV2LTcuN2MwLTAuNSwwLjItMC44LDAuNy0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjUtMC4zLDEtMC4yLDEuMywwLjFsMTcuOCwxMi43YzAuNCwwLjMsMC42LDAuNiwwLjYsMS4xQy0xMjkuOSwzOTcuNS0xMzAsMzk3LjgtMTMwLjQsMz'+
			'k4LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTg3LjgsMzcyLjRoNy43djEzLjVjMCwwLjcsMC40LDEuMSwxLDFsOC4yLDBjMC42LDAuMSwxLTAuMywxLTF2LTEzLjVoMC4xaDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMy0wLjUsMC4yLTEtMC4xLTEuM2wtMTIuOC0xNy44Yy0wLjMtMC40LTAuNi0wLjYtMS0wLjZjLTAuNSwwLTAuOCwwLjItMS4xLDAuNmwtMTIuNywxNy44Yy0wLjMsMC40LTAuNCwwLjktMC4xLDEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4OC41'+
			'LDM3Mi4yLTE4OC4yLDM3Mi40LTE4Ny44LDM3Mi40eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2Mi4yLDQyMS45aC03LjdsMC0xMy41YzAtMC43LTAuNC0xLjEtMS0xbC04LjIsMGMtMC42LTAuMS0xLDAuMy0xLDFsMCwxMy41aC0wLjFoLTcuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNSwwLTAuOCwwLjItMS4xLDAuN2MtMC4zLDAuNS0wLjIsMSwwLjEsMS4zbDEyLjgsMTcuOGMwLjMsMC40LDAuNiwwLjYsMSwwLjZjMC41LDAsMC44LTAuMiwxLjEtMC42bDEyLjctMTcuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLTAuNCwwLjQtMC45LDAuMS0xLjNDLTE2MS'+
			'41LDQyMi0xNjEuOCw0MjEuOS0xNjIuMiw0MjEuOXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzAuNCwzOTYuMWwtMTcuOC0xMi43Yy0wLjQtMC4zLTAuOS0wLjQtMS4zLTAuMWMtMC41LDAuMy0wLjcsMC42LTAuNywxLjF2Ny43aC0xMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC43LDAtMS4xLDAuNC0xLDFsMCw4LjJjLTAuMSwwLjYsMC4zLDEsMSwxaDEzLjV2MC4xdjcuNmMwLDAuNSwwLjIsMC44LDAuNywxLjFzMSwwLjIsMS4zLTAuMWwxNy44LTEyLjhjMC40LTAuMywwLjYtMC42LDAuNi0xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTI5LjksMzk2LjctMTMw'+
			'LDM5Ni40LTEzMC40LDM5Ni4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE4NS4zLDQwMS4ybDAtOC4yYzAuMS0wLjYtMC4zLTEtMS0xbC0xMy41LDBWMzkydi03LjZjMC0wLjUtMC4yLTAuOC0wLjctMS4xYy0wLjUtMC4zLTEtMC4yLTEuMywwLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bC0xNy44LDEyLjhjLTAuNCwwLjMtMC42LDAuNi0wLjYsMWMwLDAuNSwwLjIsMC44LDAuNiwxLjFsMTcuOCwxMi43YzAuNCwwLjMsMC45LDAuNCwxLjMsMC4xYzAuNS0wLjMsMC43LTAuNiwwLjctMS4xdi03LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDEzLjUsMEMtMTg1LjUsNDAyLj'+
			'ItMTg1LjIsNDAxLjktMTg1LjMsNDAxLjJ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._movemode_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._movemode_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzMzQuOGMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjctMTQwLjYsMzM0LjgtMTc1LDMzNC44eiBNLTE5MC4yLDM2Ny40bDE0LjEtMTkuOGMwLjMtMC40LDAuNi0wLjYsMS4yLTAuNmMwLjQsMCwwLjcsMC4yLDEuMSwwLjZsMTQuMiwxOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuNCwwLjQsMSwwLjEsMS41Yy0wLjMsMC41LTAu'+
			'NiwwLjctMS4yLDAuN2gtOC40aC0wLjF2MTVjMCwwLjgtMC40LDEuMi0xLjEsMS4xbC05LjEsMGMtMC43LDAuMS0xLjEtMC4zLTEuMS0xLjF2LTE1aC04LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC41LDAtMC45LTAuMi0xLjItMC43Qy0xOTAuNywzNjguNC0xOTAuNiwzNjcuOS0xOTAuMiwzNjcuNHogTS0yMDIuNSw0MTEuM2MwLDAuNS0wLjIsMC45LTAuNywxLjJjLTAuNSwwLjMtMS4xLDAuMi0xLjUtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE5LjgtMTQuMWMtMC40LTAuMy0wLjYtMC42LTAuNi0xLjJjMC0wLjQsMC4yLTAuNywwLjYtMS4xbDE5LjgtMTQuMmMwLjQtMC4zLDEtMC40LDEuNS'+
			'0wLjFjMC41LDAuMywwLjcsMC42LDAuNywxLjJ2OC41djAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7bDE1LDBjMC44LDAsMS4yLDAuNCwxLjEsMS4xbDAsOS4xYzAuMSwwLjctMC4zLDEuMS0xLjEsMS4xbC0xNSwwVjQxMS4zeiBNLTE1OS44LDQyNi44bC0xNC4xLDE5LjhjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNmwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC41aDAuMWwwLTE1YzAtMC44LDAuNC0xLjIsMS4xLTEuMWw5LjEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'YzAuNy0wLjEsMS4xLDAuMywxLjEsMS4xbDAsMTVoOC41YzAuNSwwLDAuOSwwLjIsMS4yLDAuN1MtMTU5LjQsNDI2LjQtMTU5LjgsNDI2Ljh6IE0tMTI1LjUsMzk4LjJsLTE5LjgsMTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC4zLTEsMC40LTEuNSwwLjFjLTAuNS0wLjMtMC43LTAuNi0wLjctMS4ydi04LjV2LTAuMWgtMTVjLTAuOCwwLTEuMi0wLjQtMS4xLTEuMWwwLTkuMWMtMC4xLTAuNywwLjMtMS4xLDEuMS0xLjFoMTVWMzgzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4yLTAuOSwwLjctMS4yYzAuNS0wLjMsMS4xLTAuMiwxLjUsMC4xbDE5LjgsMTQuMWMwLjQsMC4zLDAuNi'+
			'wwLjYsMC42LDEuMkMtMTI0LjgsMzk3LjYtMTI1LjEsMzk3LjktMTI1LjUsMzk4LjJ6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTg5LjIsMzY5LjdoOC41djE1YzAsMC44LDAuNCwxLjIsMS4xLDEuMWw5LjEsMGMwLjcsMC4xLDEuMS0wLjMsMS4xLTEuMXYtMTVoMC4xaDguNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41LDAsMC45LTAuMiwxLjItMC43YzAuMy0wLjUsMC4yLTEuMS0wLjEtMS41bC0xNC4yLTE5LjhjLTAuMy0wLjQtMC42LTAuNi0xLjEtMC42Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOCYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMywwLjQtMC40LDEtMC4xLDEuNUMtMTkwLDM2OS41LTE4OS43LDM2OS43LTE4OS4yLDM2OS43eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MC44LDQyNC42aC04LjVsMC0xNWMwLTAuOC0wLjQtMS4yLTEuMS0xLjFsLTkuMSwwYy0wLjctMC4xLTEuMSwwLjMtMS4xLDEuMWwwLDE1aC0wLjFoLTguNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNSwwLTAuOSwwLjItMS4yLDAuN2MtMC4zLDAuNS0wLjIsMS4xLDAuMSwxLjVsMTQuMiwxOS44YzAuMywwLjQsMC42LDAuNiwxLjEsMC42YzAuNSwwLDAuOS0wLjIsMS4yLTAuNmwxNC'+
			'4xLTE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMy0wLjQsMC40LTEsMC4xLTEuNUMtMTYwLDQyNC44LTE2MC4zLDQyNC42LTE2MC44LDQyNC42eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEyNS41LDM5NmwtMTkuOC0xNC4xYy0wLjQtMC4zLTEtMC40LTEuNS0wLjFjLTAuNSwwLjMtMC43LDAuNi0wLjcsMS4ydjguNWgtMTVjLTAuOCwwLTEuMiwwLjQtMS4xLDEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCw5LjFjLTAuMSwwLjcsMC4zLDEuMSwxLjEsMS4xaDE1djAuMXY4LjVjMCwwLjUsMC4yLDAuOSwwLjcsMS4yczEuMSwwLjIsMS41LTAuMWwxOS44LTE0LjJj'+
			'MC40LTAuMywwLjYtMC42LDAuNi0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMjQuOCwzOTYuNi0xMjUuMSwzOTYuMy0xMjUuNSwzOTZ6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTg2LjQsNDAxLjdsMC05LjFjMC4xLTAuNy0wLjMtMS4xLTEuMS0xLjFsLTE1LDB2LTAuMVYzODNjMC0wLjUtMC4yLTAuOS0wLjctMS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC41LTAuMy0xLjEtMC4yLTEuNSwwLjFsLTE5LjgsMTQuMmMtMC40LDAuMy0wLjYsMC42LTAuNiwxLjFjMCwwLjUsMC4yLDAuOSwwLjYsMS4ybDE5LjgsMTQuMWMwLjQsMC4zLDEsMC40LDEuNSwwLjEmI3'+
			'hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNS0wLjMsMC43LTAuNiwwLjctMS4ydi04LjVsMTUsMEMtMTg2LjcsNDAyLjgtMTg2LjMsNDAyLjQtMTg2LjQsNDAxLjd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._movemode_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="movemode_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._movemode_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._movemode_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewMode() == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._movemode_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._movemode_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._movemode_1.style[domTransition]='';
				if (me._movemode_1.ggCurrentLogicStateVisible == 0) {
					me._movemode_1.style.visibility=(Number(me._movemode_1.style.opacity)>0||!me._movemode_1.style.opacity)?'inherit':'hidden';
					me._movemode_1.ggVisible=true;
				}
				else {
					me._movemode_1.style.visibility="hidden";
					me._movemode_1.ggVisible=false;
				}
			}
		}
		me._movemode_1.onclick=function (e) {
			player.changeViewMode(0);
		}
		me._movemode_1.onmouseover=function (e) {
			me._movemode_1__img.style.visibility='hidden';
			me._movemode_1__imgo.style.visibility='inherit';
		}
		me._movemode_1.onmouseout=function (e) {
			me._movemode_1__img.style.visibility='inherit';
			me._movemode_1__imgo.style.visibility='hidden';
		}
		me._movemode_1.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._movemode_1);
		el=me._movemode_2=document.createElement('div');
		els=me._movemode_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTEzNS4zLDM1Ny4zYy0yMS45LTIxLjktNTcuNS0yMS45LTc5LjQsMHMtMjEuOSw1Ny41LDAsNzkuNHM1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTExMy40LDQxNC44LTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0Mi4yLDQxMi4zbC0xNSwxNWMtMC45LDAuOS0yLjQsMC45LTMuMiwwbC0xMC0xMGwtNywwLjhjLTEuMywwLjEtMy4yLTAuMi00LjMtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE2LjEtNy45Yy0xLjEtMC42LTEuNi0xLjktMS0zLjFsMS40LTIuOGMwLjYt'+
			'MS4xLDItMS42LDMuMS0xLjFsNi4yLDIuOWwtMTktMTljLTAuOS0wLjktMC45LTIuNCwwLTMuMmwxLjgtMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTAuOSwyLjQtMC45LDMuMiwwbDEyLjMsMTIuM2wyLTJsLTE1LjMtMTUuM2MtMC45LTAuOS0wLjktMi40LDAtMy4ybDEuOC0xLjhjMC45LTAuOSwyLjQtMC45LDMuMiwwbDE1LjMsMTUuM2wyLTJsLTEyLjMtMTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjktMC45LTAuOS0yLjQsMC0zLjJsMS44LTEuOGMwLjktMC45LDIuNC0wLjksMy4yLDBsMTIuMywxMi4zbDEuNi0xLjZjMC4xLTAuMSwwLjMtMC4yLDAuNC0wLjNsLTguNC04LjQmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtMC45LTAuOS0wLjktMi40LDAtMy4ybDEuOC0xLjhjMC45LTAuOSwyLjQtMC45LDMuMiwwbDIxLjIsMjEuMmMwLjksMC45LDEuOCwyLjYsMi4xLDMuOWwyLDkuOGw5LjksOS45JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE0MS4zLDQwOS45LTE0MS4zLDQxMS40LTE0Mi4yLDQxMi4zeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQyLjIsNDA5bC05LjktOS45bC0yLTkuOGMtMC4zLTEuMi0xLjItMy0yLjEtMy45bC0yMS4yLTIxLjJjLTAuOS0wLjktMi40LTAuOS0zLjIsMGwtMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7Yy0wLjksMC45LTAuOSwyLjQsMCwzLjJsOC40LDguNGMtMC4yLDAuMS0wLjMsMC4yLTAuNCwwLjNsLTEuNiwxLjZsLTEyLjMtMTIuM2MtMC45LTAuOS0yLjQtMC45LTMuMiwwbC0xLjgsMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuOSwwLjktMC45LDIuNCwwLDMuMmwxMi4zLDEyLjNsLTIsMmwtMTUuMy0xNS4zYy0wLjktMC45LTIuNC0wLjktMy4yLDBsLTEuOCwxLjhjLTAuOSwwLjktMC45LDIuNCwwLDMuMmwxNS4zLDE1LjNsLTIsMiYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xMi4zLTEyLjNjLTAuOS0wLjktMi40LTAuOS0zLjIsMGwtMS44LDEuOGMtMC45LDAuOS0wLjksMi40LDAsMy4ybD'+
			'E5LDE5bC02LjItMi45Yy0xLjEtMC41LTIuNS0wLjEtMy4xLDEuMWwtMS40LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYsMS4xLTAuMSwyLjUsMSwzLjFsMTYuMSw3LjljMS4xLDAuNiwzLjEsMC45LDQuMywwLjdsNy0wLjhsMTAsMTBjMC45LDAuOSwyLjQsMC45LDMuMiwwbDE1LTE1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE0MS4zLDQxMS40LTE0MS4zLDQwOS45LTE0Mi4yLDQwOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._movemode_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._movemode_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTEzMC45LDM1Mi44Yy0yNC40LTI0LjQtNjMuOC0yNC40LTg4LjIsMHMtMjQuNCw2My44LDAsODguMnM2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEwNi42LDQxNi42LTEwNi42LDM3Ny4yLTEzMC45LDM1Mi44eiBNLTEzOC41LDQxMy45bC0xNi43LDE2LjdjLTEsMS0yLjYsMS0zLjYsMGwtMTEuMS0xMS4xbC03LjgsMC45Yy0xLjQsMC4yLTMuNi0wLjItNC44LTAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xNy45LTguN2MtMS4zLTAuNi0xLjgtMi4xLTEuMi0zLjRsMS42LTMu'+
			'MmMwLjYtMS4zLDIuMi0xLjgsMy40LTEuMmw2LjgsMy4zbC0yMS4xLTIxLjFjLTEtMS0xLTIuNiwwLTMuNmwyLTJjMS0xLDIuNi0xLDMuNiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTMuNywxMy43bDIuMi0yLjJsLTE3LTE3Yy0xLTEtMS0yLjYsMC0zLjZsMi0yYzEtMSwyLjYtMSwzLjYsMGwxNywxN2wyLjItMi4ybC0xMy43LTEzLjdjLTEtMS0xLTIuNiwwLTMuNmwyLTJjMS0xLDIuNi0xLDMuNiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTMuNywxMy43bDEuOC0xLjhjMC4xLTAuMSwwLjMtMC4zLDAuNS0wLjRsLTkuNC05LjRjLTEtMS0xLTIuNiwwLTMuNmwyLTJjMS0xLDIuNi0xLDMuNiwwbDIzLj'+
			'YsMjMuNmMxLDEsMiwyLjksMi4zLDQuM2wyLjIsMTAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDExLDExQy0xMzcuNSw0MTEuMy0xMzcuNSw0MTIuOS0xMzguNSw0MTMuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzOC41LDQxMC4zbC0xMS0xMWwtMi4yLTEwLjhjLTAuMy0xLjQtMS4zLTMuMy0yLjMtNC4zbC0yMy42LTIzLjZjLTEtMS0yLjYtMS0zLjYsMGwtMiwyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEsMS0xLDIuNiwwLDMuNmw5LjQsOS40Yy0wLjIsMC4xLTAuMywwLjItMC41LDAuNGwtMS44LDEuOGwtMTMuNy0xMy43Yy0xLTEtMi42'+
			'LTEtMy42LDBsLTIsMmMtMSwxLTEsMi42LDAsMy42bDEzLjcsMTMuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0yLjIsMi4ybC0xNy0xN2MtMS0xLTIuNi0xLTMuNiwwbC0yLDJjLTEsMS0xLDIuNiwwLDMuNmwxNywxN2wtMi4yLDIuMmwtMTMuNy0xMy43Yy0xLTEtMi42LTEtMy42LDBsLTIsMmMtMSwxLTEsMi42LDAsMy42JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMjEuMSwyMS4xbC02LjktMy4zYy0xLjMtMC42LTIuOC0wLjEtMy40LDEuMmwtMS42LDMuMmMtMC42LDEuMy0wLjEsMi44LDEuMiwzLjRsMTcuOSw4LjdjMS4zLDAuNiwzLjQsMSw0LjgsMC44bDcuOC0wLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2'+
			'wxMS4xLDExLjFjMSwxLDIuNiwxLDMuNiwwbDE2LjctMTYuN0MtMTM3LjUsNDEyLjktMTM3LjUsNDExLjMtMTM4LjUsNDEwLjN6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._movemode_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="movemode_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._movemode_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._movemode_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewMode() == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._movemode_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._movemode_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._movemode_2.style[domTransition]='';
				if (me._movemode_2.ggCurrentLogicStateVisible == 0) {
					me._movemode_2.style.visibility=(Number(me._movemode_2.style.opacity)>0||!me._movemode_2.style.opacity)?'inherit':'hidden';
					me._movemode_2.ggVisible=true;
				}
				else {
					me._movemode_2.style.visibility="hidden";
					me._movemode_2.ggVisible=false;
				}
			}
		}
		me._movemode_2.onclick=function (e) {
			player.changeViewMode(1);
		}
		me._movemode_2.onmouseover=function (e) {
			me._movemode_2__img.style.visibility='hidden';
			me._movemode_2__imgo.style.visibility='inherit';
		}
		me._movemode_2.onmouseout=function (e) {
			me._movemode_2__img.style.visibility='inherit';
			me._movemode_2__imgo.style.visibility='hidden';
		}
		me._movemode_2.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._movemode_2);
		el=me._info=document.createElement('div');
		els=me._info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45JiN4ZDsmI3hhOyYjeDk7JiN4OTt6IE0tMTc4LjEsMzYxLjFsNi4yLDBjMy41LDAsNi40LDIuOSw2LjQsNi40djIuOWMwLDMuNS0yLjksNi40LTYuNCw2LjRoLTYuMmMtMy41LDAtNi40LTIuOS02LjQtNi40bDAtMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE4NC41LDM2NC0xODEuNiwzNjEuMS0xNzguMSwzNjEuMXog'+
			'TS0xNjcsNDMwLjRILTE4M2MtMC44LDAtMS41LTAuNy0xLjUtMS41bDAtMzcuN2MwLTAuOCwwLjctMS41LDEuNS0xLjVsMTUuOSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LDAsMS41LDAuNywxLjUsMS41bDAsMzcuN0MtMTY1LjUsNDI5LjctMTY2LjIsNDMwLjQtMTY3LDQzMC40eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2NS41LDM5MS4yYzAtMC44LTAuNy0xLjUtMS41LTEuNWwtMTUuOSwwYy0wLjgsMC0xLjUsMC43LTEuNSwxLjVsMCwzNy43YzAsMC44LDAuNywxLjUsMS41LDEuNWgxNS45JiN4ZDsmI3hhOyYjeDk7Ji'+
			'N4OTsmI3g5O2MwLjgsMCwxLjUtMC43LDEuNS0xLjVMLTE2NS41LDM5MS4yeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3OC4xLDM3Ni44aDYuMmMzLjUsMCw2LjQtMi45LDYuNC02LjR2LTIuOWMwLTMuNS0yLjktNi40LTYuNC02LjRsLTYuMiwwYy0zLjUsMC02LjQsMi45LTYuNCw2LjRsMCwyLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xODQuNSwzNzQtMTgxLjYsMzc2LjgtMTc4LjEsMzc2Ljh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._info__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTc4LjUsMzU3LjFsNi45LDBjMy45LDAsNy4xLDMuMiw3LjEsNy4xdjMuM2MwLDMuOS0zLjIsNy4xLTcuMSw3LjFoLTYuOWMtMy45LDAtNy4xLTMuMi03LjEtNy4xbDAtMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE4NS42LDM2MC4zLTE4Mi40LDM1Ny4xLTE3OC41'+
			'LDM1Ny4xeiBNLTE2Ni4xLDQzNC4xaC0xNy43Yy0wLjksMC0xLjctMC44LTEuNy0xLjdsMC00MS45YzAtMC45LDAuOC0xLjcsMS43LTEuN2wxNy43LDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjksMCwxLjcsMC44LDEuNywxLjdsMCw0MS45Qy0xNjQuNCw0MzMuMy0xNjUuMiw0MzQuMS0xNjYuMSw0MzQuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjQuNCwzOTAuNWMwLTAuOS0wLjgtMS43LTEuNy0xLjdsLTE3LjcsMGMtMC45LDAtMS43LDAuOC0xLjcsMS43bDAsNDEuOWMwLDAuOSwwLjgsMS43LDEuNywxLjdoMTcuNyYjeG'+
			'Q7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC45LDAsMS43LTAuOCwxLjctMS43TC0xNjQuNCwzOTAuNXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguNSwzNzQuNmg2LjljMy45LDAsNy4xLTMuMiw3LjEtNy4xdi0zLjNjMC0zLjktMy4yLTcuMS03LjEtNy4xbC02LjksMGMtMy45LDAtNy4xLDMuMi03LjEsNy4xbDAsMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg1LjUsMzcxLjQtMTgyLjQsMzc0LjYtMTc4LjUsMzc0LjZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._info__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.onclick=function (e) {
			me._userdata.ggVisible = !me._userdata.ggVisible;
			var flag=me._userdata.ggVisible;
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility=((flag)&&(Number(me._userdata.style.opacity)>0||!me._userdata.style.opacity))?'inherit':'hidden';
			me._screentint.ggVisible = !me._screentint.ggVisible;
			var flag=me._screentint.ggVisible;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility=((flag)&&(Number(me._screentint.style.opacity)>0||!me._screentint.style.opacity))?'inherit':'hidden';
			me._controller.style[domTransition]='none';
			me._controller.style.visibility='hidden';
			me._controller.ggVisible=false;
		}
		me._info.onmouseover=function (e) {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
		}
		me._info.onmouseout=function (e) {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._info);
		el=me._autorotate=document.createElement('div');
		els=me._autorotate__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45JiN4ZDsmI3hhOyYjeDk7JiN4OTt6IE0tMTUzLjksNDIzLjZjLTUuOCw0LjYtMTMuMSw3LjQtMjEuMSw3LjRoMGMtMTguNywwLTM0LTE1LjItMzQtMzRoLTAuNWgtNy43Yy0wLjUsMC0wLjgtMC4yLTEuMS0wLjdjLTAuMy0wLjUtMC4yLTEsMC4xLTEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7bDEyLjctMTcuOGMwLjMtMC40'+
			'LDAuNi0wLjYsMS4xLTAuNmMwLjQsMCwwLjcsMC4yLDEsMC42bDEyLjgsMTcuOGMwLjMsMC40LDAuNCwwLjksMC4xLDEuM2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwxMy44LDExLjIsMjUsMjUsMjVoMGM1LjgsMCwxMS4xLTIsMTUuMy01LjNjMC42LTAuNSwxLjQtMC40LDIsMC4yYzAuNSwwLjUsMy4xLDMuNSw0LDQuNEMtMTUzLjEsNDIyLTE1My4yLDQyMy4xLTE1My45LDQyMy42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTc5LDM5N2MwLTIuMiwxLjgtNCw0LTRjMi4yLDAsNCwxLjgsNCw0YzAsMi4yLTEuOCw0LTQsNEMtMTc3LjIsND'+
			'AxLTE3OSwzOTkuMi0xNzksMzk3eiBNLTE0NC41LDQxNi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC0xMi44LTE3LjhjLTAuMy0wLjQtMC40LTAuOS0wLjEtMS4zYzAuMy0wLjUsMC42LTAuNywxLjEtMC43aDcuNmgwLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEzLjgtMTEuMi0yNS0yNS0yNWgwYy01LjgsMC0xMS4xLDItMTUuMyw1LjNjLTAuNiwwLjUtMS40LDAuNC0yLTAuMmMtMC41LTAuNS0zLjEtMy41LTQtNC40Yy0wLjYtMC43LTAuNi0xLjgsMC4xLTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzUuOC00LjYsMTMu'+
			'MS03LjQsMjEuMS03LjRoMGMxOC43LDAsMzQsMTUuMiwzNCwzNGgwLjVoNy43YzAuNSwwLDAuOCwwLjIsMS4xLDAuN2MwLjMsMC41LDAuMiwxLTAuMSwxLjNMLTE0NC41LDQxNi45eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUzLjcsNDIxLjNjLTAuOC0wLjktMy41LTMuOS00LTQuNGMtMC42LTAuNi0xLjQtMC42LTItMC4yYy00LjIsMy4zLTkuNSw1LjMtMTUuMyw1LjNoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xMy44LDAtMjUtMTEuMi0yNS0yNWgwLjdoNy42YzAuNSwwLDAuOC0wLjIsMS4xLTAuN2MwLjMtMC41LDAuMi0xLTAuMS0xLj'+
			'NsLTEyLjgtMTcuOGMtMC4zLTAuNC0wLjYtMC42LTEtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOCwwLjItMS4xLDAuNmwtMTIuNywxNy44Yy0wLjMsMC40LTAuNCwwLjktMC4xLDEuM2MwLjMsMC41LDAuNiwwLjcsMS4xLDAuN2g3LjdoMC41YzAsMTguNywxNS4yLDM0LDM0LDM0aDAmI3hkOyYjeGE7JiN4OTsmI3g5O2M4LDAsMTUuMy0yLjgsMjEuMS03LjRDLTE1My4yLDQyMy4xLTE1My4xLDQyMi0xNTMuNyw0MjEuM3oiLz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzMS43LDM5Ny43Yy0wLjMtMC41LTAuNi0wLjctMS4xLTAuN2gtNy43aC0wLjVjMC0xOC43LTE1LjIt'+
			'MzQtMzQtMzRoMGMtOCwwLTE1LjMsMi44LTIxLjEsNy40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNywwLjUtMC44LDEuNi0wLjEsMi4zYzAuOCwwLjksMy41LDMuOSw0LDQuNGMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zaDBjMTMuOCwwLDI1LDExLjIsMjUsMjVoLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7aC03LjZjLTAuNSwwLTAuOCwwLjItMS4xLDAuN2MtMC4zLDAuNS0wLjIsMSwwLjEsMS4zbDEyLjgsMTcuOGMwLjMsMC40LDAuNiwwLjYsMSwwLjZjMC41LDAsMC44LTAuMiwxLjEtMC42bDEyLjctMTcuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzEuNS'+
			'wzOTguNy0xMzEuNCwzOTguMi0xMzEuNywzOTcuN3oiLz4KICA8Y2lyY2xlIGN5PSIzOTciIGZpbGw9IiNGRkZGRkYiIGN4PSItMTc1IiByPSI0Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzMzQuN2MtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Uy0xNDAuNiwzMzQuNy0xNzUsMzM0Ljd6IE0tMTUxLjUsNDI2LjZjLTYuNCw1LjEtMTQuNiw4LjItMjMuNSw4LjJoMGMtMjAuOCwwLTM3LjctMTYuOS0zNy43LTM3LjdoLTAuNmgtOC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOS0wLjItMS4yLTAuN2MtMC4zLTAuNS0wLjItMS4xLDAuMS0xLjVsMTQu'+
			'MS0xOS44YzAuMy0wLjQsMC42LTAuNiwxLjItMC42YzAuNCwwLDAuNywwLjIsMS4xLDAuNmwxNC4yLDE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMC40LDAuNCwxLDAuMSwxLjVjLTAuMywwLjUtMC42LDAuNy0xLjIsMC43aC04LjRoLTAuN2MwLDE1LjMsMTIuNCwyNy43LDI3LjcsMjcuN2gwYzYuNCwwLDEyLjMtMi4yLDE3LTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNy0wLjUsMS42LTAuNCwyLjIsMC4yYzAuNiwwLjYsMy41LDMuOCw0LjQsNC45Qy0xNTAuNyw0MjQuOC0xNTAuNyw0MjYtMTUxLjUsNDI2LjZ6IE0tMTc5LjQsMzk3YzAtMi40LDItNC40LDQuNC00LjQmI3hkOyYjeGE7Ji'+
			'N4OTsmI3g5O2MyLjQsMCw0LjQsMiw0LjQsNC40YzAsMi40LTIsNC40LTQuNCw0LjRDLTE3Ny40LDQwMS40LTE3OS40LDM5OS41LTE3OS40LDM5N3ogTS0xNDEuMSw0MTkuMWMtMC4zLDAuNC0wLjYsMC42LTEuMiwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC43LTAuMi0xLjEtMC42bC0xNC4yLTE5LjhjLTAuMy0wLjQtMC40LTEtMC4xLTEuNWMwLjMtMC41LDAuNi0wLjcsMS4yLTAuN2g4LjRoMC43YzAtMTUuMy0xMi40LTI3LjctMjcuNy0yNy43aDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNi40LDAtMTIuMywyLjItMTcsNS45Yy0wLjcsMC41LTEuNiwwLjQtMi4yLTAuMmMtMC42LTAu'+
			'Ni0zLjUtMy44LTQuNC00LjljLTAuNy0wLjgtMC42LTIsMC4yLTIuNmM2LjQtNS4xLDE0LjYtOC4yLDIzLjUtOC4yaDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MyMC44LDAsMzcuNywxNi45LDM3LjcsMzcuN2gwLjZoOC42YzAuNSwwLDAuOSwwLjIsMS4yLDAuN2MwLjMsMC41LDAuMiwxLjEtMC4xLDEuNUwtMTQxLjEsNDE5LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuNCw0MjRjLTAuOS0xLTMuOS00LjMtNC40LTQuOWMtMC42LTAuNi0xLjUtMC43LTIuMi0wLjJjLTQuNywzLjctMTAuNiw1LjktMTcsNS45aDAmI3hkOyYjeGE7JiN4OT'+
			'smI3g5O2MtMTUuMywwLTI3LjctMTIuNC0yNy43LTI3LjdoMC43aDguNGMwLjUsMCwwLjktMC4yLDEuMi0wLjdzMC4yLTEuMS0wLjEtMS41bC0xNC4yLTE5LjhjLTAuMy0wLjQtMC42LTAuNi0xLjEtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOSwwLjItMS4yLDAuNmwtMTQuMSwxOS44Yy0wLjMsMC40LTAuNCwxLTAuMSwxLjVjMC4zLDAuNSwwLjYsMC43LDEuMiwwLjdoOC42aDAuNmMwLDIwLjgsMTYuOSwzNy43LDM3LjcsMzcuN2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjOC45LDAsMTctMy4xLDIzLjUtOC4yQy0xNTAuNyw0MjYtMTUwLjcsNDI0LjgtMTUxLjQsNDI0eiIvPgogIDxw'+
			'YXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTI2LjksMzk3LjhjLTAuMy0wLjUtMC42LTAuNy0xLjItMC43aC04LjZoLTAuNmMwLTIwLjgtMTYuOS0zNy43LTM3LjctMzcuN2gwYy04LjksMC0xNywzLjEtMjMuNSw4LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC44LDAuNi0wLjgsMS44LTAuMiwyLjZjMC45LDEsMy45LDQuMyw0LjQsNC45YzAuNiwwLjYsMS41LDAuNywyLjIsMC4yYzQuNy0zLjcsMTAuNi01LjksMTctNS45aDBjMTUuMywwLDI3LjcsMTIuNCwyNy43LDI3LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gtMC43aC04LjRjLTAuNSwwLTAuOSwwLjItMS4yLDAuN2MtMC4zLDAuNS0wLjIsMS4xLD'+
			'AuMSwxLjVsMTQuMiwxOS44YzAuMywwLjQsMC42LDAuNiwxLjEsMC42YzAuNSwwLDAuOS0wLjIsMS4yLTAuNmwxNC4xLTE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTI2LjcsMzk4LjktMTI2LjYsMzk4LjMtMTI2LjksMzk3Ljh6Ii8+CiAgPGNpcmNsZSBjeT0iMzk3IiBmaWxsPSIjRkZGRkZGIiBjeD0iLTE3NSIgcj0iNC40Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="autorotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate.style[domTransition]='';
				if (me._autorotate.ggCurrentLogicStateVisible == 0) {
					me._autorotate.style.visibility="hidden";
					me._autorotate.ggVisible=false;
				}
				else {
					me._autorotate.style.visibility=(Number(me._autorotate.style.opacity)>0||!me._autorotate.style.opacity)?'inherit':'hidden';
					me._autorotate.ggVisible=true;
				}
			}
		}
		me._autorotate.onclick=function (e) {
			player.startAutorotate("0.2","5","1");
		}
		me._autorotate.onmouseover=function (e) {
			me._autorotate__img.style.visibility='hidden';
			me._autorotate__imgo.style.visibility='inherit';
		}
		me._autorotate.onmouseout=function (e) {
			me._autorotate__img.style.visibility='inherit';
			me._autorotate__imgo.style.visibility='hidden';
		}
		me._autorotate.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._autorotate);
		el=me._autorotate_off=document.createElement('div');
		els=me._autorotate_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE5Ni4xLDM3MC40YzUuOC00LjYsMTMuMS03LjQsMjEuMS03LjRjNy43LDAsMTQuOSwyLjYsMjAuNiw3bC02LjQsNi40Yy00LTIuOC04LjktNC40LTE0LjItNC40Yy01LjgsMC0xMS4xLDItMTUuMyw1LjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAuNS0xLjQsMC40LTItMC4yYy0w'+
			'LjUtMC41LTMuMS0zLjUtNC00LjRDLTE5Ni45LDM3Mi0xOTYuOCwzNzEtMTk2LjEsMzcwLjR6IE0tMjE3LjIsMzk3Yy0wLjUsMC0wLjgtMC4yLTEuMS0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNS0wLjItMSwwLjEtMS4zbDEyLjctMTcuOGMwLjMtMC40LDAuNi0wLjYsMS4xLTAuNmMwLjQsMCwwLjcsMC4yLDEsMC42bDEyLjgsMTcuOGMwLjMsMC40LDAuNCwwLjksMC4xLDEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC41LTAuNiwwLjctMS4xLDAuN2gtNy42aC0wLjZjMCw1LjIsMS43LDEwLjEsNC41LDE0LjFsLTYuNCw2LjRjLTQuNC01LjctNy0xMi44LTcuMS0yMC41aC0wLj'+
			'VILTIxNy4yeiBNLTIwNy4yLDQzMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40czAuOCwwLjEsMS4xLDAuNGwxLjcsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NkMtMjA2LjQsNDMyLjItMjA2LjgsNDMyLjMtMjA3LjIsNDMyLjN6IE0tMTUzLjksNDIzLjNjLTUuOCw0LjYtMTMuMSw3LjQtMjEuMSw3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNy43LDAtMTQuOC0yLjYtMjAuNS02LjlsNi40LTYuNGM0LDIu'+
			'Nyw4LjgsNC4zLDE0LDQuM2M1LjgsMCwxMS4xLTIsMTUuMy01LjNjMC42LTAuNSwxLjQtMC40LDIsMC4yYzAuNSwwLjUsMy4xLDMuNSw0LDQuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNTMuMSw0MjEuOC0xNTMuMiw0MjIuOC0xNTMuOSw0MjMuM3ogTS0xNDQuNSw0MTYuOWMtMC4zLDAuNC0wLjYsMC42LTEuMSwwLjZjLTAuNCwwLTAuNy0wLjItMS0wLjZsLTEyLjgtMTcuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC40LTAuNC0wLjktMC4xLTEuM2MwLjMtMC41LDAuNi0wLjcsMS4xLTAuN2g3LjZoMC43YzAtNS4zLTEuNi0xMC4xLTQuNC0xNC4ybDYuNC02LjRjNC40LDUuNyw3LDEyLjksNy'+
			'wyMC42aDAuNWg3LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjUsMCwwLjgsMC4yLDEuMSwwLjdjMC4zLDAuNSwwLjIsMS0wLjEsMS4zTC0xNDQuNSw0MTYuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0Mi44LDM2MS43YzAuNCwwLDAuOCwwLjEsMS4xLDAuNGwxLjcsMS43YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2Qy0xNDMuNiwzNjEuOC0x'+
			'NDMuMiwzNjEuNy0xNDIuOCwzNjEuNyIvPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Mi4zLDM3Ny4xYzAuNiwwLjYsMS40LDAuNiwyLDAuMmM0LjItMy4zLDkuNS01LjMsMTUuMy01LjNjNS4zLDAsMTAuMSwxLjYsMTQuMiw0LjRsNi40LTYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTUuNy00LjQtMTIuOS03LTIwLjYtN2MtOCwwLTE1LjMsMi44LTIxLjEsNy40Yy0wLjcsMC41LTAuOCwxLjYtMC4xLDIuM0MtMTk1LjQsMzczLjctMTkyLjgsMzc2LjYtMTkyLjMsMzc3LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMxLjcsMzk3LjdjLTAuMy0wLj'+
			'UtMC42LTAuNy0xLjEtMC43aC03LjdoLTAuNWMwLTcuNy0yLjYtMTQuOS03LTIwLjZsLTYuNCw2LjRjMi44LDQsNC40LDguOSw0LjQsMTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoLTAuN2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzEuNSwzOTguNi0xMzEuNCwzOTguMi0xMzEuNywzOTcuN3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMjA5'+
			'LDM5N2MwLjEsNy43LDIuNywxNC44LDcuMSwyMC41bDYuNC02LjRjLTIuOC00LTQuNS04LjgtNC41LTE0LjFoMC42aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMy0wLjUsMC4yLTEtMC4xLTEuM2wtMTIuOC0xNy44Yy0wLjMtMC40LTAuNi0wLjYtMS0wLjZjLTAuNSwwLTAuOCwwLjItMS4xLDAuNmwtMTIuNywxNy44Yy0wLjMsMC40LTAuNCwwLjktMC4xLDEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43SC0yMDl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTU3LjcsNDE2LjZjLT'+
			'AuNi0wLjYtMS40LTAuNi0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zYy01LjIsMC0xMC0xLjYtMTQtNC4zbC02LjQsNi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M1LjcsNC4zLDEyLjgsNi45LDIwLjUsNi45YzgsMCwxNS4zLTIuOCwyMS4xLTcuNGMwLjctMC41LDAuOC0xLjYsMC4xLTIuM0MtMTU0LjYsNDIwLjEtMTU3LjIsNDE3LjEtMTU3LjcsNDE2LjZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._autorotate_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xOTguNSwzNjcuNWM2LjQtNS4xLDE0LjYtOC4yLDIzLjUtOC4yYzguNiwwLDE2LjUsMi45LDIyLjksNy44bC03LjIsNy4yYy00LjUtMy4xLTkuOS00LjktMTUuNy00LjljLTYuNCwwLTEyLjMsMi4yLTE3LDUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC41LTEuNiwwLjQt'+
			'Mi4yLTAuMmMtMC42LTAuNi0zLjUtMy44LTQuNC00LjlDLTE5OS4zLDM2OS4yLTE5OS4zLDM2OC4xLTE5OC41LDM2Ny41eiBNLTIyMS45LDM5N2MtMC41LDAtMC45LTAuMi0xLjItMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjUtMC4yLTEuMSwwLjEtMS41bDE0LjEtMTkuOGMwLjMtMC40LDAuNi0wLjYsMS4yLTAuNmMwLjQsMCwwLjcsMC4yLDEuMSwwLjZsMTQuMiwxOS44YzAuMywwLjQsMC40LDEsMC4xLDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC41aC0wLjdjMC4xLDUuOCwxLjksMTEuMiw1LDE1LjZsLTcuMSw3LjFjLTQuOS02LjMtNy'+
			'44LTE0LjItNy45LTIyLjhoLTAuNkgtMjIxLjl6IE0tMjEwLjcsNDM2LjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zYzAuMy0wLjMsMC44LTAuNSwxLjItMC41czAuOSwwLjIsMS4yLDAuNWwxLjgsMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNDLTIwOS45LDQzNi4xLTIxMC4zLDQzNi4zLTIxMC43LDQzNi4zeiBNLTE1MS41LDQyNi4zYy02LjQsNS4xLTE0LjYsOC4yLTIzLjUsOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTguNSwwLTE2'+
			'LjQtMi45LTIyLjgtNy43bDcuMi03LjJjNC40LDMsOS44LDQuOCwxNS42LDQuOGM2LjQsMCwxMi4zLTIuMiwxNy01LjljMC43LTAuNSwxLjYtMC40LDIuMiwwLjJjMC42LDAuNiwzLjUsMy44LDQuNCw0LjkmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTUwLjcsNDI0LjUtMTUwLjcsNDI1LjctMTUxLjUsNDI2LjN6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjZsLTE0LjItMTkuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTUuOC0xLjgtMTEuMy'+
			'00LjktMTUuN2w3LjItNy4yYzQuOSw2LjQsNy44LDE0LjMsNy44LDIyLjloMC42aDguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNSwwLDAuOSwwLjIsMS4yLDAuN2MwLjMsMC41LDAuMiwxLjEtMC4xLDEuNUwtMTQxLjEsNDE5LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzkuMywzNTcuN2MwLjQsMCwwLjksMC4yLDEuMiwwLjVsMS44LDEuOGMwLjcsMC43LDAuNywxLjcsMCwyLjRsLTczLjMsNzMuM2MtMC4zLDAuMy0wLjgsMC41LTEuMiwwLjUmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjct'+
			'MC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zQy0xNDAuMSwzNTcuOS0xMzkuNywzNTcuNy0xMzkuMywzNTcuNyIvPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5NC4yLDM3NC45YzAuNiwwLjYsMS41LDAuNywyLjIsMC4yYzQuNy0zLjcsMTAuNi01LjksMTctNS45YzUuOCwwLDExLjMsMS44LDE1LjcsNC45bDcuMi03LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy02LjQtNC45LTE0LjMtNy44LTIyLjktNy44Yy04LjksMC0xNywzLjEtMjMuNSw4LjJjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42Qy0xOTcuNywzNzEuMS0xOTQuOCwzNzQuNC0xOTQuMiwzNzQuOXoiLz4KIC'+
			'AgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMjYuOSwzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMi0wLjdoLTguNmgtMC42YzAtOC42LTIuOS0xNi41LTcuOC0yMi45bC03LjIsNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MzLjEsNC41LDQuOSw5LjksNC45LDE1LjdoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOGMwLjMsMC40LDAuNiwwLjYsMS4xLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41LDAsMC45LTAuMiwxLjItMC42bDE0LjEtMTkuOEMtMTI2LjcsMzk4LjgtMTI2LjYsMzk4LjMtMTI2Ljks'+
			'Mzk3Ljd6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIxMi43LDM5N2MwLjEsOC42LDMsMTYuNSw3LjksMjIuOGw3LjEtNy4xYy0zLjEtNC40LTUtOS44LTUtMTUuNmgwLjdoOC41YzAuNSwwLDAuOS0wLjIsMS4yLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLTAuNSwwLjItMS4xLTAuMS0xLjVsLTE0LjItMTkuOGMtMC4zLTAuNC0wLjYtMC42LTEuMS0wLjZjLTAuNSwwLTAuOSwwLjItMS4yLDAuNmwtMTQuMSwxOS44Yy0wLjMsMC40LTAuNCwxLTAuMSwxLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLjUsMC42LDAuNywxLjIsMC43aD'+
			'guNkgtMjEyLjd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTU1LjgsNDE4LjhjLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWMtNS44LDAtMTEuMS0xLjgtMTUuNi00LjhsLTcuMiw3LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzYuMyw0LjgsMTQuMiw3LjcsMjIuOCw3LjdjOC45LDAsMTctMy4xLDIzLjUtOC4yYzAuOC0wLjYsMC44LTEuOCwwLjItMi42Qy0xNTIuMyw0MjIuNi0xNTUuMiw0MTkuNC0xNTUuOCw0MTguOHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="autorotate_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate_off.style[domTransition]='';
				if (me._autorotate_off.ggCurrentLogicStateVisible == 0) {
					me._autorotate_off.style.visibility=(Number(me._autorotate_off.style.opacity)>0||!me._autorotate_off.style.opacity)?'inherit':'hidden';
					me._autorotate_off.ggVisible=true;
				}
				else {
					me._autorotate_off.style.visibility="hidden";
					me._autorotate_off.ggVisible=false;
				}
			}
		}
		me._autorotate_off.onclick=function (e) {
			player.stopAutorotate();
		}
		me._autorotate_off.onmouseover=function (e) {
			me._autorotate_off__img.style.visibility='hidden';
			me._autorotate_off__imgo.style.visibility='inherit';
		}
		me._autorotate_off.onmouseout=function (e) {
			me._autorotate_off__img.style.visibility='inherit';
			me._autorotate_off__imgo.style.visibility='hidden';
		}
		me._autorotate_off.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._autorotate_off);
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBmaW'+
			'xsPSIjRkZGRkZGIiBkPSJNLTE0My4yLDM4Ny41YzEuMSwwLDEuNiwwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjUmI3hkOyYjeGE7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjVjMC0xLjMsMC41LTEuOCwxLjYtMS44SC0xNDMuMnoiLz4KIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwz'+
			'NDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7IE0tMTQxLjYsNDA0LjdjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtNjMuNWMtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMTUuNSYjeGQ7JiN4YTsmI3g5O2MwLTEuMywwLjUtMS44LDEuNi0xLjhoNjMuNWMxLjEsMCwxLjYsMC41LDEuNiwxLjhWNDA0Ljd6Ii8+Cjwvc3ZnPgo=';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBmaW'+
			'xsPSIjRkZGRkZGIiBkPSJNLTEzOS43LDM4Ni40YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtNzAuNiYjeGQ7JiN4YTsmI3g5O2MtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42LTEuNHYtMTcuMmMwLTEuNCwwLjYtMiwxLjgtMkgtMTM5Ljd6Ii8+CiA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC42LDMzNC42'+
			'LTE3NSwzMzQuNnomI3hkOyYjeGE7JiN4OTsgTS0xMzcuOSw0MDUuNmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtNzAuNmMtMC40LDAtMC44LTAuMi0xLjItMC42cy0wLjYtMC44LTAuNi0xLjR2LTE3LjImI3hkOyYjeGE7JiN4OTtjMC0xLjQsMC42LTIsMS44LTJoNzAuNmMxLjIsMCwxLjgsMC42LDEuOCwyVjQwNS42eiIvPgo8L3N2Zz4K';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE0MS42LDQwNC43YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTIyLjN2MjIuMWMwLDAuNS0wLjIsMC45LTAuNSwxLjNjLTAuNCwwLjQtMC43LDAuNS0xLjEsMC41aC0xNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4x'+
			'LTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTIyLjFoLTIyLjNjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEuMywwLjUtMS44LDEuNi0xLjhoMjIuM3YtMjIuMWMwLTEuMywwLjUtMS44LDEuNi0xLjhoMTUuN2MxLjEsMCwxLjYsMC41LDEuNiwxLjh2MjIuMWgyMi4zYzEuMSwwLDEuNiwwLjUsMS42LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNDEuNiwzODkuMy0xNDEuNiw0MDQuNy0xNDEuNiw0MDQuN3oiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIi'+
			'BkPSJNLTE2NS41LDM4Ny41aDIyLjNjMS4xLDAsMS42LDAuNSwxLjYsMS44djE1LjVjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtMjIuM3YyMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtMTUuN2MtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMjIuMWgtMjIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41LTAuNy0wLjUtMS4zdi0xNS41YzAtMS4zLDAuNS0xLjgsMS42LTEuOGgy'+
			'Mi4zdi0yMi4xYzAtMS4zLDAuNS0xLjgsMS42LTEuOGgxNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4xLDAsMS42LDAuNSwxLjYsMS44VjM4Ny41eiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xMzcuOSw0MDUuNmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtMjQuOHYyNC42YzAsMC42LTAuMiwxLTAuNiwxLjRzLTAuOCwwLjYtMS4yLDAuNmgtMTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZjLTAu'+
			'NC0wLjQtMC42LTAuOC0wLjYtMS40di0yNC42aC0yNC44Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZzLTAuNi0wLjgtMC42LTEuNHYtMTcuMmMwLTEuNCwwLjYtMiwxLjgtMiYjeGQ7JiN4YTsmI3g5OyYjeDk7aDI0Ljh2LTI0LjZjMC0xLjQsMC42LTIsMS44LTJoMTcuNGMxLjIsMCwxLjgsMC42LDEuOCwydjI0LjZoMjQuOGMxLjIsMCwxLjgsMC42LDEuOCwyQy0xMzcuOSwzODguNC0xMzcuOSw0MDUuNi0xMzcuOSw0MDUuNnoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2NC41LDM4Ni40aDI0LjhjMS4yLDAsMS44LDAuNiwxLjgsMnYxNy4yYz'+
			'AsMC42LTAuMiwxLTAuNiwxLjRjLTAuNCwwLjQtMC44LDAuNi0xLjIsMC42aC0yNC44djI0LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNi0wLjIsMS0wLjYsMS40cy0wLjgsMC42LTEuMiwwLjZoLTE3LjRjLTAuNCwwLTAuOC0wLjItMS4yLTAuNmMtMC40LTAuNC0wLjYtMC44LTAuNi0xLjR2LTI0LjZoLTI0LjhjLTAuNCwwLTAuOC0wLjItMS4yLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjYtMC44LTAuNi0xLjR2LTE3LjJjMC0xLjQsMC42LTIsMS44LTJoMjQuOHYtMjQuNmMwLTEuNCwwLjYtMiwxLjgtMmgxNy40YzEuMiwwLDEuOCwwLjYsMS44LDJWMzg2LjR6Ii8+CiA8L2c+Cjwvc3Zn'+
			'Pgo=';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._zoomin);
		me._hide_elements.appendChild(me._controller);
		me.divSkin.appendChild(me._hide_elements);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(59,73,82,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((176-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbarbg=document.createElement('div');
		el.ggId="loadingbarbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbarbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbarbg.ggUpdatePosition=function (useTransition) {
		}
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #db2a2a;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loadingbarbg.appendChild(me._loadingbar);
		me._loading.appendChild(me._loadingbarbg);
		me.divSkin.appendChild(me._loading);
		el=me._screentint=document.createElement('div');
		el.ggId="screentint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -0.1%;';
		hs+='position : absolute;';
		hs+='top : -0.142857%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint.onclick=function (e) {
			me._close.style[domTransition]='none';
			me._close.style.visibility='hidden';
			me._close.ggVisible=false;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
			me._controller.ggVisible=true;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.ggSubElement.src='';
			me._popup_image.style[domTransition]='none';
			me._popup_image.style.visibility='hidden';
			me._popup_image.ggVisible=false;
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
			me._menu_button.style[domTransition]='none';
			me._menu_button.style.visibility=(Number(me._menu_button.style.opacity)>0||!me._menu_button.style.opacity)?'inherit':'hidden';
			me._menu_button.ggVisible=true;
			me._popup_image.ggText=basePath + "";
			me._popup_image.ggSubElement.style.width = '0px';
			me._popup_image.ggSubElement.style.height = '0px';
			me._popup_image.ggSubElement.src='';
			me._popup_image.ggSubElement.src=me._popup_image.ggText;
		}
		me._screentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint);
		el=me._userdata=document.createElement('div');
		el.ggId="userdata";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdata.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._userdata.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._userdatabg=document.createElement('div');
		el.ggId="userdatabg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(59,73,82,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabg.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdatabg);
		el=me._title=document.createElement('div');
		els=me._title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._title.ggUpdateText=function() {
			var hs="<b>"+me.ggUserdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._title.ggUpdateText();
		player.addListener('changenode', function() {
			me._title.ggUpdateText();
		});
		el.appendChild(els);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._title);
		el=me._description=document.createElement('div');
		els=me._description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 75px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 75px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: justify;';
		hs+='white-space: normal;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._description.ggUpdateText=function() {
			var hs=me.ggUserdata.description+"<br\/><br\/>"+me.ggUserdata.author+"<br\/>"+me.ggUserdata.datetime;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._description.ggUpdateText();
		player.addListener('changenode', function() {
			me._description.ggUpdateText();
		});
		el.appendChild(els);
		me._description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._description.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._description);
		el=me._copyright=document.createElement('div');
		els=me._copyright__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="copyright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._copyright.ggUpdateText=function() {
			var hs="&#169; "+me.ggUserdata.copyright;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._copyright.ggUpdateText();
		player.addListener('changenode', function() {
			me._copyright.ggUpdateText();
		});
		el.appendChild(els);
		me._copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._copyright.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._copyright);
		el=me._userdata_close=document.createElement('div');
		els=me._userdata_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZGIyYTJhIiBkPSJNLTEzNS4zLDM1Ny4zYy0yMS45LTIxLjktNTcuNS0yMS45LTc5LjQsMGMtMjEuOSwyMS45LTIxLjksNTcuNSwwLDc5LjRjMjEuOSwyMS45LDU3LjUsMjEuOSw3OS40LDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTEzLjQsMzc5LjItMTM1LjMsMzU3LjN6IE0tMTQ1LjgsNDEyLjdjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjVjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xNS44LTE1LjhsLTE1LjcsMTUuN2Mt'+
			'MC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS43LTE1LjdsLTE1LjgtMTUuOGMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDEwLjktMTAuOWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxNS44LDE1LjhsMTUuNy0xNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xNS43LDE1LjdMLTE0NS44LD'+
			'QxMi43eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYxLjYsMzk2LjlsMTUuOCwxNS44YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTUuNy0xNS43'+
			'bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS44LDE1LjhsMTUuNy0xNS43YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNEwtMTYxLjYsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._userdata_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._userdata_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZGIyYTJhIiBkPSJNLTEzMC45LDM1Mi45Yy0yNC40LTI0LjQtNjMuOC0yNC40LTg4LjIsMGMtMjQuNCwyNC40LTI0LjQsNjMuOCwwLDg4LjJjMjQuNCwyNC40LDYzLjgsMjQuNCw4OC4yLDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTA2LjUsMzc3LjMtMTMwLjksMzUyLjl6IE0tMTQyLjUsNDE0LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAu'+
			'NCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41bDE3LjQtMTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTcuNCwxNy40TC0xNDIuNSw0MTQuNXoiLz4KIDwvZz'+
			'4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MC4xLDM5Ni45bDE3LjUsMTcuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNiwwLjEtMSwwLjYtMS40bDE3LjQtMTcuNGwtMTcuNS0xNy41Yy0w'+
			'LjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40bDEyLjItMTIuMmMxLTEsMS44LTEsMi43LTAuMWwxNy41LDE3LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43TC0xNjAuMSwzOTYuOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._userdata_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="userdata_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdata_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_close.onclick=function (e) {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
			me._controller.ggVisible=true;
			me._menu_button.style[domTransition]='none';
			me._menu_button.style.visibility=(Number(me._menu_button.style.opacity)>0||!me._menu_button.style.opacity)?'inherit':'hidden';
			me._menu_button.ggVisible=true;
		}
		me._userdata_close.onmouseover=function (e) {
			me._userdata_close__img.style.visibility='hidden';
			me._userdata_close__imgo.style.visibility='inherit';
		}
		me._userdata_close.onmouseout=function (e) {
			me._userdata_close__img.style.visibility='inherit';
			me._userdata_close__imgo.style.visibility='hidden';
		}
		me._userdata_close.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_close);
		me.divSkin.appendChild(me._userdata);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg=document.createElement('div');
		el.ggId="informationbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(59,73,82,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._informationbg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 276px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 276px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZGIyYTJhIiBkPSJNLTEzNS4zLDM1Ny4zYy0yMS45LTIxLjktNTcuNS0yMS45LTc5LjQsMGMtMjEuOSwyMS45LTIxLjksNTcuNSwwLDc5LjRjMjEuOSwyMS45LDU3LjUsMjEuOSw3OS40LDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTEzLjQsMzc5LjItMTM1LjMsMzU3LjN6IE0tMTQ1LjgsNDEyLjdjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjVjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xNS44LTE1LjhsLTE1LjcsMTUuN2Mt'+
			'MC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS43LTE1LjdsLTE1LjgtMTUuOGMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDEwLjktMTAuOWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxNS44LDE1LjhsMTUuNy0xNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xNS43LDE1LjdMLTE0NS44LD'+
			'QxMi43eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYxLjYsMzk2LjlsMTUuOCwxNS44YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTUuNy0xNS43'+
			'bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS44LDE1LjhsMTUuNy0xNS43YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNEwtMTYxLjYsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZGIyYTJhIiBkPSJNLTEzMC45LDM1Mi45Yy0yNC40LTI0LjQtNjMuOC0yNC40LTg4LjIsMGMtMjQuNCwyNC40LTI0LjQsNjMuOCwwLDg4LjJjMjQuNCwyNC40LDYzLjgsMjQuNCw4OC4yLDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTA2LjUsMzc3LjMtMTMwLjksMzUyLjl6IE0tMTQyLjUsNDE0LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAu'+
			'NCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41bDE3LjQtMTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTcuNCwxNy40TC0xNDIuNSw0MTQuNXoiLz4KIDwvZz'+
			'4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MC4xLDM5Ni45bDE3LjUsMTcuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNiwwLjEtMSwwLjYtMS40bDE3LjQtMTcuNGwtMTcuNS0xNy41Yy0w'+
			'LjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40bDEyLjItMTIuMmMxLTEsMS44LTEsMi43LTAuMWwxNy41LDE3LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43TC0xNjAuMSwzOTYuOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 263px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.onclick=function (e) {
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
			me._controller.ggVisible=true;
			me._menu_button.style[domTransition]='none';
			me._menu_button.style.visibility=(Number(me._menu_button.style.opacity)>0||!me._menu_button.style.opacity)?'inherit':'hidden';
			me._menu_button.ggVisible=true;
		}
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._ht_info_close);
		me.divSkin.appendChild(me._information);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.onclick=function (e) {
			me._close.onclick.call(me._close);
		}
		me._image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsLW9wYWNpdHk9IjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0iI2RiMmEyYSIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGNpcmNsZSBjeT0iMyIgY3g9IjE2IiByPSIwIj4KICA8YW5pbWF0ZSBiZWdpbj0iMCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZS'+
			'B0cmFuc2Zvcm09InJvdGF0ZSg0NSAxNiAxNikiIGN5PSIzIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGJlZ2luPSIwLjEyNXMiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTYgMTYpIiBjeT0iMyIgY3g9IjE2IiByPSIwIj4KICA8YW5pbWF0ZSBiZWdpbj0iMC4yNXMiIGF0dHJpYnV0ZU5hbWU9'+
			'InIiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgY3k9IjMiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgYmVnaW49IjAuMzc1cyIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZG'+
			'U9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeT0iMyIgY3g9IjE2IiByPSIwIj4KICA8YW5pbWF0ZSBiZWdpbj0iMC41cyIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgyMjUgMTYg'+
			'MTYpIiBjeT0iMyIgY3g9IjE2IiByPSIwIj4KICA8YW5pbWF0ZSBiZWdpbj0iMC42MjVzIiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIGN5PSIzIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGJlZ2luPSIwLjc1cyIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBrZX'+
			'lTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgzMTUgMTYgMTYpIiBjeT0iMyIgY3g9IjE2IiByPSIwIj4KICA8YW5pbWF0ZSBiZWdpbj0iMC44NzVzIiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0i'+
			'aW5kZWZpbml0ZSIgZHVyPSIxcyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN5PSIzIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGJlZ2luPSIwLjVzIiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIvPgogPC9jaXJjbGU+Cjwvc3ZnPgo=';
		me._loading_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="popup_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._image_popup.appendChild(me._popup_image);
		me.divSkin.appendChild(me._image_popup);
		el=me._dropdown_menu=document.createElement('div');
		el.ggId="Dropdown Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 190px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 280px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dropdown_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dropdown_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dropdown_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dropdown_menu.style[domTransition]='';
				if (me._dropdown_menu.ggCurrentLogicStateVisible == 0) {
					me._dropdown_menu.style.visibility=(Number(me._dropdown_menu.style.opacity)>0||!me._dropdown_menu.style.opacity)?'inherit':'hidden';
					me._dropdown_menu.ggVisible=true;
				}
				else {
					me._dropdown_menu.style.visibility="hidden";
					me._dropdown_menu.ggVisible=false;
				}
			}
		}
		me._dropdown_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_background=document.createElement('div');
		el.ggId="Dropdown Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(180,180,180,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 163px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : hidden;';
		hs+='width : 280px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_background.onclick=function (e) {
			me._dropdown_menu_title_background.onclick.call(me._dropdown_menu_title_background);
		}
		me._dropdown_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_scrollarea=document.createElement('div');
		els=me._dropdown_scrollarea__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 274px;';
		hs+="";
		els.setAttribute('style',hs);
		me._dropdown_scrollarea.ggScrollByX = function(diffX) {
			if(!me._dropdown_scrollarea.ggHorScrollVisible || diffX == 0 || me._dropdown_scrollarea.ggHPercentVisible >= 1.0) return;
			me._dropdown_scrollarea.ggScrollPosX = (me._dropdown_scrollarea__horScrollFg.offsetLeft + diffX);
			me._dropdown_scrollarea.ggScrollPosX = Math.max(me._dropdown_scrollarea.ggScrollPosX, 0);
			me._dropdown_scrollarea.ggScrollPosX = Math.min(me._dropdown_scrollarea.ggScrollPosX, me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth);
			me._dropdown_scrollarea__horScrollFg.style.left = me._dropdown_scrollarea.ggScrollPosX + 'px';
			me._dropdown_scrollarea__content.style.left = -(Math.round(me._dropdown_scrollarea.ggScrollPosX / me._dropdown_scrollarea.ggHPercentVisible)) + me._dropdown_scrollarea.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosXPercent = (me._dropdown_scrollarea__horScrollFg.offsetLeft / me._dropdown_scrollarea__horScrollBg.offsetWidth);
		}
		me._dropdown_scrollarea.ggScrollByXSmooth = function(diffX) {
			if(!me._dropdown_scrollarea.ggHorScrollVisible || diffX == 0 || me._dropdown_scrollarea.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._dropdown_scrollarea.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._dropdown_scrollarea.ggScrollPosX >= me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth)) {
					me._dropdown_scrollarea.ggScrollPosX = Math.min(me._dropdown_scrollarea.ggScrollPosX, me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._dropdown_scrollarea.ggScrollPosX <= 0)) {
					me._dropdown_scrollarea.ggScrollPosX = Math.max(me._dropdown_scrollarea.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea__horScrollFg.style.left = me._dropdown_scrollarea.ggScrollPosX + 'px';
			me._dropdown_scrollarea__content.style.left = -(Math.round(me._dropdown_scrollarea.ggScrollPosX / me._dropdown_scrollarea.ggHPercentVisible)) + me._dropdown_scrollarea.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosXPercent = (me._dropdown_scrollarea__horScrollFg.offsetLeft / me._dropdown_scrollarea__horScrollBg.offsetWidth);
			}, 10);
		}
		me._dropdown_scrollarea.ggScrollByY = function(diffY) {
			if(!me._dropdown_scrollarea.ggVertScrollVisible || diffY == 0 || me._dropdown_scrollarea.ggVPercentVisible >= 1.0) return;
			me._dropdown_scrollarea.ggScrollPosY = (me._dropdown_scrollarea__vertScrollFg.offsetTop + diffY);
			me._dropdown_scrollarea.ggScrollPosY = Math.max(me._dropdown_scrollarea.ggScrollPosY, 0);
			me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
			me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
			me._dropdown_scrollarea__content.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + me._dropdown_scrollarea.ggContentTopOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosYPercent = (me._dropdown_scrollarea__vertScrollFg.offsetTop / me._dropdown_scrollarea__vertScrollBg.offsetHeight);
		}
		me._dropdown_scrollarea.ggScrollByYSmooth = function(diffY) {
			if(!me._dropdown_scrollarea.ggVertScrollVisible || diffY == 0 || me._dropdown_scrollarea.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._dropdown_scrollarea.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._dropdown_scrollarea.ggScrollPosY >= me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight)) {
					me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._dropdown_scrollarea.ggScrollPosY <= 0)) {
					me._dropdown_scrollarea.ggScrollPosY = Math.max(me._dropdown_scrollarea.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
			me._dropdown_scrollarea__content.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + me._dropdown_scrollarea.ggContentTopOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosYPercent = (me._dropdown_scrollarea__vertScrollFg.offsetTop / me._dropdown_scrollarea__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._dropdown_scrollarea.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._dropdown_scrollarea.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._dropdown_scrollarea.ggHPercentVisible);
					me._dropdown_scrollarea.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._dropdown_scrollarea.offsetWidth - (me._dropdown_scrollarea.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._dropdown_scrollarea.offsetWidth - (me._dropdown_scrollarea.ggVertScrollVisible ? 15 : 0))) * me._dropdown_scrollarea.ggHPercentVisible);
					me._dropdown_scrollarea.ggScrollByXSmooth(diffX);
				}
			}
			if (me._dropdown_scrollarea.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._dropdown_scrollarea.offsetHeight - (me._dropdown_scrollarea.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._dropdown_scrollarea.offsetHeight - (me._dropdown_scrollarea.ggHorScrollVisible ? 15 : 0))) * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._dropdown_scrollarea.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._dropdown_scrollarea.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._dropdown_scrollarea__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea.ggDragInertiaX *= 0.65;
					me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea.ggScrollByX(me._dropdown_scrollarea.ggDragInertiaX);
					me._dropdown_scrollarea.ggScrollByY(me._dropdown_scrollarea.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea.ggDragInertiaX) < 1.0 && Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._dropdown_scrollarea__content.ontouchend = null;
				me._dropdown_scrollarea__content.ontouchmove = null;
				me._dropdown_scrollarea__content.onpointerup = null;
				me._dropdown_scrollarea__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._dropdown_scrollarea__content.onpointerup = me._dropdown_scrollarea__content.ontouchend;
		}
			me._dropdown_scrollarea__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._dropdown_scrollarea.ggDragLastX) * me._dropdown_scrollarea.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._dropdown_scrollarea.ggDragLastY) * me._dropdown_scrollarea.ggVPercentVisible;
				me._dropdown_scrollarea.ggDragInertiaX = -diffX;
				me._dropdown_scrollarea.ggDragInertiaY = -diffY;
				me._dropdown_scrollarea.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._dropdown_scrollarea.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._dropdown_scrollarea.ggScrollByX(-diffX);
				me._dropdown_scrollarea.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._dropdown_scrollarea__content.onpointermove = me._dropdown_scrollarea__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._dropdown_scrollarea__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 160px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._dropdown_scrollarea__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 160px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._dropdown_scrollarea.ggScrollPosY = 0;
		me._dropdown_scrollarea.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._dropdown_scrollarea.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea.ggScrollByY(me._dropdown_scrollarea.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._dropdown_scrollarea.ggDragLastY;
				me._dropdown_scrollarea.ggDragInertiaY = diffY;
				me._dropdown_scrollarea.ggDragLastY = e.clientY;
				me._dropdown_scrollarea.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._dropdown_scrollarea.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea.ggScrollByY(me._dropdown_scrollarea.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._dropdown_scrollarea.ggDragLastY;
				me._dropdown_scrollarea.ggDragInertiaY = diffY;
				me._dropdown_scrollarea.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._dropdown_scrollarea.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._dropdown_scrollarea.ggScrollHeight;
			if (e.offsetY < me._dropdown_scrollarea.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._dropdown_scrollarea__vertScrollBg.getBoundingClientRect();
			var diffY = me._dropdown_scrollarea.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._dropdown_scrollarea.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._dropdown_scrollarea.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._dropdown_scrollarea__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Dropdown Scrollarea";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 160px;';
		hs+='left : 2px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 275px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_scrollarea.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_scrollarea.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._dropdown_scrollarea.ggHorScrollVisible && contentHeight > this.offsetHeight - 15) || (!me._dropdown_scrollarea.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._dropdown_scrollarea__vertScrollBg.style.visibility = 'inherit';
					me._dropdown_scrollarea__vertScrollFg.style.visibility = 'inherit';
					me._dropdown_scrollarea.ggVertScrollVisible = true;
				} else {
					me._dropdown_scrollarea__vertScrollBg.style.visibility = 'hidden';
					me._dropdown_scrollarea__vertScrollFg.style.visibility = 'hidden';
					me._dropdown_scrollarea.ggVertScrollVisible = false;
				}
				if(me._dropdown_scrollarea.ggVertScrollVisible) {
					me._dropdown_scrollarea.ggAvailableWidth = me._dropdown_scrollarea.offsetWidth - 15;
					if (me._dropdown_scrollarea.ggHorScrollVisible) {
						me._dropdown_scrollarea.ggAvailableHeight = me._dropdown_scrollarea.offsetHeight - 15;
						me._dropdown_scrollarea.ggAvailableHeightWithScale = me._dropdown_scrollarea.getBoundingClientRect().height - me._dropdown_scrollarea__vertScrollBg.getBoundingClientRect().width;
						me._dropdown_scrollarea__cornerBg.style.visibility = 'inherit';
					} else {
						me._dropdown_scrollarea.ggAvailableHeight = me._dropdown_scrollarea.offsetHeight;
						me._dropdown_scrollarea.ggAvailableHeightWithScale = me._dropdown_scrollarea.getBoundingClientRect().height;
						me._dropdown_scrollarea__cornerBg.style.visibility = 'hidden';
					}
					me._dropdown_scrollarea__vertScrollBg.style.height = me._dropdown_scrollarea.ggAvailableHeight + 'px';
					me._dropdown_scrollarea.ggVPercentVisible = contentHeight != 0 ? me._dropdown_scrollarea.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._dropdown_scrollarea.ggVPercentVisible > 1.0) me._dropdown_scrollarea.ggVPercentVisible = 1.0;
					me._dropdown_scrollarea.ggScrollHeight =  Math.round(me._dropdown_scrollarea__vertScrollBg.offsetHeight * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea__vertScrollFg.style.height = me._dropdown_scrollarea.ggScrollHeight + 'px';
					me._dropdown_scrollarea.ggScrollPosY = me._dropdown_scrollarea.ggScrollPosYPercent * me._dropdown_scrollarea.ggAvailableHeight;
					me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
					me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
					if (me._dropdown_scrollarea.ggVPercentVisible < 1.0) {
						me._dropdown_scrollarea__content.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._dropdown_scrollarea.ggAvailableWidth = me._dropdown_scrollarea.offsetWidth;
					me._dropdown_scrollarea.ggScrollPosY = 0;
					me._dropdown_scrollarea.ggScrollPosYPercent = 0.0;
					me._dropdown_scrollarea__content.style.top = this.ggContentTopOffset + 'px';
					me._dropdown_scrollarea__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._dropdown_scrollarea.ggHorScrollVisible || vertScrollWasVisible != me._dropdown_scrollarea.ggVertScrollVisible) {
					me.updateSize(me._dropdown_scrollarea);
					me._dropdown_scrollarea.ggUpdatePosition();
				}
			}
		}
		el=me._dropdown_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 275;
		el.ggHeight = 52;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._dropdown_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._menu_item && me._dropdown_cloner.ggInstances[i]._menu_item.logicBlock_backgroundcolor) {
						me._dropdown_cloner.ggInstances[i]._menu_item.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._dropdown_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._menu_item_title && me._dropdown_cloner.ggInstances[i]._menu_item_title.logicBlock_textcolor) {
						me._dropdown_cloner.ggInstances[i]._menu_item_title.logicBlock_textcolor();
					}
				}
			}
		}
		me._dropdown_cloner.callChildLogicBlocks_active = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._menu_item_visited_checkmark && me._dropdown_cloner.ggInstances[i]._menu_item_visited_checkmark.logicBlock_alpha) {
						me._dropdown_cloner.ggInstances[i]._menu_item_visited_checkmark.logicBlock_alpha();
					}
				}
			}
		}
		me._dropdown_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._menu_item_visited_checkmark && me._dropdown_cloner.ggInstances[i]._menu_item_visited_checkmark.logicBlock_alpha) {
						me._dropdown_cloner.ggInstances[i]._menu_item_visited_checkmark.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._dropdown_cloner.ggUpdating == true) return;
			me._dropdown_cloner.ggUpdating = true;
			var el=me._dropdown_cloner;
			var curNumCols = 0;
			curNumCols = me._dropdown_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._dropdown_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._dropdown_cloner.ggHeight) + 'px';
				parameter.left=(column * me._dropdown_cloner.ggWidth) + 'px';
				parameter.width=me._dropdown_cloner.ggWidth + 'px';
				parameter.height=me._dropdown_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_dropdown_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._dropdown_cloner.callChildLogicBlocks_mouseover();
			me._dropdown_cloner.callChildLogicBlocks_mouseover();
			me._dropdown_cloner.callChildLogicBlocks_active();
			me._dropdown_cloner.callChildLogicBlocks_changevisitednodes();
			me._dropdown_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._dropdown_cloner.parentNode.classList.contains('ggskin_subelement') && me._dropdown_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._dropdown_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Dropdown Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 275px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner.childNodes.length; i++) {
				var child=me._dropdown_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._dropdown_cloner.ggUpdatePosition=function (useTransition) {
				me._dropdown_cloner.ggUpdate();
		}
		me._dropdown_cloner.ggNodeChange=function () {
			me._dropdown_cloner.ggUpdateConditionNodeChange();
		}
		me._dropdown_scrollarea__content.appendChild(me._dropdown_cloner);
		me._dropdown_background.appendChild(me._dropdown_scrollarea);
		me._dropdown_menu.appendChild(me._dropdown_background);
		el=me._dropdown_menu_title_background=document.createElement('div');
		el.ggId="Dropdown Menu Title Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #db2a2a;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title_background.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_title_background'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_title_background.style[domTransition]='background-color 0s';
				if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(219,42,42,0.784314)";
				}
				else {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(219,42,42,1)";
				}
			}
		}
		me._dropdown_menu_title_background.onclick=function (e) {
			me._dropdown_background.ggVisible = !me._dropdown_background.ggVisible;
			var flag=me._dropdown_background.ggVisible;
			me._dropdown_background.style[domTransition]='none';
			me._dropdown_background.style.visibility=((flag)&&(Number(me._dropdown_background.style.opacity)>0||!me._dropdown_background.style.opacity))?'inherit':'hidden';
			me._dropdown_open.ggVisible = !me._dropdown_open.ggVisible;
			var flag=me._dropdown_open.ggVisible;
			me._dropdown_open.style[domTransition]='none';
			me._dropdown_open.style.visibility=((flag)&&(Number(me._dropdown_open.style.opacity)>0||!me._dropdown_open.style.opacity))?'inherit':'hidden';
			me._dropdown_close.ggVisible = !me._dropdown_close.ggVisible;
			var flag=me._dropdown_close.ggVisible;
			me._dropdown_close.style[domTransition]='none';
			me._dropdown_close.style.visibility=((flag)&&(Number(me._dropdown_close.style.opacity)>0||!me._dropdown_close.style.opacity))?'inherit':'hidden';
		}
		me._dropdown_menu_title_background.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=true;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.onmouseout=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_menu_title=document.createElement('div');
		els=me._dropdown_menu_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 240px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_menu_title.ggUpdateText=function() {
			var hs="<div class=\"dropdown-caption\">"+me.ggUserdata.title+"<\/div>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._dropdown_menu_title.ggUpdateText();
		});
		el.appendChild(els);
		me._dropdown_menu_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_menu_title);
		el=me._dropdown_open=document.createElement('div');
		els=me._dropdown_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aW'+
			'R0aD0iMjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIGhlaWdodD0iMjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5Z29uIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgcG9pbnRzPSIwLDAgMTAsMjAgMjAsMCAiLz4KPC9zdmc+Cg==';
		me._dropdown_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_open.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_open);
		el=me._dropdown_close=document.createElement('div');
		els=me._dropdown_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aW'+
			'R0aD0iMjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIGhlaWdodD0iMjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5Z29uIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgcG9pbnRzPSIyMCwyMCAxMCwwIDAsMjAgIi8+Cjwvc3ZnPgo=';
		me._dropdown_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_close.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_close);
		me._dropdown_menu.appendChild(me._dropdown_menu_title_background);
		me.divSkin.appendChild(me._dropdown_menu);
		el=me._close=document.createElement('div');
		els=me._close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZGIyYTJhIiBkPSJNLTEzNS4zLDM1Ny4zYy0yMS45LTIxLjktNTcuNS0yMS45LTc5LjQsMGMtMjEuOSwyMS45LTIxLjksNTcuNSwwLDc5LjRjMjEuOSwyMS45LDU3LjUsMjEuOSw3OS40LDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTEzLjQsMzc5LjItMTM1LjMsMzU3LjN6IE0tMTQ1LjgsNDEyLjdjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjVjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xNS44LTE1LjhsLTE1LjcsMTUuN2Mt'+
			'MC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS43LTE1LjdsLTE1LjgtMTUuOGMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDEwLjktMTAuOWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxNS44LDE1LjhsMTUuNy0xNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xNS43LDE1LjdMLTE0NS44LD'+
			'QxMi43eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYxLjYsMzk2LjlsMTUuOCwxNS44YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTUuNy0xNS43'+
			'bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS44LDE1LjhsMTUuNy0xNS43YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNEwtMTYxLjYsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZGIyYTJhIiBkPSJNLTEzMC45LDM1Mi45Yy0yNC40LTI0LjQtNjMuOC0yNC40LTg4LjIsMGMtMjQuNCwyNC40LTI0LjQsNjMuOCwwLDg4LjJjMjQuNCwyNC40LDYzLjgsMjQuNCw4OC4yLDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTA2LjUsMzc3LjMtMTMwLjksMzUyLjl6IE0tMTQyLjUsNDE0LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAu'+
			'NCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41bDE3LjQtMTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTcuNCwxNy40TC0xNDIuNSw0MTQuNXoiLz4KIDwvZz'+
			'4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MC4xLDM5Ni45bDE3LjUsMTcuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNiwwLjEtMSwwLjYtMS40bDE3LjQtMTcuNGwtMTcuNS0xNy41Yy0w'+
			'LjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40bDEyLjItMTIuMmMxLTEsMS44LTEsMi43LTAuMWwxNy41LDE3LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43TC0xNjAuMSwzOTYuOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close.onclick=function (e) {
			me._close.style[domTransition]='none';
			me._close.style.visibility='hidden';
			me._close.ggVisible=false;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
			me._controller.ggVisible=true;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.ggSubElement.src='';
			me._popup_image.style[domTransition]='none';
			me._popup_image.style.visibility='hidden';
			me._popup_image.ggVisible=false;
			me._menu_button.style[domTransition]='none';
			me._menu_button.style.visibility=(Number(me._menu_button.style.opacity)>0||!me._menu_button.style.opacity)?'inherit':'hidden';
			me._menu_button.ggVisible=true;
			me._popup_image.ggText=basePath + "";
			me._popup_image.ggSubElement.style.width = '0px';
			me._popup_image.ggSubElement.style.height = '0px';
			me._popup_image.ggSubElement.src='';
			me._popup_image.ggSubElement.src=me._popup_image.ggText;
		}
		me._close.onmouseover=function (e) {
			me._close__img.style.visibility='hidden';
			me._close__imgo.style.visibility='inherit';
		}
		me._close.onmouseout=function (e) {
			me._close__img.style.visibility='inherit';
			me._close__imgo.style.visibility='hidden';
		}
		me._close.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._close);
		el=me._hs_animation_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="hs_animation_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 321px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_animation_timer.ggIsActive=function() {
			return (me._hs_animation_timer.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._hs_animation_timer.ggTimestamp) / me._hs_animation_timer.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hs_animation_timer.ggActivate=function () {
			player.setVariableValue('hs_state', !player.getVariableValue('hs_state'));
		}
		me._hs_animation_timer.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._hs_animation_timer);
		if (player.transitionsDisabled) {
			me._dropdown_menu.style[domTransition]='none';
		} else {
			me._dropdown_menu.style[domTransition]='all 1000ms ease-out 0ms';
		}
		me._dropdown_menu.ggParameter.rx=300;me._dropdown_menu.ggParameter.ry=0;
		me._dropdown_menu.style[domTransform]=parameterToTransform(me._dropdown_menu.ggParameter);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._loadingbg.style[domTransition]='none';
			me._loadingbg.style.visibility=(Number(me._loadingbg.style.opacity)>0||!me._loadingbg.style.opacity)?'inherit':'hidden';
			me._loadingbg.ggVisible=true;
			me._dropdown_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
			if (player.transitionsDisabled) {
				me._dropdown_menu.style[domTransition]='none';
			} else {
				me._dropdown_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._dropdown_menu.ggParameter.rx=0;me._dropdown_menu.ggParameter.ry=0;
			me._dropdown_menu.style[domTransform]=parameterToTransform(me._dropdown_menu.ggParameter);
			me._dropdown_scrollarea.ggUpdatePosition();
		});
		player.addListener('beforechangenode', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_logo_down_mouseover = function(){
		if(hotspotTemplates['ht_logo_down']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_logo_down'].length; i++) {
				if (hotspotTemplates['ht_logo_down'][i]._mozyr360_logo && hotspotTemplates['ht_logo_down'][i]._mozyr360_logo.logicBlock_alpha) {
					hotspotTemplates['ht_logo_down'][i]._mozyr360_logo.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hotspot_preview && hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._checkmark_tick && hotspotTemplates['ht_node'][i]._checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changevisitednodes = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node_visited && hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._checkmark_tick && hotspotTemplates['ht_node'][i]._checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_changenode = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_image && hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_scaling) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mouseover = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_hs_state = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_image && hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_scaling) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_mouse_over = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_image && hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_scaling) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_changenode = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_hs_state = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_mouse_over = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_changenode = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image_image && hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_scaling) {
					hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_mouseover = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_hs_state = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image_image && hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_scaling) {
					hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_mouse_over = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image_image && hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_scaling) {
					hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_scaling();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._hide_timer.ggLastIsActive!=me._hide_timer.ggIsActive()) {
			me._hide_timer.ggLastIsActive=me._hide_timer.ggIsActive();
			if (me._hide_timer.ggLastIsActive) {
				if (player.transitionsDisabled) {
					me._hide_elements.style[domTransition]='none';
				} else {
					me._hide_elements.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hide_elements.style.opacity='1';
				me._hide_elements.style.visibility=me._hide_elements.ggVisible?'inherit':'hidden';
				if (player.transitionsDisabled) {
					me._menu_button.style[domTransition]='none';
				} else {
					me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._menu_button.style.opacity='0';
				me._menu_button.style.visibility='hidden';
			} else {
				if (player.transitionsDisabled) {
					me._menu_button.style[domTransition]='none';
				} else {
					me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._menu_button.style.opacity='1';
				me._menu_button.style.visibility=me._menu_button.ggVisible?'inherit':'hidden';
				if (player.transitionsDisabled) {
					me._hide_elements.style[domTransition]='none';
				} else {
					me._hide_elements.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hide_elements.style.opacity='0';
				me._hide_elements.style.visibility='hidden';
			}
		}
		if (me.elementMouseOver['hide_elements']) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=skin.ggCurrentTime;
		}
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-1,true);
		}
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		if (me._hs_animation_timer.ggLastIsActive!=me._hs_animation_timer.ggIsActive()) {
			me._hs_animation_timer.ggLastIsActive=me._hs_animation_timer.ggIsActive();
			if (me._hs_animation_timer.ggLastIsActive) {
				player.setVariableValue('hs_state', !player.getVariableValue('hs_state'));
			} else {
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_logo_down(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_logo_down=document.createElement('div');
		el.ggId="ht_logo_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_logo_down.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_logo_down.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_logo_down.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_logo_down.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_logo_down.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_logo_down.ggUpdatePosition=function (useTransition) {
		}
		el=me._mozyr360_logo=document.createElement('div');
		els=me._mozyr360_logo__img=document.createElement('img');
		els.className='ggskin ggskin_mozyr360_logo';
		hs=basePath + 'skindata/mozyr360_logo.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mozyr360_logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 120px;';
		hs+='left : -60px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mozyr360_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._mozyr360_logo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['mozyr360_logo'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._mozyr360_logo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._mozyr360_logo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._mozyr360_logo.style[domTransition]='opacity 0s';
				if (me._mozyr360_logo.ggCurrentLogicStateAlpha == 0) {
					me._mozyr360_logo.style.visibility=me._mozyr360_logo.ggVisible?'inherit':'hidden';
					me._mozyr360_logo.style.opacity=1;
				}
				else {
					me._mozyr360_logo.style.visibility=me._mozyr360_logo.ggVisible?'inherit':'hidden';
					me._mozyr360_logo.style.opacity=0.5;
				}
			}
		}
		me._mozyr360_logo.onmouseover=function (e) {
			me.elementMouseOver['mozyr360_logo']=true;
			me._mozyr360_logo.logicBlock_alpha();
		}
		me._mozyr360_logo.onmouseout=function (e) {
			me.elementMouseOver['mozyr360_logo']=false;
			me._mozyr360_logo.logicBlock_alpha();
		}
		me._mozyr360_logo.ontouchend=function (e) {
			me.elementMouseOver['mozyr360_logo']=false;
			me._mozyr360_logo.logicBlock_alpha();
		}
		me._mozyr360_logo.ggUpdatePosition=function (useTransition) {
		}
		me._ht_logo_down.appendChild(me._mozyr360_logo);
		me.ggUse3d=true;
		me.gg3dDistance=500;
		me.__div = me._ht_logo_down;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hotspot_preview.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited=document.createElement('div');
		els=me._ht_node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZGIyYTJhIiBkPSJNLTE3NSwzNDFjLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYuMS0xNDQsMzQxLTE3NSwzNDF6IE0tMTY3LjksMzY2LjZjMC41LTAuNSwxLjQtMC41LDIsMGwxLjIsMS4yYzAuNSwwLjUsMC41LDEuNCwwLDJsLTI1LjMsMjUuM2MtMC41LDAuNS0xLjcsMS41LTIsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjEtMC44LDAuMS0xLjEsMGMtMC4zLTAuMS0xLjQt'+
			'MS0yLTEuNWwtNy44LTcuOGMtMC41LTAuNS0wLjUtMS40LDAtMmwxLjItMS4yYzAuNS0wLjUsMS40LTAuNSwyLDBsNy4yLDcuMkwtMTY3LjksMzY2LjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xNTQuOSwzOTRjMC4zLTAuMywwLjYtMC40LDEtMC40YzAuNCwwLDAuNywwLjEsMSwwLjRsOC43LDguNXYxMS40Yy03LjYtMi43LTE2LjctNC4zLTI2LjMtNC43TC0xNTQuOSwzOTR6IE0tMTU0LjYsMzgzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi4zLTAuNCw0LjQsMC42LDQuNywyLjNjMC4zLDEuNy0xLjMsMy40LTMuNSwzLjljLTIuMywwLjQtNC40LTAuNi00LjctMi4zQy0xNTguNCwzODUuMi0xNTYuOS'+
			'wzODMuNS0xNTQuNiwzODN6IE0tMTczLDQwOS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNywwLTEuMywwLTIsMGMtMTEuMSwwLTIyLDEuNy0zMC44LDQuOHYtNi43YzguNS0xLjQsMTkuNC0yLjMsMzAuOC0yLjNjMi4xLDAsNC4xLDAsNi4yLDAuMUwtMTczLDQwOS4yeiBNLTE2Nyw0MDMuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjYtMC4xLTUuMy0wLjEtOC0wLjFjLTUuNCwwLTEwLjcsMC4yLTE1LjcsMC41bDE0LjItMTMuOWMwLjktMC45LDIuNC0wLjksMy4zLDBsMTAsOS43TC0xNjcsNDAzLjR6IE0tMTM3LjksNDIwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjgtMC40LDEuNS0xLjEsMS45'+
			'Yy0wLjcsMC40LTEuNSwwLjUtMi4yLDAuMWMtOC43LTQuMi0yMS02LjYtMzMuOC02LjZzLTI1LjIsMi40LTMzLjgsNi42Yy0wLjMsMC4yLTAuNiwwLjItMSwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC44LTAuMS0xLjItMC4zYy0wLjctMC40LTEuMS0xLjEtMS4xLTEuOXYtNDUuOGMwLTAuOCwwLjQtMS41LDEuMS0xLjljMC43LTAuNCwxLjUtMC41LDIuMi0wLjFjNywzLjQsMTYuNCw1LjYsMjYuNSw2LjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wtNC4xLDQuMWMtNy44LTAuOS0xNS4xLTIuNi0yMS4xLTV2MzguOWM4LjktMy42LDIwLjYtNS42LDMyLjYtNS42YzEyLDAsMjMuNiwyLDMyLj'+
			'YsNS42di0zOC45Yy04LjksMy42LTIwLjYsNS42LTMyLjYsNS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLTAuNSwwLTAuNywwbDQuNi00LjZjMTEuNC0wLjQsMjIuMi0yLjcsMzAtNi41YzAuNy0wLjMsMS41LTAuMywyLjIsMC4xYzAuNywwLjQsMS4xLDEuMSwxLjEsMS45TC0xMzcuOSw0MjBMLTEzNy45LDQyMHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE3Ni41LDM4OS45bC0xNC4yLDEzLjljNS0wLjMsMTAuMy0wLjUsMTUuNy0wLjVjMi43LDAsNS4zLDAsOCwwLjFsMy44LTMuN2wtMTAt'+
			'OS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTc0LjEsMzg5LTE3NS42LDM4OS0xNzYuNSwzODkuOXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTIwNS44LDQwNy4zdjYuN2M4LjgtMy4xLDE5LjYtNC44LDMwLjgtNC44YzAuNywwLDEuMywwLDIsMGw0LjItNC4xYy0yLTAuMS00LjEtMC4xLTYuMi0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xODYuMyw0MDUtMTk3LjMsNDA1LjgtMjA1LjgsNDA3LjN6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0xNDQuMiw0MTMuOXYtMTEuNGwtOC43LTguNW'+
			'MtMC4zLTAuMy0wLjYtMC40LTEtMC40Yy0wLjQsMC0wLjcsMC4xLTEsMC40bC0xNS42LDE1LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNjAuOSw0MDkuNi0xNTEuOCw0MTEuMy0xNDQuMiw0MTMuOXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE1My40LDM4OS4yYzIuMy0wLjQsMy45LTIuMiwzLjUtMy45Yy0wLjMtMS43LTIuNC0yLjctNC43LTIuM2MtMi4zLDAuNC0zLjksMi4yLTMuNSwzLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNTcuOCwzODguNi0xNTUuNywzODkuNi0xNTMuNCwzODkuMnoiLz4KICAgPHBhdGggZmlsbC1vcGFj'+
			'aXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE5OS44LDM4NC4yYy0wLjUtMC41LTEuNC0wLjUtMiwwbC0xLjIsMS4yYy0wLjUsMC41LTAuNSwxLjQsMCwybDcuOCw3LjhjMC41LDAuNSwxLjcsMS41LDIsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMsMC4xLDAuOCwwLjEsMS4xLDBjMC4zLTAuMSwxLjQtMSwyLTEuNWwyNS4zLTI1LjNjMC41LTAuNSwwLjUtMS40LDAtMmwtMS4yLTEuMmMtMC41LTAuNS0xLjQtMC41LTIsMGwtMjQuNywyNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wtMTk5LjgsMzg0LjJ6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZm'+
			'ZmZiIgZD0iTS0xMzksMzcyLjNjLTAuNy0wLjQtMS41LTAuNS0yLjItMC4xYy03LjgsMy44LTE4LjYsNi4xLTMwLDYuNWwtNC42LDQuNmMwLjIsMCwwLjUsMCwwLjcsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMTIsMCwyMy42LTIsMzIuNi01LjZ2MzguOWMtOC45LTMuNi0yMC42LTUuNi0zMi42LTUuNnMtMjMuNiwyLTMyLjYsNS42di0zOC45YzYsMi40LDEzLjMsNC4xLDIxLjEsNWw0LjEtNC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMTAuMS0wLjctMTkuNS0yLjktMjYuNS02LjNjLTAuNy0wLjMtMS41LTAuMy0yLjIsMC4xYy0wLjcsMC40LTEuMSwxLjEtMS4xLDEuOVY0MjBjMCww'+
			'LjgsMC40LDEuNSwxLjEsMS45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQsMC4yLDAuOCwwLjMsMS4yLDAuM2MwLjMsMCwwLjctMC4xLDEtMC4yYzguNy00LjIsMjEtNi42LDMzLjgtNi42YzEyLjgsMCwyNS4yLDIuNCwzMy44LDYuNmMwLjcsMC4zLDEuNSwwLjMsMi4yLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC43LTAuNCwxLjEtMS4xLDEuMS0xLjl2LTQ1LjhDLTEzNy45LDM3My40LTEzOC4zLDM3Mi43LTEzOSwzNzIuM3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_node_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_visited__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZGIyYTJhIiBkPSJNLTE3NSwzMzQuN2MtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNy0xNDAuNiwzMzQuNy0xNzUsMzM0Ljd6IE0tMTY3LjEsMzYzLjJjMC42LTAuNiwxLjYtMC42LDIuMiwwbDEuMywxLjNjMC42LDAuNiwwLjYsMS42LDAsMi4ybC0yOC4yLDI4LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAuNi0xLjksMS42LTIuMiwxLjdjLTAuMywwLjEtMC45LDAuMS0x'+
			'LjMsMGMtMC4zLTAuMS0xLjYtMS4xLTIuMi0xLjdsLTguNi04LjZjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxLjMtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LTAuNiwxLjYtMC42LDIuMiwwbDgsOEwtMTY3LjEsMzYzLjJ6IE0tMTUyLjcsMzkzLjdjMC4zLTAuMywwLjctMC41LDEuMS0wLjVzMC44LDAuMiwxLjEsMC40bDkuNiw5LjR2MTIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy04LjQtMy0xOC42LTQuOC0yOS4yLTUuMkwtMTUyLjcsMzkzLjd6IE0tMTUyLjMsMzgxLjVjMi41LTAuNSw0LjksMC42LDUuMywyLjVjMC40LDEuOS0xLjQsMy44LTMuOSw0LjNjLTIuNSwwLjUtNC45LTAuNi01Lj'+
			'MtMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE1Ni42LDM4My45LTE1NC44LDM4Mi0xNTIuMywzODEuNXogTS0xNzIuOCw0MTAuNWMtMC43LDAtMS41LDAtMi4yLDBjLTEyLjQsMC0yNC41LDEuOS0zNC4yLDUuM3YtNy40YzkuNC0xLjYsMjEuNi0yLjUsMzQuMi0yLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjMsMCw0LjYsMCw2LjksMC4xTC0xNzIuOCw0MTAuNXogTS0xNjYuMiw0MDQuMWMtMi45LTAuMS01LjktMC4yLTguOC0wLjJjLTYsMC0xMS44LDAuMi0xNy40LDAuNmwxNS44LTE1LjRjMS0xLDIuNi0xLDMuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTEuMSwxMC44TC0xNjYuMiw0MDQuMXog'+
			'TS0xMzMuOCw0MjIuNWMwLDAuOS0wLjQsMS43LTEuMiwyLjFjLTAuNywwLjUtMS42LDAuNS0yLjQsMC4xYy05LjYtNC42LTIzLjMtNy4zLTM3LjYtNy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTI4LDIuNy0zNy42LDcuM2MtMC4zLDAuMi0wLjcsMC4yLTEuMSwwLjJjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNGMtMC43LTAuNS0xLjItMS4zLTEuMi0yLjF2LTUwLjljMC0wLjksMC40LTEuNywxLjItMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LTAuNSwxLjYtMC41LDIuNC0wLjFjNy44LDMuOCwxOC4yLDYuMiwyOS40LDdsLTQuNiw0LjZjLTguNi0wLjktMTYuNy0yLjgtMjMuNC01LjV2NDMuMmM5Lj'+
			'ktNCwyMi45LTYuMiwzNi4yLTYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7czI2LjMsMi4yLDM2LjIsNi4ydi00My4yYy05LjksNC0yMi45LDYuMi0zNi4yLDYuMmMtMC4zLDAtMC41LDAtMC44LDBsNS4xLTUuMWMxMi43LTAuNSwyNC43LTMsMzMuMy03LjJjMC44LTAuNCwxLjctMC4zLDIuNCwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMC41LDEuMiwxLjMsMS4yLDIuMUwtMTMzLjgsNDIyLjVMLTEzMy44LDQyMi41eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTc2LjYsMzg5LjFsLTE1LjgsMTUu'+
			'NGM1LjYtMC40LDExLjQtMC42LDE3LjQtMC42YzMsMCw1LjksMC4xLDguOCwwLjJsNC4yLTQuMWwtMTEuMS0xMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTc0LDM4OC4xLTE3NS42LDM4OC4xLTE3Ni42LDM4OS4xeiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMjA5LjIsNDA4LjR2Ny40YzkuNy0zLjQsMjEuOC01LjMsMzQuMi01LjNjMC43LDAsMS41LDAsMi4yLDBsNC42LTQuNWMtMi4zLTAuMS00LjYtMC4xLTYuOS0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xODcuNiw0MDUuOS0xOTkuNyw0MDYuOC0yMDkuMiw0MDguNHoiLz4KIC'+
			'AgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE0MC44LDQxNS44di0xMi43bC05LjYtOS40Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xNy4zLDE2LjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNTkuNCw0MTEtMTQ5LjIsNDEyLjktMTQwLjgsNDE1Ljh6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0xNTEsMzg4LjNjMi41LTAuNSw0LjMtMi40LDMuOS00LjNjLTAuNC0xLjktMi43LTMtNS4zLTIuNWMtMi41LDAuNS00LjMsMi40LTMuOSw0LjMmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5OyYjeDk7Qy0xNTUuOSwzODcuNy0xNTMuNSwzODguOC0xNTEsMzg4LjN6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0yMDIuNiwzODIuN2MtMC42LTAuNi0xLjYtMC42LTIuMiwwbC0xLjMsMS4zYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsOC42LDguNmMwLjYsMC42LDEuOSwxLjYsMi4yLDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDAuMSwwLjksMC4xLDEuMywwYzAuMy0wLjEsMS42LTEuMSwyLjItMS43bDI4LjItMjguMmMwLjYtMC42LDAuNi0xLjYsMC0yLjJsLTEuMy0xLjNjLTAuNi0wLjYtMS42LTAuNi0yLjIsMGwtMjcuNSwyNy'+
			'41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wtMjAyLjYsMzgyLjd6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0xMzUsMzY5LjVjLTAuNy0wLjUtMS42LTAuNS0yLjQtMC4xYy04LjcsNC4yLTIwLjYsNi43LTMzLjMsNy4ybC01LjEsNS4xYzAuMywwLDAuNSwwLDAuOCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxMy4zLDAsMjYuMy0yLjIsMzYuMi02LjJ2NDMuMmMtOS45LTQtMjIuOS02LjItMzYuMi02LjJzLTI2LjMsMi4yLTM2LjIsNi4ydi00My4yYzYuNywyLjcsMTQuOCw0LjYsMjMuNCw1LjVsNC42LTQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'JiN4OTtjLTExLjItMC44LTIxLjctMy4zLTI5LjQtN2MtMC44LTAuNC0xLjctMC4zLTIuNCwwLjFjLTAuNywwLjUtMS4yLDEuMy0xLjIsMi4xdjUwLjljMCwwLjksMC40LDEuNywxLjIsMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQsMC4zLDAuOSwwLjQsMS4zLDAuNGMwLjQsMCwwLjctMC4xLDEuMS0wLjJjOS42LTQuNiwyMy4zLTcuMywzNy42LTcuM2MxNC4zLDAsMjgsMi43LDM3LjYsNy4zYzAuOCwwLjQsMS43LDAuMywyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3MxLjItMS4zLDEuMi0yLjF2LTUwLjlDLTEzMy44LDM3MC44LTEzNC4zLDM3MC0xMzUsMzY5LjV6Ii8+Ci'+
			'AgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_node_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -23px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited.style[domTransition]='';
				if (me._ht_node_visited.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited.style.visibility=(Number(me._ht_node_visited.style.opacity)>0||!me._ht_node_visited.style.opacity)?'inherit':'hidden';
					me._ht_node_visited.ggVisible=true;
				}
				else {
					me._ht_node_visited.style.visibility="hidden";
					me._ht_node_visited.ggVisible=false;
				}
			}
		}
		me._ht_node_visited.onmouseover=function (e) {
			me._ht_node_visited__img.style.visibility='hidden';
			me._ht_node_visited__imgo.style.visibility='inherit';
		}
		me._ht_node_visited.onmouseout=function (e) {
			me._ht_node_visited__img.style.visibility='inherit';
			me._ht_node_visited__imgo.style.visibility='hidden';
		}
		me._ht_node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_visited);
		el=me._ht_node_image=document.createElement('div');
		els=me._ht_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xNzUsMzQxYy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYuMS0xNDQsMzQxLTE3NSwzNDF6IE0tMTM3LjksNDIwYzAsMC44LTAuNCwxLjUtMS4xLDEuOWMtMC43LDAuNC0xLjUsMC41LTIuMiwwLjFjLTguNy00LjItMjEtNi42LTMzLjgtNi42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMTIuOCwwLTI1LjIsMi40LTMzLjgsNi42Yy0wLjMs'+
			'MC4yLTAuNiwwLjItMSwwLjJjLTAuNCwwLTAuOC0wLjEtMS4yLTAuM2MtMC43LTAuNC0xLjEtMS4xLTEuMS0xLjl2LTQ1LjhjMC0wLjgsMC40LTEuNSwxLjEtMS45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjctMC40LDEuNS0wLjUsMi4yLTAuMWM4LjcsNC4yLDIxLDYuNiwzMy44LDYuNmMxMi44LDAsMjUuMi0yLjQsMzMuOC02LjZjMC43LTAuMywxLjUtMC4zLDIuMiwwLjFjMC43LDAuNCwxLjEsMS4xLDEuMSwxLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzcuOSwzNzQuMi0xMzcuOSw0MjAtMTM3LjksNDIweiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYj'+
			'Q5NTIiIGQ9Ik0tMjA3LjYsMzc3Ljd2MzguOWM4LjktMy42LDIwLjYtNS42LDMyLjYtNS42YzEyLDAsMjMuNiwyLDMyLjYsNS42di0zOC45Yy04LjksMy42LTIwLjYsNS42LTMyLjYsNS42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg3LDM4My4zLTE5OC42LDM4MS4yLTIwNy42LDM3Ny43eiBNLTE3NSw0MDkuMWMtMTEuMSwwLTIyLDEuNy0zMC44LDQuOHYtNi43YzguNS0xLjQsMTkuNC0yLjMsMzAuOC0yLjNjMi4xLDAsNC4xLDAsNi4yLDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsLTQuMiw0LjFDLTE3My43LDQwOS4yLTE3NC4zLDQwOS4xLTE3NSw0MDkuMXogTS0xNDQuMiw0MTMu'+
			'OWMtNy42LTIuNy0xNi43LTQuMy0yNi4zLTQuN2wxNS42LTE1LjJjMC4zLTAuMywwLjYtMC40LDEtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQsMCwwLjcsMC4xLDEsMC40bDguNyw4LjVDLTE0NC4yLDQwMi41LTE0NC4yLDQxMy45LTE0NC4yLDQxMy45eiBNLTE1NC42LDM4M2MyLjMtMC40LDQuNCwwLjYsNC43LDIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDEuNy0xLjMsMy40LTMuNSwzLjljLTIuMywwLjQtNC40LTAuNi00LjctMi4zQy0xNTguNCwzODUuMi0xNTYuOSwzODMuNS0xNTQuNiwzODN6IE0tMTczLjIsMzg5LjlsMTAsOS43bC0zLjgsMy43JiN4ZDsmI3hhOy'+
			'YjeDk7JiN4OTsmI3g5O2MtMi42LTAuMS01LjMtMC4xLTgtMC4xYy01LjQsMC0xMC43LDAuMi0xNS43LDAuNWwxNC4yLTEzLjlDLTE3NS42LDM4OS0xNzQuMSwzODktMTczLjIsMzg5Ljl6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5MC43LDQwMy44YzUtMC4zLDEwLjMtMC41LDE1LjctMC41YzIuNywwLDUuMywwLDgsMC4xbDMuOC0zLjdsLTEwLTkuN2MtMC45LTAuOS0yLjQtMC45LTMuMywwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wtMTkwLjcsNDAzLjh6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9'+
			'Ik0tMTc1LDQwNWMtMTEuMywwLTIyLjMsMC44LTMwLjgsMi4zdjYuN2M4LjgtMy4xLDE5LjYtNC44LDMwLjgtNC44YzAuNywwLDEuMywwLDIsMGw0LjItNC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTcwLjksNDA1LTE3Mi45LDQwNS0xNzUsNDA1eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1My45LDM5My42Yy0wLjQsMC0wLjcsMC4xLTEsMC40bC0xNS42LDE1LjJjOS41LDAuNCwxOC43LDIsMjYuMyw0Ljd2LTExLjRsLTguNy04LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNTMuMiwzOTMuOC0xNTMuNSwzOTMuNi0xNTMuOSwzOTMuNnoiLz4KICAgPHBhdGggZm'+
			'lsbD0iI0ZGRkZGRiIgZD0iTS0xMzksMzcyLjNjLTAuNy0wLjQtMS41LTAuNS0yLjItMC4xYy04LjcsNC4yLTIxLDYuNi0zMy44LDYuNmMtMTIuOSwwLTI1LjItMi40LTMzLjgtNi42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC43LTAuMy0xLjUtMC4zLTIuMiwwLjFjLTAuNywwLjQtMS4xLDEuMS0xLjEsMS45VjQyMGMwLDAuOCwwLjQsMS41LDEuMSwxLjljMC40LDAuMiwwLjgsMC4zLDEuMiwwLjNjMC4zLDAsMC43LTAuMSwxLTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjOC43LTQuMiwyMS02LjYsMzMuOC02LjZjMTIuOCwwLDI1LjIsMi40LDMzLjgsNi42YzAuNywwLjMsMS41LDAu'+
			'MywyLjItMC4xYzAuNy0wLjQsMS4xLTEuMSwxLjEtMS45di00NS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTM3LjksMzczLjQtMTM4LjMsMzcyLjctMTM5LDM3Mi4zeiBNLTE0Mi40LDQxNi41Yy04LjktMy42LTIwLjYtNS42LTMyLjYtNS42cy0yMy42LDItMzIuNiw1LjZ2LTM4LjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzguOSwzLjYsMjAuNiw1LjYsMzIuNiw1LjZjMTIsMCwyMy42LTIsMzIuNi01LjZWNDE2LjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUzLjQsMzg5LjJjMi4zLTAuNCwzLjktMi4yLDMuNS0zLjljLTAuMy0xLjctMi40LTIuNy00LjctMi4zYy'+
			'0yLjMsMC40LTMuOSwyLjItMy41LDMuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE1Ny44LDM4OC42LTE1NS43LDM4OS42LTE1My40LDM4OS4yeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNy0xNDAuNiwzMzQuNy0xNzUsMzM0Ljd6IE0tMTMzLjgsNDIyLjVjMCwwLjktMC40LDEuNy0xLjIsMi4xYy0wLjcsMC41LTEuNiwwLjUtMi40LDAuMWMtOS42LTQuNi0yMy4zLTcuMy0zNy42LTcuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtzLTI4LDIuNy0zNy42LDcu'+
			'M2MtMC4zLDAuMi0wLjcsMC4yLTEuMSwwLjJjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNGMtMC43LTAuNS0xLjItMS4zLTEuMi0yLjF2LTUwLjljMC0wLjksMC40LTEuNywxLjItMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjctMC41LDEuNi0wLjUsMi40LTAuMWM5LjYsNC42LDIzLjMsNy4zLDM3LjYsNy4zYzE0LjMsMCwyOC0yLjcsMzcuNi03LjNjMC44LTAuNCwxLjctMC4zLDIuNCwwLjFjMC43LDAuNSwxLjIsMS4zLDEuMiwyLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzMuOCwzNzEuNy0xMzMuOCw0MjIuNS0xMzMuOCw0MjIuNXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PS'+
			'IxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTIxMS4yLDM3NS41djQzLjJjOS45LTQsMjIuOS02LjIsMzYuMi02LjJzMjYuMywyLjIsMzYuMiw2LjJ2LTQzLjJjLTkuOSw0LTIyLjksNi4yLTM2LjIsNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg4LjMsMzgxLjctMjAxLjMsMzc5LjUtMjExLjIsMzc1LjV6IE0tMTc1LDQxMC41Yy0xMi40LDAtMjQuNCwxLjktMzQuMiw1LjN2LTcuNGM5LjQtMS42LDIxLjYtMi41LDM0LjItMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjMsMCw0LjYsMCw2LjksMC4xbC00LjYsNC41Qy0xNzMuNSw0MTAuNS0xNzQuMyw0MTAuNS0xNzUsNDEwLjV6IE0t'+
			'MTQwLjgsNDE1LjhjLTguNC0zLTE4LjYtNC44LTI5LjItNS4ybDE3LjMtMTYuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLTAuMywwLjctMC41LDEuMS0wLjVzMC44LDAuMiwxLjEsMC41bDkuNiw5LjRDLTE0MC44LDQwMy4xLTE0MC44LDQxNS44LTE0MC44LDQxNS44eiBNLTE1Mi4zLDM4MS41YzIuNS0wLjUsNC45LDAuNiw1LjMsMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQsMS45LTEuNCwzLjgtMy45LDQuM2MtMi41LDAuNS00LjktMC42LTUuMy0yLjVDLTE1Ni42LDM4My45LTE1NC44LDM4Mi0xNTIuMywzODEuNXogTS0xNzMsMzg5LjFsMTEuMSwxMC44bC00LjIsNC4xJi'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi45LTAuMS01LjktMC4yLTguOC0wLjJjLTYsMC0xMS44LDAuMi0xNy40LDAuNmwxNS44LTE1LjRDLTE3NS42LDM4OC4xLTE3NCwzODguMS0xNzMsMzg5LjF6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Mi40LDQwNC41YzUuNi0wLjQsMTEuNC0wLjYsMTcuNC0wLjZjMywwLDUuOSwwLjEsOC44LDAuMmw0LjItNC4xbC0xMS4xLTEwLjhjLTEtMS0yLjYtMS0zLjYsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE5Mi40LDQwNC41eiIvPgogICA8cGF0aCBmaWxsPSIj'+
			'RkZGRkZGIiBkPSJNLTE3NSw0MDUuOWMtMTIuNiwwLTI0LjcsMC45LTM0LjIsMi41djcuNGM5LjctMy40LDIxLjgtNS4zLDM0LjItNS4zYzAuNywwLDEuNSwwLDIuMiwwbDQuNi00LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNzAuNCw0MDUuOS0xNzIuNyw0MDUuOS0xNzUsNDA1Ljl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLjYsMzkzLjJjLTAuNCwwLTAuOCwwLjItMS4xLDAuNWwtMTcuMywxNi45YzEwLjYsMC40LDIwLjgsMi4zLDI5LjIsNS4ydi0xMi43bC05LjYtOS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTUwLjcsMzkzLjQtMTUxLjEsMzkzLjItMT'+
			'UxLjYsMzkzLjJ6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM1LDM2OS41Yy0wLjctMC41LTEuNi0wLjUtMi40LTAuMWMtOS42LDQuNi0yMy4zLDcuMy0zNy42LDcuM3MtMjgtMi43LTM3LjYtNy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC44LTAuNC0xLjctMC4zLTIuNCwwLjFjLTAuNywwLjUtMS4yLDEuMy0xLjIsMi4xdjUwLjljMCwwLjksMC40LDEuNywxLjIsMi4xYzAuNCwwLjMsMC45LDAuNCwxLjMsMC40YzAuNCwwLDAuNy0wLjEsMS4xLTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjOS42LTQuNiwyMy4zLTcuMywzNy42LTcuM2MxNC4zLDAsMjgsMi43LDM3'+
			'LjYsNy4zYzAuOCwwLjQsMS43LDAuMywyLjQtMC4xczEuMi0xLjMsMS4yLTIuMXYtNTAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTEzMy44LDM3MC44LTEzNC4zLDM3MC0xMzUsMzY5LjV6IE0tMTM4LjgsNDE4LjdjLTkuOS00LTIyLjktNi4yLTM2LjItNi4ycy0yNi4zLDIuMi0zNi4yLDYuMnYtNDMuMmM5LjksNCwyMi45LDYuMiwzNi4yLDYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMTMuMywwLDI2LjMtMi4yLDM2LjItNi4yVjQxOC43eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1MSwzODguM2MyLjUtMC41LDQuMy0yLjQsMy45LTQuM2MtMC40LTEuOS0yLjctMy'+
			'01LjMtMi41Yy0yLjUsMC41LTQuMywyLjQtMy45LDQuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE1NS45LDM4Ny43LTE1My41LDM4OC44LTE1MSwzODguM3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_node_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -23px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_image.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_image.style[domTransition]='';
				if (me._ht_node_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_image.style.visibility="hidden";
					me._ht_node_image.ggVisible=false;
				}
				else {
					me._ht_node_image.style.visibility=(Number(me._ht_node_image.style.opacity)>0||!me._ht_node_image.style.opacity)?'inherit':'hidden';
					me._ht_node_image.ggVisible=true;
				}
			}
		}
		me._ht_node_image.onmouseover=function (e) {
			me._ht_node_image__img.style.visibility='hidden';
			me._ht_node_image__imgo.style.visibility='inherit';
		}
		me._ht_node_image.onmouseout=function (e) {
			me._ht_node_image__img.style.visibility='inherit';
			me._ht_node_image__imgo.style.visibility='hidden';
		}
		me._ht_node_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_image);
		el=me._hotspot_preview=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -75px;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style[domTransition]='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_picture_frame_=document.createElement('div');
		el.ggId="preview_picture_frame ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._preview_picture_frame_.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._preview_picture_frame_);
		el=me._preview_nodeimage=document.createElement('div');
		els=me._preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "skindata/preview_nodeimage_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._preview_nodeimage);
		el=me._tooltip=document.createElement('div');
		els=me._tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 76px;';
		hs+='visibility : inherit;';
		hs+='width : 142px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 142px;';
		hs+='height: 20px;';
		hs+='background: #3b4952;';
		hs+='background: rgba(59,73,82,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<div class=\"hotspot-title-node\">"+me.hotspot.title+"<\/div>";
		el.appendChild(els);
		me._tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._tooltip);
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMDsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZGIyYTJhO30mI3hkOwoJLnN0MXtmaWxsOiNmZmZmZmY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 123px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)) || 
				((me._checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._checkmark_tick);
		me._ht_node.appendChild(me._hotspot_preview);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ontouchend=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image=document.createElement('div');
		els=me._ht_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xOTAuOCw0MTQuM2gxMy43di0xNWgtMTYuM0MtMTkzLjMsNDA0LjctMTkyLjMsNDA5LjgtMTkwLjgsNDE0LjN6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xOTMuNSwzOTQuN2gxNi4zdi0xNWgtMTMuN0MtMTkyLjMsMzg0LjItMTkzLjMsMzg5LjMtMTkzLjUsMzk0Ljd6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xODkuMSwzNzUuMmgxMS45di0xMS45Qy0xODEuOSwzNjQuNC0xODYuMSwzNjgu'+
			'OC0xODkuMSwzNzUuMnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3Ny4yLDQzMC43di0xMS45aC0xMS45Qy0xODYuMSw0MjUuMi0xODEuOSw0MjkuNi0xNzcuMiw0MzAuN3oiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE5NS42LDM3OS43aC04LjVjLTIuNiw0LjUtNC4zLDkuNi00LjYsMTVoMTAuOEMtMTk3LjgsMzg5LjMtMTk3LDM4NC4zLTE5NS42LDM3OS43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMTQ4LjksMzc1LjJjLTMuMy00LTcuNi03LjItMTIuNC'+
			'05LjNjMi4xLDIuNiwzLjksNS43LDUuNCw5LjNILTE0OC45eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMjAwLjksNDE4LjhjMy4zLDMuOSw3LjQsNy4xLDEyLjEsOS4yYy0yLjEtMi41LTMuOC01LjYtNS4zLTkuMkgtMjAwLjl6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xODguOCwzNjZjLTQuNywyLjEtOC45LDUuMy0xMi4yLDkuMmg2LjlDLTE5Mi42LDM3MS43LTE5MC45LDM2OC42LTE4OC44LDM2NnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE5OCwzOTku'+
			'MmgtMTAuOGMwLjQsNS41LDIsMTAuNiw0LjcsMTVoOC41Qy0xOTcsNDA5LjctMTk3LjgsNDA0LjctMTk4LDM5OS4yeiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTS0xNzQuOSw0MzUuNGMwLDAtMC4xLDAtMC4xLDBjLTAuMSwwLTAuMiwwLTAuNCwwYy0yMS0wLjItMzgtMTcuNC0zOC0zOC40YzAtMjEuMiwxNy4yLTM4LjQsMzguNC0zOC'+
			'40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyMS4yLDAsMzguNCwxNy4yLDM4LjQsMzguNEMtMTM2LjUsNDE4LjItMTUzLjcsNDM1LjQtMTc0LjksNDM1LjR6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xNjEuMyw0MjguMWM0LjgtMi4xLDktNS4zLDEyLjQtOS4zaC03Qy0xNTcuNCw0MjIuNC0xNTkuMiw0MjUuNS0xNjEuMyw0MjguMXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE1NC40LDQxNC4zaDguNmMyLjctNC41LDQuMy05LjYsNC43LTE1aC0xMUMtMTUyLjIsNDA0LjctMTUzLDQwOS43LTE1NC40'+
			'LDQxNC4zeiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMTcyLjcsMzYzLjN2MTEuOWgxMS43Qy0xNjMuOSwzNjguOS0xNjgsMzY0LjUtMTcyLjcsMzYzLjN6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xNTIsMzk0LjdoMTFjLTAuNC01LjUtMi0xMC42LTQuNy0xNWgtOC42Qy0xNTMsMzg0LjMtMTUyLjIsMzg5LjMtMTUyLDM5NC43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMTcyLjcsNDE4Ljh2MTEuOWM0LjYtMS4xLDguOC01LjUsMTEuNy0xMS45Qy0xNjAuOS'+
			'w0MTguOC0xNzIuNyw0MTguOC0xNzIuNyw0MTguOHoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE1OS4yLDM3OS43aC0xMy41djE1aDE2LjFDLTE1Ni43LDM4OS4zLTE1Ny43LDM4NC4yLTE1OS4yLDM3OS43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMTU2LjUsMzk5LjJoLTE2LjF2MTVoMTMuNUMtMTU3LjcsNDA5LjgtMTU2LjcsNDA0LjctMTU2LjUsMzk5LjJ6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM2LjUsMzk3YzAtMjEuMi0x'+
			'Ny4yLTM4LjQtMzguNC0zOC40Yy0yMS4yLDAtMzguNCwxNy4yLTM4LjQsMzguNGMwLDIxLjEsMTcsMzguMiwzOCwzOC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLDAsMC4yLDAsMC40LDBjMCwwLDAuMSwwLDAuMSwwQy0xNTMuNyw0MzUuNC0xMzYuNSw0MTguMi0xMzYuNSwzOTd6IE0tMjA4LjgsMzk5LjJoMTAuOGMwLjIsNS40LDEsMTAuNSwyLjMsMTVoLTguNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0yMDYuOCw0MDkuOC0yMDguNCw0MDQuNy0yMDguOCwzOTkuMnogTS0xNDEuMSwzOTQuN2gtMTFjLTAuMi01LjQtMS0xMC41LTIuMy0xNWg4LjZDLTE0My4xLDM4NC4yLTE0MS40LDM4OS4zLTE0MS'+
			'4xLDM5NC43eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTU2LjUsMzk0LjdoLTE2LjF2LTE1aDEzLjVDLTE1Ny43LDM4NC4yLTE1Ni43LDM4OS4zLTE1Ni41LDM5NC43eiBNLTE3Mi43LDM3NS4ydi0xMS45YzQuNiwxLjEsOC44LDUuNSwxMS43LDExLjlMLTE3Mi43LDM3NS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtMLTE3Mi43LDM3NS4yeiBNLTE3Ny4yLDM2My4zdjExLjloLTExLjlDLTE4Ni4xLDM2OC44LTE4MS45LDM2NC40LTE3Ny4yLDM2My4zeiBNLTE3Ny4yLDM3OS43djE1aC0xNi4zYzAuMi01LjQsMS4xLTEwLjUsMi42LTE1JiN4ZDsmI3hhOyYjeDk7JiN4OTtMLTE3Ny4yLDM3OS43TC0xNzcu'+
			'MiwzNzkuN3ogTS0xOTgsMzk0LjdoLTEwLjhjMC40LTUuNSwyLTEwLjYsNC42LTE1aDguNUMtMTk3LDM4NC4zLTE5Ny44LDM4OS4zLTE5OCwzOTQuN3ogTS0xOTMuNSwzOTkuMmgxNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTt2MTVoLTEzLjdDLTE5Mi4zLDQwOS44LTE5My4zLDQwNC43LTE5My41LDM5OS4yeiBNLTE3Ny4yLDQxOC44djExLjljLTQuNy0xLjEtOC45LTUuNS0xMS45LTExLjlILTE3Ny4yeiBNLTE3Mi43LDQzMC42di0xMS45aDExLjcmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTYzLjksNDI1LjEtMTY4LDQyOS41LTE3Mi43LDQzMC42eiBNLTE3Mi43LDQxNC4zdi0xNWgxNi4xYy0wLjIsNS'+
			'40LTEuMSwxMC42LTIuNiwxNUgtMTcyLjd6IE0tMTUyLDM5OS4yaDExJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCw1LjUtMiwxMC42LTQuNywxNWgtOC42Qy0xNTMsNDA5LjctMTUyLjIsNDA0LjctMTUyLDM5OS4yeiBNLTE0OC45LDM3NS4yaC03Yy0xLjUtMy42LTMuMy02LjgtNS40LTkuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNTYuNSwzNjgtMTUyLjIsMzcxLjItMTQ4LjksMzc1LjJ6IE0tMTg4LjgsMzY2Yy0yLjEsMi41LTMuOCw1LjctNS4zLDkuMmgtNi45Qy0xOTcuNywzNzEuMy0xOTMuNSwzNjguMS0xODguOCwzNjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0yMDAuOSw0MTguOGg2Ljlj'+
			'MS40LDMuNSwzLjIsNi42LDUuMyw5LjJDLTE5My41LDQyNS44LTE5Ny42LDQyMi43LTIwMC45LDQxOC44eiBNLTE2MS4zLDQyOC4xYzIuMS0yLjYsMy45LTUuNyw1LjQtOS4zaDcmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTUyLjMsNDIyLjctMTU2LjUsNDI1LjktMTYxLjMsNDI4LjF6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_url_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xOTIuNiw0MTYuMmgxNS4ydi0xNi43aC0xOC4xQy0xOTUuMyw0MDUuNS0xOTQuMiw0MTEuMi0xOTIuNiw0MTYuMnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE5NS41LDM5NC41aDE4LjF2LTE2LjdoLTE1LjJDLTE5NC4zLDM4Mi44LTE5NS4zLDM4OC41LTE5NS41LDM5NC41eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMTkwLjYsMzcyLjhoMTMuMnYtMTMuMkMtMTgyLjYsMzYwLjctMTg3LjMs'+
			'MzY1LjctMTkwLjYsMzcyLjh6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xNzcuNCw0MzQuNHYtMTMuMmgtMTMuMkMtMTg3LjMsNDI4LjMtMTgyLjYsNDMzLjItMTc3LjQsNDM0LjR6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xOTcuOSwzNzcuOGgtOS40Yy0yLjksNC45LTQuOCwxMC42LTUuMiwxNi43aDEyQy0yMDAuMywzODguNS0xOTkuNCwzODIuOC0xOTcuOSwzNzcuOHoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE0NiwzNzIuOGMtMy43LTQuNC04LjQtOC'+
			'0xMy44LTEwLjRjMi4zLDIuOCw0LjQsNi4zLDYsMTAuNEgtMTQ2eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMjAzLjgsNDIxLjJjMy42LDQuMyw4LjIsNy44LDEzLjUsMTAuMmMtMi4zLTIuOC00LjMtNi4zLTUuOC0xMC4ySC0yMDMuOHoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE5MC4zLDM2Mi42Yy01LjIsMi40LTkuOSw1LjktMTMuNSwxMC4yaDcuNkMtMTk0LjYsMzY4LjktMTkyLjYsMzY1LjQtMTkwLjMsMzYyLjZ6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0i'+
			'TS0yMDAuNSwzOTkuNWgtMTJjMC40LDYuMSwyLjIsMTEuOCw1LjIsMTYuN2g5LjRDLTE5OS40LDQxMS4xLTIwMC4zLDQwNS41LTIwMC41LDM5OS41eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC42LDMzNC42LTE3NSwzMzQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt6IE0tMTc0LjksNDM5LjdjMCwwLTAuMSwwLTAuMSwwYy0wLjEsMC0wLjMsMC0wLjQsMGMtMjMuMy0wLjMtNDIuMi0xOS4zLTQyLjItND'+
			'IuN2MwLTIzLjYsMTkuMi00Mi43LDQyLjctNDIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMjMuNiwwLDQyLjcsMTkuMiw0Mi43LDQyLjdDLTEzMi4yLDQyMC41LTE1MS4zLDQzOS43LTE3NC45LDQzOS43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMTU5LjgsNDMxLjVjNS4zLTIuNCwxMC01LjksMTMuNy0xMC4zaC03LjhDLTE1NS40LDQyNS4yLTE1Ny41LDQyOC43LTE1OS44LDQzMS41eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMTUyLjEsNDE2LjJoOS42YzMtNSw0LjgtMTAuNiw1LjItMTYuN2gt'+
			'MTIuMkMtMTQ5LjcsNDA1LjUtMTUwLjYsNDExLjEtMTUyLjEsNDE2LjJ6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xNzIuNCwzNTkuNnYxMy4yaDEzQy0xNjIuNiwzNjUuNy0xNjcuMywzNjAuOC0xNzIuNCwzNTkuNnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE0OS41LDM5NC41aDEyLjJjLTAuNC02LjEtMi4yLTExLjctNS4yLTE2LjdoLTkuNkMtMTUwLjYsMzgyLjgtMTQ5LjcsMzg4LjUtMTQ5LjUsMzk0LjV6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xNz'+
			'IuNCw0MjEuMnYxMy4yYzUuMS0xLjIsOS44LTYuMSwxMy0xMy4yQy0xNTkuNCw0MjEuMi0xNzIuNCw0MjEuMi0xNzIuNCw0MjEuMnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE1Ny40LDM3Ny44aC0xNXYxNi43aDE3LjlDLTE1NC43LDM4OC41LTE1NS44LDM4Mi44LTE1Ny40LDM3Ny44eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMTU0LjUsMzk5LjVoLTE3Ljl2MTYuN2gxNUMtMTU1LjgsNDExLjItMTU0LjcsNDA1LjUtMTU0LjUsMzk5LjV6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgog'+
			'IDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMyLjIsMzk3YzAtMjMuNi0xOS4yLTQyLjctNDIuNy00Mi43Yy0yMy42LDAtNDIuNywxOS4yLTQyLjcsNDIuN2MwLDIzLjQsMTguOSw0Mi40LDQyLjIsNDIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLDAuMywwLDAuNCwwYzAsMCwwLjEsMCwwLjEsMEMtMTUxLjMsNDM5LjctMTMyLjIsNDIwLjUtMTMyLjIsMzk3eiBNLTIxMi41LDM5OS41aDEyYzAuMiw2LDEuMSwxMS43LDIuNiwxNi43aC05LjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMjEwLjMsNDExLjItMjEyLjEsNDA1LjYtMjEyLjUsMzk5LjV6IE0tMTM3LjMsMzk0LjVoLTEyLjJjLTAuMi'+
			'02LTEuMS0xMS42LTIuNi0xNi43aDkuNkMtMTM5LjUsMzgyLjgtMTM3LjcsMzg4LjQtMTM3LjMsMzk0LjV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xNTQuNSwzOTQuNWgtMTcuOXYtMTYuN2gxNUMtMTU1LjgsMzgyLjgtMTU0LjcsMzg4LjUtMTU0LjUsMzk0LjV6IE0tMTcyLjQsMzcyLjh2LTEzLjJjNS4yLDEuMiw5LjgsNi4yLDEzLDEzLjJMLTE3Mi40LDM3Mi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtMLTE3Mi40LDM3Mi44eiBNLTE3Ny40LDM1OS42djEzLjJoLTEzLjJDLTE4Ny4zLDM2NS43LTE4Mi42LDM2MC43LTE3Ny40LDM1OS42eiBNLTE3Ny40LDM3Ny44djE2LjdoLTE4LjFjMC4yLTYsMS4z'+
			'LTExLjcsMi45LTE2LjcmI3hkOyYjeGE7JiN4OTsmI3g5O0wtMTc3LjQsMzc3LjhMLTE3Ny40LDM3Ny44eiBNLTIwMC41LDM5NC41aC0xMmMwLjQtNi4xLDIuMi0xMS43LDUuMi0xNi43aDkuNEMtMTk5LjQsMzgyLjgtMjAwLjMsMzg4LjUtMjAwLjUsMzk0LjV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xOTUuNSwzOTkuNWgxOC4xdjE2LjdoLTE1LjJDLTE5NC4yLDQxMS4yLTE5NS4zLDQwNS41LTE5NS41LDM5OS41eiBNLTE3Ny40LDQyMS4ydjEzLjJjLTUuMi0xLjItOS45LTYuMS0xMy4yLTEzLjJILTE3Ny40eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTcyLjQsNDM0LjR2LTEzLjJoMTNDLTE2Mi'+
			'43LDQyOC4yLTE2Ny4zLDQzMy4xLTE3Mi40LDQzNC40eiBNLTE3Mi40LDQxNi4ydi0xNi43aDE3LjljLTAuMiw2LTEuMywxMS43LTIuOSwxNi43SC0xNzIuNHomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE0OS41LDM5OS41aDEyLjJjLTAuNCw2LjEtMi4yLDExLjgtNS4yLDE2LjdoLTkuNkMtMTUwLjYsNDExLjEtMTQ5LjcsNDA1LjUtMTQ5LjUsMzk5LjV6IE0tMTQ2LDM3Mi44aC03LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS42LTQtMy42LTcuNS02LTEwLjRDLTE1NC40LDM2NC44LTE0OS43LDM2OC40LTE0NiwzNzIuOHogTS0xOTAuMywzNjIuNmMtMi4zLDIuOC00LjMsNi4zLTUuOSwxMC4yaC03'+
			'LjYmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMjAwLjIsMzY4LjQtMTk1LjYsMzY0LjktMTkwLjMsMzYyLjZ6IE0tMjAzLjgsNDIxLjJoNy42YzEuNiwzLjksMy42LDcuNCw1LjksMTAuMkMtMTk1LjYsNDI5LTIwMC4yLDQyNS41LTIwMy44LDQyMS4yeiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTU5LjgsNDMxLjVjMi4zLTIuOCw0LjMtNi4zLDYtMTAuM2g3LjhDLTE0OS43LDQyNS42LTE1NC40LDQyOS4yLTE1OS44LDQzMS41eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_url_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('hs_state') == true)) && 
				((player.getVariableValue('mouse_over') == false))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_url_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_url_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_url_image.style[domTransition]='' + cssPrefix + 'transform 1500ms ease 0ms';
				if (me._ht_url_image.ggCurrentLogicStateScaling == 0) {
					me._ht_url_image.ggParameter.sx = 0.8;
					me._ht_url_image.ggParameter.sy = 0.8;
					me._ht_url_image.style[domTransform]=parameterToTransform(me._ht_url_image.ggParameter);
				}
				else {
					me._ht_url_image.ggParameter.sx = 1;
					me._ht_url_image.ggParameter.sy = 1;
					me._ht_url_image.style[domTransform]=parameterToTransform(me._ht_url_image.ggParameter);
				}
			}
		}
		me._ht_url_image.onmouseover=function (e) {
			player.setVariableValue('mouse_over', true);
			me._ht_url_image__img.style.visibility='hidden';
			me._ht_url_image__imgo.style.visibility='inherit';
		}
		me._ht_url_image.onmouseout=function (e) {
			player.setVariableValue('mouse_over', false);
			me._ht_url_image__img.style.visibility='inherit';
			me._ht_url_image__imgo.style.visibility='hidden';
		}
		me._ht_url_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_image);
		el=me._tt_ht_url=document.createElement('div');
		els=me._tt_ht_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -75px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: auto;';
		hs+='background: #55557f;';
		hs+='background: rgba(85,85,127,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url.style[domTransition]='';
				if (me._tt_ht_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url.style.visibility=(Number(me._tt_ht_url.style.opacity)>0||!me._tt_ht_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_url.ggVisible=true;
				}
				else {
					me._tt_ht_url.style.visibility="hidden";
					me._tt_ht_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_url.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._tt_ht_url);
		me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
			skin._controller.style[domTransition]='none';
			skin._controller.style.visibility='hidden';
			skin._controller.ggVisible=false;
			skin._screentint.style[domTransition]='none';
			skin._screentint.style.visibility=(Number(skin._screentint.style.opacity)>0||!skin._screentint.style.opacity)?'inherit':'hidden';
			skin._screentint.ggVisible=true;
			skin._info_title.ggText="<b>"+me.hotspot.title+"<\/b>";
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs="<b>"+me.hotspot.title+"<\/b>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			skin._information.style[domTransition]='none';
			skin._information.style.visibility=(Number(skin._information.style.opacity)>0||!skin._information.style.opacity)?'inherit':'hidden';
			skin._information.ggVisible=true;
			skin._menu_button.style[domTransition]='none';
			skin._menu_button.style.visibility='hidden';
			skin._menu_button.ggVisible=false;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45JiN4ZDsmI3hhOyYjeDk7JiN4OTt6IE0tMTc4LjEsMzYxLjFsNi4yLDBjMy41LDAsNi40LDIuOSw2LjQsNi40djIuOWMwLDMuNS0yLjksNi40LTYuNCw2LjRoLTYuMmMtMy41LDAtNi40LTIuOS02LjQtNi40bDAtMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE4NC41LDM2NC0xODEuNiwzNjEuMS0xNzguMSwzNjEuMXog'+
			'TS0xNjcsNDMwLjRILTE4M2MtMC44LDAtMS41LTAuNy0xLjUtMS41bDAtMzcuN2MwLTAuOCwwLjctMS41LDEuNS0xLjVsMTUuOSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LDAsMS41LDAuNywxLjUsMS41bDAsMzcuN0MtMTY1LjUsNDI5LjctMTY2LjIsNDMwLjQtMTY3LDQzMC40eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2NS41LDM5MS4yYzAtMC44LTAuNy0xLjUtMS41LTEuNWwtMTUuOSwwYy0wLjgsMC0xLjUsMC43LTEuNSwxLjVsMCwzNy43YzAsMC44LDAuNywxLjUsMS41LDEuNWgxNS45JiN4ZDsmI3hhOyYjeDk7Ji'+
			'N4OTsmI3g5O2MwLjgsMCwxLjUtMC43LDEuNS0xLjVMLTE2NS41LDM5MS4yeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3OC4xLDM3Ni44aDYuMmMzLjUsMCw2LjQtMi45LDYuNC02LjR2LTIuOWMwLTMuNS0yLjktNi40LTYuNC02LjRsLTYuMiwwYy0zLjUsMC02LjQsMi45LTYuNCw2LjRsMCwyLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xODQuNSwzNzQtMTgxLjYsMzc2LjgtMTc4LjEsMzc2Ljh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTc4LjUsMzU3LjFsNi45LDBjMy45LDAsNy4xLDMuMiw3LjEsNy4xdjMuM2MwLDMuOS0zLjIsNy4xLTcuMSw3LjFoLTYuOWMtMy45LDAtNy4xLTMuMi03LjEtNy4xbDAtMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE4NS42LDM2MC4zLTE4Mi40LDM1Ny4xLTE3OC41'+
			'LDM1Ny4xeiBNLTE2Ni4xLDQzNC4xaC0xNy43Yy0wLjksMC0xLjctMC44LTEuNy0xLjdsMC00MS45YzAtMC45LDAuOC0xLjcsMS43LTEuN2wxNy43LDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjksMCwxLjcsMC44LDEuNywxLjdsMCw0MS45Qy0xNjQuNCw0MzMuMy0xNjUuMiw0MzQuMS0xNjYuMSw0MzQuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjQuNCwzOTAuNWMwLTAuOS0wLjgtMS43LTEuNy0xLjdsLTE3LjcsMGMtMC45LDAtMS43LDAuOC0xLjcsMS43bDAsNDEuOWMwLDAuOSwwLjgsMS43LDEuNywxLjdoMTcuNyYjeG'+
			'Q7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC45LDAsMS43LTAuOCwxLjctMS43TC0xNjQuNCwzOTAuNXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguNSwzNzQuNmg2LjljMy45LDAsNy4xLTMuMiw3LjEtNy4xdi0zLjNjMC0zLjktMy4yLTcuMS03LjEtNy4xbC02LjksMGMtMy45LDAtNy4xLDMuMi03LjEsNy4xbDAsMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg1LjUsMzcxLjQtMTgyLjQsMzc0LjYtMTc4LjUsMzc0LjZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('hs_state') == true)) && 
				((player.getVariableValue('mouse_over') == false))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_info_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_info_image.style[domTransition]='' + cssPrefix + 'transform 1500ms ease 0ms';
				if (me._ht_info_image.ggCurrentLogicStateScaling == 0) {
					me._ht_info_image.ggParameter.sx = 0.8;
					me._ht_info_image.ggParameter.sy = 0.8;
					me._ht_info_image.style[domTransform]=parameterToTransform(me._ht_info_image.ggParameter);
				}
				else {
					me._ht_info_image.ggParameter.sx = 1;
					me._ht_info_image.ggParameter.sy = 1;
					me._ht_info_image.style[domTransform]=parameterToTransform(me._ht_info_image.ggParameter);
				}
			}
		}
		me._ht_info_image.onmouseover=function (e) {
			player.setVariableValue('mouse_over', true);
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
		}
		me._ht_info_image.onmouseout=function (e) {
			player.setVariableValue('mouse_over', false);
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -75px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: auto;';
		hs+='background: #3b4952;';
		hs+='background: rgba(59,73,82,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<div class=\"hotspot-title\">"+me.hotspot.title+"<\/div>";
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._tt_information);
		me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.onclick=function (e) {
			skin._controller.style[domTransition]='none';
			skin._controller.style.visibility='hidden';
			skin._controller.ggVisible=false;
			skin._screentint.style[domTransition]='none';
			skin._screentint.style.visibility=(Number(skin._screentint.style.opacity)>0||!skin._screentint.style.opacity)?'inherit':'hidden';
			skin._screentint.ggVisible=true;
			skin._close.style[domTransition]='none';
			skin._close.style.visibility=(Number(skin._close.style.opacity)>0||!skin._close.style.opacity)?'inherit':'hidden';
			skin._close.ggVisible=true;
			skin._popup_image.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._popup_image.ggSubElement.style.width = '0px';
			skin._popup_image.ggSubElement.style.height = '0px';
			skin._popup_image.ggSubElement.src='';
			skin._popup_image.ggSubElement.src=skin._popup_image.ggText;
			skin._popup_image.style[domTransition]='none';
			skin._popup_image.style.visibility=(Number(skin._popup_image.style.opacity)>0||!skin._popup_image.style.opacity)?'inherit':'hidden';
			skin._popup_image.ggVisible=true;
			skin._popup_image.ggSubElement.src=skin._popup_image.ggText;
			skin._image_popup.style[domTransition]='none';
			skin._image_popup.style.visibility=(Number(skin._image_popup.style.opacity)>0||!skin._image_popup.style.opacity)?'inherit':'hidden';
			skin._image_popup.ggVisible=true;
			skin._menu_button.style[domTransition]='none';
			skin._menu_button.style.visibility='hidden';
			skin._menu_button.ggVisible=false;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ontouchend=function (e) {
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image=document.createElement('div');
		els=me._ht_image_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xOTYuMyw0MTQuN2g0Mi43di00NGgtNDIuN1Y0MTQuN3ogTS0xNTUuNSw0MTIuOUgtMTgzbDE5LTE4LjZjMC4zLTAuMywwLjYtMC40LDEtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQsMCwwLjcsMC4xLDEsMC40bDYuNSw2LjRWNDEyLjl6IE0tMTYyLjksMzc2YzIuMiwwLDQsMS44LDQsNGMwLDIuMi0xLjgsNC00LDRjLTIuMiwwLTQtMS44LTQtNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE2Ni44LDM3Ny44LTE2NS4xLDM3Ni0xNjIuOSwzNzZ6IE0tMTk0LjUsMzk3'+
			'LjhsOS43LTkuNGMwLjMtMC4zLDAuNi0wLjQsMS0wLjRjMC40LDAsMC43LDAuMSwxLDAuNGwxMS4yLDEwLjlsLTEzLjksMTMuNmgtOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE5NC41LDM5Ny44TC0xOTQuNSwzOTcuOHoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjM2I0OTUyIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNDkuNSw0MjUuNWMwLDEuMy0xLDIuMy0yLjMsMi'+
			'4zaC00Ni40Yy0xLjMsMC0yLjMtMS0yLjMtMi4zdi01N2MwLTEuMywxLTIuMywyLjMtMi4zaDQ2LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuMywwLDIuMywxLDIuMywyLjNMLTE0OS41LDQyNS41TC0xNDkuNSw0MjUuNXoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLjgsMzY2LjJoLTQ2LjRjLTEuMywwLTIuMywxLTIuMywyLjN2NTdjMCwxLjMsMSwyLjMsMi4zLDIuM2g0Ni40YzEuMywwLDIuMy0xLDIuMy0yLjN2LTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTQ5LjUsMzY3LjItMTUwLjUsMzY2'+
			'LjItMTUxLjgsMzY2LjJ6IE0tMTUzLjcsNDE0LjdoLTQyLjd2LTQ0aDQyLjdWNDE0Ljd6Ii8+CiAgIDxjaXJjbGUgY3k9IjM3OS45IiBmaWxsPSIjRkZGRkZGIiBjeD0iLTE2Mi45IiByPSI0Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTcxLjcsMzk5LjNsLTExLjItMTAuOWMtMC4zLTAuMy0wLjYtMC40LTEtMC40cy0wLjcsMC4xLTEsMC40bC05LjcsOS40djE1LjFoOUwtMTcxLjcsMzk5LjN6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYzLDM5My45Yy0wLjQsMC0wLjcsMC4xLTEsMC40bC0xOSwxOC42aDI3LjV2LTEyLjJsLTYuNS02LjRDLTE2Mi4yLDM5NC0xNj'+
			'IuNiwzOTMuOS0xNjMsMzkzLjl6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_image_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzNiNDk1MiIgZD0iTS0xOTguNyw0MTYuNmg0Ny40di00OC45aC00Ny40VjQxNi42eiBNLTE1My4zLDQxNC42aC0zMC42bDIxLjEtMjAuNmMwLjMtMC4zLDAuNy0wLjUsMS4xLTAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC44LDAuMiwxLjEsMC41bDcuMiw3LjFWNDE0LjZ6IE0tMTYxLjUsMzczLjZjMi40LDAsNC40LDIsNC40LDQuNGMwLDIuNC0yLDQuNC00LjQsNC40cy00LjQtMi00LjQtNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTY1LjksMzc1LjYtMTY0LDM3My42LTE2MS41'+
			'LDM3My42eiBNLTE5Ni43LDM5Ny45bDEwLjctMTAuNWMwLjMtMC4zLDAuNy0wLjUsMS4xLTAuNXMwLjgsMC4yLDEuMSwwLjRsMTIuNCwxMi4ybC0xNS40LDE1LjFoLTEwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wtMTk2LjcsMzk3LjlMLTE5Ni43LDM5Ny45eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMzYjQ5NTIiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE0Ni'+
			'43LDQyOC43YzAsMS40LTEuMSwyLjYtMi42LDIuNmgtNTEuNmMtMS40LDAtMi42LTEuMS0yLjYtMi42di02My40YzAtMS40LDEuMS0yLjYsMi42LTIuNmg1MS42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjQsMCwyLjYsMS4xLDIuNiwyLjZMLTE0Ni43LDQyOC43TC0xNDYuNyw0MjguN3oiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ5LjIsMzYyLjhoLTUxLjZjLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY2My40YzAsMS40LDEuMSwyLjYsMi42LDIuNmg1MS42YzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNjMuNCYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE0Ni43LDM2My45LTE0Ny44LDM2Mi44LTE0OS4yLDM2Mi44eiBNLTE1MS4zLDQxNi42aC00Ny40di00OC45aDQ3LjRWNDE2LjZ6Ii8+CiAgIDxjaXJjbGUgY3k9IjM3OCIgZmlsbD0iI0ZGRkZGRiIgY3g9Ii0xNjEuNSIgcj0iNC40Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTcxLjMsMzk5LjVsLTEyLjQtMTIuMmMtMC4zLTAuMy0wLjctMC40LTEuMS0wLjRjLTAuNCwwLTAuOCwwLjItMS4xLDAuNWwtMTAuNywxMC41djE2LjhoMTAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TC0xNzEuMywzOTkuNXoiLz4KICAgPHBhdGggZmlsbD0iI0'+
			'ZGRkZGRiIgZD0iTS0xNjEuNiwzOTMuNWMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0yMS4xLDIwLjZoMzAuNlY0MDFsLTcuMi03LjFDLTE2MC44LDM5My43LTE2MS4yLDM5My41LTE2MS42LDM5My41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_image_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_image_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('hs_state') == true)) && 
				((player.getVariableValue('mouse_over') == false))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_image.style[domTransition]='' + cssPrefix + 'transform 1500ms ease 0ms';
				if (me._ht_image_image.ggCurrentLogicStateScaling == 0) {
					me._ht_image_image.ggParameter.sx = 0.8;
					me._ht_image_image.ggParameter.sy = 0.8;
					me._ht_image_image.style[domTransform]=parameterToTransform(me._ht_image_image.ggParameter);
				}
				else {
					me._ht_image_image.ggParameter.sx = 1;
					me._ht_image_image.ggParameter.sy = 1;
					me._ht_image_image.style[domTransform]=parameterToTransform(me._ht_image_image.ggParameter);
				}
			}
		}
		me._ht_image_image.onmouseover=function (e) {
			player.setVariableValue('mouse_over', true);
			me._ht_image_image__img.style.visibility='hidden';
			me._ht_image_image__imgo.style.visibility='inherit';
		}
		me._ht_image_image.onmouseout=function (e) {
			player.setVariableValue('mouse_over', false);
			me._ht_image_image__img.style.visibility='inherit';
			me._ht_image_image__imgo.style.visibility='hidden';
		}
		me._ht_image_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_image);
		el=me._tt_ht_image=document.createElement('div');
		els=me._tt_ht_image__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -75px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: auto;';
		hs+='background: #3b4952;';
		hs+='background: rgba(59,73,82,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_image.style[domTransition]='';
				if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_image.style.visibility=(Number(me._tt_ht_image.style.opacity)>0||!me._tt_ht_image.style.opacity)?'inherit':'hidden';
					me._tt_ht_image.ggVisible=true;
				}
				else {
					me._tt_ht_image.style.visibility="hidden";
					me._tt_ht_image.ggVisible=false;
				}
			}
		}
		me._tt_ht_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._tt_ht_image);
		me.__div = me._ht_image;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_logo_down') {
			hotspot.skinid = 'ht_logo_down';
			hsinst = new SkinHotspotClass_ht_logo_down(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_logo_down_mouseover();;
		} else
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();;
		} else
		if (hotspot.skinid=='ht_url') {
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_changenode();;
			me.callChildLogicBlocksHotspot_ht_url_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_hs_state();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_mouse_over();;
		} else
		if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_hs_state();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_mouse_over();;
		} else
		{
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_image_changenode();;
			me.callChildLogicBlocksHotspot_ht_image_mouseover();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_hs_state();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_mouse_over();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_logo_down']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_logo_down'].length; i++) {
				hotspotTemplates['ht_logo_down'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				hotspotTemplates['ht_url'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				hotspotTemplates['ht_image'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_dropdown_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 275px; height: 52px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._menu_item=document.createElement('div');
		el.ggId="menu_item";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3b4952;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 273px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_item.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_item.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['menu_item'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._menu_item.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._menu_item.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._menu_item.style[domTransition]='background-color 0s';
				if (me._menu_item.ggCurrentLogicStateBackgroundColor == 0) {
					me._menu_item.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._menu_item.style.backgroundColor="rgba(59,73,82,1)";
				}
			}
		}
		me._menu_item.onmouseover=function (e) {
			me.elementMouseOver['menu_item']=true;
			me._menu_item_title.logicBlock_textcolor();
			me._menu_item.logicBlock_backgroundcolor();
		}
		me._menu_item.onmouseout=function (e) {
			me.elementMouseOver['menu_item']=false;
			me._menu_item_title.logicBlock_textcolor();
			me._menu_item.logicBlock_backgroundcolor();
		}
		me._menu_item.ontouchend=function (e) {
			me.elementMouseOver['menu_item']=false;
			me._menu_item_title.logicBlock_textcolor();
			me._menu_item.logicBlock_backgroundcolor();
		}
		me._menu_item.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_item_title=document.createElement('div');
		els=me._menu_item_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="menu_item_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 190px;';
		hs+='height: 47px;';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<div class=\"mi-title\">"+me.ggUserdata.title+"<\/div><div class=\"mi-description\">"+me.ggUserdata.description+"<\/div>";
		el.appendChild(els);
		me._menu_item_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_item_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['menu_item'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._menu_item_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._menu_item_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._menu_item_title__text.style[domTransition]='color 0s';
				if (me._menu_item_title.ggCurrentLogicStateTextColor == 0) {
					me._menu_item_title__text.style.color="rgba(219,42,42,1)";
				}
				else {
					me._menu_item_title__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._menu_item_title.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
		}
		me._menu_item_title.ggUpdatePosition=function (useTransition) {
		}
		me._menu_item.appendChild(me._menu_item_title);
		el=me._menu_item_thumbnail=document.createElement('div');
		els=me._menu_item_thumbnail__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "skindata/menu_item_thumbnail_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_item_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 47px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_item_thumbnail.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._menu_item_thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_item_visited_checkmark=document.createElement('div');
		els=me._menu_item_visited_checkmark__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMDsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZGIyYTJhO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._menu_item_visited_checkmark__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_item_visited_checkmark";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 3px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_item_visited_checkmark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_item_visited_checkmark.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.nodeVisited(me._menu_item_visited_checkmark.ggElementNodeId()) == true)) || 
				((me._menu_item_visited_checkmark.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_item_visited_checkmark.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_item_visited_checkmark.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_item_visited_checkmark.style[domTransition]='opacity 0s';
				if (me._menu_item_visited_checkmark.ggCurrentLogicStateAlpha == 0) {
					me._menu_item_visited_checkmark.style.visibility=me._menu_item_visited_checkmark.ggVisible?'inherit':'hidden';
					me._menu_item_visited_checkmark.style.opacity=1;
				}
				else {
					me._menu_item_visited_checkmark.style.visibility="hidden";
					me._menu_item_visited_checkmark.style.opacity=0;
				}
			}
		}
		me._menu_item_visited_checkmark.ggUpdatePosition=function (useTransition) {
		}
		me._menu_item_thumbnail.appendChild(me._menu_item_visited_checkmark);
		me._menu_item.appendChild(me._menu_item_thumbnail);
		me.__div.appendChild(me._menu_item);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;} .mi-title, .dropdown-caption { display: block; margin: 3px 5px; font-size: 12px; font-weight: 600; } .mi-description { display: block; margin: 0px 5px; font-size: 10px; white-space: normal; } .hotspot-title-node { display: block; font-size: 10px; margin: 3px 2px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; } .hotspot-title { display: block; font-size: 10px; margin: 5px 3px; }'));
	document.head.appendChild(style);
	me._fullscreen_off.logicBlock_visible();
	me._fullscreen.logicBlock_visible();
	me._movemode_1.logicBlock_visible();
	me._movemode_2.logicBlock_visible();
	me._autorotate.logicBlock_visible();
	me._autorotate_off.logicBlock_visible();
	me._dropdown_menu.logicBlock_visible();
	player.addListener('fullscreenenter', function(args) { me._fullscreen_off.logicBlock_visible();me._fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._fullscreen_off.logicBlock_visible();me._fullscreen.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._movemode_1.logicBlock_visible();me._movemode_2.logicBlock_visible();me._autorotate.logicBlock_visible();me._autorotate_off.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._dropdown_menu.logicBlock_visible(); });
	player.addListener('viewmodechanged', function(args) { me._movemode_1.logicBlock_visible();me._movemode_2.logicBlock_visible(); });
	player.addListener('autorotatechanged', function(args) { me._autorotate.logicBlock_visible();me._autorotate_off.logicBlock_visible(); });
	player.addListener('mouseover', function(args) { me._dropdown_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._dropdown_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._dropdown_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._dropdown_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_url_changenode();me.callChildLogicBlocksHotspot_ht_info_changenode();me.callChildLogicBlocksHotspot_ht_image_changenode(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_logo_down_mouseover(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_ht_url_mouseover();me.callChildLogicBlocksHotspot_ht_info_mouseover();me.callChildLogicBlocksHotspot_ht_image_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node_changevisitednodes(); });
	player.addListener('varchanged_hs_state', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_hs_state();me.callChildLogicBlocksHotspot_ht_info_varchanged_hs_state();me.callChildLogicBlocksHotspot_ht_image_varchanged_hs_state(); });
	player.addListener('varchanged_mouse_over', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_mouse_over();me.callChildLogicBlocksHotspot_ht_info_varchanged_mouse_over();me.callChildLogicBlocksHotspot_ht_image_varchanged_mouse_over(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};