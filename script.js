// display current day in planner w/ ID 
function getHeaderDate() {
    var currentDate = moment.js().format('dddd MMMM DD[,] YYYY');
$("#currentDay").text(currentDate); 
};

// func to get header for current date 
var today = new Date();
var currentTime = today.getHours();

var update = setInterval( function(){
    date = moment(new Date());
    $("#current-time").text((moment().format('h:mm a')));

}, 1000)
setInterval(update, 1000);
//func to save date to local storage 
var userInputField = $("#dataTime")
renderLastSaved();

//function to display any data stored 
// saves data to localStorage
function saveReminders() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}
// sets any data in localStorage to the view
function displayReminders() {
    myDay.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}
// sets any existing localStorage data to the view if it exists
function init() {
    var storedDay = JSON.parse(localStorage.getItem("myDay"));
    if (storedDay) {
        myDay = storedDay;
    }
    saveReminders();
    displayReminders();
}
// creates schdeduler data
   var hourPlan = $("<div>")
   .attr({
       "class": "col-md-9 description p-0"
   });
var planData = $("<textarea>");
hourPlan.append(planData);
planData.attr("id", thisHour.id);
if (thisHour.time < moment().format("HH")) {
   planData.attr ({
       "class": "past", 
   })
} else if (thisHour.time === moment().format("HH")) {
   planData.attr({
       "class": "present"
   })
} else if (thisHour.time > moment().format("HH")) {
   planData.attr({
       "class": "future"
   })
}


//save btn 
var saveButton = $("<i class='far fa-save fa-lg'></i>")
var savePlan = $("<button>")
    .attr({
        "class": "col-md-1 saveBtn"
});
savePlan.append(saveButton);
hourRow.append(hourField, hourPlan, savePlan);

// loads any existing localstorage data after components created
init();
// saves data to be used in localStorage
$(".saveBtn").on("click", function(){
    // set a variable to get values from text area and times
    var value = $(this).siblings(".reservation").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,value);

    localStorage.setItem(time, value);
});
// load any existing local storage after init 



