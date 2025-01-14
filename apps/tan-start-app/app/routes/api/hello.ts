// routes/api/hello.ts
import { createAPIFileRoute } from '@tanstack/start/api';

export const APIRoute = createAPIFileRoute('/api/hello')({
  GET: async ({ request }: { request: Request }) => {
    return new Response('Hello, World! from ' + request.url);
  }
});
