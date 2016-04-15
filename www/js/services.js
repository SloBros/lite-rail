angular
  .module('starter.services', [])
  .factory('Times', Times);

function Times() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var times = [{
    line: 'H',
    arrival: '4:24PM',
    untilArrival: '2'
  }, {
    line: 'F',
    arrival: '4:27PM',
    untilArrival: '5'
  }, {
    line: 'E',
    arrival: '4:31PM',
    untilArrival: '9'
  }];

  return {
    all: function() {
      return times;
    }
  };
}
