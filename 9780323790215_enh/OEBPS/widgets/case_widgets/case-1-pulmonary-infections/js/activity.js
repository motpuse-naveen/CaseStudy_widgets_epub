(function (app) {
  var aSlidesArray = new Array();
  var nSlideCounter = 0;
  var nLastLoadedSlide = 0;
  var nCount = 0;
  var footerLi = "";
  var divArr = new Array();
  // var audioElement = document.createElement('audio');
  $(document).ready(function () {
    $(window).load(function () {
      $(".loader").delay(800).fadeOut("slow");
      $(".loadDiv").delay(800).fadeOut(300);
    });

    init();

    //$(".topContent").hide();
    $(".footer").hide();
    $(".beginBtn").bind("click", fnBegin);

    $(".imagePopup").bind("click", showImagePopup);
    $(".closeimgpopup").bind("click", hideImagePopup);
    $(".popupimage").attr("aria-hidden", "true").find(".closeimgpopup").attr("tabindex", "-1");

    $(".midDiv").each(function () {
      divArr.push(this);
    });

    $(".navigation").bind("click keyup", fnHandelNavigationEvents);

    $("#naviLeft").bind("click", fnBack);
    $("#naviRight").bind("click", fnNext);

    $("#menuBtn").bind("click", menuBtnFn);
    $("#tableBtn").bind("click", tableBtnFn);
    $(document).bind("keydown", fnHandleEscapePanels);

    $(".item").bind("click keyup", fnClickRadioBox);
    $(".rightOptionBox .item.checkList").attr("tabindex", "0").bind("keydown", fnClickRadioBox);
    ensureImageChangeLiveRegion();
    $(".rightOptionBox").attr("role", "radiogroup");
    $(".rightOptionBox .item.checkList").attr("role", "radio").attr("aria-checked", "false");
    $(".rightOptionBox .item.checkList.selectedRadioBtn, .rightOptionBox .item.checkList:has(.rb.clicked)").attr("aria-checked", "true");

    // working
    // $('.rb').bind("click keyup",fnClickRadioBox);

    $(".menuList li").bind("click keyup", fnHandelNavMenu);

    $("#midText").prop("scrollHeight", "427");

    setTimeout(function () {
      $(".nano").nanoScroller();
      $(".nano-pane").show();
    }, 100);

    set_tabindex();
  });

  function showImagePopup(ev) {
    ev.preventDefault();
    var $currentMidDiv = $(this).closest(".midDiv");
    if (!$currentMidDiv.length) {
      $currentMidDiv = $(".midDiv:visible").first();
    }
    var $overlay = $currentMidDiv.find(".imagePopupOverlay").first();
    var popupId = $(this).attr("data-id");
    hideAllImagePopups(true);
    if (popupId == "popupimg2") {
      $("#textA12").css("height", "400px");
    }
    if ($overlay.length) {
      $overlay.show();
    }
    var $popup = $("#" + popupId);
    $popup.show().attr("aria-hidden", "false");
    $popup.find(".closeimgpopup").removeAttr("tabindex");
    if (
      window.CaseWidgetImageModal &&
      window.CaseWidgetImageModal.afterImagePopupShown
    ) {
      window.CaseWidgetImageModal.afterImagePopupShown(
        this,
        $popup[0],
        $overlay.length ? $overlay[0] : null,
      );
    }
  }

  function hideImagePopup(ev) {
    if ($(this).parent().attr("id") == "popupimg2") {
      $("#textA12").css("height", "auto"); //addSB
    }
    if (
      window.CaseWidgetImageModal &&
      window.CaseWidgetImageModal.onImagePopupsHidden
    ) {
      window.CaseWidgetImageModal.onImagePopupsHidden(false);
    }
    $(this).parent().hide();
    $(this).closest(".midDiv").find(".imagePopupOverlay").hide();
  }
  function hideAllImagePopups(skipRestoreFocus) {
    if (
      window.CaseWidgetImageModal &&
      window.CaseWidgetImageModal.onImagePopupsHidden
    ) {
      window.CaseWidgetImageModal.onImagePopupsHidden(!!skipRestoreFocus);
    }
    $(".popupimage").hide();
    $(".imagePopupOverlay").hide();
    $("#textA12").css("height", "auto");
  }

  // ####### Amol ######################


  function ensureImageChangeLiveRegion() {
    if ($("#caseWidgetImageLiveRegion").length) {
      return;
    }

    $("body").append(
      '<div id="caseWidgetImageLiveRegion" aria-live="polite" aria-atomic="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;">' +
        '</div>',
    );
  }

  function announceImageChange(message) {
    var $live = $("#caseWidgetImageLiveRegion");
    if (!$live.length) {
      ensureImageChangeLiveRegion();
      $live = $("#caseWidgetImageLiveRegion");
    }

    $live.text("");
    setTimeout(function () {
      $live.text(message);
    }, 50);
  }

  function getOptionAnnouncementText($item) {
    var text = $.trim($item.text()).replace(/\s+/g, " ");
    return text || "option";
  }

  function fnClickRadioBox(ev) {
    var key = ev.which || ev.keyCode;

    if (ev.type === "keydown") {
      if (key === 37 || key === 38 || key === 39 || key === 40) {
        ev.preventDefault();
        var $current = $(this);
        var $group = $current.closest(".rightOptionBox");
        var $items = $group.find(".item.checkList:visible");
        if (!$items.length) {
          return true;
        }

        var currentIndex = $items.index($current);
        var nextIndex = currentIndex;

        if (key === 39 || key === 40) {
          nextIndex = (currentIndex + 1) % $items.length;
        } else if (key === 37 || key === 38) {
          nextIndex = (currentIndex - 1 + $items.length) % $items.length;
        }

        var $next = $items.eq(nextIndex);
        $next.trigger("click");
        $next.focus();
        return false;
      }

      if (key !== 13 && key !== 32) {
        return true;
      }
      ev.preventDefault();
    } else if (ev.type === "keyup") {
      return true;
    }

    var $item = $(this);
    var $group = $item.closest(".rightOptionBox");
    var $groupItems = $group.find(".item.checkList");
    var $rb = $item.find(".rb");

    if ($item.hasClass("selectedRadioBtn") || $rb.hasClass("clicked")) {
      $item.removeClass("selectedRadioBtn").attr("aria-checked", "false");
      $rb.removeClass("clicked");
      $(".imgBlock").hide();
      announceImageChange("Image cleared for deselected option: " + getOptionAnnouncementText($item) + ".");
      set_tabindex();
      return;
    }

    var id = $rb.attr("data-id");
    var indexId = id.substr(id.indexOf("_") + 1);

    $groupItems.removeClass("selectedRadioBtn").attr("aria-checked", "false");
    $groupItems.find(".rb").removeClass("clicked");

    $item.addClass("selectedRadioBtn").attr("aria-checked", "true");
    $rb.addClass("clicked");

    $(".imgBlock").hide();
    $(".imageShow" + indexId).css("display", "block");
    announceImageChange("Image updated for selected option: " + getOptionAnnouncementText($item) + ".");

    set_tabindex();
  }

  function resetCheckboxes() {
    $(".rb").each(function (index) {
      $(this).parent().removeClass("selectedRadioBtn").attr("aria-checked", "false");
      $(this).removeClass("clicked");
    });

    $(".graphContainer").each(function (index) {
      var firstDiv = $(this).find("img:first");
      $(this)
        .find("img")
        .each(function (index) {
          if ($(this).attr("class") !== $(firstDiv).attr("class")) {
            $(this).hide();
          } else {
            $(this).show();
          }
        });
    });
  }
  // ####### Amol ######################
  var currScreenVisible = null;
  function menuBtnFn(ev, nSlideCounter) {
    if (ev.type == "keyup" && ev.keyCode != 13) {
      console.log(ev.keyCode);
      return true;
    }

    resetCheckboxes();

    // var currScreenNum =  currScreenId.match(/\d+/)[0];

    // console.log('currScreenId : ',currScreenId);
    // console.log('currScreenNum : ',currScreenNum);

    // if($.isNumeric(nSlideCounter)){
    //        currScreenNum = nSlideCounter;
    //     }

    // $('#menu'+currScreenNum).addClass("selectedMenu");

    $(".navigation").each(function () {
      $(this).removeClass("currentSlide").removeAttr("aria-current");
    });

    //$('#navigate'+currScreenNum).addClass('currentSlide').attr('aria-current', 'page');
    if ($(".tablepatch").css("display") == "block") {
      resetScrrenObjectsVisibility();

      $(".tablepatch").hide();
    }

    $("#tableBtn").removeClass("tableBtnSelected");

    if ($(".menupatch").css("display") == "block") {
      $(".menupatch").slideUp();
      $("#menuBtn").removeClass("menuBtnSelected");
      if (currScreenVisible != null) $(currScreenVisible).show();
      currScreenVisible = null;
      $("#naviList").show();

      $("#naviLeft").show();
      $("#naviRight").show();
    } else {
      $(".midDiv").each(function () {
        if ($(this).is(":visible")) {
          currScreenVisible = $(this);
          return;
        }
      });
      console.log("currScreenVisible>>> ", currScreenVisible);

      var currScreenNum = $(currScreenVisible).attr("id").match(/\d+/)[0];
      $("#menu" + currScreenNum).addClass("selectedMenu");
      //currScreenVisible = $('.midDiv:visible');

      $(".menupatch").css("z-index", "13");
      $("#menuBtn").addClass("menuBtnSelected");
      $(".menupatch").slideDown({
        complete: function () {
          $(currScreenVisible).hide();
          $("#naviList").hide();
          $("#naviLeft").hide();
          $("#naviRight").hide();
          set_tabindex();
          setTimeout(function () {
            var $firstMenuItem = $(".menupatch .menuList li:visible").first();
            if ($firstMenuItem.length) {
              $firstMenuItem.focus();
            }
          }, 0);
        },
      });

      //
    }

    //-------------------------------------------------------------------

    /* var selectedMenu = $('.selectedMenu').attr('id');
        var selectedMenuNum = selectedMenu.match(/\d+/)[0];
        var visibleDivID = $('.midDiv:visible').attr('id');
        
        if(currScreenNum == selectedMenuNum){
            $('.midDiv').hide();
            $('#'+visibleDivID).show();
        }
        if(!$('#menuBtn').hasClass('menuBtnSelected')){
                $('#'+selectedMenuNum).show();
        }*/

    set_tabindex();
  }

  function resetScrrenObjectsVisibility() {
    if (currScreenVisible != null) $(currScreenVisible).show();
    if (currScreenVisible1 != null) $(currScreenVisible1).show();

    $("#naviList").show();
    $("#naviLeft").show();
    $("#naviRight").show();
  }

  var currScreenVisible1 = null;
  function tableBtnFn(ev) {
    if (ev.type == "keyup" && ev.keyCode != 13) {
      console.log(ev.keyCode);
      return true;
    }
    console.log("tableBtnFn...");

    //    $('.menupatch').hide();
    //    $('#menuBtn').removeClass('menuBtnSelected');

    //    if($('.tablepatch').css('display') == 'block'){
    //    $('.tablepatch').hide();
    //     $('#tableBtn').removeClass('tableBtnSelected');
    //    }else{
    //    $('.tablepatch').show();
    //    $('#tableBtn').addClass('tableBtnSelected');
    // }

    $(".navigation").each(function () {
      $(this).removeClass("currentSlide").removeAttr("aria-current");
    });

    //$('#navigate'+currScreenNum).addClass('currentSlide').attr('aria-current', 'page');

    //$('.tablepatch').hide();

    if ($(".menupatch").css("display") == "block") {
      resetScrrenObjectsVisibility();
      $(".menupatch").hide();
      $("#menuBtn").removeClass("menuBtnSelected");
    }
    $("#tableBtn").removeClass("tableBtnSelected");

    if ($(".tablepatch").css("display") != "none") {
      $(".tablepatch").slideUp();
      $("#tableBtn").removeClass("tableBtnSelected");
      if (currScreenVisible1 != null) $(currScreenVisible1).show();
      currScreenVisible1 = null;
      $("#naviList").show();

      $("#naviLeft").show();
      $("#naviRight").show();
    } else {
      $(".midDiv").each(function () {
        if ($(this).is(":visible")) {
          currScreenVisible1 = $(this);
          return;
        }
      });
      console.log("currScreenVisible1>>> ", currScreenVisible1);

      var currScreenNum = $(currScreenVisible1).attr("id").match(/\d+/)[0];
      $("#menu" + currScreenNum).addClass("selectedMenu");
      //currScreenVisible1 = $('.midDiv:visible');

      $(".tablepatch").css("z-index", "13");
      $("#tableBtn").addClass("tableBtnSelected");
      $(".tablepatch").slideDown({
        complete: function () {
          $(currScreenVisible1).hide();
          $("#naviList").hide();
          $("#naviLeft").hide();
          $("#naviRight").hide();
        },
      });
    }

    if ($(".menupatch").css("display") == "block") {
      $("#menuBtn").removeClass("menuBtnSelected");
    }

    var data_id = 0;
    if (
      $("#testListId" + data_id).height() <
      $("#addTable" + data_id + " table").height()
    ) {
      $(".nano").nanoScroller();
      $(".nano-pane").show();
    } else {
      $(".nano-pane").hide();
    }
    set_tabindex();
  }

  function init() {
    $("#pageContainer > div").each(function () {
      $(this).css("display", "none");
      aSlidesArray.push($(this));
      nCount++;
    });

    // console.log("nCount : ",nCount);

    footerLi += "<ul>";
    for (var i = 0; i < nCount; i++) {
      footerLi +=
        '<li><button type=\"button\" id=\"navigate' + i + '\" class=\"navigation\" title=\"Page ' + (i + 1) + '\" aria-label=\"Page ' + (i + 1) + '\"></button></li>';
    }
    footerLi += "</ul>";
    $("#naviRight").before(footerLi);

    $("#navigate0").css({ background: "#015453 no-repeat" });
    $("#navigate0").addClass("currentSlide").attr("aria-current", "page");
    aSlidesArray[nSlideCounter].css({
      display: "block",
      "z-index": "2",
    });
    fnCheckNextBack(nSlideCounter);
  }

  function fnCheckNextBack(nSlideCounter) {
    $(".navigation").removeClass("currentSlide").removeAttr("aria-current");

    $(".menuList li").removeClass("selectedMenu");

    $("#navigate" + nSlideCounter).addClass("currentSlide").attr("aria-current", "page");

    // hide answer div
    $(".AnswerDiv > span").empty().text("Show answer");
    $(".textArea").hide().attr("aria-hidden", "true"); //new added
    $(".AnswerDiv").attr("aria-expanded", "false"); //new added

    if (nSlideCounter < 0) {
      $(".topContent").hide();
      $(".footer").hide();
      $(".beginBtn").bind("click", fnBegin);
      // DisableLeftArrow();
      // EnableRightArrow();
    } else if (nSlideCounter == 0) {
      DisableLeftArrow();
      EnableRightArrow();
    } else if (nSlideCounter == aSlidesArray.length - 1) {
      EnableLeftArrow();
      DisableRightArrow();
    } else {
      EnableLeftArrow();
      EnableRightArrow();
    }
    // checkForAudio(nSlideCounter)
    // $("#jquery_jplayer_1").jPlayer("setMedia");
    set_tabindex();
  }

  function fnBack(ev) {
    if (ev.type == "keyup" && ev.keyCode != 13) {
      console.log(ev.keyCode);
      return true;
    }

    if ($(this).hasClass("leftArrowDisable")) {
      return false;
    }

    setTimeout(function () {
      $(".nano").nanoScroller();
      $(".nano-pane").show();
    }, 100);

    resetCheckboxes();
    $(".sliderdot").css("left", "0");
    $(".cont,.pause").removeClass("pause").addClass("cont").addClass("play");
    if (nSlideCounter > 0) {
      //console.log("left>>>"+nSlideCounter);
      nSlideCounter--;
      $(".midDiv").hide();
      $("#midDiv" + nSlideCounter).show("slide", { direction: "left" }, 300);
      $(".navigation").css({ background: "#fff no-repeat" });
      $("#navigate" + nSlideCounter).css({ background: "#015453 no-repeat" });
    } else {
      $(".topContent").hide();
      $(".footer").hide();
      $(".beginPage").show();
      $(".beginBtn").bind("click", fnBegin);
    }
    fnCheckNextBack(nSlideCounter);
  }

  function fnNext(ev) {
    if (ev.type == "keyup" && ev.keyCode != 13) {
      console.log(ev.keyCode);
      return true;
    }

    resetCheckboxes();
    var indexD = 1;
    $("#midText").prop("scrollHeight", "427");

    setTimeout(function () {
      $(".nano").nanoScroller();
      $(".nano-pane").show();
    }, 100);

    $(".sliderdot").css("left", "0");
    $(".cont,.pause").removeClass("pause").addClass("cont").addClass("play");

    if (nSlideCounter < nCount - 1) {
      nSlideCounter++;
      EnableRightArrow();
      $(".midDiv").hide();

      $("#midDiv" + nSlideCounter).css("visibility", "visible");

      $("#midDiv" + nSlideCounter).show("slide", { direction: "right" }, 300);
      $(".navigation").css({ background: "#fff no-repeat" });
      $("#navigate" + nSlideCounter).css({ background: "#015453 no-repeat" });
    } else {
      DisableRightArrow();
    }
    fnCheckNextBack(nSlideCounter);
    set_tabindex();
  }

  function fnAddScrollMain() {
    var myScroll = new IScroll("#midText", {
      scrollbars: true,
      mouseWheel: true,
      interactiveScrollbars: true,
      shrinkScrollbars: "scale",
      fadeScrollbars: true,
      click: true,
    });
  }

  function fnHandelNavMenu(ev) {
    if (ev.type == "keyup" && ev.keyCode != 13) {
      console.log(ev.keyCode);
      return true;
    }

    setTimeout(function () {
      $(".nano").nanoScroller();
      $(".nano-pane").show();
    }, 100);

    $(".navigation").css({ background: "#fff no-repeat" });

    var navigateId = $(this).attr("id");
    var navIdNo = navigateId.match(/\d+/)[0];

    $("#navigate" + navIdNo).css("background", "#015453");
    $("#midDiv" + navIdNo).css("visibility", "visible");

    nSlideCounter = navIdNo;

    $(".midDiv").hide();

    $("#midDiv" + navIdNo).show("slide", { direction: "right" }, 300);

    if (nSlideCounter == 0) {
      DisableLeftArrow();
      EnableRightArrow();
    } else if (nSlideCounter == nCount - 1) {
      DisableRightArrow();
      EnableLeftArrow();
    } else {
      EnableLeftArrow();
      EnableRightArrow();
    }

    $(".menuList li").each(function (index) {
      $(this).removeClass("selectedMenu");
    });

    $(this).addClass("selectedMenu");

    currScreenVisible = null;
    menuBtnFn(ev, nSlideCounter);
    set_tabindex();
  }

  function fnHandelNavigationEvents(ev) {
    if (ev.type == "keyup" && ev.keyCode != 13) {
      console.log(ev.keyCode);
      return true;
    }

    setTimeout(function () {
      $(".nano").nanoScroller();
      $(".nano-pane").show();
    }, 100);

    resetCheckboxes();

    $(".navigation").css({ background: "#fff no-repeat" });

    var navigateId = $(this).attr("id");
    var navIdNo = navigateId.match(/\d+/)[0];

    $("#navigate" + navIdNo).css("background", "#015453");
    $("#midDiv" + navIdNo).css("visibility", "visible");

    console.log("navIdNo : ", navIdNo);

    nSlideCounter = navIdNo;
    //console.log(">>>>>>"+navIdNo);

    $("#" + navigateId).css({ background: "#015453 no-repeat" });
    $(".midDiv").hide();

    $("#midDiv" + navIdNo).show("slide", { direction: "right" }, 300);

    if (nSlideCounter == 0) {
      DisableLeftArrow();
      EnableRightArrow();
    } else if (nSlideCounter == nCount - 1) {
      DisableRightArrow();
      EnableLeftArrow();
    } else {
      EnableLeftArrow();
      EnableRightArrow();
    }

    set_tabindex();
    fnCheckNextBack(nSlideCounter);
  }

  function EnableLeftArrow() {
    $("#naviLeft")
      .removeClass("leftArrowDisable")
      .addClass("leftArrowEnable")
      .css({ "pointer-event": "auto", cursor: "pointer" });
    $("#naviLeft span").show();
      $("#naviLeft").attr("aria-disabled", "false");
}
  function DisableLeftArrow() {
    $("#naviLeft")
      .removeClass("leftArrowEnable")
      .addClass("leftArrowDisable")
      .css({ "pointer-event": "none", cursor: "default" });
    $("#naviLeft span").hide();
      $("#naviLeft").attr("aria-disabled", "true");
}
  function EnableRightArrow() {
    $("#naviRight")
      .removeClass("rightArrowDisable")
      .addClass("rightArrowEnable")
      .css({ "pointer-event": "auto", cursor: "pointer" });
    $("#naviRight span").show();
      $("#naviRight").attr("aria-disabled", "false");
}
  function DisableRightArrow() {
    $("#naviRight")
      .removeClass("rightArrowEnable")
      .addClass("rightArrowDisable")
      .css({ "pointer-event": "none", cursor: "default" });
    $("#naviRight span").hide();
      $("#naviRight").attr("aria-disabled", "true");
}
  function fnBegin() {
    console.log("fnbegin");
    $(".beginPage").hide();
    $(".topContent").show();
    $(".footer").show();
  }



  function fnHandleEscapePanels(ev) {
    var key = ev.which || ev.keyCode;
    if (key !== 27) {
      return true;
    }

    var isMenuOpen = $(".menupatch:visible").length > 0;
    var isTableOpen = $(".tablepatch:visible").length > 0;

    if (!isMenuOpen && !isTableOpen) {
      return true;
    }

    ev.preventDefault();

    if (isMenuOpen) {
      $("#menuBtn").focus();
    } else if (isTableOpen) {
      $("#tableBtn").focus();
    }

    $(".menupatch").hide();
    $(".tablepatch").hide();
    $("#menuBtn").removeClass("menuBtnSelected");
    $("#tableBtn").removeClass("tableBtnSelected");

    $("#naviList").show();
    $("#naviLeft").show();
    $("#naviRight").show();

    if ($(".midDiv:visible").length === 0 && typeof nSlideCounter !== "undefined") {
      $("#midDiv" + nSlideCounter).show();
    }

    set_tabindex();
    return false;
  }
  function set_tabindex() {
    var tab_index = 1;
    var interactiveSelector =
      '[role="button"], [role="combobox"], [role="option"], .menuList li, .item, .dropdown, .dropdown .option';
    $(".tabindex").each(function (index) {
      $(this).removeAttr("tabindex");
      if ($(this).is(":visible") && $(this).is(interactiveSelector)) {
        $(this).attr("tabindex", tab_index);
        tab_index++;
      }
    });
  }
})((player1 = player1 || {}));
var player1;
