var globals =  globals || {
  jiraurl: "https://waracle.atlassian.net/rest/api/2",
  testrailurl: "https://waracle.testrail.com/index.php?/api/v2",
  jiraapiextension: "order by key ASC&startAt=0&maxResults=1000&fields=issuetype,summary,status,description,issuelinks,fixVersions&fieldsByKeys=false"
};

module.exports = globals;