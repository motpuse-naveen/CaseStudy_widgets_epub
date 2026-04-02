/* Version 19.1, Date:31 MAR 2022 */
/* Version 19.2, Date:04 APR 2022 */
/*** Disable Right click on image ***/
var allImageElmts = document.querySelectorAll("img");
allImageElmts.forEach(imgelement => {
	imgelement.addEventListener("contextmenu", function (event) {
		event.preventDefault();
		return false;
	});
});
document.addEventListener("contextmenu", function (e) {
	e.preventDefault();
}, false);
/*** End Disable right click ***/

/*** Annotation from Question to top ***/
function annotate_from_frame(elementId) {
	if (elementId.startsWith("#")) {
		elementId = elementId.substring(1, elementId.length);
	}
	const element = document.getElementById(elementId);
	if (element != null) {
		document.location.hash = "#"
		document.location.hash = "#" + elementId;
	}
}
/*** End from_frame Annotation ***/

/*** Annotate within iframe ***/
window.addEventListener("load", function (event) {
	var frameid = document.location.hash;
	/*var logdiv = document.getElementById("logh2")
	if(logdiv!=null){
		logdiv.innerText = frameid;
	}*/
	if (frameid != undefined && frameid != null && frameid != "") {
		if(frameid.indexOf("frameid~~")>0){
			var localhash = frameid.replace("frameid~~","");
			/*if(logdiv!=null){
				logdiv.innerText = frameid + ":NM:" + localhash;
			}*/
			var hashval = localhash.split("~~")[0];
			var qno = localhash.split("~~")[1];
			const element11 = document.querySelector(hashval);
			/*if(logdiv!=null){
				logdiv.innerText = frameid + ":NM:" + localhash + ":NM:" + hashval;
			}*/
			if (element11 != null) {
				//document.location.hash = "#"
				document.location.hash = hashval;
				if (qno != undefined && qno != null && qno != "") {
					element11.contentDocument.querySelector(".nav-link.step[data-id='q-" + qno + "']").click()
				}
			}
		}
	}
});

function getParameterByName(name, url = document.location.href) {
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var allhrefs = document.querySelectorAll("a[itemid][itemref][href]");
allhrefs.forEach(hrefelm => {
	if (typeof window.addEventListener != "undefined") {
		hrefelm.addEventListener("click", handle_frame_target_click, false);
	} else {
		hrefelm.attachEvent("onclick", handle_frame_target_click);
	}
});
function handle_frame_target_click(event) {
	event.preventDefault();
	var frameid = event.target.getAttribute("itemid");
	var questionnumber = event.target.getAttribute("itemref");
	var hreflink = event.target.getAttribute("href");
	if (hreflink.startsWith("#")) {
		const element = document.getElementById(frameid);
		if (element != null) {
			document.location.hash = "#"
			document.location.hash = "#" + frameid;
			if (questionnumber != undefined && questionnumber != null && questionnumber != "") {
				element.contentDocument.querySelector(".nav-link.step[data-id='q-" + questionnumber + "']").click()
			}
		}
	}
	/*
	else {
		var url = document.location.pathname;
		var filename = url.substring(url.lastIndexOf('/') + 1);
		if (filename != "") {
			url = url.replace(filename, hreflink);
			url = url + "?frameid=" + frameid + "&questionnumber=" + questionnumber;
			document.location.href = url;
		}
	}
	*/
}
/*** End within iframe Annotation ***/

var allvideoelemts = document.querySelectorAll("video.hls-video");
allvideoelemts.forEach(videoelm => {
	//var video = document.getElementById('video');
	var videoSrc = videoelm.src;
	if (Hls.isSupported()) {
		var hls = new Hls({
		debug: true,
		});
		hls.loadSource(videoSrc);
		hls.attachMedia(videoelm);
		hls.on(Hls.Events.MEDIA_ATTACHED, function () {
		videoelm.muted = true;
		//videoelm.play();
		});
	}
	// hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
	// When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element through the `src` property.
	// This is using the built-in support of the plain video element, without using hls.js.
	else if (video.canPlayType('application/vnd.apple.mpegurl')) {
		videoelm.src = videoSrc;
		videoelm.addEventListener('canplay', function () {
		//videoelm.play();
		});
	}
});

//Embedded Audio  - About the Audio click
setTimeout(function () {
    var aboutTheAudios = document.querySelectorAll(".about-the-audio");
	aboutTheAudios.forEach(abtTheAudbutton => {
		abtTheAudbutton.addEventListener("click", function (e) {
			e.preventDefault();
			e.stopPropagation();
			// Toggle the 'show-ans' class
			this.classList.toggle("expanded");

			// Toggle text and attributes
			if (this.classList.contains('expanded')) {
				//this.setAttribute("aria-pressed", "true");
				this.setAttribute("aria-expanded", "true");
			} else {
				//this.setAttribute("aria-pressed", "false");
				this.setAttribute("aria-expanded", "false");
			}

			// Slide toggle the next sibling with class 'answer'
			const answerElement = this.nextElementSibling;
			if (answerElement && answerElement.classList.contains("collapsed")) {
				if (answerElement.style.display === "none" || !answerElement.style.display) {
					answerElement.style.display = "block"; // Show the element
					answerElement.style.transition = "max-height 0.2s ease-in-out";
					answerElement.style.maxHeight = "500px"; // Example height, adjust as needed
				} else {
					answerElement.style.display = "none"; // Hide the element
					answerElement.style.maxHeight = "0";
				}
			}
		});
	});
}, 1000);
//End

/*** Case study widgets: accessible image popup (modal dialog) ***/
(function () {
	var activePopup = null;
	var activeOverlay = null;
	var activeTrigger = null;
	var dialogTabindexSet = false;
	var listenersAttached = false;
	var inertEls = [];

	function toElement(trigger) {
		if (!trigger) return null;
		if (trigger.nodeType === 1) return trigger;
		if (typeof window.jQuery !== "undefined" && trigger && trigger.jquery) return trigger[0];
		return null;
	}

	function getDialogTitle(trigger) {
		var el = toElement(trigger);
		if (!el) return "Image dialog";
		var al = el.getAttribute && el.getAttribute("aria-label");
		if (al && al.replace(/\s/g, "")) return al.replace(/^\s+|\s+$/g, "");
		var t = (el.textContent || "").replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
		return t || "Image dialog";
	}

	function focusableIn(container) {
		if (!container) return [];
		var sel = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
		var list = Array.prototype.slice.call(container.querySelectorAll(sel));
		return list.filter(function (el) {
			var st = window.getComputedStyle(el);
			if (st.display === "none" || st.visibility === "hidden") return false;
			return true;
		});
	}

	function applyInert() {
		var selectors = [".topWrapperBox", "#naviLeft", "#naviRight", ".footer", ".menupatch", ".tablepatch"];
		selectors.forEach(function (sel) {
			var el = document.querySelector(sel);
			if (el && el.getAttribute("inert") == null) {
				el.setAttribute("inert", "");
				inertEls.push(el);
			}
		});
	}

	function removeInert() {
		inertEls.forEach(function (el) {
			try {
				el.removeAttribute("inert");
			} catch (e) {}
		});
		inertEls = [];
	}

	function closeViaCloseButton() {
		if (typeof window.jQuery !== "undefined") {
			var $p = window.jQuery(".popupimage:visible").first();
			if ($p.length) {
				var $c = $p.find(".closeimgpopup").first();
				if ($c.length) {
					$c.trigger("click");
					return;
				}
			}
		}
		if (activePopup) {
			var b = activePopup.querySelector(".closeimgpopup");
			if (b) b.click();
		}
	}

	function onKeydown(e) {
		if (!activePopup) return;
		var key = e.key || e.keyCode;
		if (e.key === "Escape" || e.keyCode === 27) {
			e.preventDefault();
			closeViaCloseButton();
			return;
		}
		if (e.key !== "Tab" && e.keyCode !== 9) return;
		var nodes = focusableIn(activePopup);
		if (nodes.length === 0) return;
		var first = nodes[0];
		var last = nodes[nodes.length - 1];
		if (e.shiftKey) {
			if (document.activeElement === first) {
				e.preventDefault();
				last.focus();
			}
		} else {
			if (document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		}
	}

	function onFocusIn(e) {
		if (!activePopup) return;
		var t = e.target;
		if (activePopup.contains(t)) return;
		if (t && t.classList && t.classList.contains("imagePopupOverlay")) return;
		var nodes = focusableIn(activePopup);
		if (!nodes.length) return;
		e.stopImmediatePropagation();
		e.preventDefault();
		setTimeout(function () {
			try {
				nodes[0].focus();
			} catch (err) {}
		}, 0);
	}

	function teardown(restoreFocus) {
		if (listenersAttached) {
			document.removeEventListener("keydown", onKeydown, true);
			document.removeEventListener("focusin", onFocusIn, true);
			listenersAttached = false;
		}
		removeInert();
		activeOverlay = null;
		if (activePopup) {
			if (dialogTabindexSet) {
				activePopup.removeAttribute("tabindex");
				dialogTabindexSet = false;
			}
			activePopup.removeAttribute("role");
			activePopup.removeAttribute("aria-modal");
			activePopup.removeAttribute("aria-label");
			activePopup.removeAttribute("aria-labelledby");
			activePopup.setAttribute("aria-hidden", "true");
		}
		if (activeTrigger) {
			try {
				activeTrigger.setAttribute("aria-expanded", "false");
			} catch (e3) {}
		}
		var toFocus = activeTrigger;
		activePopup = null;
		activeTrigger = null;
		if (restoreFocus && toFocus && typeof toFocus.focus === "function") {
			try {
				toFocus.focus();
			} catch (e4) {}
		}
	}

	window.CaseWidgetImageModal = {
		afterImagePopupShown: function (trigger, popup, overlay) {
			var trig = toElement(trigger);
			if (!popup) return;
			teardown(false);
			activePopup = popup;
			activeTrigger = trig;
			activeOverlay = overlay || null;
			var title = getDialogTitle(trig);
			popup.setAttribute("role", "dialog");
			popup.setAttribute("aria-modal", "true");
			popup.setAttribute("aria-label", title);
			popup.removeAttribute("aria-hidden");
			if (trig) {
				try {
					trig.setAttribute("aria-expanded", "true");
				} catch (e5) {}
			}
			if (activeOverlay) {
				activeOverlay.setAttribute("aria-hidden", "true");
			}
			var closeBtn = popup.querySelector(".closeimgpopup");
			if (closeBtn) {
				if (!closeBtn.getAttribute("aria-label")) closeBtn.setAttribute("aria-label", "Close");
				if (!closeBtn.getAttribute("title")) closeBtn.setAttribute("title", "close");
				if (!closeBtn.getAttribute("type")) closeBtn.setAttribute("type", "button");
			}
			applyInert();
			document.addEventListener("keydown", onKeydown, true);
			document.addEventListener("focusin", onFocusIn, true);
			listenersAttached = true;
			var nodes = focusableIn(popup);
			if (nodes.length) {
				setTimeout(function () {
					try {
						nodes[0].focus();
					} catch (e7) {}
				}, 0);
			} else {
				popup.setAttribute("tabindex", "-1");
				dialogTabindexSet = true;
				setTimeout(function () {
					try {
						popup.focus();
					} catch (e8) {}
				}, 0);
			}
		},
		onImagePopupsHidden: function (skipRestoreFocus) {
			teardown(!skipRestoreFocus);
		}
	};
})();