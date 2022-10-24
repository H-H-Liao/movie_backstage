
import {Lunar, LunarSolarConverter,Solar} from '/modules/LunarSolarConverter.js'
import moment from 'moment';

function getBirthday($birthday)
{
    if($birthday == null){
        return "-";
    }
    return moment($birthday).format('YYYY-MM-DD');
}

//國日生日轉換農曆生日
function  transformBirthday2TraditionBirthday($birthday)
{
    if($birthday == null || $birthday == ""){
        return "";
    }
    var converter = new LunarSolarConverter();
    var solar = getBirthday2Solar($birthday);
    var luna_date = converter.SolarToLunar(solar);
    return moment(luna_date.lunarYear+"-"+luna_date.lunarMonth+"-"+luna_date.lunarDay,'YYYY-MM-DD').format('YYYY-MM-DD');
}

//農曆生日轉換國日生日
function transformTraditionBirthday2Birthday($tradition_birthday)
{
    if($tradition_birthday == null || $tradition_birthday == ""){
        return "";
    }
    var converter = new LunarSolarConverter();
    var luna = getBirthday2Luna($tradition_birthday);
    var solar = converter.LunarToSolar(luna);

    return moment(solar.solarYear+"-"+solar.solarMonth+"-"+solar.solarDay).format('YYYY-MM-DD');
}

//國曆生日轉換歲次
function transformBirthday2Year($birthday)
{
    var $solar = transformBirthday2TraditionBirthday($birthday);
    var $year = parseInt(moment($solar).format('YYYY'));
    var $y = $year - 1924;
    var $year_string = "";
    var $y1 = $y % 10;
    var $y2 = $y % 12;
    switch($y1){
        case 0:
            $year_string += "甲";
            break;
        case 1:
            $year_string += "乙";
            break;
        case 2:
            $year_string += "丙";
            break;
        case 3:
            $year_string += "丁";
            break;
        case 4:
            $year_string += "戊";
            break;
        case 5:
            $year_string += "已";
            break;
        case 6:
            $year_string += "庚";
            break;
        case 7:
            $year_string += "辛";
            break;
        case 8:
            $year_string += "壬";
            break;
        case 9:
            $year_string += "癸";
            break;
    }

    switch($y2){
        case 0:
            $year_string += "子";
            break;
        case 1:
            $year_string += "丑";
            break;
        case 2:
            $year_string += "寅";
            break;
        case 3:
            $year_string += "卯";
            break;
        case 4:
            $year_string += "辰";
            break;
        case 5:
            $year_string += "巳";
            break;
        case 6:
            $year_string += "午";
            break;
        case 7:
            $year_string += "未";
            break;
        case 8:
            $year_string += "申";
            break;
        case 9:
            $year_string += "酉";
            break;
        case 10:
            $year_string += "戌";
            break;
        case 11:
            $year_string += "亥";
            break;
    }


    return $year_string;
}

//歲次轉換國曆生日
function transformYear2Birthday($year)
{

}


//產生Solar物件
function getBirthday2Solar($birthday)
{
    var solar = new Solar();
    solar.solarYear = parseInt(moment($birthday).format('YYYY'));
    solar.solarMonth = parseInt(moment($birthday).format('M'));
    solar.solarDay =parseInt(moment($birthday).format('D'));

    return solar;
}

//產生Luna物件
function getBirthday2Luna($tradition_birthday)
{
    var lunar = new Lunar();
    lunar.lunarYear = parseInt(moment($tradition_birthday).format('YYYY'));
    lunar.lunarMonth = parseInt(moment($tradition_birthday).format('M'));
    lunar.lunarDay =parseInt(moment($tradition_birthday).format('D'));

    return lunar;
}

export {
    getBirthday,
    transformBirthday2TraditionBirthday,
    transformTraditionBirthday2Birthday,
    transformBirthday2Year,
    transformYear2Birthday
}
