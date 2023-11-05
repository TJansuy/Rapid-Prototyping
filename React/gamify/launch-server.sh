#!/bin/bash
if cd gamify && npm run build ; then
    docker compose build
    docker compose up --force-recreate
fi