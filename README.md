# nodejs-jdg
NodeJS microservice with persistence on JDG


### Running locally 
* npm install

* node app.js

## Swagger docs
http://127.0.0.1:8080/docs/

### Deploy project on Openshift via oc CLI

#### Basic project creation

----
$ git clone https://github.com/gustavonalle/nodejs-jdg 
$ cd greeter/  
$ oc new-build --binary --name=greeter -l app=greeter  
$ npm install; oc start-build greeter --from-dir=. --follow  
$ oc new-app greeter -l app=greeter
$ oc expose service greeter 

----

### Test the service endpoint

http://greeter-helloworld-msa.rhel-cdk.10.1.2.2.xip.io/docs/#/default

