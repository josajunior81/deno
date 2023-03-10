import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const port = 80;

const handler = (request: Request): Response => {
  const body = `
  Response from server: ${Deno.args}  \n\n
  Your user-agent is:\n\n${
    request.headers.get("user-agent") ?? "Unknown"
  }`;

  return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
