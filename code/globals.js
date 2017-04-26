var globals =  globals || {
  templateextension: ".handlebars",

  jiraurl: "https://waracle.atlassian.net/rest/api/2",
  testrailurl: "https://waracle.testrail.com/index.php?/api/v2",
  jiraapiextension: "order by key ASC&startAt=0&maxResults=1000&fields=issuetype,summary,status,description,issuelinks,fixVersions&fieldsByKeys=false",

  pages: [
    "",
    "01-template-selection",
    "02-project-selection",
    "03-issues-selection"
  ],

  templates: [
    {
      enabled: false,
      id: 0,
      name: "select a template",
      desctiption: "n\a"
    },
    {
      enabled: true,
      id: 1,
      name: "Purely test report",
      description: "This report only shows test related data, using a pie chart to display the status of the selected test runs and plans and a list of tests and test plans that have been ran",
      calls: {
        jira: {
          init: false,
          story: false,
          task: false,
          bug: false
        },
        testrail: {
          init: true,
          plans: true,
          runs: true,
        }
      }
    },
    {
      enabled: true,
      id: 2,
      name: "Outstanding bugs",
      description: "This report show outstanding bugs and their related JIRA issues",
      calls: {
        jira: {
          init: true,
          story: false,
          task: false,
          bug: true
        },
        testrail: {
          init: false,
          plans: false,
          runs: false,
        }
      }
    },
    {
      enabled: true,
      id: 3,
      name: "Generic test report",
      description: "A report with a tests related pie chart and JIRA stories, tasks and bug list.",
      calls: {
        jira: {
          init: true,
          story: true,
          task: true,
          bug: true
        },
        testrail: {
          init: true,
          plans: true,
          runs: true,
        }
      }
    }
  ],
  
  f: {
    // global helper functions?
  }
};

module.exports = globals;