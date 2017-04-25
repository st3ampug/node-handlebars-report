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
      description: "This report only shows test related data, using a pie chart to display the status of the selected test runs and plans and a list of tests and test plans that have been ran"
    },
    {
      enabled: true,
      id: 2,
      name: "Outstanding bugs",
      description: "This report show outstanding bugs and their related JIRA issues"
    },
    {
      enabled: true,
      id: 3,
      name: "Generic test report",
      description: "A report with a tests related pie chart and JIRA stories, tasks and bug list."
    }
  ]
};

module.exports = globals;