# playwright_upload_error_demo

This project demonstrates an error with playwright and (larger) multipart requests in the application.

If the application sends a larger multipart request, the browser throws an error instead of sending the request:

![screenshot](/screenshot.png)

## Project Setup

```sh
yarn install
yarn playwright install
```

### Start frontend & backend

```sh
yarn dev
```

### Run tests

```sh
yarn test:e2e --headed
```
