export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext) {
    return new Response("Hello from Alosa Worker!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
