// 获取当前城市

/**
 * 该方法获取地区有偏差
 */
const getCurrentCityName = function() {
    return new Promise((resolve, reject) => {
        let myCity = new BMap.LocalCity();
        myCity.get((result) => {
            let geoc = new BMap.Geocoder();
            geoc.getLocation(result.center, (rs) => {
                // rs 中携带着所有的定位信息，这里只获取了城市(city)和所在的区(district)
                // let addComp = rs.addressComponents + rs.district;
                // let result = addComp.city
                resolve(rs);
            });
        }, {enableHighAccuracy: true});
    });
}
export default getCurrentCityName;