import type { APIRoute, APIContext } from "astro";

function getSimpleResponse() {
  return new Promise<Response>((resolve, reject) => {
    setTimeout(() => {
      // Create a simple Response object
      const response = new Response(
        JSON.stringify({ message: "Hello, World!" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Resolve the promise with the response
      resolve(response);
    }, 1000); // Simulate a 1-second delay
  });
}

export const POST: APIRoute = async (context: APIContext) => {
  const formData = await context.request.formData();
  return getSimpleResponse();
};
