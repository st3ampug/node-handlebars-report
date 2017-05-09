const GLOBALS = {
    EMPTY: "",
    ERRORDISPLAY: "errordisplay",
    ERRORDELAY: 4500,
    PROJECTSELECTIONPAGE: "projects",
    ISSUESSELECTIONPAGE: "issues",
    REPORTPAGE: "report",

    filterIDs: {
        Story: {
            storyCollapse: "collapse-icon-story",
            storyExpand: "expand-icon-story",
            storyExpanded: "filter-expanded-story",
            storyCollapsed: "filter-collapsed-story",
            storyVersion: "story-versionfilter-select",
            storyStatus: "story-statusfilter-select",
            storySprint: "story-sprintfilter-select",
            storyStartDate: "story-datefilter-start",
            storyEndDate: "story-datefilter-end"
        }, 

        Task: {
            taskCollapse: "collapse-icon-task",
            taskExpand: "expand-icon-task",
            taskExpanded: "filter-expanded-task",
            taskCollapsed: "filter-collapsed-task",
            taskVersion: "task-versionfilter-select",
            taskStatus: "task-statusfilter-select",
            taskSprint: "task-sprintfilter-select"
        },

        Bug: {
            bugCollapse: "collapse-icon-bug",
            bugExpand: "expand-icon-bug",
            bugExpanded: "filter-expanded-bug",
            bugCollapsed: "filter-collapsed-bug",
            bugVersion: "bug-versionfilter-select",
            bugStatus: "bug-statusfilter-select",
            bugSprint: "bug-sprintfilter-select"
        },

        TPlan: {
            tplanCollapse: "collapse-icon-tplan",
            tplanExpand: "expand-icon-tplan",
            tplanExpanded: "filter-expanded-tplan",
            tplanCollapsed: "filter-collapsed-tplan"
        },

        TRun: {
            trunCollapse: "collapse-icon-trun",
            trunExpand: "expand-icon-trun",
            trunExpanded: "filter-expanded-trun",
            trunCollapsed: "filter-collapsed-trun"
        },

        storyVersion: "story-versionfilter",
        storyStatus: "story-statusfilter",
        storySprint: "story-sprintfilter",
        taskVersion: "task-versionfilter",
        taskStatus: "task-statusfilter",
        taskSprint: "task-sprintfilter",
        bugVersion: "bug-versionfilter",
        bugStatus: "bug-statusfilter",
        bugSprint: "bug-sprintfilter",
        tplanSearch: "tplan-searchfilter",
        trunSearch: "trun-searchfilter"
    },

    tableIDs: {
        storiesTableID: "storiestable",
        tasksTableID: "taskstable",
        bugsTableID: "bugstable",
        testplansTableID: "testplanstable",
        testrunsTableID: "testrunstable"
    },

    navIDs: {
        templateSelection: "nav-01",
        projectSelection: "nav-02",
        issueSelection: "nav-03"
    },

    pics: {
        loading: "dashinfinity.gif",
        collapse: "collapse.png",
        expand: "expand.png"
    },

    errorMessages: {
        startdateEarlier: "Start date has to be ealier than the end date",
        enddateLater: "End date has to be later than the start date"
    }
};