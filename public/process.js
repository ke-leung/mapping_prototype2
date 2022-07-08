/*RUN THIS FILE WITH NODE.JS

Give the name of the CSV file that you want to parse to this file and it will
spit out the array for you to embed into app.js.

Example: (the '$' character means that line is a command)

example.csv = 
'Hello world!,1,2,3
Goodbye world!,4,5,6'


$ node process.js example.csv
[
  [ "Hello World!", "1", "2", "3" ],
  [ "Goodbye world!", "4", "5", "6" ]
]
*/

const fs = require("fs");
const { parse } = require("csv-parse");


//Only run if file was run directly
if (require.main === module) {
 const file = process.argv[2]
 if (!file) {
  throw Error("You must provide a file path argument!")
 }

 fs.createReadStream(file)
  .pipe(parse({ delimiter: ",", from_line: 1 }))
  .on("data", function (row) {
    console.log(row);
  })
  .on("end", function () {
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });

 console.log(`Done! Copy the text above into 'app.js' where needed.`)
}