[![npm](https://img.shields.io/npm/v/iqb-components.svg?style=flat-square)](https://www.npmjs.com/package/iqb-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
 

# IqbComponents

This is a library of recurrent components in Angular-Projects of the IQB. 

## How to use

```
npm install iqb-components
```

## for developers

### Show Case App for Development

This contains a showcase App for developers to try out each component and also for the automated tests. 

#### Installation and Deployment

```
git clone https://github.com/iqb-berlin/iqb-components.git
npm install
ng serve
```

#### Testing

````
#e2e tests with protractor
ng e2e

#unit tests with karma
export CHROME_BIN=/bin/chromium #this is an example. you have to fill CHROME_BIN
ng test  
````

#### Default Ports

* deployment: 4207
* e2e-tests: 4208

#### Minimum Requirements

* node v8
* chrome (tests are set up for for testing with chrome but could be done with firefox as well)

### How to include a new component

#### new component check list

* clone repository and install showcase up (see above)
* place component under `src/app/components`
* include component in module in `src/app/components/iqb-components.module.ts`
* export component from barrel file: `src/app/components/public_api.ts` 
* make a testing card in the showcase app for your component in `src/app/showcase.component.*`
* write unit test in same folder like component. You can use ... to auto-generate a skeleton for the unit test
* write a e2e-test for your component in e2e/src

#### publish new version of components lib

* change version tag in `src/app/components/package.json` to new {version}
* `npm run build:lib`
* `npm login`
* `npm publish dist`
* `git tag {version}`
* `git push` # or pull request
* `git push origin {version}`
