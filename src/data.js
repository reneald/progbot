const originalBandNames = [
    'Toehider',
    'Rush',
    'Evergrey',
    'Symphony X',
    'Ayreon',
    'Pain of Salvation',
    'Dream Theater'
]

const bandNames = [
    'Toehider',
    'Rush',
    'Evergrey',
    'Symphony X',
    'Ayreon',
    'Pain of Salvation',
    'Dream Theater'
]

const getBandNames = function () {
    return bandNames;
}

const getBandName = function(index) {
    return bandNames[index];
}

const getBandNamesLength =  function() {
    return bandNames.length;
}

const addBandName = function(bandName) {
    bandNames.push(bandName);
}

const setToOriginalData = function() {
    bandNames.length = 0;
    bandNames.push(...originalBandNames);
}

export {getBandNames, getBandName, getBandNamesLength, addBandName, setToOriginalData};