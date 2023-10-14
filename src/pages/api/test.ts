import type { APIRoute } from "astro";

export async function GET() {
  return new Response(JSON.stringify({ message: "Hello World" }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};
