# Monero Node Dashboard

[![Docker Build](https://github.com/brechtdoran/monero-node-dashboard/actions/workflows/main.yml/badge.svg)](https://github.com/brechtdoran/monero-node-dashboard/actions/workflows/main.yml)
![Docker Pulls](https://img.shields.io/docker/pulls/brechtdoran/monero-node-dashboard)
![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/brechtdoran/monero-node-dashboard)

![Screenshot](https://raw.githubusercontent.com/brechtdoran/monero-node-dashboard/main/assets/screenshot.png)

Monero Node Dashboard is a simple dashboard for your local Monero node.

Restricted node [demo](https://monero-node-dashboard.vercel.app/).

## Installing with Docker

To start up the Monero Node Dashboard, simply run:

```bash
docker compose up
```

This will run the example `docker-compose.yml` file, which will use [sethforprivacy/simple-monerod-docker](https://github.com/sethforprivacy/simple-monerod-docker) to spin up a local Monero Node.

```
version: '3'

services:
  dashboard:
    image: brechtdoran/monero-node-dashboard:latest
    restart: unless-stopped
    environment:
      - MONERO_HOST=localhost
      - MONERO_PORT=18081
    network_mode: service:node
  node:
    image: sethsimmons/simple-monerod:latest
    restart: unless-stopped
    volumes:
      - monero-chain-data:/home/monero/.bitmonero
      - monero-wallet-data:/wallet
    ports:
      - 18080:18080
      - 18089:18089
      - 3000:3000
    command:
      - --rpc-restricted-bind-ip=0.0.0.0
      - --rpc-restricted-bind-port=18089
      - --no-igd
      - --no-zmq
      - --enable-dns-blocklist
    networks:
      - monero_net

volumes:
  monero-chain-data:
  monero-wallet-data:

networks:
  monero_net:
    driver: bridge
```
