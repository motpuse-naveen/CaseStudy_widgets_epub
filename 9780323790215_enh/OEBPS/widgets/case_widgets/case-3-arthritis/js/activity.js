(function(app) {
    var aSlidesArray = new Array();
    var nSlideCounter = 0;
    var nLastLoadedSlide = 0;
    var nCount = 0;
    var footerLi="";
    var divArr = new Array();
    // var audioElement = document.createElement('audio');
    $(document).ready(function(){
      
        $(window).load(function() {
           $(".loader").delay(800).fadeOut("slow");
           $('.loadDiv').delay(800).fadeOut(300);
           
        }); 
        init();

        //$(".topContent").hide();
        $(".footer").hide();
        $(".beginBtn").bind("click",fnBegin);
        
        $(".imagePopup").bind('click',showImagePopup);
        $(".textPopup").bind('click',showTextPopup);
        $(".closeimgpopup").bind('click',hideImagePopup);
        $(".closetextpopup").bind('click',hideTextPopup);

        $('.midDiv').each(function(){
            divArr.push(this);
        })

        $(".navigation").bind("click keyup", fnHandelNavigationEvents);

        $("#naviLeft").bind("click",fnBack);
        $("#naviRight").bind("click",fnNext); 

        $("#menuBtn").bind("click",menuBtnFn);
        $("#tableBtn").bind("click",tableBtnFn);


        $('.item').bind("click keyup",fnClickRadioBox);



        // working
        // $('.rb').bind("click keyup",fnClickRadioBox);


        $('.menuList li').bind("click keyup",fnHandelNavMenu);

        $('#midText').prop('scrollHeight',"427");
     

 
        setTimeout(function(){
                $(".nano").nanoScroller(); 
                $(".nano-pane").show();  
            },100)

        set_tabindex();

    });

function showImagePopup(ev){
    console.log("--",$(this).attr('data-id'))
    if( $(this).attr('data-id')== "popupimg2"){//addSB
        console.log("-=-")

         // $("#textA12").css("height","auto");
        $("#textA12").css("height","400px")
    }
    $('#'+$(this).attr('data-id')).show();

}
function hideImagePopup (ev) {
    if($(this).parent().attr("id") == "popupimg2"){
        $("#textA12").css("height","auto");//addSB
    }
    $(this).parent().hide();    
}
function showTextPopup(ev){
    console.log("--",$(this).attr('data-id'))
    if( $(this).attr('data-id')== "popuptext2"){//addSB
        console.log("-=-")

         // $("#textA12").css("height","auto");
        // $("#textA12").css("height","400px")
    }
    $('#'+$(this).attr('data-id')).show();

}
function hideTextPopup (ev) {
    if($(this).parent().attr("id") == "popuptext2"){
        // $("#textA12").css("height","auto");//addSB
    }
    $(this).parent().hide();    
}

// ####### Amol ######################

function fnClickRadioBox(ev){


    if(ev.type=="keyup" && ev.keyCode !=13){
                console.log(ev.keyCode)
                return  true;
    }


    var currId = $(this).children().attr('data-id');    
    var parentId=$(this).parents('.midDiv').attr('id');

var currentCheckbox = $(this).find(".rb");

    $( ".rb:visible" ).each(function( index ) {
        loopCheckbox = $(this);
        console.log ("Match>>>",$(currentCheckbox).parent().text(), "With>>>",$(loopCheckbox).parent().text())
        if ($(currentCheckbox).parent().text() != $(loopCheckbox).parent().text())
        {
            // $('#' + parentId + ' .graph_'+(index+1)).css('display','none');
            if($(this).attr('data-id') != currId){
                console.log('true');
                $(this).parents().removeClass('selectedRadioBtn');
                $(this).removeClass("clicked");
            }
        }
    });

//      $( ".schedules" ).each(function( index ) {
// $(this).parents().removeClass('selectedRadioBtn');
//      }




    if($(this).find(".rb").hasClass("clicked")){

        console.log('hii i m in if');
        
            $(this).find(".rb").removeClass("clicked");
            $(this).removeClass('selectedRadioBtn');

            id = $(this).children().attr('data-id');
            indexId = id.substr(id.indexOf("_") + 1);

            console.log(indexId);
            $('.imgBlock').hide();

            //$('#' + parentId + ' .graph_'+indexId).css('display','none');
            $('.imageShow' + indexId).css('display','none');      
    }else{

        console.log('hii i m in else');

            $(this).find(".rb").addClass("clicked");    
            $(this).addClass('selectedRadioBtn');
          
            id = $(this).children().attr('data-id');
            indexId = id.substr(id.indexOf("_") + 1);

            console.log(indexId);
            console.log('#'+parentId);
            $('.imgBlock').hide();

            //$('#' + parentId + ' .graph_'+indexId).css('display','block');
            $('.imageShow' + indexId).css('display','block');        
    }



    set_tabindex();
}



function resetCheckboxes()
{
    $( ".rb" ).each(function( index ) {
        $(this).parent().removeClass('selectedRadioBtn');
        $(this).removeClass("clicked");
    });

     $(".graphContainer").each(function( index ) {
        var firstDiv = $(this).find("img:first");
        $(this).find('img').each(function( index ) {
            if ($(this).attr("class") !== $(firstDiv).attr("class"))
            {
                $(this).hide();
            }else{
                $(this).show();
            }
        });

     });
}
// ####### Amol ######################
var currScreenVisible = null;
function menuBtnFn(ev,nSlideCounter){

            if(ev.type=="keyup" && ev.keyCode !=13){
                    console.log(ev.keyCode)
                    return  true;
            }

        resetCheckboxes();

        // var currScreenNum =  currScreenId.match(/\d+/)[0];

        // console.log('currScreenId : ',currScreenId);
        // console.log('currScreenNum : ',currScreenNum);

        // if($.isNumeric(nSlideCounter)){
        //        currScreenNum = nSlideCounter;
        //     }


        // $('#menu'+currScreenNum).addClass("selectedMenu");

        $('.navigation').each(function(){
            $(this).removeClass('currentSlide');
        });


        //$('#navigate'+currScreenNum).addClass('currentSlide');
        if($('.tablepatch').css('display') == 'block'){
            resetScrrenObjectsVisibility();

            

            $('.tablepatch').hide(); 
        }

        $('#tableBtn').removeClass('tableBtnSelected');
        
            if($('.menupatch').css('display') == 'block'){
                    $('.menupatch').slideUp();  
                    $('#menuBtn').removeClass('menuBtnSelected');
                    if (currScreenVisible != null)
                        $(currScreenVisible).show();
                    currScreenVisible = null;
                    $("#naviList").show();

                    $("#naviLeft").show();
                     $("#naviRight").show();
            }else{
                    $('.midDiv').each(function(){
                        if ($(this).is(':visible'))
                        {
                            currScreenVisible = $(this);
                            return;
                        }
                    });
                    console.log('currScreenVisible>>> ',currScreenVisible)

                    var currScreenNum =  $(currScreenVisible).attr('id').match(/\d+/)[0];
                    $('#menu'+currScreenNum).addClass("selectedMenu");
                    //currScreenVisible = $('.midDiv:visible');


                    $('.menupatch').css("z-index","13");
                    $('#menuBtn').addClass('menuBtnSelected');
                    $('.menupatch').slideDown({
                        complete: function(){
                            
                            $(currScreenVisible).hide();
                            $("#naviList").hide();
                            $("#naviLeft").hide();
                            $("#naviRight").hide();
                        }
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

function resetScrrenObjectsVisibility()
{
    if (currScreenVisible != null)
        $(currScreenVisible).show();
    if (currScreenVisible1 != null)
        $(currScreenVisible1).show();

    $("#naviList").show();
    $("#naviLeft").show();
    $("#naviRight").show();
}


var currScreenVisible1 = null;
function tableBtnFn(ev){

    if(ev.type=="keyup" && ev.keyCode !=13){
                    console.log(ev.keyCode)
                    return  true;
            }
console.log('tableBtnFn...')

     //    $('.menupatch').hide();  
     //    $('#menuBtn').removeClass('menuBtnSelected');


     //    if($('.tablepatch').css('display') == 'block'){
     //    $('.tablepatch').hide();        
     //     $('#tableBtn').removeClass('tableBtnSelected');
     //    }else{
     //    $('.tablepatch').show();   
     //    $('#tableBtn').addClass('tableBtnSelected');    
     // }


      $('.navigation').each(function(){
            $(this).removeClass('currentSlide');
        });


        //$('#navigate'+currScreenNum).addClass('currentSlide');

        //$('.tablepatch').hide(); 

        if($('.menupatch').css('display') == 'block'){
            resetScrrenObjectsVisibility();
            $('.menupatch').hide();
            $('#menuBtn').removeClass('menuBtnSelected');

        }
        $('#tableBtn').removeClass('tableBtnSelected');
        
            if($('.tablepatch').css('display') != 'none'){
                    $('.tablepatch').slideUp();
                    $('#tableBtn').removeClass('tableBtnSelected');
                    if (currScreenVisible1 != null)
                        $(currScreenVisible1).show();
                    currScreenVisible1 = null;
                    $("#naviList").show();

                    $("#naviLeft").show();
                     $("#naviRight").show();
            }else{
                    $('.midDiv').each(function(){
                        if ($(this).is(':visible'))
                        {
                            currScreenVisible1 = $(this);
                            return;
                        }
                    });
                    console.log('currScreenVisible1>>> ',currScreenVisible1)

                    var currScreenNum =  $(currScreenVisible1).attr('id').match(/\d+/)[0];
                    $('#menu'+currScreenNum).addClass("selectedMenu");
                    //currScreenVisible1 = $('.midDiv:visible');

                    $('.tablepatch').css("z-index","13");
                    $('#tableBtn').addClass('tableBtnSelected');
                    $('.tablepatch').slideDown({
                        complete: function(){
                            
                            $(currScreenVisible1).hide();
                            $("#naviList").hide();
                            $("#naviLeft").hide();
                            $("#naviRight").hide();
                        }
                    });
            }


            if($('.menupatch').css('display') == 'block'){
            $('#menuBtn').removeClass('menuBtnSelected');

        }


        var data_id = 0;
        if($('#testListId'+data_id).height() <  $('#addTable'+data_id+' table').height())
        {
            $(".nano").nanoScroller(); 
            $(".nano-pane").show();
        }else{
            $(".nano-pane").hide();
        }
set_tabindex();        
}

     function init() {        
        $("#pageContainer > div").each(function() {
            $(this).css('display', 'none')
            aSlidesArray.push($(this))
            nCount++;
        });

        // console.log("nCount : ",nCount);
        
        footerLi+='<ul>';
        for(var i=0; i<nCount;i++){
            footerLi+='<li><span id="navigate'+i+'" class="navigation"></span></li>';
        }
        footerLi+='</ul>';
        $("#naviList").append(footerLi);

        $("#navigate0").css({background: "#015453 no-repeat"});
        $("#navigate0").addClass("currentSlide");
        aSlidesArray[nSlideCounter].css({
            'display': 'block',
            'z-index': '2'
        });  
        fnCheckNextBack(nSlideCounter)
    }

     function fnCheckNextBack(nSlideCounter) {


        $('.navigation').removeClass('currentSlide');

        $('.menuList li').removeClass('selectedMenu');

        $('#navigate'+nSlideCounter).addClass('currentSlide');

        // hide answer div
        $('.AnswerDiv > span').empty().text('Show answer');
        $('.textArea').hide();

        if (nSlideCounter < 0) {
          $(".topContent").hide();
          $(".footer").hide();
        $(".beginBtn").bind("click",fnBegin);
            // DisableLeftArrow();
            // EnableRightArrow();        
        } else if (nSlideCounter == 0) {
            DisableLeftArrow();
            EnableRightArrow();
        }else if (nSlideCounter == aSlidesArray.length-1) {
            EnableLeftArrow();
            DisableRightArrow();
        }else{
            EnableLeftArrow();
            EnableRightArrow();
        }   
        // checkForAudio(nSlideCounter)   
         // $("#jquery_jplayer_1").jPlayer("setMedia"); 
         set_tabindex(); 
    }

    function fnBack(ev){


        if(ev.type=="keyup" && ev.keyCode !=13){
                    console.log(ev.keyCode)
                    return  true;
            }

        if($(this).hasClass('leftArrowDisable')){
            return false;
        }


         setTimeout(function(){
         $(".nano").nanoScroller(); 
         $(".nano-pane").show();  
        },100)

        resetCheckboxes();
        $('.sliderdot').css('left','0');
        $('.cont,.pause').removeClass( "pause" ).addClass( "cont" ).addClass( "play" );
        if(nSlideCounter>0){
            //console.log("left>>>"+nSlideCounter);
             nSlideCounter--;
             $(".midDiv").hide();
             $("#midDiv"+nSlideCounter).show("slide", { direction: "left" }, 300);
             $(".navigation").css({background: "#fff no-repeat"});
             $("#navigate"+nSlideCounter).css({background: "#015453 no-repeat"});
        }else{
            $(".topContent").hide();
            $(".footer").hide();
            $(".beginPage").show();
            $(".beginBtn").bind("click",fnBegin);
        }
       fnCheckNextBack(nSlideCounter);

   }

    function fnNext(ev){


        if(ev.type=="keyup" && ev.keyCode !=13){
                    console.log(ev.keyCode)
                    return  true;
            }

        resetCheckboxes();
     var indexD =1;
     $('#midText').prop('scrollHeight',"427");
     

 
 setTimeout(function(){
         $(".nano").nanoScroller(); 
         $(".nano-pane").show();  
    },100)
  

    $('.sliderdot').css('left','0');
        $('.cont,.pause').removeClass( "pause" ).addClass( "cont" ).addClass( "play" );

        if(nSlideCounter<(nCount-1)){
            nSlideCounter++;
            EnableRightArrow();
            $(".midDiv").hide();

            $("#midDiv"+nSlideCounter).css('visibility','visible')

             $("#midDiv"+nSlideCounter).show("slide", { direction: "right" }, 300);
             $(".navigation").css({background: "#fff no-repeat"});
             $("#navigate"+nSlideCounter).css({background: "#015453 no-repeat"});
        }else{
            DisableRightArrow();            
        }
        fnCheckNextBack(nSlideCounter);
     set_tabindex();
    }

function fnAddScrollMain()
{
  var myScroll = new IScroll('#midText', {
    scrollbars: true,
    mouseWheel: true,
    interactiveScrollbars: true,
    shrinkScrollbars: 'scale',
    fadeScrollbars: true,
    click:true
  });
}


   function fnHandelNavMenu(ev) {


        if(ev.type=="keyup" && ev.keyCode !=13){
            console.log(ev.keyCode)
            return  true;
        }


        setTimeout(function(){
            $(".nano").nanoScroller(); 
            $(".nano-pane").show();  
        },100)
          
           $(".navigation").css({background: "#fff no-repeat"});
                
          
            var navigateId = $(this).attr("id");
            var navIdNo = navigateId.match(/\d+/)[0];

           $('#navigate'+navIdNo).css('background','#015453');
           $("#midDiv"+navIdNo).css("visibility","visible");

           nSlideCounter=navIdNo;
           
            $(".midDiv").hide();

            $("#midDiv"+navIdNo).show("slide", { direction: "right" }, 300);
            
            if(nSlideCounter==0){
                DisableLeftArrow();
                EnableRightArrow();
            }else if(nSlideCounter==nCount-1){
                DisableRightArrow();
                EnableLeftArrow();
            }else{
                EnableLeftArrow();
                EnableRightArrow();
            }

        $('.menuList li').each(function(index){
            $(this).removeClass('selectedMenu');        
        });


        $(this).addClass('selectedMenu');
        
        currScreenVisible = null;
        menuBtnFn(ev,nSlideCounter);
        set_tabindex();
    }


   function fnHandelNavigationEvents(ev) {
        if(ev.type=="keyup" && ev.keyCode !=13){
              console.log(ev.keyCode)
                  return  true;
          }

setTimeout(function(){
     
         $(".nano").nanoScroller(); 
         $(".nano-pane").show();  
    },100)

    resetCheckboxes();
  
        $(".navigation").css({background: "#fff no-repeat"});
        
  
        var navigateId = $(this).attr("id");
        var navIdNo = navigateId.match(/\d+/)[0];


        $('#navigate'+navIdNo).css('background','#015453');
        $("#midDiv"+navIdNo).css("visibility","visible");

        console.log("navIdNo : ",navIdNo);

        nSlideCounter=navIdNo;
        //console.log(">>>>>>"+navIdNo);
        
        $("#" + navigateId).css({background: "#015453 no-repeat"});
        $(".midDiv").hide();

        $("#midDiv"+navIdNo).show("slide", { direction: "right" }, 300);
        
        if(nSlideCounter==0){
            DisableLeftArrow();
            EnableRightArrow();
        }else if(nSlideCounter==nCount-1){
            DisableRightArrow();
            EnableLeftArrow();
        }else{
            EnableLeftArrow();
            EnableRightArrow();
        }

set_tabindex();
fnCheckNextBack(nSlideCounter);

    }

     function EnableLeftArrow(){
        $("#naviLeft").removeClass("leftArrowDisable").addClass("leftArrowEnable").css({"pointer-event":"auto", "cursor":"pointer"});
        $('#naviLeft').addClass('tabindex');
        $('#naviLeft span').show();

    }
    function DisableLeftArrow(){
        $("#naviLeft").removeClass("leftArrowEnable").addClass("leftArrowDisable").css({"pointer-event":"none", "cursor":"default"});
        $('#naviLeft').removeClass('tabindex');
        $('#naviLeft span').hide();

    }
     function EnableRightArrow(){
        $("#naviRight").removeClass("rightArrowDisable").addClass("rightArrowEnable").css({"pointer-event":"auto", "cursor":"pointer"});
        $('#naviRight').addClass('tabindex');
        $('#naviRight span').show();
    }
    function DisableRightArrow(){
        $("#naviRight").removeClass("rightArrowEnable").addClass("rightArrowDisable").css({"pointer-event":"none", "cursor":"default"});
       $('#naviRight').removeClass('tabindex');
       $('#naviRight span').hide();
    }
    function fnBegin(){
      console.log('fnbegin')
        $(".beginPage").hide();
        $(".topContent").show();
        $(".footer").show();
    }


function set_tabindex(){
        var tab_index=1;
        var interactiveSelector = 'button, [href], input, select, textarea, [role="button"], [role="combobox"], [role="option"], .menuList li, .item, .dropdown, .dropdown .option';
        $(".tabindex").each(function(index){
            $(this).removeAttr("tabindex");
            if($(this).is(':visible') && $(this).is(interactiveSelector)){
                $(this).attr("tabindex",tab_index);
                tab_index++;
            }
        });
   }

 })(player1 = player1 || {})
 var player1







