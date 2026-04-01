$(document).ready(function()
{
    var tableRows1 = "";
    var tableRows2 = "";
    var tableRows3 = "";
    var tableRows4 = "";
    var tableRows5 = "";
    var tableRows6 = "";
    var tableRows7 = "";
    var tableRows8 = "";
    var tableRows9 = "";
    var quesRows = '';
    var quesList = '';
    var dropdownOptions = '';
    var dropdownSelect = '';
    var brLine = '<br/><br/><br/><div id="scroller"></div>'
    var quesList = testCasesdata[0].quesRow; // get dropdown list
    var tableData1 = testCasesdata[0].caseData1; // get case study
    var tableData2 = testCasesdata[0].caseData2; // get case study
    var tableData3 = testCasesdata[0].caseData3; // get case study
    var tableData4 = testCasesdata[0].caseData4; // get case study
    var tableData5 = testCasesdata[0].caseData5; // get case study
    var tableData6 = testCasesdata[0].caseData6; // get case study
    var tableData7 = testCasesdata[0].caseData7; // get case study
    var tableData8 = testCasesdata[0].caseData8; // get case study
    var tableData9 = testCasesdata[0].caseData9; // get case study
    // drop down
    dropdownSelect = '<select id="dropdown_1" class="dropdownList noIndx">'
    for (var j = 0; j < quesList[0].quesDropOptions.length; j++)
    {
        var disabledSel = "disabled";
        dropdownOptions += '<option class="tabindex" data-index="' + j + '"' + ' value="' + quesList[0].quesDropOptions[j] + '">' + quesList[0].quesDropOptions[j] + '</option>';
    }
    dropdownSelect = dropdownSelect + dropdownOptions;
    dropdownSelect = dropdownSelect + '</select>';
    // add DROPDOWN end-------------------------------------------------------------	
    // 1st row
    tableRows1 = tableRows1 + '<table class="testsList">';
    for (var i = 0; i < tableData1.length; i++)
    {
        tableRows1 = tableRows1 + "<tr><td><span>" + tableData1[i].col_first + "</span></td><td><span>" + tableData1[i].col_second + "</span></td><td><span>" + tableData1[i].col_third + "</span></td></tr>";
    }
    tableRows1 = tableRows1 + '</table>';
    tableRows1 = tableRows1 + brLine;
    // 2st row
    tableRows2 = tableRows2 + '<table class="testsList">';
    for (var i = 0; i < tableData2.length; i++)
    {
        tableRows2 = tableRows2 + "<tr><td><span>" + tableData2[i].col_first + "</span></td><td><span>" + tableData2[i].col_second + "</span></td><td><span>" + tableData2[i].col_third + "</span></td></tr>";
    }
    tableRows2 = tableRows2 + '</table>';
    tableRows2 = tableRows2 + brLine;
    // 2st row
    tableRows3 = tableRows3 + '<table class="testsList">';
    for (var i = 0; i < tableData3.length; i++)
    {
        tableRows3 = tableRows3 + "<tr><td><span>" + tableData3[i].col_first + "</span></td><td><span>" + tableData3[i].col_second + "</span></td><td><span>" + tableData3[i].col_third + "</span></td></tr>";
    }
    tableRows3 = tableRows3 + '</table>';
    tableRows3 = tableRows3 + brLine;
    // 2st row
    tableRows4 = tableRows4 + '<table class="testsList">';
    for (var i = 0; i < tableData4.length; i++)
    {
        tableRows4 = tableRows4 + "<tr><td><span>" + tableData4[i].col_first + "</span></td><td><span>" + tableData4[i].col_second + "</span></td><td><span>" + tableData4[i].col_third + "</span></td></tr>";
    }
    tableRows4 = tableRows4 + '</table>';
    tableRows4 = tableRows4 + brLine;
    // 2st row
    tableRows5 = tableRows5 + '<table class="testsList">';
    for (var i = 0; i < tableData5.length; i++)
    {
        tableRows5 = tableRows5 + "<tr><td><span>" + tableData5[i].col_first + "</span></td><td><span>" + tableData5[i].col_second + "</span></td><td><span>" + tableData5[i].col_third + "</span></td></tr>";
    }
    tableRows5 = tableRows5 + '</table>';
    tableRows5 = tableRows5 + brLine;
    // 2st row
    tableRows6 = tableRows6 + '<table class="testsList">';
    for (var i = 0; i < tableData6.length; i++)
    {
        tableRows6 = tableRows6 + "<tr><td><span>" + tableData6[i].col_first + "</span></td><td><span>" + tableData6[i].col_second + "</span></td><td><span>" + tableData6[i].col_third + "</span></td></tr>";
    }
    tableRows6 = tableRows6 + '</table>';
    tableRows6 = tableRows6 + brLine;
    // 2st row
    tableRows7 = tableRows7 + '<table class="testsList">';
    for (var i = 0; i < tableData7.length; i++)
    {
        tableRows7 = tableRows7 + "<tr><td><span>" + tableData7[i].col_first + "</span></td><td><span>" + tableData7[i].col_second + "</span></td><td><span>" + tableData7[i].col_third + "</span></td></tr>";
    }
    tableRows7 = tableRows7 + '</table>';
    tableRows7 = tableRows7 + brLine;
    // 2st row
    tableRows8 = tableRows8 + '<table class="testsList">';
    for (var i = 0; i < tableData8.length; i++)
    {
        tableRows8 = tableRows8 + "<tr><td><span>" + tableData8[i].col_first + "</span></td><td><span>" + tableData8[i].col_second + "</span></td><td><span>" + tableData8[i].col_third + "</span></td></tr>";
    }
    tableRows8 = tableRows8 + '</table>';
    tableRows8 = tableRows8 + brLine;
    // 2st row
    tableRows9 = tableRows9 + '<table class="testsList">';
    for (var i = 0; i < tableData9.length; i++)
    {
        tableRows9 = tableRows9 + "<tr><td><span>" + tableData9[i].col_first + "</span></td><td><span>" + tableData9[i].col_second + "</span></td><td><span>" + tableData9[i].col_third + "</span></td></tr>";
    }
    tableRows9 = tableRows9 + '</table>';
    tableRows9 = tableRows9 + brLine;
    $('#tableDropdownID').append(dropdownSelect);
    $("#addTable0").append(tableRows1);
    $("#addTable1").append(tableRows2);
    $("#addTable2").append(tableRows3);
    $("#addTable3").append(tableRows4);
    $("#addTable4").append(tableRows5);
    $("#addTable5").append(tableRows6);
    $("#addTable6").append(tableRows7);
    $("#addTable7").append(tableRows8);
    $("#addTable8").append(tableRows9);
    // $("#addTable2").append(tableRows);
    create_custom_dropdowns();
    $('#dropdown_1').addClass('native-select-hidden').attr('aria-hidden', 'true').attr('tabindex', '-1');
    var rowIndex = 0;
    $('.tablepatch .list li').each(function()
    {
        $(this).attr('data-id', rowIndex);
        rowIndex++;
    });
    function updateReferenceTable(data_id)
    {
        $('.testContainer').hide();
        $('#testListId' + data_id).show();
        if ($('#testListId' + data_id).height() < $('#addTable' + data_id + ' table').height())
        {
            $(".nano").nanoScroller();
            $(".nano-pane").show();
        }
        else
        {
            $(".nano-pane").hide();
        }
    }

    // click selection from pointer interaction on the custom list
    $(document).on('click', '.dropdown .option', function()
    {
        updateReferenceTable($(this).attr('data-id'));
    });

    // change selection from keyboard interaction through the combobox logic
    $(document).on('change', '#dropdown_1', function()
    {
        var selectedIndex = this.selectedIndex;
        if (selectedIndex < 0)
        {
            return;
        }
        updateReferenceTable(selectedIndex);
    });
    $('#addTable5  .nano-pane').css("display", "none !important");
    // $("#addTable2").append(tableRows);
    for (var i = 0; i <= 9; i++)
    {
        $('#addTable' + i + ' td:first-child').each(function()
        {
            if ($(this).text() != '')
            {
                $(this).parent().addClass("emptyLine");
            }
        });
        $('#addTable' + i + ' tr:first-child').addClass("titleTest");
        $('#addTable' + i + ' tr:first-child').removeClass("emptyLine");
    }
    $('.testsList span').each(function()
    {
        if ($(this).text() != '')
        {
            //$(this).addClass('tabindex');
        }
    });
    $('.testsList').attr("role","table");
});