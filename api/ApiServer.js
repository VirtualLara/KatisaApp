import MSSQL from "react-native-mssql";

export async function getProducts() {
  const config = {
    server: "192.168.100.21", //ip address of the mssql database
    username: "KATISAAdministrador", //username to login to the database
    password: "", //password to login to the database
    database:
      "C:/Program Files/Microsoft SQL Server/MSSQL15.SQLEXPRESS/MSSQL/DATA/sqlemp03.mdf", //the name of the database to connect to
    //port: 1234, //OPTIONAL, port of the database on the server
    //timeout: 5, //OPTIONAL, login timeout for the server
  };

  const connected = await MSSQL.connect(config);
  const query = "SELECT * FROM factv03";
  const result = await MSSQL.executeQuery(query);
  const closed = await MSSQL.close();
}

export function name() {
  console.log("hola");
}
