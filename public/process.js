/*

Give the name of the CSV file that you want to parse to this file and it will
spit out the array for you to embed into app.js.

Example: (the '$' character means that line is a command)

example.csv = 
'Hello world!,1,2,3
Goodbye world!,4,5,6'

Run the following command, will print the array as a result
$ node process.js example.csv
[
  [ "Hello World!", "1", "2", "3" ],
  [ "Goodbye world!", "4", "5", "6" ]
]
*/

const fs = require("fs");
const { parse } = require("csv-parse");


// take argument as a file
if (require.main === module) {
 const file = process.argv[2]

 // if there was no argument
 if (!file) {
  throw Error("You must provide a file path argument!")
 }

 // create read stream to print array values
 fs.createReadStream(file)

  // separate all rows based on delimiter ","
  .pipe(parse({ delimiter: ",", from_line: 1 }))
  
  // print row as an array
  .on("data", function (row) {
    console.log(row);
  })

  // when file reaches the end
  .on("end", function () {
    console.log("finished");
  })
  
  // error for debugging purposes
  .on("error", function (error) {
    console.log(error.message);
  });

 console.log(`Done! Copy the text above into 'app.js' where needed.`)
}