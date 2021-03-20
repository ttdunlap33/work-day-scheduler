$('.saveBtn').on('click', function (event) {
    var value = $(event.currentTarget).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, value);
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

$('#currentDay').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY'));

function updateHours() {
    $('.time-block').each(function () {
        var hour = $(this).attr('id');
        var currentHour = moment().hour()
        console.log(currentHour)
        console.log(hour)
        if (+hour < currentHour) {
            $(this).addClass('past');

        } else if (+hour === currentHour) {
            $(this).addClass('present');
        } else {
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    }
    )
}
updateHours();
