// Include current time and Date in Header
$("#currentDay").html(moment().format("dddd, MMMM Do YYYY"));

// Apply colour coordination to each hour with updateTime function
var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updateTime();

// User input saved to localStorage
$(".saveBtn").on("click", function() {
    var timeOfdayClicked = $(this).parent().attr("id");
    var id = $(this)[0].previousElementSibling["id"];
    var textContent = $("input#"+id).val();
    localStorage.setItem(timeOfdayClicked, textContent);
});

// adding the user's input from local storage to the Input field in each row
  $("#9am").children("input").val(localStorage.getItem("9am"));
  $("#10am").children("input").val(localStorage.getItem("10am"));
  $("#11am").children("input").val(localStorage.getItem("11am"));
  $("#12pm").children("input").val(localStorage.getItem("12pm"));
  $("#1pm").children("input").val(localStorage.getItem("1pm"));
  $("#2pm").children("input").val(localStorage.getItem("2pm"));
  $("#3pm").children("input").val(localStorage.getItem("3pm"));
  $("#4pm").children("input").val(localStorage.getItem("4pm"));
  $("#5pm").children("input").val(localStorage.getItem("5pm"));

  // Background updates according to the time from Moment Timer
function updateTime() {
    var currentTime = moment().format('H');
    for(var i = 0; i < timeOfday.length; i++) {
      if (parseInt(timeOfday[i]) > currentTime) {
        $("#" + timeOfday[i]).toggleClass("future");
      }
      else if (parseInt(timeOfday[i]) < currentTime) {
        $("#" + timeOfday[i]).toggleClass("past");
      }
      else if (parseInt(timeOfday[i]) == currentTime) {
        $("#" + timeOfday[i]).toggleClass("present");
      }
    }
  }

// Clear Local storage of input data and clear Input value when clear button is clicked
$("#clear").on("click", function() {
    localStorage.clear();
    $("input").each(function(){
        $(".row").children("input").val("")
      }); 
});