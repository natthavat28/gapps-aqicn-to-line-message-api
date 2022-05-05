function createTextMessage(msg) {
    return {
        "type": "text",
        "text": msg
    };
}

function createLocationMessage(name, address, lat, lon) {
    return {
        "type": "location",
        "title": name,
        "address": address,
        "latitude": lat,
        "longitude": lon
    }
}

function sendMulticastUser(channelAccessToken, userIdList, messageList) {
    var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + channelAccessToken,
    };

    var body = {
        'to': userIdList,
        'messages': messageList
    };

    var payload = JSON.stringify(body);
    // Logger.log(payload);
    postRequest(headers, payload, "https://api.line.me/v2/bot/message/multicast");
}