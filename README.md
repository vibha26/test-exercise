# test-exercise

## Pre-requisites

Platform: NodeJS 12.x

## Using NightwatchJS

### Install NightwatchJS

```sh
# install globally for nightwatch cli
npm install nightwatch -g
```

### Running Tests

1. Clone this repo
1. Edit the `nightwatchjs/fixtures/user.json`
1. Set the correct values for `user.valid.username` and `user.valid.password`


```sh
cd nightwatchjs
npm install
npm test
```

The test will run against the url and generate a report.

### Known Issues with Chromedriver

If you have trouble installing chromedriver (via npm), follow these steps for a workaround. There is a bug where npm does install the chromedriver correctly to node_modules/ directory.

1. Find out Chrome's version
1. Goto https://chromedriver.chromium.org/downloads and download the corresponding version to your Downloads directory and unzip it

```sh
cd nightwatchjs
mkdir -p chromedriver/bin
cp Downloads/chromedriver chromedriver/bin
```

You do not need to run npm install again. Just run npm test.

## Using Cypress

### Install Cypress

1. Edit the `apricity-cypress/cypress/fixtures/data.json`
1. Set the correct values for `login.username` and `login.userpassword`


```sh
cp apricity-cypress
npm install
npm test
```
