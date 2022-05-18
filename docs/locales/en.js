export default {
    promoNote: 'Lightweight, fast, customizable datepicker written in pure JavaScript without any dependencies',
    promoNote2: '{airDatepicker} - is a modern JavaScript calendar written on ES6 with the use of CSS native variables. It weights only ~ {size} (minified + gzip). It works in every modern browser which has support of CSS native variables. It\'s easy to customize, supports keyboard navigation, has big amount of options and convenient API.',
    promoNote3: 'Because of Air Datepicker written in pure JavaScript it can be integrated in any modern framework - whether it\'s Angular or React.',
    installTitle: 'Installation',
    usageTitle: 'Usage',
    usageNote: 'You can initialize the calendar both on a text field and on a block or inline element',

    navExamples: 'Examples',
    example: 'Example',
    navDoc: 'Documentation',
    navApi: 'API',

    chooseDate: 'Choose date',
    chosenDate: `You've chosen {date}`,
    inSection: 'section',
    inDocsSection: 'documentation section',
    possibleSymbols: 'Possible symbols:',
    searchPlaceholder: 'Search',
    notFound: 'Nothing was found',
    fromDatePlaceholder: 'Minimum date',
    toDatePlaceholder: 'Maximum date',
    kilobyte: 'kb',
    mainAxis: 'main axis',
    secondaryAxis: 'secondary axis',
    showMeAnimation: 'Show me the animation! ✨',
    asModal: 'Calendar as a modal window',

    examplesNote: 'On this page you could find a little examples of how Air Datepicker works and on what it capable of.',
    exampleBasicTitle: 'Basic examples',
    exampleBasicDefaultsTitle: 'With default options',
    exampleBasicInlineTitle: 'Static calendar',
    exampleBasicInlineNote: 'If you want calendar to be always visible it should be initialized on block or inline element or just pass option {param}',
    exampleBasicSelectedDatesTitle: 'Select date on initialization',
    exampleBasicSelectedDatesNote: 'For selecting initial date use option {optsName}. It accepts array of Dates, strings or numbers. You can read more about this option in {docsLink}. Lets choose today date.',
    exampleBasicMonthViewTitle: 'Month selection',
    exampleBasicMonthViewNote: 'For choosing only month without any certain date you could use combination of two options {viewOpt} and {minViewOpt} - with first option we setting up current view of calendar and with second we set minimal possible view.',
    exampleBasicMobileTitle: 'Mobile devices mode',
    exampleBasicMobileNote: 'Air Datepicker has a mode that allows you to open the calendar as a modal window - in this mode it appears in the center of the screen in slightly enlarged sizes to facilitate date selection.',

    exampleRangeTitle: 'Range of dates',
    exampleRangeNote: 'For choosing range of dates use parameter {param}. After selecting both dates you could correct them by dragging active dates.',
    exampleRangeMinMaxTitle: 'Minimum and maximum dates',
    exampleRangeMinMaxNote: 'For manipulation with minimum and maximum possible dates use options {minDate} and {maxDate}. In combination with {update} function you could implement limited date range that user could choose.',
    exampleTimeTitle: 'Timepicker',
    exampleTimeNote: 'Pass {param} to be able to pick time. By default the user\'s time is set. Start datetime value could be configured with parameter {startDate}.',
    exampleTimeTitleFormat: 'Time format',
    exampleTimeFormatNote: 'Time format is set in localization object or in option {paramName}. To display time in 12-hours format use {hSym} or {hhSym} tokens. To display day period use {dateFormataa} or {dateFormatAA}',
    exampleTimeRangeTitle: 'Minutes and hours settings',
    exampleTimeRangeNote: 'Time is configured by several options: {commonOptions}. You could also set step of time slider with {stepOptions}.',
    exampleTimeRangeNote2: 'Let\'s try to limit time by interval from {from} to {to} hours and set minute step by {step}.',
    exampleCellContentTitle: 'Cells content',
    exampleCellContentNote: 'Air Datepicker allows you to change cells content anyway you want. Content, classes and status (active/disabled) are controlled by option {param}.',
    exampleCellContentNote_2: 'In the next example let change cells content for dates from array to random emoji, and change active background color for such cells.',
    exampleTitlesTitle: 'Formatting title',
    exampleTitlesNote: 'In Air Datepicker you could change titles in calendar\'s navigation. You could use both static variant and dynamic - just pass a callback function to corresponding option. You could use both html tags and a special tokens to format date',
    exampleTitlesBasic: 'Static title',
    exampleTitlesCustomTitle: 'Dynamic title',
    exampleButtonsTitle: 'Adding buttons',
    exampleButtonsNote: 'To make it easier to select a specific date, or to clear the selected data, you can add buttons to the calendar body. You can add one of the preset buttons or create your own. For more information, see {link}.',
    exampleButtonsBasicTitle: 'Preinstalled buttons',
    exampleButtonsBasicNote: 'To add buttons, use the {optsName} option - it accepts an array of strings or an array of objects with a description of the button.',
    exampleButtonsAdvanceTitle: 'Make your own buttons',
    exampleButtonsAdvanceNote: 'To create your own buttons, you need to pass a structure describing the content of the button and its behavior. Let\'s create a button that turns the timepikcer module on and off:',
    exampleButtonsAdvanceTurnOn: 'Turn ON timepicker',
    exampleButtonsAdvanceTurnOff: 'Turn OFF timepicker',
    examplePositionTitle: 'Positioning',
    examplePositionNote: 'Position of the calendar is set up by {position} option - it can be either a string or a function.',
    examplePositionBasicTitle: 'Basic positioning',
    examplePositionBasicNote: 'The basic positioning is set via the string - {axis}. For example, let us show calendar at the right of the text field:',
    examplePositionPopperTitle: 'Using of Popper.js',
    examplePositionPopperNote1: 'If more complex positioning is required, for example, when you need the calendar to jump to the other side of the text field when scrolling, etc., you can use manual positioning - using the function and third-party libraries',
    examplePositionPopperNote2: 'In the following example, we will process the position using the {popper} library. Try to scroll the page further.',
    examplePositionPopperNote3: 'When using Popper.js, Air Datepicker will automatically rotate the pointer \n in the right direction! 😎',
    examplePositionPopperExampleComment: '/*\n\t\t Return function which will be called when `hide()` method is triggered,\n\t\t it must necessarily call the `done()` function\n \t\t to complete hiding process \n\t\t*/',
    examplePositionAnimeTitle: 'Create show\\hide animation',
    examplePositionAnimeNote1: 'Air Datepicker allows you to add your own hide and show animations. You can also do it yourself or use any library for animations.',
    examplePositionAnimeNote2: 'For the next example, let\'s take the {anime} library and combine it with {popper}',

    docsOptionsTitle: 'Options',
    docsIntro: 'Air Datepicker has a large amount of options, which allows you to customize it to your needs. This page contains all the parameters with a detailed description that the calendar accepts.',
    optsClasses: 'Adds extra classes to the calendar.',
    optsInline: 'Makes the calendar to be permanently visible',
    optsLocale: 'Language of the calendar. Available locales are in {dir}.',
    optsLocale2: 'For more information about the localization structure, see in corresponding {link}.',
    optsStartDate: 'Sets the start view date of calendar. ',
    optsFirstDay: 'The index of the day from which the week begins. Possible values are from 0 (Sunday) to 6 (Saturday). By default, it is taken from the localization, if the value is passed here, it will have a higher priority.',
    optsWeekends: 'Indexes of the days that will be considered a weekend. The {className} class will be added to them. By default, this is Saturday and Sunday.',
    optsIsMobile: 'If {trueField}, then the calendar will appear as a modal window with slightly enlarged dimensions.',
    optsVisible: 'Shows the calendar immediately after initialization.',
    optsDateFormat: 'Date format. Since version 3, the date format is based on the {standardLink} standard. By default, it is taken from the current locale. The value passed here will have a higher priority.',
    optsDateFormatFuncNote: 'You can also pass a function here to manually process the selected dates. It should return a string. If the multi-date selection mode is enabled, array of selected dates will be passed to this function.',
    optsDateFormatsTitle: 'Available tokens:',
    optsDateFormatT: 'time in milliseconds',
    optsDateFormatE: 'the short name of the day of the week, the {fieldName} field from the locale',
    optsDateFormatEEEE: 'the full name of the day of the week, the {fieldName} field from the locale',
    optsDateFormatd: 'day of the month',
    optsDateFormatdd: 'day of the month with leading zero',
    optsDateFormatM: 'number of the month',
    optsDateFormatMM: 'number of the month with leading zero',
    optsDateFormatMMM: 'short name of the month, the {fieldName} field from the locale',
    optsDateFormatMMMM: 'full name of the month, field {fieldName} from the locale',
    optsDateFormatyy: 'two-digit year number',
    optsDateFormatyyyy: 'full year number',
    optsDateFormatyyyy1: 'the first year in current decade',
    optsDateFormatyyyy2: 'the last year in current decade',
    optsAltField: 'An additional text field where the date with the format from the {fieldName} field will be written',
    optsAltFieldDateFormat: 'Date format for alternative field',
    optsToggleSelected: 'If {true}, then clicking on the active cell will remove the selection from it',
    optsKeyboardNav: 'Enables keyboard navigation. It only works if the element on which the calendar is initialized is a text field.',
    optsKeyboardNavListTitle: 'Key combinations:',
    optsKeyboardNavMonthForward: 'next month',
    optsKeyboardNavMonthBackward: 'previous month',
    optsKeyboardNavYearForward: 'next year',
    optsKeyboardNavYearBackward: 'previous year',
    optsKeyboardNavDecadeForward: '10 years forward',
    optsKeyboardNavDecadeBackward: '10 years backward',
    optsKeyboardNavView: 'change calendar view, from dates to decades',
    optsKeyboardNavEsc: 'closes calendar',
    optsSelectedDates: 'Array of active dates. Accepts both separate data types and mixed data types. If an invalid date format is passed, this value will be ignored',
    optsContainer: 'Parent element for the calendar. By default all calendars are placed in element with class name {className}.',
    optsPosition: 'Position of the calendar relative to the text field.',
    optsPosition2: 'If it is a string then the first value is position along the main axis, the second is position along the secondary one. For example, {example} - set the calendar position to the top right of the text field.',
    optsPosition3: 'If you pass the function, you can adjust the position yourself - it will be called when the {show} method is triggered. But in this case, all transitions are disabled and you will have to add them manually if they are required. The function accepts an object from the following fields',
    optsPosition$datepicker: 'calendar element',
    optsPosition$target: 'target element on which calendar is initialized',
    optsPosition$pointer: 'an arrow pointing to the target element',
    optsPositionIsViewChange: 'since the calendar is also positioned during the view change, this field allows you to determine at what point the function is called - when calendar appears or when switching from one view to another',
    optsPositionDone: 'the function that should be called at the end, in case of manual handling of hiding the calendar',
    optsPosition4: 'If manual processing of calendar hiding is required, then you can return the function from {position} - it will be called when {hide} is triggered - upon completion of processing, do not forget to call the {done} function to complete the hiding process.',
    optsPosition5: 'Example of manual positioning:',
    optsOffset: 'The offset from the text field along the main axis.',
    optsView: 'The initial view of the calendar. Possible values:',
    optsViewDays: 'displaying days of one month',
    optsViewMonths: 'displaying months of one yea',
    optsViewYears: 'displaying the years of one decade',
    optsMinView: 'The minimum possible representation of the calendar. It is used, for example, when you need to provide only a choice of the month. The possible values are the same as for {optsName}',
    optsShowOtherMonths: 'If {trueField}, dates from other months will be displayed in days view.',
    optsSelectOtherMonths: 'If {trueField}, it will be possible to select dates from other months.',
    optsMoveToOtherMonthsOnSelect: 'If {trueField}, then selecting dates from another month will be causing transition to this month.',
    optsMinDate: 'The minimum possible date to select.',
    optsMaxDate: 'The maximum possible date to select.',
    optsDisableNavWhenOutOfRange: 'Whether it is necessary to prohibit switching to the next or previous month/year/decade if they go beyond the minimum or maximum dates. ',
    optsDisableNavWhenOutOfRange2: 'If {trueField}, then calendar navigation buttons will be deactivated if such case occurs.',
    optsMultipleDates: 'If {trueField}, then you can select an unlimited number of dates. If you pass a number, the number of selected dates will be limited by it\'s value.',
    optsMultipleDatesSeparator: 'Separator between dates in text field. It is used in the multiple date selection mode and in the range mode.',
    optsRange: 'Provides the ability to select a date range. The value from {fieldName} will be used as the separator.',
    optsDynamicRange: 'If {trueField}, then after selecting dates in range mode, they can be changed by dragging them.',
    optsButtons: 'This option allows you to add action buttons to body of the calendar. You could add two pre installed buttons or create your own.',
    optsButtons2: 'Initially two buttons are available:',
    optsButtonsToday: '"Today" button - clicking on it will perform transition to today date',
    optsButtonsClear: '"Clear" button - clicking on it will clear all selected dates',
    optsButtons3: 'To create your own button you should pass and object of the following type: ',
    optsButtons4: 'Example of custom button',
    optsMonthsField: 'A field from the localization object that will be used to display the names of the month in the {months} view.',
    optsShowEvent: 'DOM event on which calendar will be shown.',
    optsAutoClose: 'If {trueField}, the calendar will be hidden after selecting the date.',
    optsPrevHtml: '"Previous" button content.',
    optsNextHtml: '"Next" button content.',
    optsNavTitles: 'Title templates in the calendar navigation. You can use HTML tags and tokens from {formatDateField}. You can also pass the function as a value - it will receive an instance of the calendar as an argument, and should return a string.',
    optsNavTitles2: 'If a callback function is passed, it will be called every time the view changes, the date is selected, or when switching to another month.',
    optsNavTitles3: 'Default values are:',
    optsNavTitles4: 'Usage:',
    optsTimepicker: 'Turns on timepicker',
    optsDateTimeSeparator: 'Separator between date and time.',
    optsOnlyTimepicker: 'If you need to choose only time, without date.',
    optsTimeFormat: 'Time format. Just like {dateFormatField} relies on {standardLink}. If you pass a 12-hour display format, the time sliders will be automatically adjusted to the corresponding mode.',
    optsTimeFormath: 'hours in 12-hour mode',
    optsTimeFormathh: 'hours in 12-hour mode with leading zero',
    optsTimeFormatH: 'hours in 24-hour mode',
    optsTimeFormatHH: 'hours in 24-hour mode with leading zero',
    optsTimeFormatm: 'minutes',
    optsTimeFormatmm: 'minutes with leading zero',
    optsTimeFormataa: 'day period lower case',
    optsTimeFormatAA: 'day period upper case',
    optsMinHours: 'Minimum possible hours value.',
    optsMaxHours: 'Maximum possible hours value.',
    optsMinMinutes: 'Minimum possible minutes value.',
    optsMaxMinutes: 'Maximum possible minutes value.',
    optsHoursStep: 'Hours step.',
    optsMinutesStep: 'Minutes step.',

    localeTitle: 'Localization',
    localeNote: 'Starting from version 3.0.0, the calendar language must be passed as an object, instead of a string, as it was before. You can pass one of the available localizations or create your own. The available localizations are located in the {dirName} directory',
    localeShapeTitle: 'Example of localization object',

    eventsTitle: 'Events',
    eventsOnSelect: 'Event which is triggered when selecting or deselecting date. It takes object as an argument consist of next fields:',
    eventsOnSelectDate: 'selected date, if multiple date mode is on, then array of dates will be passed.',
    eventsOnSelectFormattedDate: 'formatted selected date, or array in case of multiple dates mode.',
    eventsOnSelectAirDatepicker: 'calendar instance',
    eventsOnChangeViewDate: 'Triggered when navigating back and forth. It takes object as and argument with actual values of month, year and decade',
    eventsOnChangeViewDateMonth: 'month of viewed date',
    eventsOnChangeViewDateYear: 'year of viewed date',
    eventsOnChangeViewDateDecade: 'decade of viewed date. The first element is the start year of decade, the second one - the end of decade.',
    eventsOnChangeView: 'When changing the view, for example, from days to months, this function will be called. The name of the current view will be passed as an argument.',
    eventsOnRenderCell: 'A function that will be called every time a calendar cell is drawn. It is used if you need to customize the cell in some way, change the contents or make it unavailable for selection.',
    eventsOnRenderCell2: 'It takes object as an argument which is describing current cell:',
    eventsOnRenderCellDate: 'date of current cell',
    eventsOnRenderCellCellType: 'cell type - day, month or year',
    eventsOnRenderCellDatepicker: 'calendar instance',
    eventsOnRenderCell3: 'This function must return an object, consist of next fields:',
    eventsOnRenderCellHtml: 'custom cell content',
    eventsOnRenderCellClasses: 'extra classes',
    eventsOnRenderCellDisabled: 'if cell should be disabled',
    eventsOnShow: 'Callback function when the calendar appears. Called at the beginning of the animation, and when the animation has finished.',
    eventsOnShowArg: 'animation completion indicator',
    eventsOnHide: 'Callback function when closing the calendar. Called at the beginning of the hide animation, and when the animation has finished.',
    eventsOnHideArg: 'animation completion indicator',
    eventsOnClickDayName: 'Adds possibility to click on the names of days in calendar. In case callback is passed {className} will be added to those elements',
    eventsOnClickDayNameDayIndex: 'day of week index, where is 0 - Sunday, 6 - Saturday',
    eventsOnClickDayNameDatepicker: 'calendar instance',

    apiMethodsTitle: 'Methods',
    apiPropertiesTitle: 'Properties',
    apiIntro: 'Air Datepicker has a convenient API that gives even more control over the component. The methods are accessed via a reference to the calendar instance:',
    apiShow: 'Shows calendar.',
    apiHide: 'Hides calendar.',
    apiNext: 'Goes to the next month/year/decade.',
    apiPrev: 'Goes to the prev month/hear/decade.',
    apiSelectDate: 'Selects one or several dates if array is passed',
    apiSelectDateDate: 'a date in the {jsDate} format, or a string in ISO format, or a time in milliseconds. If a string or number cannot be converted to a date, this value will be ignored.',
    apiSelectDateUpdateTime: 'if you pass {trueField}, the time from the passed date will be set to the value of the timepicker. By default, {falseField} - when selecting a date, the current time is set.',
    apiSelectDateSilent: 'if {trueField}, then {onSelectLink} will not be called.',
    apiUnselectDate: 'Unselected passed date',
    apiUnselectDateDate: 'date, which should be deleted',
    apiClear: 'Clears all selected dates.',
    apiClearSilent: 'if {trueField}, then {onSelectLink} will not be called.',
    apiFormatDate: 'Formats date in passed format.',
    apiFormatDateFormat: 'date format, accepts tokens from {dateFormat} option. You could see available tokens in {link}',
    apiFormatDateDate: 'date which must be formatted',
    apiDestroy: 'Destroys calendar instance. Remove itself from DOM tree and all events from target element.',
    apiUpdate: 'Updates calendar options. Using this method, you can set new values for the minimum or maximum dates, change the calendar language, etc.',
    apiUpdateNewOpts: 'new calendar options, almost all options that can be passed initially are supported.',
    apiSetCurrentView: 'Sets the new value of the calendar view.',
    apiSetCurrentViewView: 'new view',
    apiSetViewDate: 'Sets a new date for displaying the calendar. It is used when, for example, you need to show some other month without having to select a date.',
    apiSetViewDateDate: 'a new date. If it is not possible to convert a string or a number to a date, the call is ignored.',
    apiSetFocusDate: 'Sets the focus to the cell with the passed date.',
    apiSetFocusDateDate: 'the date to focus on',
    apiSetFocusDateDateViewTransition: 'if {trueField} and the new date is outside the current view date, the new view date will be set.',
    apiUp: 'Switch to the next view type. The view options are in order from days -> months -> years.',
    apiUpDate: 'if a date is passed, the display date will be changed when changing the view.',
    apiDown: 'Switching to the previous view type.',
    api$datepicker: 'DOM element of the calendar',
    apiViewDate: 'Current view date',
    apiCurrentView: 'Current view of the calendar.',
    apiSelectedDates: 'An array of selected dates.',
    apiFocusDate: 'A focused date.',
    apiVisible: 'Is calendar visible'
};
