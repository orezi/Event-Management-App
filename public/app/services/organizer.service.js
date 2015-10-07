angular.module('eventApp')
  .factory('OrganizerService', ['$http', 'Upload', 'baseUrl', function($http, Upload, baseUrl) {
    return {
      createProfile: function(organizer) {
          var token = localStorage.getItem('userToken');

          return  Upload.upload({
            method: "POST",
            url: '/api/organizer?token=' + token,
            file: organizer.newImage,
            fields: organizer
         });          
      },
      editProfile: function(organizer) {
          var token = localStorage.getItem('userToken');

          return  Upload.upload({
              method: "PUT",
              url: '/api/organizer/' + organizer._id + '?token='+ token,
              file: organizer.newImage,
              fields: organizer
            });          
      },
      deleteProfile: function() {
          var token = localStorage.getItem('userToken');
          return $http.delete(baseUrl + "organizer?token=" + token);
      },
      getOrganizer: function(orgId) {
          return $http.get(baseUrl + "/organizer/" + orgId);
      },
      getMyProfile: function(orgId) {
          var token = localStorage.getItem('userToken');
          return $http.get(baseUrl + "/organizer/?token=" + token);
      }
    };
  }]);