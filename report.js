const reporter = require('cucumber-html-reporter')

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber-report.json',
  output: './reports/pretty_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  name: 'BLDR Test',
  storeScreenshots: true,
  noInlineScreenshots: true,
  brandTitle: 'Cucumber automatic tests',
  screenshotsDirectory: '/screenshots/',
  metadata: {
    'App Version': '0.0.1',
    'Test Environment': 'Testing Environment',
    Browser: 'Chrome    96.0.4664.45',
    Platform: 'Mac Os',
    Parallel: 'Scenarios',
    Executed: 'Local System',
  },
  title: 'Cucumber Test Report',
  description: 'Detailed report of Cucumber tests',
  css: './custom.css',
  progressBar: true,
  progressBarColor: 'green',
  timeline: true,
  timelineColor: 'blue',
  summary: true,
  summaryTableHeader: 'Test Results',
  detailed: true,
  detailedViewHeader: 'Scenario Details',
}

reporter.generate(options)
