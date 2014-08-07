(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['$http','common', datacontext]);

    function datacontext($http, common) {
        var $q = common.$q;

        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            //var people = [
            //    { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
            //    { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
            //    { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
            //    { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
            //    { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
            //    { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
            //    { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
            //];
            var url = '/api/users';
            return $http.get(url).then(function(data) {
                return $q.when(data);
            })
            return $q.when(people);
        }
    }
})();