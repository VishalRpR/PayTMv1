FROM mongo:4.4.7
RUN echo "rs.initiate();" > /docker-entrypoint-initdb.d/replica-init.js
CMD [ "--replSet", "rs", "--bind_ip", "0.0.0.0" ]
