
$(document).ready(function() {

	//  Show hide entries
	$('select[name="select_main_table"]').change(function() {
	 	$("#main_table tr").show().slice(this.value).hide();
	}).change();

	//  apply alternate row styles
    oddRows('tbody tr:odd td', 'odd');
	function oddRows(selector, className)
	{
	  $(selector).removeClass(className).addClass(className);
	} 

	//  Search attribute
	function generateSearch(idTable) {
	  $('tr', idTable).each(function() {
	    var filter = '';
	    $('td', this).each(function() {
	      filter = filter + $(this).text().toLowerCase();
	    });

	    $(this).attr('data-search', filter);
	  });
	}

	//  TableFilter classes
	function tableFilter(idTable, idInput) {
	  $(idInput).on('input', function() {
	    $('.filter-style').remove();

	    if (this.value.length > 0) {
	      $('head').append('<style class="filter-style">' + idTable + ' tbody tr:not([data-search *= "' + this.value.toLowerCase() + '"]) {display:none;}</style>');
	    }

	  });
	}


	// Regs
	generateSearch('#main_table');
	tableFilter('#main_table', '#filter')


	// SORT HEADING
	var thIndex = 0,
	    curThIndex = null;

	$(function(){
	  $("table th").addClass("headerSort");
	  $('table th').append('<span class="headerSortUp">' + '</span>');
	  $('table th').append('<span class="headerSortDown">' + '</span>');

	  $('table thead tr th').click(function(){
	    thIndex = $(this).index();
	    if(thIndex != curThIndex){
	      curThIndex = thIndex;
	      sorting = [];
	      tbodyHtml = null;
	      $('table tbody tr').each(function(){
	        sorting.push($(this).children('td').eq(curThIndex).html() + ', ' + $(this).index());
	      });
	      
	      sorting = sorting.sort();
	      sortIt();
	    }
	  });
	})

	function sortIt(){
	  for(var sortingIndex = 0; sortingIndex < sorting.length; sortingIndex++){
	  	rowId = parseInt(sorting[sortingIndex].split(', ')[1]);
	  	tbodyHtml = tbodyHtml + $('table tbody tr').eq(rowId)[0].outerHTML;
	  }
	  $('table tbody').html(tbodyHtml);

	}

});
  

