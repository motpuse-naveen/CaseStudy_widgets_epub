(function(app){


var aScroll = new Array();
nSlideCounter = 0;
nLastLoadedSlide = 0;
var aSlidesArray = new Array();
var id = '';
var indexId
var ContentArray ='' ;
var headerContent = '';
var pageFirstSection = '';

function init(){
     ContentArray = data[0].tableData;
     headerContent = '';

     for (var index = 1; index <=  ContentArray.length ; index++) {
         if(index == 1){ pageFirstSection = '';   }else{  pageFirstSection = 'pageFirstSection'; }
 
        headerContent +='<div class="myPage '+pageFirstSection+'" id="pageFirstSection_'+index+'"><div class="para_ tabindex Cont_Que">'+ContentArray[index-1].question+'</div><div id="AnswerDiv_'+index+'" class="AnswerDiv" isSelected="false"><span class="tabindex show">Show answer</span></div><div class="textArea" id="textA'+index+'"><div id="wrap'+index+'" class="wrapper AnswerDiv_para"><div class="contentHolder tabindex Cont_Ans">'+ContentArray[index-1].answer+'</div><div id="scroller"></div></div></div></div>';
       
       }


	  $("title").append(data[0].headTitle);
	  // $(".contentHolderMain").append(headerContent+'<br/><br/><br/><div id="scroller"></div>');
	  $("p").addClass("tabindex");



    } 
    


  $(document).ready(function(){		 
    $("#midDiv1").css('visibility','hidden')
        $(window).load(function() {
           $(".loader").delay(1000).fadeOut("slow");
           $('.loadDiv').delay(1000).fadeOut(300);
        }); 

	   init();

		 $( ".AnswerDiv" ).unbind().bind("click keyup",AnswerDivFun);	
     

	   $(document).bind("keydown mousedown",enable_scorm);  // pankaj


     // var indexD =1;
     //    console.log('crollHeight :  ', $('#midText').prop('scrollHeight'));

     //     console.log('Height : ', $('#midText').height());

     //    if($('#midText').prop('scrollHeight')>$('#midText').height()) // check scroll
     //    {
     //      fnAddScrollMain();
     //    }


        set_tabindex();
// $(".beginBtn").unbind('click keyup').bind("click keyup",function(ev){
//           if(ev.type=="keyup" && ev.keyCode !=13){
//                 console.log(ev.keyCode)
//                     return  true;
//               }
//         console.log("clicked")
//         $("#midDiv1").css('visibility','visible');
//         $(".beginPage").hide();
//         set_tabindex();
//       });
        
  }); // end document.ready



//#####AMOL#################
  
function AnswerDivFun(e){

console.log("");


        if(e.type=="keyup" && e.keyCode !=13){
                return  true;
          }
      var parentId=$(this).parents('.midDiv').attr('id');
   
    console.log("parent",parentId);

      $( ".textArea" ).each(function(){
            // $(this).parent().find('.bgArrow').css("background-position","20px 0px");         
            // $('.AnswerDiv').find('span').text("Show answer");
      })
      

      if($('#' + parentId + ' .AnswerDiv').children('span').text() == "Hide answer"){
      console.log('just hided');

      }

      if ($(this).parent().find('.textArea').is(':visible')){ 
       
        console.log('hii i m in IFF');


           $(this).parent().find('.textArea').slideUp();
           $(this).find('span').text("Show answer");
      

      }else{
      

        console.log('hii i m in else');

         id = $(this).attr('id');
         indexId = id.match(/\d+/);

         $(this).find('span').text("Hide answer");  
    


        $(this).attr('isSelected','true')
        $(this).parent().find('.textArea').slideDown("fast", function() {
          // Animation complete.
          // $(".nano").nanoScroller({ scroll: 'bottom' });
        });
        $('#' + parentId + ' .wrap' + indexId).css('display','block')
    
        if($('#wrap'+indexId).prop('scrollHeight')>$('#wrap'+indexId).height()) // check scroll
          {
            //fnAddScroll(indexId);
          }

      }


 setTimeout(function(){
         $(".nano").nanoScroller(); 
         $(".nano-pane").show();  

        //  $(".nano").on("update", function(event, values){
        // console.debug( "val ",values );
// });
        },100)

  set_tabindex();   
  } // end AnsDiv fun

  //#####AMOL#################



  function enable_scorm(event){
        $(this).addClass("ontab");
        if(event.type=="mousedown"){

            $(".tabindex").blur();
            $(".tabindex").removeClass("ontab");
        }
        if(event.keyCode==9){

            $(".tabindex").addClass("ontab");
        }
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

    function fnAddScroll(indexId) {
      var myScroll = new IScroll('#wrap' + indexId, {
          scrollbars: true,
          mouseWheel: true,
          interactiveScrollbars: true,
          shrinkScrollbars: 'scale',
          fadeScrollbars: true,
          click: true
      });
    }

// function fnAddScrollMain()
// {
//   var myScroll = new IScroll('#midText', {
//     scrollbars: true,
//     mouseWheel: true,
//     interactiveScrollbars: true,
//     shrinkScrollbars: 'scale',
//     fadeScrollbars: true,
//     click:true
//   });
// }
function fnAddScroll(indexId)
{
	var myScroll = new IScroll('#wrap'+indexId, {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		click:true
	});
}


})(Player = Player || {})
var Player;
