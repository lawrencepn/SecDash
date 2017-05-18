/**
 * Created by lawrencenyakiso on 2017/05/09.
 */
/**
 * Created by lawrencenyakiso on 2017/05/09.
 */
angular.module('secDash.countries')

    .constant('lesotho', {

            lesotho: {
                web: {
                    stats: [
                        {jira_id: null, public_domain_ssl: 1},
                        {jira_id: null, ssl_compliance: 1},
                        {jira_id: null, access_compliance: 0},
                        {jira_id: null, sdl_compliance: 0},
                        {jira_id: null, security_log_compliance: 0},
                        {jira_id: null, baseline_compliance: 0},
                    ]
                },
                mobile: {
                    stats: [
                        {jira_id: null, public_domain_ssl: 1},
                        {jira_id: null, ssl_compliance: 1},
                        {jira_id: null, access_compliance: 0},
                        {jira_id: null, sdl_compliance: 0},
                        {jira_id: null, security_log_compliance: 0},
                        {jira_id: null, baseline_compliance: 0},
                    ]
                },
                ussd: {
                    stats : [
                        {jira_id : null, public_domain_ssl: 1},
                        {jira_id : null, ssl_compliance: 1},
                        {jira_id : null, access_compliance : 0},
                        {jira_id : null, sdl_compliance:0},
                        {jira_id : null, security_log_compliance:0},
                        {jira_id : null, baseline_compliance:0},
                    ]
                },
                domains: {
                    public_domains: [
                        'ibanking.stanbicbank.com'
                    ]
                }

            }

    })