'use strict';

//  Values gathered from process.js
// LTHdata_floor6_6008_shadow.csv 
var dataFloor6Room6008 = [
  [ '7/5/2022', '19:27:16', '645.7', '24.9', '50.0' ],
  [ '7/5/2022', '19:27:19', '891.7', '23.8', '54.0' ],
  [ '7/5/2022', '19:27:22', '891.7', '23.8', '63.0' ],
  [ '7/5/2022', '19:27:25', '891.7', '23.8', '64.0' ],
  [ '7/5/2022', '19:27:28', '885.4', '23.8', '64.0' ],
  [ '7/5/2022', '19:27:31', '885.4', '23.8', '64.0' ],
  [ '7/5/2022', '19:27:34', '885.4', '23.8', '64.0' ],
  [ '7/5/2022', '19:27:37', '885.4', '23.8', '64.0' ],
  [ '7/5/2022', '19:27:40', '885.4', '23.8', '64.0' ],
  [ '7/5/2022', '19:27:43', '885.4', '23.8', '64.0' ],
  [ '7/5/2022', '19:27:46', '885.4', '23.8', '64.0' ],
  [ '7/5/2022', '19:27:49', '885.4', '23.8', '64.0' ],
  [ '7/5/2022', '19:27:52', '885.4', '23.8', '64.0' ],
  [ '7/5/2022', '19:27:55', '885.4', '23.8', '64.0' ],
  [ '7/5/2022', '19:27:58', '885.4', '23.7', '64.0' ],
  [ '7/5/2022', '19:28:01', '885.4', '23.7', '64.0' ],
  [ '7/5/2022', '19:28:04', '885.4', '23.7', '64.0' ],
  [ '7/5/2022', '19:28:07', '885.4', '23.7', '64.0' ],
  [ '7/5/2022', '19:28:10', '885.4', '23.7', '64.0' ],
  [ '7/5/2022', '19:28:13', '885.4', '23.7', '64.0' ]
]

//LTHdata_floor4_4043.csv
var dataFloor4Room4043 = [
  [ '7/6/2022', '17:18:31', '750.6', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:18:34', '854.8', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:18:37', '773.0', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:18:41', '778.7', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:18:44', '801.6', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:18:47', '807.4', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:18:50', '801.6', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:18:53', '801.6', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:18:56', '801.6', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:18:59', '801.6', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:19:2', '801.6', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:19:5', '807.4', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:19:8', '756.2', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:19:11', '767.4', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:19:14', '767.4', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:19:17', '795.8', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:19:20', '801.6', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:19:23', '675.9', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:19:26', '801.6', ' 21.2', ' 78.0' ],
  [ '7/6/2022', '17:19:29', '795.8', ' 21.2', ' 78.0' ]
]

//LTHdata_floor6_atrium.csv
var dataFloor6Atrium = [
  [ '7/5/2022', '17:03:35', '1072.8', '24.4', '61.0' ],
  [ '7/5/2022', '17:03:38', '1310.1', '24.4', '61.0' ],
  [ '7/5/2022', '17:03:41', '1357.3', '24.3', '69.0' ],
  [ '7/5/2022', '17:03:44', '1396.3', '24.4', '69.0' ],
  [ '7/5/2022', '17:03:47', '745.1', '24.4', '69.0' ],
  [ '7/5/2022', '17:03:50', '1338.2', '24.4', '69.0' ],
  [ '7/5/2022', '17:03:53', '1386.5', '24.4', '69.0' ],
  [ '7/5/2022', '17:03:56', '1426.2', '24.4', '69.0' ],
  [ '7/5/2022', '17:03:59', '1446.4', '24.4', '69.0' ],
  [ '7/5/2022', '17:04:02', '1456.6', '24.4', '69.0' ],
  [ '7/5/2022', '17:04:05', '1477.3', '24.4', '69.0' ],
  [ '7/5/2022', '17:04:08', '1487.7', '24.4', '69.0' ],
  [ '7/5/2022', '17:04:11', '1487.7', '24.4', '69.0' ],
  [ '7/5/2022', '17:04:14', '1487.7', '24.4', '69.0' ],
  [ '7/5/2022', '17:04:17', '1477.3', '24.4', '69.0' ],
  [ '7/5/2022', '17:04:20', '1477.3', '24.4', '69.0' ],
  [ '7/5/2022', '17:04:23', '1477.3', '24.4', '69.0' ],
  [ '7/5/2022', '17:04:26', '1477.3', '24.4', '69.0' ],
  [ '7/5/2022', '17:04:30', '1477.3', '24.4', '69.0' ],
  [ '7/5/2022', '17:04:33', '1466.9', '24.4', '69.0' ]
]

// returns an array of the average conditions of each data set
function averageConditions(arrData){
    //initialize return array
    var arrAverage = [[]]

    // determine average light condition
    arrAverage[ arrAverage.length - 1 ].push(average(arrData,2))

   // console.log(arrAverage)

    //determine average temperature and push to array
    arrAverage[ arrAverage.length - 1 ].push(average(arrData,3))

    //console.log(arrAverage)

    //determine average humidity and push to array
    arrAverage[ arrAverage.length - 1 ].push(average(arrData,4))

    console.log(arrAverage)

    return arrAverage
}

// function to average all values in a column
function average(arrData, column){
    console.log(`average(${JSON.stringify(arrData, null, 2)}, ${JSON.stringify(column, null, 2)})`)
    var sum = 0
    for (let j=0;j<arrData.length;j++){
        //console.log("the value in column %d: ", column)
        //console.log(arrData[j][column])
        
        //convert string value to float
        var floatVal = parseFloat(arrData[j][column])
        console.log(`Parsing float: ${arrData[j][column]} :: ${floatVal}`)
        sum = sum + floatVal
    }

    var average = sum / arrData.length
    console.log("the average is %d", average)
    return average;
}

function light1() {
    var avgLightRoom6008 = average(dataFloor6Room6008,2)
    let color = getLightColor(avgLightRoom6008);

    document.getElementById("lightrect1").style.backgroundColor=color;
    document.getElementById("llegend1").style.display="block";
    document.getElementById("tlegend1").style.display="none";
    document.getElementById("hlegend1").style.display="none";
    document.getElementById("lightrect1").style.display="block";
    document.getElementById("temprect1").style.display="none";
    document.getElementById("humidrect1").style.display="none";
}


function temp1() {
    var avgTempRoom6008 = average(dataFloor6Room6008,3)
    let color = getTempColor(avgTempRoom6008);
    
    document.getElementById("temprect1").style.backgroundColor=color;
    document.getElementById("llegend1").style.display="none";
    document.getElementById("tlegend1").style.display="block";
    document.getElementById("hlegend1").style.display="none";
    document.getElementById("lightrect1").style.display="none";
    document.getElementById("temprect1").style.display="block";
    document.getElementById("humidrect1").style.display="none";
}


function humid1() {
    var avgHumidRoom6008 = average(dataFloor6Room6008,4)
    let color = getHumidityColor(avgHumidRoom6008);

    document.getElementById("humidrect1").style.backgroundColor=color;
    document.getElementById("llegend1").style.display="none";
    document.getElementById("tlegend1").style.display="none";
    document.getElementById("hlegend1").style.display="block";
    document.getElementById("lightrect1").style.display="none";
    document.getElementById("temprect1").style.display="none";
    document.getElementById("humidrect1").style.display="block";
}


function light2() {
    var avgLightRoom4043 = average(dataFloor4Room4043,2)
    let color = getLightColor(avgLightRoom4043);

    document.getElementById("lightrect2").style.backgroundColor=color;
    document.getElementById("llegend2").style.display="block";
    document.getElementById("tlegend2").style.display="none";
    document.getElementById("hlegend2").style.display="none";
    document.getElementById("lightrect2").style.display="block";
    document.getElementById("temprect2").style.display="none";
    document.getElementById("humidrect2").style.display="none";
}


function temp2() {
    var avgTempRoom4043 = average(dataFloor4Room4043,3)
    let color = getTempColor(avgTempRoom4043);

    document.getElementById("temprect2").style.backgroundColor=color;
    document.getElementById("llegend2").style.display="none";
    document.getElementById("tlegend2").style.display="block";
    document.getElementById("hlegend2").style.display="none";

    document.getElementById("lightrect2").style.display="none";
    document.getElementById("temprect2").style.display="block";
    document.getElementById("humidrect2").style.display="none";
}


function humid2() {
    var avgHumidRoom4043 = average(dataFloor4Room4043,4)
    let color = getHumidityColor(avgHumidRoom4043);

    document.getElementById("humidrect2").style.backgroundColor=color;
    document.getElementById("llegend2").style.display="none";
    document.getElementById("tlegend2").style.display="none";
    document.getElementById("hlegend2").style.display="block";
    document.getElementById("lightrect2").style.display="none";
    document.getElementById("temprect2").style.display="none";
    document.getElementById("humidrect2").style.display="block";
}


function light3() {
    var avgLightAtrium = average(dataFloor6Atrium,2)
    let color = getLightColor(avgLightAtrium);

    document.getElementById("lightrect3").style.backgroundColor=color;
    document.getElementById("llegend3").style.display="block";
    document.getElementById("tlegend3").style.display="none";
    document.getElementById("hlegend3").style.display="none";
    document.getElementById("lightrect3").style.display="block";
    document.getElementById("temprect3").style.display="none";
    document.getElementById("humidrect3").style.display="none";
}


function temp3() {
    var avgTempAtrium = average(dataFloor6Atrium,3)
    let color = getTempColor(avgTempAtrium);

    document.getElementById("temprect3").style.backgroundColor=color;
    document.getElementById("llegend3").style.display="none";
    document.getElementById("tlegend3").style.display="block";
    document.getElementById("hlegend3").style.display="none";

    document.getElementById("lightrect3").style.display="none";
    document.getElementById("temprect3").style.display="block";
    document.getElementById("humidrect3").style.display="none";
}

function humid3() {
    var avgHumidAtrium = average(dataFloor6Atrium,4)
    let color = getHumidityColor(avgHumidAtrium);


    document.getElementById("humidrect3").style.backgroundColor=color;
    document.getElementById("llegend3").style.display="none";
    document.getElementById("tlegend3").style.display="none";
    document.getElementById("hlegend3").style.display="block";
    document.getElementById("lightrect3").style.display="none";
    document.getElementById("temprect3").style.display="none";
    document.getElementById("humidrect3").style.display="block";
}

function getTempColor(value) {
    // read from index 1 to get temperature

    if (value > 30) {
        return "#FF5C00";
    } else if (value > 25 && value <= 30) {
        return "#FFA675";
    } else if (value > 22 && value <= 25) {
        return "#FFD5BD";
    } else if (value == 22) {
        return "#FFFFFF";
    } else if (value < 22 && value >= 19) {
        return "#B3D1F8";
    } else if (value < 19 && value >= 14 ) {
        return "#73AAF2";
    } else if (value < 14) {
        return "#1A73EA";
    }
}

function getLightColor(value) {
    //read from index 0 to get light level

    if (value > 4780) {
        return "#FF5C00";
    } else if (value > 3020 && value <= 4780) {
        return "#FFEF63";
    } else if (value > 1260 && value <= 3020) {
        return "#FFF6A9";
    } else if (value > 500 && value <= 1260) {
        return "#FFFAD2";
    } else if (value == 500) {
        return "#FFFFFF";
    } else if (value < 500 && value >= 200) {
        return "#E6BEFF";
    } else if (value < 200 && value >= 0 ) {
        return "#D48DFF";
    } else if (value < 0) {
        return "#9E00FF";
    }
}

function getHumidityColor(value) {
    //read from index 2 for humidity conditions

    if (value > 100) {
        return "#08E9E9";
    } else if (value > 80 && value <= 100) {
        return "#61F1F1";
    } else if (value > 60 && value <= 80) {
        return "#ABF7F7";
    } else if (value == 60) {
        return "#FFFFFF";
    } else if (value < 60 && value >= 30) {
        return "#FEBEE1";
    } else if (value < 30 && value >= 0 ) {
        return "#FD89C8";
    } else if (value < 0) {
        return "#FC5CB2";
    }
}
