const Koa = require('koa');
const cors = require('@koa/cors');
const { add } = require('@my-scope/core');

const app = new Koa();

app.use(cors());

app.use(async ctx => {
  ctx.body = {
    message: `Hello word ${add(5, 5)}`
  };
});

app.listen(3000);
