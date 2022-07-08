'use strict';

// Values gathered from the data files and process.js script are pasted into here
// LTHdata_floor6_6008_shadow.csv 
var dataFloor6Room6008 = [
    ['7/5/2022', '19:27:16', '645.7', '24.9', '50.0'],
    ['7/5/2022', '19:27:19', '891.7', '23.8', '54.0'],
    ['7/5/2022', '19:27:22', '891.7', '23.8', '63.0'],
    ['7/5/2022', '19:27:25', '891.7', '23.8', '64.0'],
    ['7/5/2022', '19:27:28', '885.4', '23.8', '64.0'],
    ['7/5/2022', '19:27:31', '885.4', '23.8', '64.0'],
    ['7/5/2022', '19:27:34', '885.4', '23.8', '64.0'],
    ['7/5/2022', '19:27:37', '885.4', '23.8', '64.0'],
    ['7/5/2022', '19:27:40', '885.4', '23.8', '64.0'],
    ['7/5/2022', '19:27:43', '885.4', '23.8', '64.0'],
    ['7/5/2022', '19:27:46', '885.4', '23.8', '64.0'],
    ['7/5/2022', '19:27:49', '885.4', '23.8', '64.0'],
    ['7/5/2022', '19:27:52', '885.4', '23.8', '64.0'],
    ['7/5/2022', '19:27:55', '885.4', '23.8', '64.0'],
    ['7/5/2022', '19:27:58', '885.4', '23.7', '64.0'],
    ['7/5/2022', '19:28:01', '885.4', '23.7', '64.0'],
    ['7/5/2022', '19:28:04', '885.4', '23.7', '64.0'],
    ['7/5/2022', '19:28:07', '885.4', '23.7', '64.0'],
    ['7/5/2022', '19:28:10', '885.4', '23.7', '64.0'],
    ['7/5/2022', '19:28:13', '885.4', '23.7', '64.0']
]

//LTHdata_floor4_4043.csv
var dataFloor4Room4043 = [
    ['7/6/2022', '17:18:31', '750.6', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:18:34', '854.8', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:18:37', '773.0', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:18:41', '778.7', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:18:44', '801.6', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:18:47', '807.4', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:18:50', '801.6', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:18:53', '801.6', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:18:56', '801.6', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:18:59', '801.6', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:19:2', '801.6', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:19:5', '807.4', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:19:8', '756.2', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:19:11', '767.4', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:19:14', '767.4', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:19:17', '795.8', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:19:20', '801.6', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:19:23', '675.9', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:19:26', '801.6', ' 21.2', ' 78.0'],
    ['7/6/2022', '17:19:29', '795.8', ' 21.2', ' 78.0']
]

//LTHdata_floor6_atrium.csv
var dataFloor6Atrium = [
    ['7/5/2022', '17:03:35', '1072.8', '24.4', '61.0'],
    ['7/5/2022', '17:03:38', '1310.1', '24.4', '61.0'],
    ['7/5/2022', '17:03:41', '1357.3', '24.3', '69.0'],
    ['7/5/2022', '17:03:44', '1396.3', '24.4', '69.0'],
    ['7/5/2022', '17:03:47', '745.1', '24.4', '69.0'],
    ['7/5/2022', '17:03:50', '1338.2', '24.4', '69.0'],
    ['7/5/2022', '17:03:53', '1386.5', '24.4', '69.0'],
    ['7/5/2022', '17:03:56', '1426.2', '24.4', '69.0'],
    ['7/5/2022', '17:03:59', '1446.4', '24.4', '69.0'],
    ['7/5/2022', '17:04:02', '1456.6', '24.4', '69.0'],
    ['7/5/2022', '17:04:05', '1477.3', '24.4', '69.0'],
    ['7/5/2022', '17:04:08', '1487.7', '24.4', '69.0'],
    ['7/5/2022', '17:04:11', '1487.7', '24.4', '69.0'],
    ['7/5/2022', '17:04:14', '1487.7', '24.4', '69.0'],
    ['7/5/2022', '17:04:17', '1477.3', '24.4', '69.0'],
    ['7/5/2022', '17:04:20', '1477.3', '24.4', '69.0'],
    ['7/5/2022', '17:04:23', '1477.3', '24.4', '69.0'],
    ['7/5/2022', '17:04:26', '1477.3', '24.4', '69.0'],
    ['7/5/2022', '17:04:30', '1477.3', '24.4', '69.0'],
    ['7/5/2022', '17:04:33', '1466.9', '24.4', '69.0']
]


var rooms = [dataFloor6Room6008, dataFloor4Room4043, dataFloor6Atrium]

// Takes array of room conditions as input
// Returns an array of the average conditions of each data set
// containing light levels in lux, temperature, and humidity
function averageConditions(arrData) {
    //initialize return array
    var arrAverage = [[]]

    // determine average light condition
    arrAverage[arrAverage.length - 1].push(average(arrData, 2))

    //determine average temperature and push to array
    arrAverage[arrAverage.length - 1].push(average(arrData, 3))

    //determine average humidity and push to array
    arrAverage[arrAverage.length - 1].push(average(arrData, 4))

    return arrAverage
}

// Takes array of room conditions and column as input,
// averages all values in the specified column (ex. light levels), and returns a float value
function average(arrData, column) {

    // Cycle through the length of the array
    var sum = 0
    for (let j = 0; j < arrData.length; j++) {

        // Convert string value to float
        var floatVal = parseFloat(arrData[j][column])

        sum = sum + floatVal
    }

    // Find the average conditions in the room with the sum and number of data points
    var average = sum / arrData.length
    return average;
}


//functions to pick the right colour, set it, and activate the legend
function light(mapNumber) {
    let value = average(rooms[mapNumber - 1], 2)
    let color = getLightColor(value);
    document.getElementById(`rect${mapNumber}`).style.backgroundColor = color;
    activateLegend("light", mapNumber);
}

function temp(mapNumber) {
    let value = average(rooms[mapNumber - 1], 3)
    let color = getTempColor(value);
    document.getElementById(`rect${mapNumber}`).style.backgroundColor = color;
    activateLegend("temp", mapNumber);
}

function humid(mapNumber) {
    let value = average(rooms[mapNumber - 1], 4)
    let color = getHumidityColor(value);
    document.getElementById(`rect${mapNumber}`).style.backgroundColor = color;
    activateLegend("humid", mapNumber);
}

//function that activates the legend
function activateLegend(env, map_number) {
    const legends = document.querySelectorAll(`.legend${map_number}`);

    legends.forEach(legend => {
        legend.style.display = "none";
    });

    document.getElementById(`${env}legend${map_number}`).style.display = "block";
    flipTabStyle(env, map_number);
}

//function that sets the tab to 'dark mode' after being selected
function flipTabStyle(env, number) {

    const tabs = document.querySelectorAll(`.tab${number}`);

    tabs.forEach(tab => {
        tab.style.backgroundColor = '#C5C9C5';
        tab.style.color = '#000000';
        tab.style.borderColor = '#000000'
    });
    document.getElementById(`${env}${number}`).style.backgroundColor = "#000000";
    document.getElementById(`${env}${number}`).style.color = "#c9c9c9";
    document.getElementById(`${env}${number}`).style.borderColor = "#c9c9c9";
}

function getTempColor(value) {
    // read from index 1 to get temperature

    if (value > 30) {
        return "#FF4003";
    } else if (value < 30 && value >= 28) {
        return "#FF5A25";
    } else if (value < 28 && value >= 26) {
        return "#FF8A66";
    } else if (value < 26 && value >= 24) {
        return "#FFBCA7";
    } else if (value < 24 && value >= 22) {
        return "#FFDCD1";
    } else if (value == 22) {
        return "#FFFFFF";
    } else if (value < 22 && value >= 20) {
        return "#DBE9FF";
    } else if (value < 20 && value >= 18) {
        return "#9FC6FF";
    } else if (value < 18 && value >= 16) {
        return "#62A1FF";
    } else if (value < 16 && value >= 14) {
        return "#277EFF";
    } else if (value < 14) {
        return "#0569FF";
    }
}

function getLightColor(value) {
    //read from index 0 to get light level

    if (value > 1500) {
        return "#FFE601";
    } else if (value < 1500 && value >= 1250) {
        return "#FFEA2A";
    } else if (value < 1250 && value >= 1000) {
        return "#FFF063";
    } else if (value < 1000 && value >= 750) {
        return "#FFF59C";
    } else if (value < 750 && value >= 500) {
        return "#FFFACA";
    } else if (value == 500) {
        return "#FFFFFF";
    } else if (value < 500 && value >= 250) {
        return "#B8C7DB";
    } else if (value < 250 && value >= 0) {
        return "#4D6FA2";
    } else if (value < 0) {
        return "#0B3A80";
    }
}

function getHumidityColor(value) {
    //read from index 2 for humidity conditions

    if (value > 100) {
        return "#02C68B";
    } else if (value < 100 && value >= 80) {
        return "#36D2A3";
    } else if (value < 80 && value >= 60) {
        return "#A0EAD3";
    } else if (value < 60 && value >= 50) {
        return "#DFF8F0";
    } else if (value == 50){
        return "#FFFFFF"
    } else if (value < 50 && value >= 40) {
        return "F4EDE8";
    } else if (value < 40 && value >= 20) {
            return "#D9C5B2";
    } else if (value < 20 && value >= 0) {
        return "#B58D67";
    } else if (value < 0) {
        return "#A57446";
    }
}
