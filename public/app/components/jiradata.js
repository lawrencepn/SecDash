/**
 * Created by lawrencenyakiso on 2017/05/08.
 */
angular.module('secDash.jira', ['ngMaterial'])

    .factory('JiraData', function (jirademo, $http, $sce) {
        //http://jira.standardbank.co.za:8091
        //rest/api/latest/issue/ROAS-1
        // var promise = $http({
        //     method:method,
        //     headers : {
        //         Authorization: 'Bearer ' + token,
        //         'Content-Type':'application/json'
        //     },
        //     url:callURL + '/' + sf,
        //     data:parameters
        // })
        //
        // return promise;
        return {
                get_jira_data : function (jira_id) {
                    const endpoint = 'http://localhost:3000/jira';
                    var url = endpoint;
                    $sce.trustAsResourceUrl(url);
                    var promise = $http.post(url, {"jira_id":jira_id});
                    return promise;
                }
                //return jirademo;
            }
    })
    .constant('jirademo', {
        data: {
            "expand": "renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations",
            "id": "383771",
            "key": "ROAS-1",
            "fields": {
                "reporter": {
                    "displayName": "Lawrence Nyakiso",
                    "active": true,
                    "timeZone": "Africa\/Maseru",
                    "emailAddress": "lawrencenyakiso@gmail.com",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/user?username=lawrence.nyakiso",
                    "key": "lawrence.nyakiso",
                    "avatarUrls": {
                        "48x48": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?ownerId=lawrence.nyakiso&avatarId=15649",
                        "24x24": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=small&ownerId=lawrence.nyakiso&avatarId=15649",
                        "16x16": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=xsmall&ownerId=lawrence.nyakiso&avatarId=15649",
                        "32x32": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=medium&ownerId=lawrence.nyakiso&avatarId=15649"
                    },
                    "name": "lawrence.nyakiso"
                },

                "customfield_14215": [
                    {
                        "value": "None",
                        "id": "14301",
                        "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/14301"
                    }
                ],

                "customfield_10000": "9223372036854775807",

                "customfield_14323": [
                    {
                        "value": "Johannesburg",
                        "id": "14348",
                        "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/14348"
                    }
                ],
                "summary": "Reflected_XSS_All_Clients in line 98 of AccountGatewayAsyncBean.java",

                "worklog": {
                    "maxResults": 20,
                    "startAt": 0,
                    "total": 0,
                    "worklogs": []
                },
                "customfield_14322": {
                    "value": "RTB",
                    "id": "14344",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/14344"
                },
                "customfield_12200": "1|i0784z:",
                "issuetype": {
                    "avatarId": 16501,
                    "id": "1",
                    "iconUrl": "http:\/\/jira.standardbank.co.za:8091\/secure\/viewavatar?size=xsmall&avatarId=16501&avatarType=issuetype",
                    "subtask": false,
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/issuetype\/1",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "name": "Bug"
                },
                "description": "Source : AccountGatewayAsyncBean.java line 98 object getCustomPropertiesMap\nDestination : TransactionGatewayLocal.java line 448 object setCardProfile\nhttps:\/\/psdc-pa001gth1v.za.sbicdirectory.com\/CxWebClient\/ViewerMain.aspx?scanid=1000114&projectid=25&pathid=72",
                "customfield_14701": {
                    "value": "Nigeria FO",
                    "id": "17101",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/17101"
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false,
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/issue\/ROAS-1\/votes"
                },
                "creator": {
                    "displayName": "Lawrence Nyakiso",
                    "active": true,
                    "timeZone": "Africa\/Maseru",
                    "emailAddress": "lawrencenyakiso@gmail.com",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/user?username=lawrence.nyakiso",
                    "key": "lawrence.nyakiso",
                    "avatarUrls": {
                        "48x48": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?ownerId=lawrence.nyakiso&avatarId=15649",
                        "24x24": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=small&ownerId=lawrence.nyakiso&avatarId=15649",
                        "16x16": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=xsmall&ownerId=lawrence.nyakiso&avatarId=15649",
                        "32x32": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=medium&ownerId=lawrence.nyakiso&avatarId=15649"
                    },
                    "name": "lawrence.nyakiso"
                },
                "customfield_14401": {
                    "value": "No",
                    "id": "14507",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/14507"
                },
                "updated": "2017-05-08T12:13:02.256+0200",
                "customfield_16281": [
                    {
                        "value": "No",
                        "id": "21577",
                        "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/21577"
                    }
                ],
                "customfield_15501": {
                    "value": "ZAM_Production",
                    "id": "23109",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/23109"
                },
                "aggregatetimeoriginalestimate": null,
                "attachment": [],
                "customfield_14488": {
                    "value": "Plato SA",
                    "id": "16685",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/16685"
                },
                "watches": {
                    "isWatching": false,
                    "watchCount": 1,
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/issue\/ROAS-1\/watchers"
                },
                "customfield_14487": {
                    "value": "Business request",
                    "id": "16683",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/16683"
                },
                "issuelinks": [],
                "customfield_14509": [
                    {
                        "value": "ALGO",
                        "id": "16700",
                        "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/16700"
                    }
                ],
                "customfield_14946": {
                    "value": "Defects",
                    "id": "17844",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/17844"
                },
                "customfield_14486": {
                    "value": "Internal",
                    "id": "16794",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/16794"
                },
                "resolutiondate": null,
                "customfield_12115": "http:\/\/Outstanding",
                "customfield_14506": {
                    "value": "Dataroll",
                    "id": "16696",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/16696"
                },
                "customfield_12114": "http:\/\/Outstanding",
                "customfield_12113": "http:\/\/Outstanding",
                "customfield_17348": {
                    "value": "MLW_Sandpit",
                    "id": "24140",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/24140"
                },
                "customfield_12112": "http:\/\/Outstanding",
                "aggregatetimeestimate": null,
                "components": [],
                "created": "2017-03-23T10:59:32.017+0200",
                "customfield_14313": {
                    "value": "0",
                    "id": "14578",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/14578"
                },
                "customfield_17208": {
                    "value": "LES_Production",
                    "id": "23273",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/23273"
                },
                "priority": {
                    "id": "10003",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/priority\/10003",
                    "iconUrl": "http:\/\/jira.standardbank.co.za:8091\/images\/icons\/priority_major.gif",
                    "name": "Regulatory"
                },
                "customfield_14312": {
                    "value": "0",
                    "id": "14579",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/14579"
                },
                "customfield_14610": {
                    "value": "To Be Determined",
                    "id": "16965",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/16965"
                },
                "customfield_16102": "<p>lawrence.nyakiso (Fri May 05 10:57:33 SAST 2017): Test Comment for the api.<\/p><p>lawrence.nyakiso (Mon May 08 12:13:02 SAST 2017): another minor comment<\/p>",
                "customfield_17501": [
                    {
                        "value": "Risk",
                        "id": "24507",
                        "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/24507"
                    }
                ],
                "workratio": -1,
                "project": {
                    "id": "22102",
                    "key": "ROAS",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/project\/22102",
                    "name": "ROA Security",
                    "avatarUrls": {
                        "48x48": "http:\/\/jira.standardbank.co.za:8091\/secure\/projectavatar?avatarId=15703",
                        "24x24": "http:\/\/jira.standardbank.co.za:8091\/secure\/projectavatar?size=small&avatarId=15703",
                        "16x16": "http:\/\/jira.standardbank.co.za:8091\/secure\/projectavatar?size=xsmall&avatarId=15703",
                        "32x32": "http:\/\/jira.standardbank.co.za:8091\/secure\/projectavatar?size=medium&avatarId=15703"
                    }
                },
                "duedate": null,
                "customfield_14909": {
                    "value": "Open",
                    "id": "17570",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/17570"
                },
                "customfield_14449": [
                    {
                        "value": "JAD",
                        "id": "16532",
                        "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/16532"
                    }
                ],
                "fixVersions": [],
                "customfield_14609": {
                    "value": "Prod",
                    "id": "16939",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/16939"
                },
                "progress": {
                    "total": 0,
                    "progress": 0
                },
                "customfield_14608": {
                    "value": "Existing in Production",
                    "id": "16922",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/16922"
                },
                "customfield_14228": [
                    {
                        "value": "None",
                        "id": "14300",
                        "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/14300"
                    }
                ],
                "customfield_15495": {
                    "value": "No",
                    "id": "18555",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/18555"
                },
                "customfield_15328": null,
                "customfield_12404": {
                    "value": "0",
                    "id": "11524",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/11524"
                },
                "customfield_12403": {
                    "value": "0",
                    "id": "11513",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/11513"
                },
                "customfield_10200": "9223372036854775807",
                "customfield_14304": {
                    "value": "Production",
                    "id": "14303",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/14303"
                },
                "customfield_12400": [
                    {
                        "value": "ROA Digital Channels",
                        "id": "11772",
                        "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/11772"
                    }
                ],
                "aggregateprogress": {
                    "total": 0,
                    "progress": 0
                },
                "customfield_15541": {
                    "value": "Not Reviewed",
                    "id": "18924",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/18924"
                },
                "customfield_14220": {
                    "value": "No",
                    "id": "14092",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/14092"
                },

                "status": {
                    "name": "Open",
                    "id": "1",
                    "statusCategory": {
                        "id": 2,
                        "key": "new",
                        "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/statuscategory\/2",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    },
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/status\/1",
                    "description": "The issue is open and ready for the assignee to start work on it.",
                    "iconUrl": "http:\/\/jira.standardbank.co.za:8091\/images\/icons\/statuses\/generic.png"
                },

                "resolution": null,
                "customfield_17412": null,
                "assignee": {
                    "displayName": "Lawrence Nyakiso",
                    "active": true,
                    "timeZone": "Africa\/Maseru",
                    "emailAddress": "lawrencenyakiso@gmail.com",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/user?username=lawrence.nyakiso",
                    "key": "lawrence.nyakiso",
                    "avatarUrls": {
                        "48x48": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?ownerId=lawrence.nyakiso&avatarId=15649",
                        "24x24": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=small&ownerId=lawrence.nyakiso&avatarId=15649",
                        "16x16": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=xsmall&ownerId=lawrence.nyakiso&avatarId=15649",
                        "32x32": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=medium&ownerId=lawrence.nyakiso&avatarId=15649"
                    },
                    "name": "lawrence.nyakiso"
                },
                "comment": {
                    "maxResults": 2,
                    "startAt": 0,
                    "comments": [
                        {
                            "author": {
                                "displayName": "Lawrence Nyakiso",
                                "active": true,
                                "timeZone": "Africa\/Maseru",
                                "emailAddress": "lawrencenyakiso@gmail.com",
                                "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/user?username=lawrence.nyakiso",
                                "key": "lawrence.nyakiso",
                                "avatarUrls": {
                                    "48x48": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?ownerId=lawrence.nyakiso&avatarId=15649",
                                    "24x24": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=small&ownerId=lawrence.nyakiso&avatarId=15649",
                                    "16x16": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=xsmall&ownerId=lawrence.nyakiso&avatarId=15649",
                                    "32x32": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=medium&ownerId=lawrence.nyakiso&avatarId=15649"
                                },
                                "name": "lawrence.nyakiso"
                            },
                            "updated": "2017-05-05T10:57:33.887+0200",
                            "id": "350535",
                            "created": "2017-05-05T10:57:33.887+0200",
                            "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/issue\/383771\/comment\/350535",
                            "body": "Test Comment for the api.",
                            "updateAuthor": {
                                "displayName": "Lawrence Nyakiso",
                                "active": true,
                                "timeZone": "Africa\/Maseru",
                                "emailAddress": "lawrencenyakiso@gmail.com",
                                "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/user?username=lawrence.nyakiso",
                                "key": "lawrence.nyakiso",
                                "avatarUrls": {
                                    "48x48": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?ownerId=lawrence.nyakiso&avatarId=15649",
                                    "24x24": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=small&ownerId=lawrence.nyakiso&avatarId=15649",
                                    "16x16": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=xsmall&ownerId=lawrence.nyakiso&avatarId=15649",
                                    "32x32": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=medium&ownerId=lawrence.nyakiso&avatarId=15649"
                                },
                                "name": "lawrence.nyakiso"
                            }
                        },
                        {
                            "author": {
                                "displayName": "Lawrence Nyakiso",
                                "active": true,
                                "timeZone": "Africa\/Maseru",
                                "emailAddress": "lawrencenyakiso@gmail.com",
                                "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/user?username=lawrence.nyakiso",
                                "key": "lawrence.nyakiso",
                                "avatarUrls": {
                                    "48x48": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?ownerId=lawrence.nyakiso&avatarId=15649",
                                    "24x24": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=small&ownerId=lawrence.nyakiso&avatarId=15649",
                                    "16x16": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=xsmall&ownerId=lawrence.nyakiso&avatarId=15649",
                                    "32x32": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=medium&ownerId=lawrence.nyakiso&avatarId=15649"
                                },
                                "name": "lawrence.nyakiso"
                            },
                            "updated": "2017-05-08T12:13:02.256+0200",
                            "id": "351628",
                            "created": "2017-05-08T12:13:02.256+0200",
                            "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/issue\/383771\/comment\/351628",
                            "body": "another minor comment",
                            "updateAuthor": {
                                "displayName": "Lawrence Nyakiso",
                                "active": true,
                                "timeZone": "Africa\/Maseru",
                                "emailAddress": "lawrencenyakiso@gmail.com",
                                "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/user?username=lawrence.nyakiso",
                                "key": "lawrence.nyakiso",
                                "avatarUrls": {
                                    "48x48": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?ownerId=lawrence.nyakiso&avatarId=15649",
                                    "24x24": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=small&ownerId=lawrence.nyakiso&avatarId=15649",
                                    "16x16": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=xsmall&ownerId=lawrence.nyakiso&avatarId=15649",
                                    "32x32": "http:\/\/jira.standardbank.co.za:8091\/secure\/useravatar?size=medium&ownerId=lawrence.nyakiso&avatarId=15649"
                                },
                                "name": "lawrence.nyakiso"
                            }
                        }
                    ],
                    "total": 2
                },

                "customfield_14796": {
                    "value": "CIB Finance",
                    "id": "17384",
                    "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/2\/customFieldOption\/17384"
                },
            },
            "self": "http:\/\/jira.standardbank.co.za:8091\/rest\/api\/latest\/issue\/383771"
        }
    });