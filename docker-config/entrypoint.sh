#!/bin/bash

function __show_help() {
  echo "Container entrypoint commands:"
  echo ""
  echo "Any other command will be executed within the container."
}

service nginx start

case ${1} in
*)
  exec "$@"
  ;;
esac
