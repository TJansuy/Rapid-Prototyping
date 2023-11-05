#!/bin/bash
(cd gamify && npm run build)
docker compose build
docker compose up --force-recreate
