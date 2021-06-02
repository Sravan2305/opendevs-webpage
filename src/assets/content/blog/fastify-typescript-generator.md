---
title: fastify typeScript generator, a generator for creating fastify server with typescript
author: mihir kumar
date: 2020-09-01T07:00:00Z
hero_image: "https://miro.medium.com/max/2560/1*V8vAkYA9QOi-gLKh68mtOg.jpeg"

---
hi everyone, 👋
today we’ll learn to use a great generator tool to create a fastify server in everyone’s favourite typescript language. 👨‍💻

## now the first question first, what is fastify?

![https://fastify.io/](https://dev-to-uploads.s3.amazonaws.com/i/ob3zjtv5rudp4x0pq6hy.png)

if you are coming from Node.js background you must have heard of expressjs, it is a web application framework that provides you with a simple API to build websites, web apps and back ends. Now express can be considered as a bit slower. fastify is detailed as a “fast and low overhead web framework, for Node.js”. fastify is a web framework highly focused on speed and low overhead. it is inspired by express and hapi, it is one of the fastest web frameworks in town. using fastify can increase your throughput by up to 100%.

**advantages of using fastify?**
* 100% asynchronous: all the core is implemented with asynchronous code, in this way not even a millisecond is wasted.
* highly performant: as far as we know, fastify is one of the fastest web frameworks in town, depending on the code complexity we can serve up to 20000 requests per second.
* extendible: **fastify** is fully extensible via its hooks, plugins, and decorators.

![https://fastify.io/benchmarks/](https://dev-to-uploads.s3.amazonaws.com/i/7erqnz4z1q9fg38swqz8.png)

**why do we need a generator?**
to scaffold applications quicker we need a generator to provide us with a basic useful template on which we can expand based on our requirements.

## & so comes fastify-typescript-generator

![https://npmjs.com/package/fastify-typescript-generator](https://dev-to-uploads.s3.amazonaws.com/i/aoufvtxsjg43varjfqor.png)

we created this generator keeping few things in mind:

* using typescript in our templates for better coding standards & attain all the other benefits of typescript.
* providing a template for people familiar with express
* providing a template for people wanting to familiarize themselves with the concept of fastify and it’s the plugin system.
* providing templates with the option to choose between mongoose (a well known MongoDB driver in node.js world supporting schema) & TypeORM which is an ORM that can be used to connect to various SQL as well as MongoDB database (MongoDB connection in BETA) & work with them built specifically keeping typescript in mind.
* some templates have OpenAPI (previously Swagger) implementation
* a cool interactive CLI

so please check it out. it’s already gaining tracking in the community.

### ✨ [npm link](https://www.npmjs.com/package/fastify-typescript-generator)

## how to use it?

![https://github.com/open-devs/fastify-typescript-generator#-demo](https://dev-to-uploads.s3.amazonaws.com/i/y2712lt025tf8xgjh5sv.gif)

or in textual form:

### install

```js
npm i -g fastify-typescript-generator
```

### usage

run anyone of following commands:

```js
fastify-gen
# or
fastify-typescript-generator
# or
fastify-ts-gen
```

### so let's build some fast servers & give this project an ⭐ at [github](https://github.com/open-devs/fastify-typescript-generator) or [buy us a coffee](https://www.buymeacoffee.com/opendevs)?

## who are we?

we are **open devs** an organization of two motivated developers ([@alok722](https://github.com/alok722), [@mikr13](https://github.com/mikr13)) building open source tools & software to contribute to the community. we are very welcoming towards collaboration & new people joining us in any capacity with a vision to profit community in terms of great tools and education.
you can join us in various places:
[github](https://github.com/open-devs)
[twitter](https://twitter.com/opendevs_2020)
[website](https://opendevs.in)
