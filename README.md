# nodejs-jdg
NodeJS microservice with persistence on JDG


### Running locally 
* npm install

* node app.js

## Swagger docs
http://127.0.0.1:8080/docs/

### Deploy project on Openshift via oc CLI

----
$ git clone https://github.com/gustavonalle/nodejs-jdg   
$ oc policy add-role-to-user view system:serviceaccount:$(oc project -q):default -n $(oc project -q)   
$ oc create -f openshift/templates/jdg-template.json  
$ oc process jdg-nodejs | oc create -f -   

----

### Test the service endpoint

http://greeter-helloworld-msa.rhel-cdk.10.1.2.2.xip.io/docs/#/default

