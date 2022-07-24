# Node.js Clusters

## Tests

### Load Test

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
