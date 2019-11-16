const yargs = require("yargs");
const axios = require("axios");

/*const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;*/

 const options = yargs
 .usage("Usage: -q <query>")
 .option("n", { alias: "query", describe: "Your filter keyword", type: "string", demandOption: true })
 .argv;

//var myDept = options.name;
var searchKey = options.query;
const greeting = `Looking for ${options.query}....`;
console.log(greeting);

//const url = "http://www.conorsapps.com:4567/dept/" + myDept;

const url = "https://api.github.com/search/repositories?q="+searchKey;

axios.get(url, { headers: { Accept: "application/json" } })
 .then(res => {
   //console.log(res.data.joke);
  // console.log(res.data);
  for( i=0;i<res.data.items.length; i++)
  {
    console.log(res.data.items[i].id);
    console.log(res.data.items[i].name);
    console.log(res.data.items[i].full_name);
    console.log(res.data.items[i].html_url);
    console.log(res.data.items[i].description);
  }

 });