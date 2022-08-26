module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  context.res.json({
    text: "Hi Cata, this is Message from API, :-) ",
  });
};
