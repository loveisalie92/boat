
var Display = Display || {};

Display.checkedNoteCount = 0;

//On click document
Display.onClickDocument = function (event) {
	if(!$(event.target).closest('.advanceSearch').length && $(event.target).attr('id')!= 'search' ) {
		        	$('.advanceSearch').css('visibility', 'hidden');
    }

    if(!$(event.target).closest('.noteForm').length && $(event.target).attr('id')!= 'addNote' ) {
    	Display.hideAddNoteForm();
    }

    if(!$(event.target).closest('.note').length && $(event.target).attr('class')!= 'note' && !$(event.target).closest('.controlBar').length) {
    	Display.uncheckAllNote();
    }

    if(!$(event.target).closest('.leftBar').length && $('body').hasClass('leftBarOut') && $(event.target).attr('id') != "menu") {
    	Display.hideLeftBar();
    }
}
// Add note form events
Display.showAddNoteForm =function () {
	$('.addNoteWrapper').fadeOut(0);
	$('.noteForm').fadeIn();
}

Display.hideAddNoteForm = function () {
	$('.noteForm').fadeOut(0);
	$('.addNoteWrapper').fadeIn();
}
Display.removeOptionComponent = function (selector) {
	$(selector).css('display', 'none');
};

Display.checkedColor = function (dom) {
	$('.colorGroup button').html('');
	$(dom).html('<span class="glyphicon glyphicon-ok"></span>');
};

Display.showAdvanceSearchBar = function () {
	$('.advanceSearch').css('visibility', 'visible');
}

Display.showColorPicker = function (dom) {
	// console.log($(dom).closest('form').find('.colorPicker'));
	$(dom).closest('form').find('.colorPicker').css('display', 'block');
};

Display.showReminderPicker = function (dom) {
	$(dom).closest('form').find('.reminderPicker').css('display', 'block');
}

// Show and hide left bar
Display.showLeftBar = function () {
	if (!$('body').hasClass('leftBarOut')) {
		$('.leftBar').animate({
		left:15
		}, 100);
		$('body').addClass('leftBarOut');
	} else {
		Display.hideLeftBar();
	}
}

Display.hideLeftBar = function () {
	$('body').removeClass('leftBarOut');
	$('.leftBar').animate({
		left:-284
	}, 100);
}

// Show the group childs at left bar

Display.showChild =  function (dom) {
	var display = $(dom).attr('data-show');
	console.log(display);
	// $('.groupChild').attr('data-show', '1');
	if(display=='0') {
		$(dom).fadeIn(150);
		$(dom).attr('data-show', '1');
	} else {
		$(dom).fadeOut(150);
		$(dom).attr('data-show', '0');
	}
};

// Some display event for hover notes
Display.onHoverNote =  function (dom) {
	$(dom).find('.check').css('visibility', 'visible');
	$(dom).find('.noteAction').css('visibility', 'visible');
}

Display.onLoseFocusNote = function (dom) {
	// $(dom).find('.check').css('visibility', 'hidden');
	$(dom).find('.noteAction').css('visibility', 'hidden');
}
var NoteForm = NoteForm || {};

Display.showColorPicker = function (dom) {
	// console.log($(dom).closest('form').find('.colorPicker'));
	$(dom).closest('form').find('.colorPicker').css('display', 'block');
};



// Show and Hide the control bar when check notes
Display.showControlBar = function () {
	$('.controlBar').css('visibility', 'visible');
	$('.menubar').css('background-color', '#737575');
}

Display.hideControlBar = function () {
	$('.controlBar').css('visibility', 'hidden');
	$('.menubar').css('background-color', '#FAC248');
}

// Check notes events
Display.onCheckedNote = function (dom) {
	// console.log('haha');
	// console.log($(dom).closest('.note'));
	var note = $(dom).closest('.note');
	var onmouseoutEvent = note.attr('onmouseout');
	console.log(onmouseoutEvent);
	if (!note.hasClass('checked')) {
		Display.checkNote(note);
		Display.showControlBar();
		Display.checkedNoteCount++;
	} else {
		Display.unCheckNote(note);
		if (--Display.checkedNoteCount == 0) {
			Display.hideControlBar();
		}
	}
}

Display.unCheckNote = function (dom) {
	$(dom).removeClass('checked');
	$(dom).css('border', 'none');
	$(dom).find('.check').css('background-color', '#fff');
}

Display.checkNote = function (dom) {
	$(dom).addClass('checked');
	$(dom).css('border', '4px solid #737575');
	// note.css('box-shadow', 'none');
	$(dom).find('.check').css('background-color', '#737575');
}

Display.uncheckAllNote = function () {
	$('.note').removeClass('checked');
	$('.note').css('border', 'none');
	$('.note').find('.check').css('background-color', '#fff');
	Display.checkedNoteCount = 0;
	Display.hideControlBar();
}

