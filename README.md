# fastify-ejs-template

Minimal Fastify template using the [EJS view engine](https://github.com/mde/ejs), plus [nodemon](https://github.com/remy/nodemon) and [pino-colada](https://github.com/lrlna/pino-colada) for development, partially based on Fastify CLI's generate command

---

## Initial setup

Change `name`, `author` and `license` in package.json to what you want.

## Running the server

Simply run `npm start` or `npm run dev` according to your needs.

## Registering plugins

Register the plugins you need after the three plugins (`fastify-sensible`, `fastify-static` and `point-of-view`) already listed in app.js under the comment `// Register your plugins here`  
One plugin I recommend is [fastify-helmet](https://github.com/fastify/fastify-helmet) if you want to use Fastify in production.

## Adding Intellisense to Fastify plugins!

If you're anything like me, you'd probably be annoyed that by default, Fastify barely supports any autocomplete features in VScode out of the box. Fortunately with JSdoc, you can do something about it. But if you don't know JSdoc like me, it can be frustrating.  
So I did some digging and here's a quick 'tutorial' on adding Intellisense (VScode autocomplete) to a Fastify project.  
(Note that my explanations are just based on patterns that make sense in my head, please do correct me if I'm wrong, and I will update this page.)

### Annotating a variable (I've included an example)

I've applied a `@type` annotation on top of the Fastify instance variable in the main script `app.js`.  
So you can apply a `@type` annotation above a variable declaration, open a pair of curly brackets then `import` the same module name you `require`d. You might need some trial and error to access a matching subclass, but sometimes that isn't necessary (I'll give an example soon).  
The good news about annotating the Fastify instance variable is that it seems to already support plugins to some degree (point-of-view seems to work fine, fastify-socket.io doesn't. I haven't found a way to properly annotate methods yet like `fastify.io.emit('something')`.)

```js
/** @type {import('fastify').FastifyInstance} */
const fastify = require('fastify')({
  logger: true,
})
```

### Annotating parameters (I've included examples too)

This is where it gets useful for you. Since `fastify` here is a parameter we can annotate it with `@param`. And the best part - we can specify it multiple times! So here is an example of me adding point-of-view (plugin for view engine support) Intellisense support along with the main Fastify instance. And you can add support for the plugins you use too.

```js
/**
 * @param {import("fastify").FastifyInstance} fastify
 * @param {import('point-of-view')} fastify
 * your param statement here...
 */
module.exports = async (fastify, opts) => {
  fastify.get('/', (request, reply) => {
    reply.view('index')
  })
}
```

Remember I wrote that accessing a matching subclass sometimes isn't necessary? Here is the example! You can see that we're just importing point-of-view here, not a class inside it.

## Suggestions!

Feel free to leave suggestions as issues or pull requests. I will come back and update this page occasionally, especially for the 'Adding Intellisense' part.

## Resources

https://github.com/fastify/fastify/issues/2829
https://jsdoc.app/index.html
https://github.com/fastify/fastify-cli
