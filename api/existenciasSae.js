const rest = new (require("rest-mssql-nodejs"))({
  user: "app",
  password: "12345",
  server: "192.168.100.21", // replace this with your IP Server
  database: "sqlemp3",
  /* port: 1433, // this is optional, by default takes the port 1433
    options: {
      encrypt: true, // this is optional, by default is false
    }, */
});

setTimeout(async () => {
  const result = await rest.executeQuery(
    "select CVE_ART, EXIST from [sqlemp3].[dbo].[INVE03] WHERE EXIST >= '50'"
  );
  return result;
  console.log(result.data);
}, 1500);

module.exports = {
  result: result,
};
