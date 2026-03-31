function closeDropdown($dropdown, focusTrigger) {
    $dropdown.removeClass('open').attr('aria-expanded', 'false');
    $dropdown.find('.option').removeClass('activeOption');
    if (focusTrigger === true) {
        $dropdown.focus();
    }
}

function openDropdown($dropdown) {
    $('.dropdown.open').not($dropdown).each(function() {
        closeDropdown($(this), false);
    });
    $dropdown.addClass('open').attr('aria-expanded', 'true');
    var $selected = $dropdown.find('.option.selected').first();
    if ($selected.length > 0) {
        $dropdown.find('.option').removeClass('activeOption');
        $selected.addClass('activeOption');
        $dropdown.attr('aria-activedescendant', $selected.attr('id'));
    }
}

function selectOption($option) {
    var $dropdown = $option.closest('.dropdown');
    $dropdown.find('.option.selected').removeClass('selected').attr('aria-selected', 'false');
    $option.addClass('selected').attr('aria-selected', 'true');
    var text = $option.data('display-text') || $option.text();
    $dropdown.find('.current').text(text);
    $dropdown.attr('aria-activedescendant', $option.attr('id'));
    $dropdown.prev('select').val($option.data('value')).trigger('change');
}

function getActiveOption($dropdown) {
    var activeId = $dropdown.attr('aria-activedescendant');
    if (activeId) {
        var $active = $('#' + activeId);
        if ($active.length > 0) {
            return $active;
        }
    }
    var $selected = $dropdown.find('.option.selected').first();
    return $selected.length > 0 ? $selected : $dropdown.find('.option').first();
}

function create_custom_dropdowns() {
    $('select').each(function(i, select) {
        var $select = $(select);
        if ($select.next().hasClass('dropdown')) {
            return;
        }

        var selectId = $select.attr('id') || ('dropdown_select_' + i);
        var listId = selectId + '_listbox';
        var currentId = selectId + '_current';
        var labelledBy = 'tableDropdownLabel ' + currentId;
        var classes = ($select.attr('class') || '') + ' tabindex';

        $select.after('<div class="dropdown ' + classes + '" role="combobox" aria-expanded="false" aria-controls="' + listId + '" aria-activedescendant="" aria-haspopup="listbox" aria-labelledby="' + labelledBy + '" tabindex="0"><span class="current" id="' + currentId + '"></span><div id="' + listId + '" class="list" role="listbox"><ul></ul></div></div>');

        var $dropdown = $select.next();
        var $options = $select.find('option');
        var $selected = $select.find('option:selected');
        if ($selected.length === 0) {
            $selected = $options.first();
        }

        $dropdown.find('.current').html($selected.data('display-text') || $selected.text());

        $options.each(function(j, o) {
            var $o = $(o);
            var optionId = listId + '_option_' + j;
            var display = $o.data('display-text') || '';
            var isSelected = $o.is(':selected');
            $dropdown.find('ul').append('<li id="' + optionId + '" class="option ' + (isSelected ? 'selected' : '') + '" role="option" aria-selected="' + (isSelected ? 'true' : 'false') + '" data-value="' + $o.val() + '" data-display-text="' + display + '">' + $o.text() + '</li>');
        });

        var $selectedOption = $dropdown.find('.option.selected').first();
        if ($selectedOption.length > 0) {
            $dropdown.attr('aria-activedescendant', $selectedOption.attr('id'));
        }
    });
}

$(document).on('click', '.dropdown', function(event) {
    if ($(event.target).closest('.option').length > 0) {
        return;
    }
    var $dropdown = $(this);
    if ($dropdown.hasClass('open')) {
        closeDropdown($dropdown, false);
    } else {
        openDropdown($dropdown);
    }
});

$(document).on('click', function(event) {
    if ($(event.target).closest('.dropdown').length === 0) {
        $('.dropdown.open').each(function() {
            closeDropdown($(this), false);
        });
    }
});

$(document).on('click', '.dropdown .option', function() {
    selectOption($(this));
    closeDropdown($(this).closest('.dropdown'), true);
});

$(document).on('keydown', '.dropdown', function(event) {
    var keyCode = event.keyCode;
    var $dropdown = $(this);
    var isOpen = $dropdown.hasClass('open');
    var $options = $dropdown.find('.option');
    if ($options.length === 0) {
        return true;
    }

    if (keyCode === 13 || keyCode === 32) {
        event.preventDefault();
        if (!isOpen) {
            openDropdown($dropdown);
            return false;
        }
        selectOption(getActiveOption($dropdown));
        closeDropdown($dropdown, true);
        return false;
    }

    if (keyCode === 40 || keyCode === 38) {
        event.preventDefault();
        if (!isOpen) {
            openDropdown($dropdown);
            return false;
        }

        var $active = getActiveOption($dropdown);
        var activeIndex = $options.index($active);
        if (activeIndex < 0) {
            activeIndex = 0;
        }
        var nextIndex = keyCode === 40 ? Math.min(activeIndex + 1, $options.length - 1) : Math.max(activeIndex - 1, 0);
        var $next = $options.eq(nextIndex);

        $options.removeClass('activeOption');
        $next.addClass('activeOption');
        $dropdown.attr('aria-activedescendant', $next.attr('id'));
        return false;
    }

    if (keyCode === 27) {
        if (isOpen) {
            event.preventDefault();
            closeDropdown($dropdown, true);
            return false;
        }
    }

    if (keyCode === 9 && isOpen) {
        closeDropdown($dropdown, false);
    }

    return true;
});