FROM node

ENV PROJECT jsbumbling
WORKDIR /opt/${PROJECT}

RUN apt-get update && apt-get install -y nginx make 

COPY ./ /opt/${PROJECT}
COPY docker-config/bashrc /root/.bashrc

RUN ln -sf /opt/${PROJECT}/etc/nginx/site.conf /etc/nginx/sites-enabled/default

COPY ./docker-config/entrypoint.sh /usr/local/bin/entrypoint
RUN chmod +x /usr/local/bin/entrypoint
ENTRYPOINT ["/usr/local/bin/entrypoint"]
