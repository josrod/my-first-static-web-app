module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  context.res.json({
    text: "Hi Jose Luis, this is Message from background API , :-) ",
  });
};
