 var express = require('express');
 var UserController = require('../controllers/user.controller');
 var VolunteerController = require('../controllers/volunteer.controller');
 var volunteerCtrl = new VolunteerController();
 var userCtrl = new UserController();
 var router = express.Router();

 module.exports = function(app) {

   router.route('/task/:task_id/volunteers')
     //Register user as volunteer for task
     .post(userCtrl.verifyToken, volunteerCtrl.volunteerForTask)
     //Get list of users who volunteered for a task
     .get(userCtrl.verifyToken, volunteerCtrl.getTaskVolunteers);

   router.route('/task/:task_id/volunteers/:volunteer_id')
     //Accept user as volunteer for task
     .post(userCtrl.verifyToken, volunteerCtrl.addVolunteerToTask)
     //Delete volunteer from task
     .delete(userCtrl.verifyToken, volunteerCtrl.removeVolunteerFromTask);

   router.route('/task/:task_id/volunteers/:volunteer_id/schedules')
     //Add schedule to volunteer
     .post(userCtrl.verifyToken, volunteerCtrl.addSchedule);

   router.route('/task/volunteers/:volunteer_id/schedules/:schedule_id')
     //Edit schedule details
     .put(userCtrl.verifyToken, volunteerCtrl.editSchedule)
     //Delete schedule
     .delete(userCtrl.verifyToken, volunteerCtrl.deleteSchedule);

   router.route('/event/:event_id/volunteers')
     //Get list of volunteers added to an event
     .get(userCtrl.verifyToken, volunteerCtrl.getEventVolunteers);

   app.use('/api', router);
 }
