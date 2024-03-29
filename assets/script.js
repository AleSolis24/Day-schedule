$(document).ready(function () {
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        var time = $(this).siblings('.description').val();
        var day = $(this).parent().attr('id');


        console.log(time, day);
    
        localStorage.setItem(day, time);
    });
    
    function updateHours() {
        const todayHours = dayjs().hour();

        for (let i = 9; i <= 17; i++) {
            const blockTime = $(`#hour-${i}`);

            blockTime.removeClass('past present future');

            if (i < todayHours) {
                blockTime.addClass('past');
            } else if (i === todayHours) {
                blockTime.addClass('present');
            } else {
                blockTime.addClass('future');
            }
        }
    }
    // calls this function to update hours
    updateHours();

    setInterval(updateHours, 15000);

    
    for (let i = 9; i <= 17; i++) {
        $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
    }

    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});

