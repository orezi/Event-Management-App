  'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  user_ref: {
    type: String,
    ref: 'User'
  },
  description: {
    type: String,
    required: true
  },
  online: {
    type: Boolean,
    default: false
  },
  country: {
    type: String
  },
  venue: {
    type: String
  },
  eventBanner: {
    type: String
  },
  imageUrl: {
    type: String
  },
  eventTheme: {
    type: String,
<<<<<<< HEAD
    default: 'white'
  },
  eventFont: {
    color: {
      type: String,
      default: 'black'
    },
    size: {
      type: Number,
      default: 14
    },
    style: {
      type: String,
      default: 'Courier'
    }
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  feedback: [{
    name: {
      type: String
    },
    email: {
      type: String
    },
    message: {
      type: String
    }
  }],
  tasks: [{
    task_ref: {
      type: String,
      ref: 'Task'
    }
  }]
}, {
=======
<<<<<<< HEAD
>>>>>>> feat(main app): events
    headerColor: String,
    fontColor: String,
    borderColor: String,
    contentColor: String
  },
   startDate: {
     type: Date,
     required: true
   },
   endDate: {
     type: Date,
     required: true
   },
<<<<<<< HEAD
=======
=======
    default: 'white'
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
>>>>>>> feat(main app): events

>>>>>>> feat(main app): events
  versionKey: false
});

mongoose.model('Event', eventSchema);
