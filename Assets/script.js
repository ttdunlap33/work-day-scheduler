$('.saveBtn').on('click' , function (event) {
    var value = $(event.target).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, value);
    console.log(time); 
    console.log(value);
});
