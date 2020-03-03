# Microservices Tinker (mses-tinker)

Nothing particularly exciting going on in here, just fiddling around with Microservices using Docker + Node (TS).

## Setting up

If you'd like to fiddle around with this yourself;

- Modify `/etc/hosts`, add the following new lines to the end of the file;
```
127.0.0.1 mses-auth
127.0.0.1 mses-data
127.0.0.1 mses-notifications
```

- Clone this repo

- Run `make dev` or `docker-compose up --build` if you don't have `make` installed. You will see a _lot_ of output.
Eventually you will see `mses_notifications`, `mses_data` and `mses_auth` report that they are running - the applications have now started.

- Navigate to the following URLs in your browser;
```
http://mses-auth/api/ping
http://mses-data/api/ping
http://mses-notifications/api/ping
```

You should see a response following this format;
```json
{ 
  "status":200,
  "message":"Pong from mses-[SERVICE-NAME]"
}
```

- To stop the server just hit `ctrl + c`
- To start the servers again in `detached` mode, run `make headless`
- To stop the servers again while in `detached` mode, run `make stop`
