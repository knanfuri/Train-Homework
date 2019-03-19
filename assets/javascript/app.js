$(document).ready(function(){

    // captureFormFields();
	// initialDatabasePull();
	// setInterval(function() {initialDatabasePull()}, 60000);
	// updateCurrentTime();
	// setInterval(function() {updateCurrentTime()}, 1000);




var config = {
    apiKey: "AIzaSyD_ulJe5TDtWqb-J9ia8MFi-CPQCJ6qf2I",
    authDomain: "train-tracker-80395.firebaseapp.com",
    databaseURL: "https://train-tracker-80395.firebaseio.com",
    projectId: "train-tracker-80395",
    storageBucket: "train-tracker-80395.appspot.com",
    messagingSenderId: "798143193575"
  };
  firebase.initializeApp(config);

//   $("#time").on("click", function(){
//     // console.log("clicked");
//       var currentTime = Date.now();

//     var ref =firebase.database().ref("Train").update({
//         [currentTime]: true
//     })
//   })

//  $("#time").on("click", function(){
//      console.log("clicked");
//  })
 

  $("#time").on("click", function() {
    console.log("Clicked");
    // $("#train-departure").append('<td>' + train-departure + '</td>');
    // console.log(train-departure);
    // $("#frequency").append('<td>' + trainFrequency + '</td>');
    // $("#platform").append('<td>' + trainFrequency + '</td>');
 
    // console.log("Hello i am working");

   
  



var tFrequency = 15;


	
	});

// // Time is 3:30 AM
var firstTime = "03:30";

// // First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment("03:30", "HH:mm");
// // console.log('firstTimeConverted', firstTimeConverted);

// // var firstTimeConverted = moment(firstTime).format("hh:mm")
// // console.log('firstTimeConverted', firstTimeConverted);

// // // Current Time
var currentTime = moment().format("hh:mm");
// console.log("CURRENT TIME: " + currentTime);

// // // // Difference between the times
// // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
// // console.log("DIFFERENCE IN TIME: " + diffTime);

// // // // // Time apart (remainder)
// // // // 7 / 3  = 2.333333

// // // // 7 % 3 = 1

// // var tRemainder = diffTime % tFrequency;
// // console.log("Our remainder!!", tRemainder);

// // // // // Minute Until Train
// // var tMinutesTillTrain = tFrequency - tRemainder;
// // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// var view = {


//     updateTrainScheduleTable: () => {

// 		convertFrequency();

// 		$('#train-schedule-body').append(
// 			'<tr>'+
// 				'<th scope="row">' + trainNumber + '</th>' +
// 				'<td>' + trainLine + '</td>' +
// 				'<td>' + trainDestination + '</td>' +
// 				'<td>' + nextTrain + '</td>' +
// 				'<td>' + minutesAway + '</td>' +
// 				'<td>' + trainFrequency + '</td>' +
// 				'<td>' + trainPlatform + '</td>' +
// 			'</tr>'
// 			);
// 	},
// 	updateCurrentTime: () => {
// 		$('.currentTime').text(moment().format('h:mm:ss A'))
// 	}





		

// 	},
});

