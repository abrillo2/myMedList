 //select input icon
 export default function icon(iconName){
    var icon = "";
    if(iconName== "dateRange"){
       icon = require("../../assets/icons/date_range_black.png");
    }else if(iconName== "dropDown"){
        icon = require("../../assets/icons/drop_down_circle_black.png");
    }else if(iconName== "autorenew"){
        icon = require("../../assets/icons/autorenew_white.png");
    }else if(iconName == "arrowRightBlack"){
        icon = require("../../assets/icons/arrow_right_black.png");
    }else if(iconName == "arrowLefttBlack"){
        icon = require("../../assets/icons/arrow_left_black.png");
    }else{
        icon=null
    }

    return icon
}
