# dspace-frontend-demo

Node/Express demo frontend for DSpace (Electronic Library) REST API

## Install

```shell
> git clone https://github.com/vit/dspace-frontend-demo.git
> cd dspace-frontend-demo
> npm install
```

## Config file

```shell
> vim config/default.json
```

Type and save:
```json
{
    "remote_server": {
        "host": "https://dspace.example.com",
        "path": "/rest"
    }
}
```

## Run server

```shell
> npm start
```

... or run on custom port:
```shell
> PORT=8080 npm start
```

## ...or run without config file at all

```shell
> REMOTE_HOST="https://dspace.example.com" REMOTE_PATH="/rest" PORT=8080 npm start
```

