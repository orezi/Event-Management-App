angular.module('eventApp')
  .controller('createeventCtrl', function($scope, $rootScope, UserService, $location) {
	$scope.changeColor = function(elem,elem2) {
		console.log(elem);
		$('md-toolbar.bars').css("background-color", elem);
		$('md-toolbar.bars1').css("background-color", elem2);
		
	};
    
    $scope.createEventPage = function (){
      $location.url('/createevent');
    };

    $("#fileUpload").on('change', function () {
 
        if (typeof (FileReader) != "undefined") {
 
            var image_holder = $("#image-holder");
            image_holder.empty();
 
            var reader = new FileReader();
            reader.onload = function (e) {
                $("<img />", {
                    "src": e.target.result,
                    "class": "thumb-image"
                }).appendTo(image_holder);
 
            }
            image_holder.show();
            reader.readAsDataURL($(this)[0].files[0]);
        } else {
            alert("This browser does not support FileReader.");
        }
    });
 
  	$rootScope.signupCheck = function() {
      if(localStorage.getItem('userToken')) {
        UserService.decodeUser().then(function(res) {
          $scope.userName = res.data.firstname;
          $scope.profilePic = res.data.profilePic || "../../assets/img/icons/default-avatar.png";
          $scope.loggedIn = true;
        });
      }
    };

	$scope.event = {
      title: '',
      description: '',
      venueName: '',
      address1: '',
      address2: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      organizerName : '',
      organizerInfo : '',
      organizerPhonenumber1 : '',
      organizerPhonenumber2 : '',
      organizerTeamMembers : {
        one : {
    	  name : '',
    	  email : '',
    	  role : ''
    	},
    	two : {
		  name : '',
		  email : '',
		  role : ''
	    },
	    three : {
		  name : '',
		  email : '',
		  role : ''
	    }
      },
      categories : [
        "Business",
        "Entertainment",
        "Art",
        "Social",
        "Technology"
      ],
      countries : [
        "Albania",
	      "Andorra",
	      "Armenia",
	      "Austria",
	      "Azerbaijan",
	      "Belarus",
	      "Belgium",
	      "Bosnia & Herzegovina",
	      "Bulgaria",
	      "Croatia",
	      "Cyprus",
	      "Czech Republic",
	      "Denmark",
	      "Estonia",
	      "Finland",
	      "France",
	      "Georgia",
	      "Germany",
	      "Greece",
	      "Hungary",
	      "Iceland",
	      "Ireland",
	      "Italy",
	      "Kosovo",
	      "Latvia",
	      "Liechtenstein",
	      "Lithuania",
	      "Luxembourg",
	      "Macedonia",
	      "Malta",
	      "Moldova",
	      "Monaco",
	      "Montenegro",
	      "Netherlands",
	      "Nigeria",
	      "Norway",
	      "Poland",
	      "Portugal",
	      "Romania",
	      "Russia",
	      "San Marino",
	      "Serbia",
	      "Slovakia",
	      "Slovenia",
	      "Spain",
	      "Sweden",
	      "Switzerland",
	      "Turkey",
	      "Ukraine",
	      "United Kingdom",
	      "Vatican City"
    ],
  };
})