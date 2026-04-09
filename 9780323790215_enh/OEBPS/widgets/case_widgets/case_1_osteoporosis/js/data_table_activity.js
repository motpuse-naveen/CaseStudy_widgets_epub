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
    function buildAccessibleTable(tableData)
    {
        var tableRows = '<table class="testsList"><thead>';
        if (tableData && tableData.length > 0)
        {
            tableRows += '<tr><th scope="col"><span>' + tableData[0].col_first + '</span></th><th scope="col"><span>' + tableData[0].col_second + '</span></th><th scope="col"><span>' + tableData[0].col_third + '</span></th></tr>';
            tableRows += '</thead><tbody>';
            for (var i = 1; i < tableData.length; i++)
            {
                tableRows += '<tr><th scope="row"><span>' + tableData[i].col_first + '</span></th><td><span>' + tableData[i].col_second + '</span></td><td><span>' + tableData[i].col_third + '</span></td></tr>';
            }
        }
        else
        {
            tableRows += '<tr><th scope="col"><span></span></th><th scope="col"><span></span></th><th scope="col"><span></span></th></tr></thead><tbody>';
        }
        tableRows += '</tbody></table>';
        return tableRows;
    }
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
    tableRows1 = buildAccessibleTable(tableData1);
    tableRows1 = tableRows1 + brLine;
    tableRows2 = buildAccessibleTable(tableData2);
    tableRows2 = tableRows2 + brLine;
    tableRows3 = buildAccessibleTable(tableData3);
    tableRows3 = tableRows3 + brLine;
    tableRows4 = buildAccessibleTable(tableData4);
    tableRows4 = tableRows4 + brLine;
    tableRows5 = buildAccessibleTable(tableData5);
    tableRows5 = tableRows5 + brLine;
    tableRows6 = buildAccessibleTable(tableData6);
    tableRows6 = tableRows6 + brLine;
    tableRows7 = buildAccessibleTable(tableData7);
    tableRows7 = tableRows7 + brLine;
    tableRows8 = buildAccessibleTable(tableData8);
    tableRows8 = tableRows8 + brLine;
    tableRows9 = buildAccessibleTable(tableData9);
    tableRows9 = tableRows9 + brLine;
    $('#tableDropdownID').append(dropdownSelect);

    $("#addTable0").append(tableRows1);
    $("#addTable0").removeAttr("tabindex");
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
        $('#addTable' + i + ' thead tr:first-child').addClass("titleTest");
        $('#addTable' + i + ' thead tr:first-child').removeClass("emptyLine");
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