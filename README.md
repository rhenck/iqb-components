# IqbComponents

This is a library of recurrent components in Angular-Projects of the IQB. 

## how to include

_upcoming_

## show case app for development

This contains a showcase App for developers to try out each component and also for the automated tests. 

### installation and deployment

```
    git clone https://github.com/iqb-berlin/iqb-components.git
    npm install
    ng serve
```

### Testing

````
    #e2e tests with protractor
    ng e2e
  
    #unit tests with karma
    export CHROME_BIN=/bin/chromium #this is an example. you have to fill CHROME_BIN
    ng test  
    
````

### default ports

* deployment: 4207
* e2e-tests: 4208

### minimum requirements

* node v8
* chrome (tests are set up for for testing with chrome but could be done with firefox as well)

## How to include new component

* place component under `src/app/components`
* include component in module in `src/app/components/iqb-components.module.ts`
* make a testing card in the showcase app for your component in `src/app/showcase.component.*`
* write unit test in same folder like component. You can use ... to auto-generate a skeleton for the unit test
* write a e2e-test for your component in e2e/src
