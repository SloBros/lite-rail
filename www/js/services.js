angular
  .module('starter.services', [])
  .factory('Times', Times);
  .factory('DB', DB)
  .factory('Document', Document)
  ;

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

function DB($q, DB_CONFIG) {
    var self = this;
    self.db = null;

    self.init = function() {
        // Use self.db = window.sqlitePlugin.openDatabase({name: DB_CONFIG.name}); in production
        self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'database', -1);

        angular.forEach(DB_CONFIG.tables, function(table) {
            var columns = [];

            angular.forEach(table.columns, function(column) {
                columns.push(column.name + ' ' + column.type);
            });

            var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
            self.query(query);
            console.log('Table ' + table.name + ' initialized');
        });
    };

    self.query = function(query, bindings) {
        bindings = typeof bindings !== 'undefined' ? bindings : [];
        var deferred = $q.defer();

        self.db.transaction(function(transaction) {
            transaction.executeSql(query, bindings, function(transaction, result) {
                deferred.resolve(result);
            }, function(transaction, error) {
                deferred.reject(error);
            });
        });

        return deferred.promise;
    };

    self.fetchAll = function(result) {
        var output = [];

        for (var i = 0; i < result.rows.length; i++) {
            output.push(result.rows.item(i));
        }

        return output;
    };

    self.fetch = function(result) {
        return result.rows.item(0);
    };

    return self;
}
// Resource service example
function Document(DB) {
    var self = this;

    self.all = function() {
        return DB.query('SELECT * FROM documents')
        .then(function(result){
            return DB.fetchAll(result);
        });
    };

    self.getById = function(id) {
        return DB.query('SELECT * FROM documents WHERE id = ?', [id])
        .then(function(result){
            return DB.fetch(result);
        });
    };

    return self;
}
