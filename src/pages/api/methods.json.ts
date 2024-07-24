import type { APIRoute, APIContext } from "astro";

function getSimpleResponse() {
  return new Promise<Response>((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
      // Create a simple Response object
      const response = new Response(JSON.stringify({ message: "Hello, World!" }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Resolve the promise with the response
      resolve(response);
    }, 1000); // Simulate a 1-second delay
  });
}

export const GET: APIRoute = ({}) => {
  return new Response(
    JSON.stringify({
      message: "This was a GET!",
    })
  );
};

export const POST: APIRoute = ({}) => {
  return new Response(
    JSON.stringify({
      message: "This was a POST!",
    })
  );
};

export const DELETE: APIRoute = ({}) => {
  return getSimpleResponse();
};

// ALL matches any method that you haven't implemented.
export const ALL: APIRoute = (context: APIContext) => {
  console.log(context.request.body);
  return new Response(
    JSON.stringify({
      message: `This was a ${context.request.method}!`,
    })
  );
};
