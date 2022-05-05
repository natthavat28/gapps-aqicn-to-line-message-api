function checkPM25Daily() {
    var aqiResult = getCurrentPM25Qty();
    var messageList = Array();
    messageList.push(createTextMessage("ฝุ่น PM2.5 ที่บ้านวันนี้คือ " + aqiResult.pm25Status + " (" + aqiResult.pm25Qty + ")\nอัพเดทเมื่อ " + aqiResult.updateAt));
    var userIdList = line_msgapi_userid_list;
    sendMulticastUser(line_msgapi_channel_access_token, userIdList, messageList);
}