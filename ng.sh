#!/bin/bash

docker-compose run -u $(id -u) ui ng ${*}
