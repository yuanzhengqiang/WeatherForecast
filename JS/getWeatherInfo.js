const city = remote_ip_info.city;
var weatherInfo;
$.ajax({ 
    url: 'http://api.k780.com/?app=weather.today&weaid='+city+'&appkey=26367&sign=bb23352cb3101781a1ee1fe888329766&format=json&jsoncallback=data', 
    type: 'get',
    async: false,
    dataType: 'JSONP',  // 处理Ajax跨域问题
    jsonp: 'jsonp',
    jsonpCallback: 'data',
    success: function(data){ 
        weatherInfo = data.result;
        return weatherInfo
    },
    error:function(){
        alert('获取天气信息失败');
    }
}); 