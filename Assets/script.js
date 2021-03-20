$('.saveBtn').on('click' , function (event) {
    var value = $(event.currentTarget).siblings('.description').val();
    console.log(event)
    console.log(event.target)
    console.log($(event.target).siblings())
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, value);
    console.log(time); 
    console.log(value);
});

$('#7 .description').val(localStorage.getItem('7'));
$('#8 .description').val(localStorage.getItem('8'));
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));
$('#18 .description').val(localStorage.getItem('18'));
$('#19 .description').val(localStorage.getItem('19'));
