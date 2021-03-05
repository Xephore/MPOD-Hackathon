const { Router } = require('express');
const express = require('express');
const exphbs = require('express-handlebars');
const split = require('split-string');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

var azure = require('azure-storage');
const { EventHubConsumerClient } = require("@azure/event-hubs");
var tableSvc = azure.createTableService
(X, X);
const eventHubsCompatibleEndpoint = X;
const eventHubsCompatiblePath = X;
const iotHubSasKey = X;
const connectionString = X;
var S = require('string');

// Set Handlebars as templating engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
let dataRetrieved = new Array();
let testvar;
let num;
    ///
    var printError = function (err) {
        console.log(err.message);
      };

      var printMessages = function (messages) {
        for (const message of messages) {
          console.log("Telemetry received: ");
          console.log(JSON.stringify(message.body));
          console.log("Properties (set by device): ");
          console.log(JSON.stringify(message.properties));
          console.log("System properties (set by IoT Hub): ");
          console.log(JSON.stringify(message.systemProperties));
          console.log("");
          
        }
      };
    ///

        console.log("Program START. Reading custom heartrate table from azure.");
      
        var numberPattern = /\d+/g;
      var results;
       var results3;
       let results4;

        var query = new azure.TableQuery()
        .select(['description'])
        .top(1)
        .where('PartitionKey eq ?', 'heartratePK');
       
        tableSvc.queryEntities('heartratetable',query, null, function(error, result, response) {
            testvar = JSON.stringify(result.entries);
            results = testvar.match(numberPattern)
            results2 = S(results).left(3).s;
            results3 = Number(results2);
            results4 = Math.round(results3/10 -6);
            console.log(results4);
         
          });

         
        // tableSvc.queryEntities('heartratetable',query, null, function(error, result, response) {
        //     console.log(result.entries);
        //     for(let ded = 0; ded > result.entries.length; ded++){
        //     dataRetrieved.push(result.entries[ded]);
        //     }
        // });
        
     
        //extract the juice from result
    

        const clientOptions = {
        
        };
      
        // Create the client to connect to the default consumer group of the Event Hub
        const consumerClient = new EventHubConsumerClient("$Default", connectionString, clientOptions);
      
        // Subscribe to messages from all partitions as below
        // To subscribe to messages from a single partition, use the overload of the same method.
        consumerClient.subscribe({
          processEvents: printMessages,
          processError: printError,
        });
    
 let varia = 6;
    let graphSize = 500;
    let max = 15;
    let data = [
        { Attacks: 1, date: "Sunday" },
        { Attacks: 2, date: "Monday" },
        { Attacks: 3, date: "Tuesday" },
        { Attacks: 4, date: "Wednesday" },
        { Attacks: 5, date: "Thursday" },
        { Attacks: 6, date: "Friday" },
        { Attacks: 8, date: "Saturday" }
    ];
    for (i = 0; i < data.length; i++) {
        data[i].offsetB = (data[i].Attacks / (max + 2) * graphSize);
        data[i].offsetL = ((graphSize / 7) * (i + 1) - 40);
    }
    let lines = [{}, {}, {}, {}, {}, {}];
    for (i = 0; i < lines.length; i++) {
        let x = data[i + 1].offsetL - data[i].offsetL;
        let y = data[i + 1].offsetB - data[i].offsetB;
        let hypotenuse = Math.sqrt((Math.pow(x, 2) + Math.pow(y, 2)));
        lines[i].size = hypotenuse;
        lines[i].offsetB = data[i].offsetB + 6;
        lines[i].offsetL = data[i].offsetL + 8;
        lines[i].angleClass0 = false;
        lines[i].angleClass1 = false;
        lines[i].angleClass2 = false;
        lines[i].angleClass3 = false;
        lines[i].angleClass4 = false;
        lines[i].angleClass5 = false;
        lines[i].angleClass6 = false;
        lines[i].angleClass7 = false;
        lines[i].angleClass8 = false;
        lines[i].angleClass9 = false;
        lines[i].angleClass10 = false;
        lines[i].angleClass11 = false;
        lines[i].angleClass12 = false;
        lines[i].angleClass13 = false;
        lines[i].angleClass14 = false;
        lines[i].angleClass15 = false;
        lines[i].angleClass16 = false;
        lines[i].angleClass17 = false;
        lines[i].angleClass18 = false;
        lines[i].angleClass19 = false;
        lines[i].angleClass20 = false;
        lines[i].angleClass21 = false;
        lines[i].angleClass22 = false;
        lines[i].angleClass23 = false;
        lines[i].angleClass24 = false;
        lines[i].angleClass25 = false;
        lines[i].angleClass26 = false;
        lines[i].angleClass27 = false;
        lines[i].angleClass28 = false;
        lines[i].angleClass29 = false;
        lines[i].angleClass30 = false;
        lines[i].angle = data[i].Attacks - data[i + 1].Attacks;
        if (lines[i].angle == 0) {
            lines[i].angleClass0 = true;
        } else if (lines[i].angle == 1) { // X
            lines[i].angleClass1 = true;
        } else if (lines[i].angle == 2) { // X
            lines[i].angleClass2 = true;
        } else if (lines[i].angle == 3) { // X
            lines[i].angleClass3 = true;
        } else if (lines[i].angle == 4) { // X
            lines[i].angleClass4 = true;
        } else if (lines[i].angle == 5) { // X
            lines[i].angleClass5 = true;
        } else if (lines[i].angle == 6) { // X
            lines[i].angleClass6 = true;
        } else if (lines[i].angle == 7) { // X
            lines[i].angleClass7 = true;
        } else if (lines[i].angle == 8) { // X
            lines[i].angleClass8 = true;
        } else if (lines[i].angle == 9) { // X
            lines[i].angleClass9 = true;
        } else if (lines[i].angle == 10) { // X
            lines[i].angleClass10 = true;
        } else if (lines[i].angle == 11) { // X
            lines[i].angleClass11 = true;
        } else if (lines[i].angle == 12) { // X
            lines[i].angleClass12 = true;
        } else if (lines[i].angle == 13) { // X
            lines[i].angleClass13 = true;
        } else if (lines[i].angle == 14) { // X
            lines[i].angleClass14 = true;
        } else if (lines[i].angle == 15) {
            lines[i].angleClass15 = true;
        } else if (lines[i].angle == -1) { // X
            lines[i].angleClass16 = true;
        } else if (lines[i].angle == -2) { // X
            lines[i].angleClass17 = true;
        } else if (lines[i].angle == -3) { // X
            lines[i].angleClass18 = true;
        } else if (lines[i].angle == -4) { // X
            lines[i].angleClass19 = true;
        } else if (lines[i].angle == -5) { // X
            lines[i].angleClass20 = true;
        } else if (lines[i].angle == -6) { // X
            lines[i].angleClass21 = true;
        } else if (lines[i].angle == -7) { // X
            lines[i].angleClass22 = true;
        } else if (lines[i].angle == -8) { // X
            lines[i].angleClass23 = true;
        } else if (lines[i].angle == -9) { // X
            lines[i].angleClass24 = true;
        } else if (lines[i].angle == -10) { // X
            lines[i].angleClass25 = true;
        } else if (lines[i].angle == -11) { // X
            lines[i].angleClass26 = true;
        } else if (lines[i].angle == -12) { // X
            lines[i].angleClass27 = true;
        } else if (lines[i].angle == -13) { // X
            lines[i].angleClass28 = true;
        } else if (lines[i].angle == -14) {
            lines[i].angleClass29 = true;
        } else if (lines[i].angle == -15) {
            lines[i].angleClass30 = true;
        }
        data[i].lines = lines[i];
    }
    let mdata = [
        { Attacks: 1, date: "Saturday" },
        { Attacks: 0, date: "Saturday" },
        { Attacks: 2, date: "Saturday" },
        { Attacks: 4, date: "Saturday" },
        { Attacks: 5, date: "Saturday" },
        { Attacks: 6, date: "Saturday" },
        { Attacks: 2, date: "Saturday" },
        { Attacks: 0, date: "Saturday" },
        { Attacks: 0, date: "Saturday" },
        { Attacks: 1, date: "Saturday" },
        { Attacks: 3, date: "Saturday" },
        { Attacks: 3, date: "Saturday" },
        { Attacks: 2, date: "Saturday" },
        { Attacks: 0, date: "Saturday" },
        { Attacks: 1, date: "Saturday" },
        { Attacks: 1, date: "Saturday" },
        { Attacks: 1, date: "Saturday" },
        { Attacks: 2, date: "Saturday" },
        { Attacks: 3, date: "Saturday" },
        { Attacks: 4, date: "Saturday" },
        { Attacks: 6, date: "Saturday" },
        { Attacks: 7, date: "Saturday" },
        { Attacks: 1, date: "Saturday" },
        { Attacks: 0, date: "Saturday" },
        { Attacks: 0, date: "Saturday" },
        { Attacks: 0, date: "Saturday" },
        { Attacks: 1, date: "Saturday" },
        { Attacks: 1, date: "Saturday" },
        { Attacks: 2, date: "Saturday" },
        { Attacks: 2, date: "Saturday" },
        { Attacks: 1, date: "Saturday" }
    ];
    for (i = 0; i < mdata.length; i++) {
        mdata[i].offsetB = (mdata[i].Attacks / (max + 2) * graphSize);
        mdata[i].offsetL = ((graphSize / 31) * (i + 1) - 00);
    }
    let mlines = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    for (i = 0; i < mlines.length; i++) {
        let x = mdata[i + 1].offsetL - mdata[i].offsetL;
        let y = mdata[i + 1].offsetB - mdata[i].offsetB;
        let hypotenuse = Math.sqrt((Math.pow(x, 2) + Math.pow(y, 2)));
        mlines[i].size = hypotenuse;
        mlines[i].offsetB = mdata[i].offsetB + 6;
        mlines[i].offsetL = mdata[i].offsetL + 8;
        mlines[i].angleClass0 = false;
        mlines[i].angleClass1 = false;
        mlines[i].angleClass2 = false;
        mlines[i].angleClass3 = false;
        mlines[i].angleClass4 = false;
        mlines[i].angleClass5 = false;
        mlines[i].angleClass6 = false;
        mlines[i].angleClass7 = false;
        mlines[i].angleClass8 = false;
        mlines[i].angleClass9 = false;
        mlines[i].angleClass10 = false;
        mlines[i].angleClass11 = false;
        mlines[i].angleClass12 = false;
        mlines[i].angleClass13 = false;
        mlines[i].angleClass14 = false;
        mlines[i].angleClass15 = false;
        mlines[i].angleClass16 = false;
        mlines[i].angleClass17 = false;
        mlines[i].angleClass18 = false;
        mlines[i].angleClass19 = false;
        mlines[i].angleClass20 = false;
        mlines[i].angleClass21 = false;
        mlines[i].angleClass22 = false;
        mlines[i].angleClass23 = false;
        mlines[i].angleClass24 = false;
        mlines[i].angleClass25 = false;
        mlines[i].angleClass26 = false;
        mlines[i].angleClass27 = false;
        mlines[i].angleClass28 = false;
        mlines[i].angleClass29 = false;
        mlines[i].angleClass30 = false;
        mlines[i].angle = mdata[i].Attacks - mdata[i + 1].Attacks;
        if (mlines[i].angle == 0) {
            mlines[i].angleClass0 = true;
        } else if (mlines[i].angle == 1) { // X
            mlines[i].angleClass1 = true;
        } else if (mlines[i].angle == 2) { // X
            mlines[i].angleClass2 = true;
        } else if (mlines[i].angle == 3) { // X
            mlines[i].angleClass3 = true;
        } else if (mlines[i].angle == 4) { // X
            mlines[i].angleClass4 = true;
        } else if (mlines[i].angle == 5) { // X
            mlines[i].angleClass5 = true;
        } else if (mlines[i].angle == 6) { // X
            mlines[i].angleClass6 = true;
        } else if (mlines[i].angle == 7) { // X
            mlines[i].angleClass7 = true;
        } else if (mlines[i].angle == 8) { // X
            mlines[i].angleClass8 = true;
        } else if (mlines[i].angle == 9) { // X
            mlines[i].angleClass9 = true;
        } else if (mlines[i].angle == 10) { // X
            mlines[i].angleClass10 = true;
        } else if (mlines[i].angle == 11) { // X
            mlines[i].angleClass11 = true;
        } else if (mlines[i].angle == 12) { // X
            mlines[i].angleClass12 = true;
        } else if (mlines[i].angle == 13) { // X
            mlines[i].angleClass13 = true;
        } else if (mlines[i].angle == 14) { // X
            mlines[i].angleClass14 = true;
        } else if (mlines[i].angle == 15) {
            mlines[i].angleClass15 = true;
        } else if (mlines[i].angle == -1) { // X
            mlines[i].angleClass16 = true;
        } else if (mlines[i].angle == -2) { // X
            mlines[i].angleClass17 = true;
        } else if (mlines[i].angle == -3) { // X
            mlines[i].angleClass18 = true;
        } else if (mlines[i].angle == -4) { // X
            mlines[i].angleClass19 = true;
        } else if (mlines[i].angle == -5) { // X
            mlines[i].angleClass20 = true;
        } else if (mlines[i].angle == -6) { // X
            mlines[i].angleClass21 = true;
        } else if (mlines[i].angle == -7) { // X
            mlines[i].angleClass22 = true;
        } else if (mlines[i].angle == -8) { // X
            mlines[i].angleClass23 = true;
        } else if (mlines[i].angle == -9) { // X
            mlines[i].angleClass24 = true;
        } else if (mlines[i].angle == -10) { // X
            mlines[i].angleClass25 = true;
        } else if (mlines[i].angle == -11) { // X
            mlines[i].angleClass26 = true;
        } else if (mlines[i].angle == -12) { // X
            mlines[i].angleClass27 = true;
        } else if (mlines[i].angle == -13) { // X
            mlines[i].angleClass28 = true;
        } else if (mlines[i].angle == -14) {
            mlines[i].angleClass29 = true;
        } else if (mlines[i].angle == -15) {
            mlines[i].angleClass30 = true;
        }
        //mdata[i].lines = mlines[i];
    }
    res.render("home", { weekData: data, monthData: mdata });
});

      
// main().catch((error) => {
//     console.error("Error running sample:", error);
//   });
  

app.listen(HTTP_PORT, () => {
    console.log(`Web server is listening on Port ${HTTP_PORT}`);
});
