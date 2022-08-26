module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  context.res.json({
    text: "Hello from the API, simple message from the backend to Catalina.",
  });
};
