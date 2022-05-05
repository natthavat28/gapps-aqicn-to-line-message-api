function postRequest(header, body, url) {
    return processRequest('POST', header, body, url);
}

function getRequest(header, body, url) {
    return processRequest('GET', header, body, url);
}

function processRequest(method, header, body, url) {
    return UrlFetchApp.fetch(url, {
        "method": method,
        "headers": header,
        "payload": body
    });
}