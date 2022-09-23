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
      - MONERO_HOST=172.16.0.2
      - MONERO_PORT=18081
    ports:
      - 3000:3000
    networks:
      monero_net:
        ipv4_address: 172.16.0.3
  node:
    image: sethsimmons/simple-monerod
    restart: unless-stopped
    volumes:
      - monero-chain-data:/home/monero/.bitmonero
      - monero-wallet-data:/wallet
    ports:
      - 18080:18080
      - 18089:18089
    command:
      - --rpc-bind-ip=172.16.0.2
      - --rpc-bind-port=18081
      - --confirm-external-bind
      - --rpc-restricted-bind-ip=0.0.0.0
      - --rpc-restricted-bind-port=18089
      - --no-igd
      - --no-zmq
      - --enable-dns-blocklist
    networks:
      monero_net:
        ipv4_address: 172.16.0.2

volumes:
  monero-chain-data:
  monero-wallet-data:

networks:
  monero_net:
    ipam:
      driver: default
      config:
        - subnet: 172.16.0.0/16
```

### Already have a Monero Node?

The Monero Node Dashboard can both be connected to a open and restricted Monero Node. Most of (if not all) public nodes are restricted, because of security reasons.

To open up your own Monero Node to the dashboard, you'll have to make some configuration changes on the node (See [Monero Node Docs](https://monerodocs.org/interacting/monerod-reference/) for reference).

**monerod.conf**

```
rpc-bind-ip=<dashboard IP>
rpc-bind-port=18081
confirm-external-bind=1
```

Proceed to open port 18081/TCP on your node host machine, this is different per hosting environment.

Then you'll be able to connect to the Monero Node with changes to the Monero Node Dashboard environment variables.

```
MONERO_HOST=<monero node IP>
MONERO_PORT=18081
```
