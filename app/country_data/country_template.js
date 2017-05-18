/**
 * Created by lawrencenyakiso on 2017/05/09.
 */
/**
 * Created by lawrencenyakiso on 2017/05/09.
 */
/**
 * Created by lawrencenyakiso on 2017/05/09.
 */
angular.module('secDash.countries', [])

    .factory('CountryTemplate', function (
        ghana,
        botswana,
        nigeria,
        namibia,
        swaziland,
        zimbabwe,
        lesotho,
        malawi,
        uganda,
        common_for_all
    ) {

        return {
            data : function () {
                const all_countries = Object.assign({},
                    ghana,
                    botswana,
                    nigeria,
                    namibia,
                    swaziland,
                    zimbabwe,
                    lesotho,
                    malawi,
                    uganda);
                return all_countries;

            },
            global_tasks : function () {
                return common_for_all;
            }
        }
    })
    .constant('common_for_all', {
        sdl_compliance : {
            web : 'ROAS-2',
            mobile : null,
            ussd : null,
            atm : null,
            bna : null
        }
    })
    .constant('component_info', {

        public_domain_ssl : {
            summary : "All public facing domains should be configured with valid SSL/TLS as per the Group Standard",
            objective : "To track Valid SSL/TLS configuration of all public facing domains. All Domains should have an A rating for SSL/TLS",
            resources : "Attach Web SSL/TLS Standard"
        },
        ssl_compliance : {
            summary : "Groups SSL/TLS Standard and Procedures. Network traffic between client devices or peripherals and the banks network should be encrypted as per the standard.",
            objective : "All projects should report an A rating configuration for connections over SSL/TLS",
            resources : "Attach SSL/TLS Configuration Standard"
        },
        access_compliance : {
            summary : "All system engineering teams should have an systems access management tool in place. The Tools should conform to the Group Standard.",
            objective : "Access to Systems should be Administered and System use should be logged as per the standard for every instance in the AR Region",
            resources : "Attach access management standard document"
        },
        sdl_compliance : {
            summary : "Secure Development Lifecycle Practice ensures the practice of secure code development is an embedded practice with the agile development process.",
            objective : "All applications should be added to Checkmarx for profiled vulnerability scanning. Teams should be able to diagnose vulnerabilities and resolve them. Where applications are provided by third parties, Assurance should be provided by the third party.",
            resources : "Code Boarding Procedure Document in progress."
        },
        security_log_compliance : {
            summary : "All instances should send security logs to a local Qradar instance",
            objective : "All instances should send security logs to a local Qradar instance. Standard adapted from the Functional Log Standard Document",
            resources : "Document Procedure."
        },
        baseline_compliance : {
            summary : "All instances should comply to the system baseline standard as defined and set by the Group.",
            objective : "Teams should be able to push updates to all instances in the AR regions. RedHat, Windows, AIX",
            resources : "Attach Baseline Standard Documents. Document Procedures for Baseline updates."
        }

    });