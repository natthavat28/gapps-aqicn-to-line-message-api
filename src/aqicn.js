function getCurrentPM25Qty() {
    var url = "http://api.waqi.info/feed/" + aqicn_city_idx + "/?token=" + aqicn_token;
    var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    };
    var response = postRequest(headers, "", url);
    var result = JSON.parse(response.getContentText());
    if (!result.status == "ok") {
        throw new Error("aqicn-api: return status = " + data.status);
    }

    return {
        "pm25Qty": result.data.iaqi.pm25.v,
        "pm25Status": pm25QualityStatus(result.data.iaqi.pm25.v),
        "updateAt": result.data.time.s,
        "place": {
            "name": result.data.city.name,
            "lat": result.data.city.geo[0],
            "lon": result.data.city.geo[1]
        }
    };
}

function pm25QualityStatus(qty) {
    if (qty >= 0 && qty <= 50) { return "ดี"; } else if (qty >= 51 && qty <= 100) { return "ปานกลาง"; } else if (qty >= 101 && qty <= 150) { return "สูง"; } else if (qty > 151) { return "อันตราย"; } else { return "ไม่ทราบ..."; }
}