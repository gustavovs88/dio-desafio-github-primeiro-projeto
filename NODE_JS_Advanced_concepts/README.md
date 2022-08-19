# Node JS Advanced Concepts by Stephen Grider on UDEMY

Get advanced with Node.Js! Learn caching with Redis, speed up through clustering, and add image upload with S3 and Node!

## Main topics

 - Master the Node Event Loop - understand how Node executes your source code. 
 - Understand the purpose of Node, and how the code you write is eventually executed by  C++ code in the V8 engine
 - Add a huge boost to performance in your Node app through clustering and worker threads
 - Turbocharge MongoDB queries by adding query caching backed by a lightning-fast Redis instance
 - Scale your app to infinity with image and file upload backed by Amazon's S3 file service
 - Implement a continuous integration testing pipeline so you always know your project functions properly
 - Think you know everything there is about managing  cookies and session?  Well, you might, but learn even more!
 - Ensure your app works the way you expect with automated browser testing using Jest and Puppeteer
 - Bonus - learn advanced JS techniques along the way, including where to use ES2015 proxies!

### Chapter 1 - The internals of Node

V8, libUV, threads and Event Loop

#### V8

#### libUV

#### Threads and libUV thread pool

#### The Event Loop


### Chapter 2 - Enhancing the performance

Clustering, PM2 and worker threads

#### Clustering



#### PM2

[PM2](https://pm2.keymetrics.io/) is a daemon process manager that will help you manage and keep your application online 24/7

It manages clustering, uptime and other stuff of your node project.

#### Worker threads

Workers (threads) are useful for performing CPU-intensive JavaScript operations. They do not help much with I/O-intensive work. The Node.js built-in asynchronous I/O operations are more efficient than Workers can be.

Unlike child_process or cluster, worker_threads can share memory. They do so by transferring ArrayBuffer instances or sharing SharedArrayBuffer instances.

[Official Doc - node v16](https://nodejs.org/docs/latest-v16.x/api/worker_threads.html)
[Worker Thread Pool](https://nodejs.org/docs/latest-v16.x/api/async_context.html#using-asyncresource-for-a-worker-thread-pool)