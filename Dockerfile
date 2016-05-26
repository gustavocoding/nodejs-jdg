FROM openshift3/nodejs-010-rhel7

ADD . /opt/app-root/src/

EXPOSE 10010 

CMD /bin/bash -c 'npm start'
