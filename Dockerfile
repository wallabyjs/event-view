FROM node:4

# Use non-root user per Docker security recommendations
RUN mkdir /ngapp && \
    groupadd -r ngapp && \
    useradd -r -g ngapp -d /ngapp -s /sbin/nologin ngapp && \
    chown -R ngapp:ngapp /ngapp

ENV NODE_ENV=development

WORKDIR /ngapp
COPY *.json /ngapp/
RUN npm install --unsafe-perm=true

COPY . /ngapp
RUN chown -R ngapp:ngapp /ngapp
USER ngapp
RUN npm run tsc

EXPOSE 3000 3001
CMD npm run lite
