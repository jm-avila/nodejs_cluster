# Node.js Clusters

## Why should I use clusters?

JavaScript is a single-threaded, non-blocking, asynchronous, concurrent programming language with lots of flexibility.

By default, every line in a function executes sequentially, one line at a time. Functions are added and poped from the call stack. Everything that happens within the stack is sequential, the main thread will finish the stack before going on with anything else. This is synchronous JS.

Some operations take a long time, whether it's a network requests, long-running calculations, file system operations or any other the reasons. The engine shouldn't halt the execution of the other sequential code.

In Node we have two primary triggers:

- Web API events or functions, like setTimeout.
- Promises, a JS object that allows us to perform asynchronous operations.

This is asynchronous JS.

Even with the Call Stack, Callback Queue and Job Queue, the node.js process remains single-threaded. It doesn't take full advantage of the host machine.

If too many request are performed simultaneously, the server instance will overload before the machine overloads. With clusters we can use a machine full potential by having many call stacks. Even is a synchronous operation takes a long time blocking it's process call stack, the other requests won't as the will be place in a different call stack.

We can use node.js clusters with the Cluster module or with PM2.

### Cluster module

A single instance of Node.js run in a single thread. Clusters enable us to create child processes that share the same port, thus allowing us to take advantage of a multi-core system.

The worker processes are spawned using the child_process.fork() method, so that they can communicate with the parent via IPC and pass server handles back and forth.

The cluster module supports two methods of distributing incoming connections.

More at the [Official Docs](https://nodejs.org/api/cluster.html)

### PM2 clusters

PM2 is an advanced, production process manager fon Node.js that will help you manage and keep your application online 24/7.

More at the [offical docs](https://pm2.keymetrics.io/docs/usage/quick-start/)

1. Install PM2
   You can install it globally

```
   npm i --global pm2
```

or as a dev dependencies for testing, you would need to call it via package.json scripts.

```
   npm i --save-dev pm2
```

2. Generate ecosystem file

```
   pm2 ecosystem
```

3. Configure ecosystem file, for example as in the repo file.

4. Start the apps using the ecosystem file

```
   pm2 start ecosystem.config.js
```

5. View Logs

```
   pm2 logs [APP_NAME]
```

6. Kill daemon process

```
   pm2 kill
```

7. For more commands

```
   pm2 -h
```

## Load Test

With [loadtest](https://www.npmjs.com/package/loadtest) we perform a load test on the selected HTTP URL.

```bash
npm run loadtest
```

The command at the package script:

```
loadtest -n 1000 -c 100 --rps 200 http://localhost:7000/5

```

The parameters used:

```
   -n => Max number of requests
   -c => Concurrent requests
--rps => Number of requests per second
```
