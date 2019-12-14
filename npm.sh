#!/bin/bash

# `npm install` only works with the --no-bin-links flag
CMD=${*}
if [ ${1} = "npm install" ]; then
    CMD+=" --no-bin-links"
fi

# Add build env vars that need to be set for the build here.  For configuration
# of API endpoints, and other deployment environment specific settings.  This is
# static js/html/css builder. Served with stock nginx.
# -e BUILD_ENV_VAR="$BUILD_ENV_VAR"
docker run --rm \
    --name=node-$$ \
    -u root \
    -v $(pwd):/usr/src/app \
    -w "/usr/src/app" \
    -e CHROME_BIN=/usr/bin/chromium-browser \
    zenika/alpine-chrome:with-node ${CMD}
