'use strict';

angular.module('secDash.dashboard', ['ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs : '_dash'
  });
}])
.constant('country_stats', {
    nigeria : {
        web: {
            public_domain_ssl: 1,
            ssl_compliance: 1,
            access_compliance : 0,
            code_security:0,
            security_log_compliance:0,
            baseline_compliance:0
        },
        mobile: {
            public_domain_ssl: 1,
            ssl_compliance: 1,
            access_compliance : 0,
            code_security:0,
            security_log_compliance:0,
            baseline_compliance:0
        },
        ussd: {
            public_domain_ssl: 1,
            ssl_compliance: 1,
            access_compliance : 0,
            code_security:0,
            security_log_compliance:0,
            baseline_compliance:0
        },
        domains : {
            public_domains : [
                'ibanking.stanbicbank.com'
            ]
        }
    },
    ghana : {
        web: {
            public_domain_ssl: 1,
            ssl_compliance: 0,
            access_compliance : 0,
            code_security:1,
            security_log_compliance:0,
            baseline_compliance:0
        },
        mobile: {
            public_domain_ssl: 1,
            ssl_compliance: 0,
            access_compliance : 0,
            code_security:1,
            security_log_compliance:0,
            baseline_compliance:0
        },
        ussd: {
            public_domain_ssl: 1,
            ssl_compliance: 1,
            access_compliance : 0,
            code_security:0,
            security_log_compliance:0,
            baseline_compliance:0
        },
        domains : {
            public_domains : [
                'ibanking.stanbicbank.com'
            ]
        }
    }
})
.constant('sec_info', {
    ssl : '',
    ssl_compliance : '',
    access_compliance : '',
    sdl : ''
})
.controller('DashboardController', ['$scope','country_stats','$http','$mdMenu','$mdDialog', function($scope, country_stats, $http, $mdMenu, $mdDialog) {
    var self = this;
    self.country_display = null;
    let fileMetaData = {};
    let active_country = null;
    var originatorEv;
    self.pentest_headers = null;
    self.pentest_items = null;
    self.content_type = false;
    self.showSecInfo = false;
    self.showPenTests = false;
    
    self.showMenu = function ($mdMenu, ev) {
        originatorEv = ev;
        $mdMenu.open(ev);
    }

    self.country = function (country) {
        self.content_type = true;
        console.log(country)
        self.a_country = country;
        active_country = country;

        //update country
        self.country_display = country_stats[country.admin.toLowerCase()]
        console.log(self.country_display)
        if(self.showPenTests){
            self.penTests();
        }

        $scope.$apply();
    };

    self.penTests = function () {
        //get pen tests
        //csv to json
        self.showPenTests = true;
        $http.get('pen-tests-reports.csv')
            .then(function (data) {
                console.log(data)
                parseCSV(data.data)
            }).catch(function (err) {
            console.log(err)
        })
    }
    
    self.security_information = function (component) {
        
    }

    self.showNetworkDiagram = function (ev,component) {
        //show network diagram
        //self.content_type = 'infrastructure';
        $mdDialog.show({
            controller: DialogController,
            template: '<object data="svg/Ghana_web.svg" type="image/svg+xml"></object>',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: false // Only for -xs, -sm breakpoints.
        })
        .then(function(answer) {

            }, function() {

            });

    }

    self.backToList = function () {
        self.content_type = true;
    }

    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }

    function parseCSV(binary){

        //number of rows
        var collection = binary.trim().split('\n');

        var entries = collection.length;
        fileMetaData['rows'] = entries;
        var valid = false;

        //deliminator
        var firstRow = collection[0];
        var content = collection.splice(1)

        var reg = /(,)/;
        var deliminator = firstRow.match(reg)
        //number of deliminators should be equal per row
        // if(deliminator == null){
        //     return parseCSVError()
        // }
        //columns

        var headersArray = firstRow.split(';');
        fileMetaData['columns'] = headersArray.length;

        var y =  entries - 1;
        var rows = [];
        for(var x = y; x > -1; x--) {
            if(content[x] !== undefined){
                var oneRow = content[x].split(';');
                //push rows by country
                //country column = index 2
                if(oneRow[2] == active_country.admin.toLowerCase()){
                    rows.push(oneRow)
                }
            }
        }

        //print
        self.pentest_items = rows;
        self.pentest_headers = headersArray;

        //sort further by date

        console.log(rows)

    }



}])
.directive('demo', ['$mdSidenav', function ($mdSidenav) {
   return {
       scope : {country : '&'},
       restrict : 'E',
       template : "<div id='demo' class='chart'></div>",
       replace : true,
       link : function(scope, iElm, iAttrs, controller) {

           var width = 800,
               height = 800;
           var url = "africa.json";
           var path = d3.geoPath().projection(null);

           var svg = d3.select(iElm[0]).append("svg")
               .attr("width", width)
               .attr("height", height);

           d3.json(url, function(error, africa) {
               if (error) throw error;
               svg.append("g")
                   .attr("class","countries")
                   .selectAll("path")
                   .data(topojson.feature(africa, africa.objects.countries).features)
                   .enter().append("path")
                   .attr("d", path)
                   .on("click", function (d, i) {
                       //console.log(d.properties)
                       console.log(d)
                      // iElm.addClass('active-country');
                       scope.country({country:d.properties});

                   })
                   .attr("class", function(d) { return "country-" + d.properties.adm0_a3; })
                   .append("title")
                   .text(function(d) { return d.properties.admin; });

           });

           d3.select(iElm[0]).style("height", height + "px");

       }
   }
}]);