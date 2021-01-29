// display current day in planner w/ ID 
var time = moment();
$("#currentDay").text("Today is " + (moment().format('dddd, MMMM Do YYYY')));

// selectors for each column 
$("#hr-7 .reservation").val(localStorage.getItem("hr-7"));
$("#hr-8 .reservation").val(localStorage.getItem("hr-8"));
$("#hr-9 .reservation").val(localStorage.getItem("hr-9"));
$("#hr-10 .reservation").val(localStorage.getItem("hr-10"));
$("#hr-11 .reservation").val(localStorage.getItem("hr-11"));
$("#hr-12 .reservation").val(localStorage.getItem("hr-12"));
$("#hr-13 .reservation").val(localStorage.getItem("hr-13"));
$("#hr-14 .reservation").val(localStorage.getItem("hr-14"));
$("#hr-15 .reservation").val(localStorage.getItem("hr-15"));
$("#hr-16 .reservation").val(localStorage.getItem("hr-16"));
$("#hr-17 .reservation").val(localStorage.getItem("hr-17"));
$("#hr-18 .reservation").val(localStorage.getItem("hr-18"));
$("#hr-19 .reservation").val(localStorage.getItem("hr-19"));

// saves data to be used in localStorage
$(".saveBtn").on("click", function(){
    // set a variable to get values from text area and times
    var value = $(this).siblings(".reservation").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,value);

    localStorage.setItem(time, value);
});
// load any existing local storage after init 
const EXPIRE_TIME = 1000*60*1440;
localStorage.setItem('storedData', JSON.stringify({
  time: new Date(),
  data: ""
}));

// start the time out

setTimeout(function() {
    localStorage.removeItem('storedData');
}, EXPIRE_TIME);
function pastPresentFuture() {
    hour = time.hours();
    $(".reservation").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();

