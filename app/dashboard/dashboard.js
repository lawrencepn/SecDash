'use strict';

angular.module('secDash.dashboard', ['ngMaterial'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: '_dash'
        });
    }])
    .constant('sec_info', {
        ssl: '',
        ssl_compliance: '',
        access_compliance: '',
        sdl: ''
    })
    .constant('security_components', {
        list: [
            {
                tag: 'public_domain_ssl',
                name: 'Public Domain SSL'
            },
            {
                tag: 'ssl_compliance',
                name: 'SSL Compliance'
            },
            {
                tag: 'access_compliance',
                name: 'Access Compliance'
            },
            {
                tag: 'sdl_compliance',
                name: 'SDL Compliance'
            },
            {
                tag: 'security_log_compliance',
                name: 'Security Logs Compliance'
            },
            {
                tag: 'baseline_compliance',
                name: 'Baseline Compliance'
            }
        ]

    })
    .controller('DashboardController', ['$scope', 'CountryTemplate', '$http', '$mdMenu', '$mdDialog', function ($scope, CountryTemplate, $http, $mdMenu, $mdDialog) {
        var self = this;
        console.log(CountryTemplate.data())
        self.country_display = null;
        let fileMetaData = {};
        let active_country = null;
        var originatorEv;
        self.pentest_headers = null;
        self.pentest_items = null;
        self.content_type = false;
        self.showSecInfo = false;
        self.showPenTests = false;
        self.bottom_content = null;
        self.comments = [];
        self.progress = {};
        self.information = '';
        self.jira_data = {};

        self.showMenu = function ($mdMenu, ev) {
            originatorEv = ev;
            $mdMenu.open(ev);
        }

        self.country = function (country) {
            self.content_type = true;
            self.a_country = country;
            active_country = country;

            //update country
            //self.country_display = country_template.data[country.admin.toLowerCase()]
            if (self.showPenTests) {
                self.penTests();
            }

            $scope.$apply();
        };

        self.penTests = function (en) {
            //get pen tests
            //csv to json
            //get per environment

            $http.get('pen-tests-reports.csv')
                .then(function (data) {

                    parseCSV(data.data)

                    //if there is no data, show friendly message

                }).catch(function (err) {
                console.log(err)
            })
        }

        self.security_information = function (component) {

        }

        self.showNetworkDiagram = function (ev, component) {
            //show network diagram
            //self.content_type = 'infrastructure';
            $mdDialog.show({
                controller: DialogController,
                template: '<object data="svg/Ghana_web.svg" type="image/svg+xml"></object>',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false // Only for -xs, -sm breakpoints.
            })
                .then(function (answer) {

                }, function () {

                });

        }

        self.hide_bottom_content = function () {
            self.bottom_content = null;
        }

        self.backToList = function () {
            self.content_type = true;
        }

        function DialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };

            $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }

        function parseCSV(binary) {

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

            var y = entries - 1;
            var rows = [];
            for (var x = y; x > -1; x--) {
                if (content[x] !== undefined) {
                    var oneRow = content[x].split(';');
                    //push rows by country
                    //country column = index 2
                    if (oneRow[2] == active_country.admin.toLowerCase()) {
                        rows.push(oneRow)
                    }
                }
            }

            //print
            self.bottom_content = 'pentests';
            self.bottom_content_title = 'Pen Test Reports Issues';
            self.pentest_items = rows;
            self.pentest_headers = headersArray;
            self.has_reports = rows.length == 0 ? false : true;


            //sort further by date

            console.log(rows)

        }


    }])
    .directive('securityComponents', ['security_components', 'CountryTemplate', '$mdMenu','JiraData', 'jirademo','component_info', function (security_components, CountryTemplate, $mdMenu, JiraData, jirademo, component_info) {
        return {
            scope: {country: '=', platform: '@platform'},
            restrict: 'E',
            templateUrl: "./components/securityComponents.html",
            replace: true,
            link: function (scope, iElm, iAttrs, controller) {

                scope.components_components_list = security_components.list;
                //update country
                console.log(scope.country)

                scope.country_display = CountryTemplate.data()[scope.country.admin.toLowerCase()][scope.platform]['stats'];
                console.log(scope.country_display)

                var originatorEv;
                scope.openMenu = function ($mdMenu, ev) {
                    originatorEv = ev;
                    $mdMenu.open(ev);
                };

                scope.component_information = function (name, key) {
                    //get information
                    //display information in pane
                    //update linked scope
                    scope.$parent._dash.information = component_info[key];
                    scope.$parent._dash.bottom_content = 'information';
                    scope.$parent._dash.bottom_content_title = 'Information : ' + name;

                }

                scope.component_progress = function (tag) {
                    //get data from jira
                    let jira_id = get_Jira_id(tag)
                    console.log(jira_id)

                    //if the jira ID is  == common
                    //this means all this items within the countruies platform have been assigned one Jira task
                    //country e,g Nigeria
                        //platform e.g web, atm

                    //a task can be common for all countries where the resource is global e.g code scanning
                    //global components: sdl
                    console.log( CountryTemplate.global_tasks());
                    console.log(tag)
                    console.log(scope.platform)
                    if(jira_id == 'common'){
                        //get global jira_id
                        jira_id = CountryTemplate.global_tasks()[tag][scope.platform]
                    }


                   // JiraData.get_jira_data(jira_id).f
                    JiraData.get_jira_data(jira_id)
                        .then(function (response) {
                            scope.$parent._dash.jira_data = response.data;
                            scope.$parent._dash.comments = response.data.fields.comment.comments;
                            //scope.$parent._dash.progress = response.data.fields.progress;
                            //display comments object in list format
                            scope.$parent._dash.bottom_content = 'progress';
                            scope.$parent._dash.bottom_content_title = 'Progress';
                        }).catch(function (error) {
                            //jira returned an error
                        console.log(error)
                    })



                }

                function get_Jira_id(a) {
                    let res = null;
                    console.log(scope.country_display)
                    for(var i in scope.country_display){
                        if(scope.country_display[i].hasOwnProperty(a)){
                            res = scope.country_display[i]
                            console.log(res)
                        }
                    }
                    return res.jira_id;
                }

                //filter of some sorts
                scope.getClass = function (a) {
                    //get value from scope.country_display
                    let res = null;
                    for(var i in scope.country_display){
                       if(scope.country_display[i].hasOwnProperty(a)){
                           res = scope.country_display[i][a]
                       }
                    }
                    return res;
                }
            }
        }

    }])

    .directive('comments', [function () {
        //data.comments[].body
        //data.comments[].autthor.diplsayname

    }])

    //directive to render map
    .directive('africamap', ['$mdSidenav', function ($mdSidenav) {
        return {
            scope: {country: '&'},
            restrict: 'E',
            template: "<div id='africa_map' class='chart'>" +
            "<md-card class='epx'><md-card-content>{{c_name}}</md-card-content></md-card>" +
            "</div>",
            replace: true,
            link: function (scope, iElm, iAttrs, controller) {

                let width = 700,
                    height = 800,
                    url = "africa.json",
                    path = d3.geoPath().projection(null),
                    svg = d3.select(iElm[0]).append("svg")
                    .attr("width", width)
                    .attr("height", height);


                scope.c_name = null;

                function mouseOver(d){
                    scope.c_name = d.properties.admin;
                    console.log(scope.c_name)
                }

                function mouseOut(){
                }

                function tooltipHtml(n){	/* function to create html content string in tooltip div. */
                    return "<h4>"+n+"</h4>";
                }

                d3.json(url, function (error, africa) {
                    if (error) throw error;
                    svg.append("g")
                        .attr("class", "countries")
                        .selectAll("path")
                        .data(topojson.feature(africa, africa.objects.countries).features)
                        .enter().append("path")
                        .attr("d", path)
                        .on("click", function (d, i) {
                            //console.log(d.properties)
                            console.log(d)
                            // iElm.addClass('active-country');
                            scope.country({country: d.properties});

                        })
                        .on('mouseover', function (d) {
                            scope.c_name = d.properties.admin;
                            scope.$applyAsync();
                        })
                        .on('mouseout', function () {
                            scope.c_name = null;
                            scope.$applyAsync();
                        })
                        .attr("class", function (d) {
                            return "country-" + d.properties.adm0_a3;
                        })
                        .append("title")
                        .text(function (d) {
                            return d.properties.admin;
                        });



                });

                d3.select(iElm[0]).style("height", height + "px");

            }
        }
    }]);