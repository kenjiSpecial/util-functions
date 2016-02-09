module.exports = {
    range : function(value, minVal, maxVal, newMinVal, newMaxVal){
        var rate = (value - minVal) / (maxVal - minVal);
        var convertedVal = newMinVal + (newMaxVal - newMinVal) * rate;
        return convertedVal;
    }
};