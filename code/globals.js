var globals =  globals || {
  jiraurl: "https://waracle.atlassian.net/rest/api/2",
  testrailurl: "https://waracle.testrail.com/index.php?/api/v2",
  context: {
        "expand": "schema,names",
        "startAt": 0,
        "maxResults": 50,
        "total": 25,
        "issues": [
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "21301",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/21301",
            "key": "NET-5",
            "fields": {
              "summary": "Update Google Analytics event tracking",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10002",
                "id": "10002",
                "description": "A task that needs to be done.",
                "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10318
              },
              "description": "All events details in this doc https://docs.google.com/a/waracle.com/spreadsheets/d/1Vfq9tgceTMUQXaeMKlbok6Uo8qMydOxUa8jgE67enE8/edit?usp=sharing",
              "issuelinks": [
                {
                  "id": "22012",
                  "self": "https://waracle.atlassian.net/rest/api/2/issueLink/22012",
                  "type": {
                    "id": "10003",
                    "name": "Relates",
                    "inward": "relates to",
                    "outward": "relates to",
                    "self": "https://waracle.atlassian.net/rest/api/2/issueLinkType/10003"
                  },
                  "outwardIssue": {
                    "id": "23210",
                    "key": "NET-44",
                    "self": "https://waracle.atlassian.net/rest/api/2/issue/23210",
                    "fields": {
                      "summary": "Android version does not seem to submit events to Google Analytics",
                      "status": {
                        "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                        "description": "Code has passed QA and is ready for release.",
                        "iconUrl": "https://waracle.atlassian.net/",
                        "name": "Done",
                        "id": "10001",
                        "statusCategory": {
                          "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                          "id": 3,
                          "key": "done",
                          "colorName": "green",
                          "name": "Done"
                        }
                      },
                      "priority": {
                        "self": "https://waracle.atlassian.net/rest/api/2/priority/2",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/priorities/high.svg",
                        "name": "High",
                        "id": "2"
                      },
                      "issuetype": {
                        "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10004",
                        "id": "10004",
                        "description": "A problem which impairs or prevents the functions of the product.",
                        "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                        "name": "Bug",
                        "subtask": false,
                        "avatarId": 10303
                      }
                    }
                  }
                }
              ],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "22300",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/22300",
            "key": "NET-6",
            "fields": {
              "summary": "Set up environments",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10002",
                "id": "10002",
                "description": "A task that needs to be done.",
                "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10318
              },
              "description": "Work required to set up environments ",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "22301",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/22301",
            "key": "NET-7",
            "fields": {
              "summary": "Update the storage to store text for each answer",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10002",
                "id": "10002",
                "description": "A task that needs to be done.",
                "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10318
              },
              "description": "Epic requires additions to the database; \r\n\r\n* Report Name (string)\r\n* Related checklists\r\n* Date Created\r\n* Date Updated\r\n\r\nThere are no user accounts on the app, but will need to use existing method of linking it to a device (may be session or device ID)",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "22302",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/22302",
            "key": "NET-8",
            "fields": {
              "summary": "Create 'Add Comment' pop-up",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10001",
                "id": "10001",
                "description": "A user story. Created by JIRA Software - do not edit or delete.",
                "iconUrl": "https://waracle.atlassian.net/images/icons/issuetypes/story.svg",
                "name": "Story",
                "subtask": false
              },
              "description": "As a User answering a Question, I want to be able to add a comment to back up my answer. \r\n\r\n* Comment icon displayed next to Yes | No buttons\r\n* Opens text box modal window for user to enter their comment\r\n* Cancel closes the modal and deletes the text\r\n* Save saves the comment \r\n* Questions shows comment icon with a '1' to indicate there is a comment. \r\n* 4000 character limit\r\n\r\n",
              "issuelinks": [
                {
                  "id": "21700",
                  "self": "https://waracle.atlassian.net/rest/api/2/issueLink/21700",
                  "type": {
                    "id": "10003",
                    "name": "Relates",
                    "inward": "relates to",
                    "outward": "relates to",
                    "self": "https://waracle.atlassian.net/rest/api/2/issueLinkType/10003"
                  },
                  "outwardIssue": {
                    "id": "22901",
                    "key": "NET-24",
                    "self": "https://waracle.atlassian.net/rest/api/2/issue/22901",
                    "fields": {
                      "summary": "Save button is active for blank comment ",
                      "status": {
                        "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                        "description": "Code has passed QA and is ready for release.",
                        "iconUrl": "https://waracle.atlassian.net/",
                        "name": "Done",
                        "id": "10001",
                        "statusCategory": {
                          "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                          "id": 3,
                          "key": "done",
                          "colorName": "green",
                          "name": "Done"
                        }
                      },
                      "priority": {
                        "self": "https://waracle.atlassian.net/rest/api/2/priority/3",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/priorities/medium.svg",
                        "name": "Medium",
                        "id": "3"
                      },
                      "issuetype": {
                        "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10004",
                        "id": "10004",
                        "description": "A problem which impairs or prevents the functions of the product.",
                        "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                        "name": "Bug",
                        "subtask": false,
                        "avatarId": 10303
                      }
                    }
                  }
                },
                {
                  "id": "21802",
                  "self": "https://waracle.atlassian.net/rest/api/2/issueLink/21802",
                  "type": {
                    "id": "10003",
                    "name": "Relates",
                    "inward": "relates to",
                    "outward": "relates to",
                    "self": "https://waracle.atlassian.net/rest/api/2/issueLinkType/10003"
                  },
                  "outwardIssue": {
                    "id": "23004",
                    "key": "NET-25",
                    "self": "https://waracle.atlassian.net/rest/api/2/issue/23004",
                    "fields": {
                      "summary": "[Android] Comment popup can sometimes be hidden by the keyboard",
                      "status": {
                        "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                        "description": "Code has passed QA and is ready for release.",
                        "iconUrl": "https://waracle.atlassian.net/",
                        "name": "Done",
                        "id": "10001",
                        "statusCategory": {
                          "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                          "id": 3,
                          "key": "done",
                          "colorName": "green",
                          "name": "Done"
                        }
                      },
                      "priority": {
                        "self": "https://waracle.atlassian.net/rest/api/2/priority/3",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/priorities/medium.svg",
                        "name": "Medium",
                        "id": "3"
                      },
                      "issuetype": {
                        "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10004",
                        "id": "10004",
                        "description": "A problem which impairs or prevents the functions of the product.",
                        "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                        "name": "Bug",
                        "subtask": false,
                        "avatarId": 10303
                      }
                    }
                  }
                },
                {
                  "id": "21805",
                  "self": "https://waracle.atlassian.net/rest/api/2/issueLink/21805",
                  "type": {
                    "id": "10003",
                    "name": "Relates",
                    "inward": "relates to",
                    "outward": "relates to",
                    "self": "https://waracle.atlassian.net/rest/api/2/issueLinkType/10003"
                  },
                  "outwardIssue": {
                    "id": "23005",
                    "key": "NET-26",
                    "self": "https://waracle.atlassian.net/rest/api/2/issue/23005",
                    "fields": {
                      "summary": "[iOS] Comment popup's elements are pushed around by the keyboard",
                      "status": {
                        "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                        "description": "Code has passed QA and is ready for release.",
                        "iconUrl": "https://waracle.atlassian.net/",
                        "name": "Done",
                        "id": "10001",
                        "statusCategory": {
                          "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                          "id": 3,
                          "key": "done",
                          "colorName": "green",
                          "name": "Done"
                        }
                      },
                      "priority": {
                        "self": "https://waracle.atlassian.net/rest/api/2/priority/3",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/priorities/medium.svg",
                        "name": "Medium",
                        "id": "3"
                      },
                      "issuetype": {
                        "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10004",
                        "id": "10004",
                        "description": "A problem which impairs or prevents the functions of the product.",
                        "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                        "name": "Bug",
                        "subtask": false,
                        "avatarId": 10303
                      }
                    }
                  }
                }
              ],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "22303",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/22303",
            "key": "NET-9",
            "fields": {
              "summary": "Delete a Comment",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10001",
                "id": "10001",
                "description": "A user story. Created by JIRA Software - do not edit or delete.",
                "iconUrl": "https://waracle.atlassian.net/images/icons/issuetypes/story.svg",
                "name": "Story",
                "subtask": false
              },
              "description": "As a User, I want to be able to delete a comment made previously\r\n\r\n* User taps the comment icon to open comment modal window\r\n* View shows Comment with options to Cancel, Save or Delete\r\n* User can edit the text\r\n* Cancel Button closes the window and discards changes\r\n* Save Button saves changes made to comment\r\n* Delete Icon deletes the comment and closes the modal\r\n* If Comment is deleted, Comment icon changes to be without the '1' to indicate a comment is present ",
              "issuelinks": [
                {
                  "id": "21812",
                  "self": "https://waracle.atlassian.net/rest/api/2/issueLink/21812",
                  "type": {
                    "id": "10003",
                    "name": "Relates",
                    "inward": "relates to",
                    "outward": "relates to",
                    "self": "https://waracle.atlassian.net/rest/api/2/issueLinkType/10003"
                  },
                  "outwardIssue": {
                    "id": "23012",
                    "key": "NET-32",
                    "self": "https://waracle.atlassian.net/rest/api/2/issue/23012",
                    "fields": {
                      "summary": "Comment Delete button displays for a very short while when there has been no previous comment ",
                      "status": {
                        "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                        "description": "Code has passed QA and is ready for release.",
                        "iconUrl": "https://waracle.atlassian.net/",
                        "name": "Done",
                        "id": "10001",
                        "statusCategory": {
                          "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                          "id": 3,
                          "key": "done",
                          "colorName": "green",
                          "name": "Done"
                        }
                      },
                      "priority": {
                        "self": "https://waracle.atlassian.net/rest/api/2/priority/3",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/priorities/medium.svg",
                        "name": "Medium",
                        "id": "3"
                      },
                      "issuetype": {
                        "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10004",
                        "id": "10004",
                        "description": "A problem which impairs or prevents the functions of the product.",
                        "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                        "name": "Bug",
                        "subtask": false,
                        "avatarId": 10303
                      }
                    }
                  }
                }
              ],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "22304",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/22304",
            "key": "NET-10",
            "fields": {
              "summary": "Logic to save the comments with the checklist data",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10002",
                "id": "10002",
                "description": "A task that needs to be done.",
                "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10318
              },
              "description": "Work required to save comments to the data date\r\n",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "22305",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/22305",
            "key": "NET-11",
            "fields": {
              "summary": "Edit a Comment",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10001",
                "id": "10001",
                "description": "A user story. Created by JIRA Software - do not edit or delete.",
                "iconUrl": "https://waracle.atlassian.net/images/icons/issuetypes/story.svg",
                "name": "Story",
                "subtask": false
              },
              "description": "As a user, I want to be able to edit a comment\r\n\r\n* Tap Comment icon to open modal\r\n* Edit content\r\n* Tap save\r\n* Saves the comment to the database\r\n* Cancel ignores changes and closes the modal\r\n* Delete deletes comment\r\n* Comment icon reverts to not show the comment indicator '1'",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "22306",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/22306",
            "key": "NET-12",
            "fields": {
              "summary": "Option to hide comments on PDF export",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10001",
                "id": "10001",
                "description": "A user story. Created by JIRA Software - do not edit or delete.",
                "iconUrl": "https://waracle.atlassian.net/images/icons/issuetypes/story.svg",
                "name": "Story",
                "subtask": false
              },
              "description": "As a user I want to be able to show or hide comments to a report\r\n\r\n* When sharing a report from the Reports section of the menu, present option to show/hide comments as per prototype [attached]\r\n\r\n",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "22308",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/22308",
            "key": "NET-14",
            "fields": {
              "summary": "Delete Report",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10001",
                "id": "10001",
                "description": "A user story. Created by JIRA Software - do not edit or delete.",
                "iconUrl": "https://waracle.atlassian.net/images/icons/issuetypes/story.svg",
                "name": "Story",
                "subtask": false
              },
              "description": "As a user, I want to be able to delete a report. \r\n\r\n* Reports are stored locally\r\n* Checklists are stored locally\r\n* Content is sent to server to generate report\r\n* PDF stored on the server? do they report on this?\r\n* UI to view all reports \r\n* UI to delete reports",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "22309",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/22309",
            "key": "NET-15",
            "fields": {
              "summary": "Generate Reports on Server",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10002",
                "id": "10002",
                "description": "A task that needs to be done.",
                "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10318
              },
              "description": "\r\n* Investigate how server currently generates reports\r\n* How can this be modified to handle report generation?",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "22403",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/22403",
            "key": "NET-16",
            "fields": {
              "summary": "Global Search",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10001",
                "id": "10001",
                "description": "A user story. Created by JIRA Software - do not edit or delete.",
                "iconUrl": "https://waracle.atlassian.net/images/icons/issuetypes/story.svg",
                "name": "Story",
                "subtask": false
              },
              "description": "As a user, I want to be able to search for all content across the app\r\n\r\n* Tapping the search icon shows a text box for the user to enter their search term\r\n* results are returned in a list, grouped within their sectors. \r\n* Each result shows Sub-Sector and Topic they are stored within. \r\n* Tapping the list item should direct the user to the relevant checklist which they can complete as normal. \r\nNB. there is lots of repetition of checklists across topics and sub-topics",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "22501",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/22501",
            "key": "NET-17",
            "fields": {
              "summary": "Update report designs",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10001",
                "id": "10001",
                "description": "A user story. Created by JIRA Software - do not edit or delete.",
                "iconUrl": "https://waracle.atlassian.net/images/icons/issuetypes/story.svg",
                "name": "Story",
                "subtask": false
              },
              "description": "Jane to review layout for report. Can use existing for now",
              "issuelinks": [
                {
                  "id": "22010",
                  "self": "https://waracle.atlassian.net/rest/api/2/issueLink/22010",
                  "type": {
                    "id": "10003",
                    "name": "Relates",
                    "inward": "relates to",
                    "outward": "relates to",
                    "self": "https://waracle.atlassian.net/rest/api/2/issueLinkType/10003"
                  },
                  "outwardIssue": {
                    "id": "23208",
                    "key": "NET-43",
                    "self": "https://waracle.atlassian.net/rest/api/2/issue/23208",
                    "fields": {
                      "summary": "Emojis don't appear correctly in reports",
                      "status": {
                        "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                        "description": "Code has passed QA and is ready for release.",
                        "iconUrl": "https://waracle.atlassian.net/",
                        "name": "Done",
                        "id": "10001",
                        "statusCategory": {
                          "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                          "id": 3,
                          "key": "done",
                          "colorName": "green",
                          "name": "Done"
                        }
                      },
                      "priority": {
                        "self": "https://waracle.atlassian.net/rest/api/2/priority/3",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/priorities/medium.svg",
                        "name": "Medium",
                        "id": "3"
                      },
                      "issuetype": {
                        "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10004",
                        "id": "10004",
                        "description": "A problem which impairs or prevents the functions of the product.",
                        "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                        "name": "Bug",
                        "subtask": false,
                        "avatarId": 10303
                      }
                    }
                  }
                }
              ],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "22502",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/22502",
            "key": "NET-18",
            "fields": {
              "summary": "Implement new menu design",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10001",
                "id": "10001",
                "description": "A user story. Created by JIRA Software - do not edit or delete.",
                "iconUrl": "https://waracle.atlassian.net/images/icons/issuetypes/story.svg",
                "name": "Story",
                "subtask": false
              },
              "description": "* Menu accessible from air vent/hamburger icon at top left of screen\r\n* Tapping the icon shows the side menu and main screen moves to the right\r\n* Menu to show the following with icons as per prototype \r\n** Sectors (start screen, intentionally not called Home)\r\n** Favourites\r\n** Saved\r\n** Reports \r\n* Tapping the menu icon hides the menu and slides the main screen to the left. \r\n\r\n!Screen Shot 2017-03-16 at 13.17.19.png|thumbnail! ",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "22600",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/22600",
            "key": "NET-19",
            "fields": {
              "summary": "Add Comment to non-compliant response",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10001",
                "id": "10001",
                "description": "A user story. Created by JIRA Software - do not edit or delete.",
                "iconUrl": "https://waracle.atlassian.net/images/icons/issuetypes/story.svg",
                "name": "Story",
                "subtask": false
              },
              "description": "As a User, I must be forced to leave a comment on a non-compliant response\r\n\r\n* If user has given non-compliant answers they see the Points for Action screen\r\n* Points for actions screen lists support information for any questions that were not answered 'correctly'\r\n* Buttons at bottom of screen\r\n** Save for later\r\n** Add to report (disabled initially) \r\n* Show comments icon to force the user to add a comment to the question\r\n* Replace 'Close' with back Arrow\r\n* Display text \"Please review the points for action and leave a comment explaining why you gave the answer you did\"\r\n* Once all questions have a comment enable \"Add to Report button",
              "issuelinks": [
                {
                  "id": "22101",
                  "self": "https://waracle.atlassian.net/rest/api/2/issueLink/22101",
                  "type": {
                    "id": "10000",
                    "name": "Blocks",
                    "inward": "is blocked by",
                    "outward": "blocks",
                    "self": "https://waracle.atlassian.net/rest/api/2/issueLinkType/10000"
                  },
                  "inwardIssue": {
                    "id": "23302",
                    "key": "NET-46",
                    "self": "https://waracle.atlassian.net/rest/api/2/issue/23302",
                    "fields": {
                      "summary": "Comment dialog does not appear on the review page",
                      "status": {
                        "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                        "description": "Code has passed QA and is ready for release.",
                        "iconUrl": "https://waracle.atlassian.net/",
                        "name": "Done",
                        "id": "10001",
                        "statusCategory": {
                          "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                          "id": 3,
                          "key": "done",
                          "colorName": "green",
                          "name": "Done"
                        }
                      },
                      "priority": {
                        "self": "https://waracle.atlassian.net/rest/api/2/priority/3",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/priorities/medium.svg",
                        "name": "Medium",
                        "id": "3"
                      },
                      "issuetype": {
                        "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10004",
                        "id": "10004",
                        "description": "A problem which impairs or prevents the functions of the product.",
                        "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                        "name": "Bug",
                        "subtask": false,
                        "avatarId": 10303
                      }
                    }
                  }
                },
                {
                  "id": "22211",
                  "self": "https://waracle.atlassian.net/rest/api/2/issueLink/22211",
                  "type": {
                    "id": "10000",
                    "name": "Blocks",
                    "inward": "is blocked by",
                    "outward": "blocks",
                    "self": "https://waracle.atlassian.net/rest/api/2/issueLinkType/10000"
                  },
                  "inwardIssue": {
                    "id": "23417",
                    "key": "NET-51",
                    "self": "https://waracle.atlassian.net/rest/api/2/issue/23417",
                    "fields": {
                      "summary": "Previously saved comments persist in the View Points for Action section for new runs of the same checklist",
                      "status": {
                        "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                        "description": "Code has passed QA and is ready for release.",
                        "iconUrl": "https://waracle.atlassian.net/",
                        "name": "Done",
                        "id": "10001",
                        "statusCategory": {
                          "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                          "id": 3,
                          "key": "done",
                          "colorName": "green",
                          "name": "Done"
                        }
                      },
                      "priority": {
                        "self": "https://waracle.atlassian.net/rest/api/2/priority/3",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/priorities/medium.svg",
                        "name": "Medium",
                        "id": "3"
                      },
                      "issuetype": {
                        "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10004",
                        "id": "10004",
                        "description": "A problem which impairs or prevents the functions of the product.",
                        "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                        "name": "Bug",
                        "subtask": false,
                        "avatarId": 10303
                      }
                    }
                  }
                },
                {
                  "id": "22105",
                  "self": "https://waracle.atlassian.net/rest/api/2/issueLink/22105",
                  "type": {
                    "id": "10003",
                    "name": "Relates",
                    "inward": "relates to",
                    "outward": "relates to",
                    "self": "https://waracle.atlassian.net/rest/api/2/issueLinkType/10003"
                  },
                  "outwardIssue": {
                    "id": "23308",
                    "key": "NET-49",
                    "self": "https://waracle.atlassian.net/rest/api/2/issue/23308",
                    "fields": {
                      "summary": "Android back button when in 'View Points for action' doesn't navigate to Review Required page",
                      "status": {
                        "self": "https://waracle.atlassian.net/rest/api/2/status/10203",
                        "description": "",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/status_generic.gif",
                        "name": "Rejected",
                        "id": "10203",
                        "statusCategory": {
                          "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                          "id": 3,
                          "key": "done",
                          "colorName": "green",
                          "name": "Done"
                        }
                      },
                      "priority": {
                        "self": "https://waracle.atlassian.net/rest/api/2/priority/3",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/priorities/medium.svg",
                        "name": "Medium",
                        "id": "3"
                      },
                      "issuetype": {
                        "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10004",
                        "id": "10004",
                        "description": "A problem which impairs or prevents the functions of the product.",
                        "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                        "name": "Bug",
                        "subtask": false,
                        "avatarId": 10303
                      }
                    }
                  }
                }
              ],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "22734",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/22734",
            "key": "NET-22",
            "fields": {
              "summary": "Implement new report design",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10002",
                "id": "10002",
                "description": "A task that needs to be done.",
                "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10318
              },
              "description": "Update Report template. \r\nDave Henderson doing design. \r\n\r\nThis will not affect other stories as it's only replacing existing HTML. ",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "23009",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/23009",
            "key": "NET-29",
            "fields": {
              "summary": "Add character count for Comment box",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10001",
                "id": "10001",
                "description": "A user story. Created by JIRA Software - do not edit or delete.",
                "iconUrl": "https://waracle.atlassian.net/images/icons/issuetypes/story.svg",
                "name": "Story",
                "subtask": false
              },
              "description": "As a user adding a comment, I want to know how many characters I have written and have left so I can save my comment \r\n\r\n* Text \"Characters left: {xxxx}\"\r\n* Display underneath comment box to the left-hand side \r\n* Needless to say the character count should update as the user enters more characters",
              "issuelinks": [
                {
                  "id": "21950",
                  "self": "https://waracle.atlassian.net/rest/api/2/issueLink/21950",
                  "type": {
                    "id": "10003",
                    "name": "Relates",
                    "inward": "relates to",
                    "outward": "relates to",
                    "self": "https://waracle.atlassian.net/rest/api/2/issueLinkType/10003"
                  },
                  "outwardIssue": {
                    "id": "23141",
                    "key": "NET-41",
                    "self": "https://waracle.atlassian.net/rest/api/2/issue/23141",
                    "fields": {
                      "summary": "[Android] Max character count for comments is disregarded",
                      "status": {
                        "self": "https://waracle.atlassian.net/rest/api/2/status/1",
                        "description": "New story, not ready for development",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/statuses/open.png",
                        "name": "New",
                        "id": "1",
                        "statusCategory": {
                          "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/2",
                          "id": 2,
                          "key": "new",
                          "colorName": "blue-gray",
                          "name": "To Do"
                        }
                      },
                      "priority": {
                        "self": "https://waracle.atlassian.net/rest/api/2/priority/3",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/priorities/medium.svg",
                        "name": "Medium",
                        "id": "3"
                      },
                      "issuetype": {
                        "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10004",
                        "id": "10004",
                        "description": "A problem which impairs or prevents the functions of the product.",
                        "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                        "name": "Bug",
                        "subtask": false,
                        "avatarId": 10303
                      }
                    }
                  }
                },
                {
                  "id": "21949",
                  "self": "https://waracle.atlassian.net/rest/api/2/issueLink/21949",
                  "type": {
                    "id": "10003",
                    "name": "Relates",
                    "inward": "relates to",
                    "outward": "relates to",
                    "self": "https://waracle.atlassian.net/rest/api/2/issueLinkType/10003"
                  },
                  "outwardIssue": {
                    "id": "23140",
                    "key": "NET-40",
                    "self": "https://waracle.atlassian.net/rest/api/2/issue/23140",
                    "fields": {
                      "summary": "[iOS] Can't enter comments with 4000 chars",
                      "status": {
                        "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                        "description": "Code has passed QA and is ready for release.",
                        "iconUrl": "https://waracle.atlassian.net/",
                        "name": "Done",
                        "id": "10001",
                        "statusCategory": {
                          "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                          "id": 3,
                          "key": "done",
                          "colorName": "green",
                          "name": "Done"
                        }
                      },
                      "priority": {
                        "self": "https://waracle.atlassian.net/rest/api/2/priority/3",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/priorities/medium.svg",
                        "name": "Medium",
                        "id": "3"
                      },
                      "issuetype": {
                        "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10004",
                        "id": "10004",
                        "description": "A problem which impairs or prevents the functions of the product.",
                        "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                        "name": "Bug",
                        "subtask": false,
                        "avatarId": 10303
                      }
                    }
                  }
                }
              ],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "23015",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/23015",
            "key": "NET-33",
            "fields": {
              "summary": "Update Kumulos SDK",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10001",
                "id": "10001",
                "description": "A user story. Created by JIRA Software - do not edit or delete.",
                "iconUrl": "https://waracle.atlassian.net/images/icons/issuetypes/story.svg",
                "name": "Story",
                "subtask": false
              },
              "description": "Update Kumulos SDK with new version\r\n\r\nIntegration guide https://docs.kumulos.com/integration/cordova/",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "23111",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/23111",
            "key": "NET-34",
            "fields": {
              "summary": "Add warning when restarting a Saved Checklist",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10002",
                "id": "10002",
                "description": "A task that needs to be done.",
                "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10318
              },
              "description": "As a User restarting a checklist, I want to be warned that if I reset the checklist I will lose the previously saved version\r\n\r\nDesigns attached (please ignore erroneous 'Begin Checklist on the image) \r\n* If a user tried to start a checklist for which we have a saved version, display the following\r\n* Section title: Saved Checklists\r\n** x/y Complete\r\n** time and date saved 00:00 dd/mm/7777\r\n* Button to resume checklist should open previously saved version\r\n* Begin new checklist should discard the previous version and start new\r\n* Display warning: \"WARNING; This will discard your saved version\"\r\n* Display slots used \"1/1 slots used\"\r\n\r\n\r\n* If no saved version present, do not display any of the above",
              "issuelinks": [
                {
                  "id": "22212",
                  "self": "https://waracle.atlassian.net/rest/api/2/issueLink/22212",
                  "type": {
                    "id": "10003",
                    "name": "Relates",
                    "inward": "relates to",
                    "outward": "relates to",
                    "self": "https://waracle.atlassian.net/rest/api/2/issueLinkType/10003"
                  },
                  "outwardIssue": {
                    "id": "23418",
                    "key": "NET-52",
                    "self": "https://waracle.atlassian.net/rest/api/2/issue/23418",
                    "fields": {
                      "summary": "'Saved Checklist' information is partly hidden behind the Begin Checklist button bar",
                      "status": {
                        "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                        "description": "Code has passed QA and is ready for release.",
                        "iconUrl": "https://waracle.atlassian.net/",
                        "name": "Done",
                        "id": "10001",
                        "statusCategory": {
                          "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                          "id": 3,
                          "key": "done",
                          "colorName": "green",
                          "name": "Done"
                        }
                      },
                      "priority": {
                        "self": "https://waracle.atlassian.net/rest/api/2/priority/3",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/priorities/medium.svg",
                        "name": "Medium",
                        "id": "3"
                      },
                      "issuetype": {
                        "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10004",
                        "id": "10004",
                        "description": "A problem which impairs or prevents the functions of the product.",
                        "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                        "name": "Bug",
                        "subtask": false,
                        "avatarId": 10303
                      }
                    }
                  }
                },
                {
                  "id": "22213",
                  "self": "https://waracle.atlassian.net/rest/api/2/issueLink/22213",
                  "type": {
                    "id": "10003",
                    "name": "Relates",
                    "inward": "relates to",
                    "outward": "relates to",
                    "self": "https://waracle.atlassian.net/rest/api/2/issueLinkType/10003"
                  },
                  "outwardIssue": {
                    "id": "23419",
                    "key": "NET-53",
                    "self": "https://waracle.atlassian.net/rest/api/2/issue/23419",
                    "fields": {
                      "summary": "iOS - The date and time for saved checklists is displayed as a hyperlink",
                      "status": {
                        "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                        "description": "Code has passed QA and is ready for release.",
                        "iconUrl": "https://waracle.atlassian.net/",
                        "name": "Done",
                        "id": "10001",
                        "statusCategory": {
                          "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                          "id": 3,
                          "key": "done",
                          "colorName": "green",
                          "name": "Done"
                        }
                      },
                      "priority": {
                        "self": "https://waracle.atlassian.net/rest/api/2/priority/3",
                        "iconUrl": "https://waracle.atlassian.net/images/icons/priorities/medium.svg",
                        "name": "Medium",
                        "id": "3"
                      },
                      "issuetype": {
                        "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10004",
                        "id": "10004",
                        "description": "A problem which impairs or prevents the functions of the product.",
                        "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                        "name": "Bug",
                        "subtask": false,
                        "avatarId": 10303
                      }
                    }
                  }
                }
              ],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "23127",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/23127",
            "key": "NET-35",
            "fields": {
              "summary": "Improve performance of updating cache",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10001",
                "id": "10001",
                "description": "A user story. Created by JIRA Software - do not edit or delete.",
                "iconUrl": "https://waracle.atlassian.net/images/icons/issuetypes/story.svg",
                "name": "Story",
                "subtask": false
              },
              "description": "Updating the local cache from the Kumulous data was very slow.\r\n\r\nWe've change the code so the inserts for each table run in a single transaction per table, which has a massive effect on the performance.]\r\n\r\nObviously the data added should be identical to the previous code.",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "23136",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/23136",
            "key": "NET-37",
            "fields": {
              "summary": "'Begin Checklist' Button sticky footer",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10002",
                "id": "10002",
                "description": "A task that needs to be done.",
                "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10318
              },
              "description": "* Remove 'Begin checklist' from image\r\n* For all checklists (image or not) show 'Begin Checklist' button as a centred sticky footer\r\n* If there's lots of content, it should scroll behind button\r\n\r\n-[~j.wilson] to create screen for this-",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "23137",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/23137",
            "key": "NET-38",
            "fields": {
              "summary": "Checklists saved to a report should persist",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10002",
                "id": "10002",
                "description": "A task that needs to be done.",
                "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10318
              },
              "description": "* If a checklist has been added to a report, it should be preserved until the user deletes the report. \r\n* Save to Report makes read-only\r\n* Checklist should behave as previously, whereby a draft is saved and a user is asked whether they want to start new/continue\r\nNB a checklist can only be added to one report. There is no mechanism to move a report. If the user has made a mistake, they have to delete the report and start the checklist again\r\n",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "23207",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/23207",
            "key": "NET-42",
            "fields": {
              "summary": "Replace 'Share' button with 'View Report'",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10002",
                "id": "10002",
                "description": "A task that needs to be done.",
                "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10318
              },
              "description": "Current implementation has {{Share}} underneath the list of checklists within a report. \r\nThis is misleading as Sharing is done when the user is viewing the report. \r\n\r\n* Replace {{share}} with {{View Report}}\r\n* Remove Share icon from top bar\r\n",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "23300",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/23300",
            "key": "NET-45",
            "fields": {
              "summary": "Format to correct/incorrect response",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10002",
                "id": "10002",
                "description": "A task that needs to be done.",
                "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10318
              },
              "description": "Client request and confirmed in phone call:\r\n\r\n\"At the right hand side it displays the answer in the following format 'W: yes / A: yes', I know this is something that was included in the previous reports but is it possible to just have the answer given and if its correct/compliant could it be in green and if something needs to be addressed could the answer be in red?\"",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "23409",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/23409",
            "key": "NET-50",
            "fields": {
              "summary": "Change in search result's link",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10002",
                "id": "10002",
                "description": "A task that needs to be done.",
                "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10318
              },
              "description": "Adding this one at [~r.bate]'s request:\r\n\r\nThis task is to change the functionality outlined in NET-16\r\nTapping a search result should take the user to the summary page (_so they can see the warning_) rather than the checklist",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "23429",
            "self": "https://waracle.atlassian.net/rest/api/2/issue/23429",
            "key": "NET-54",
            "fields": {
              "summary": "Ensure that the old PDF generation works after the changes have been implemented",
              "issuetype": {
                "self": "https://waracle.atlassian.net/rest/api/2/issuetype/10002",
                "id": "10002",
                "description": "A task that needs to be done.",
                "iconUrl": "https://waracle.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10318
              },
              "description": "We have to make sure that the old version of the pdf generator still works after the server has been changed to handle the new version of the pdf generation.\r\nThis involves making sure that the old version of the app successfully receives the pdf generated by the \"old code\".",
              "issuelinks": [],
              "status": {
                "self": "https://waracle.atlassian.net/rest/api/2/status/10001",
                "description": "Code has passed QA and is ready for release.",
                "iconUrl": "https://waracle.atlassian.net/",
                "name": "Done",
                "id": "10001",
                "statusCategory": {
                  "self": "https://waracle.atlassian.net/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              }
            }
          }
        ]
      }
};

module.exports = globals;