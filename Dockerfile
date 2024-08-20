# For more info on how S2I works see https://github.com/sclorg/s2i-nodejs-container/blob/master/20/README.md

FROM quay.io/fedora/nodejs-20

USER 0
ADD . /tmp/src
RUN chown -R 1001:0 /tmp/src
USER 1001

RUN /usr/libexec/s2i/assemble

CMD /usr/libexec/s2i/run
