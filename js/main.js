// 等待畫面元素被瀏覽器載入完成後，再執行程式...
$(document).ready(function () {
    // 準備Google Map 要用的資料
    // 1. 準備要放置地圖的元素 <div id="map"></div>
    var mapHTML = $('#map')[0];
    // console.log(mapHTML);
    // 2. 地圖中心的經緯度
    var mapPosition = {
        lat: 25.0293692, //緯度
        lng: 121.5413896 //經度
    };
    // 設定Google Map
    // .Map(標籤, {});
    var googleMap = new google.maps.Map(mapHTML, {
        center: mapPosition,
        zoom: 15,
        styles: mapStyles
    }); //是Google自己發明的名字 不是原生的JS or Jquery

    // 設定地標
    var marker = new google.maps.Marker({
        position: mapPosition,
        map: googleMap
    });

    // 當使用者滾動畫面時...
    $(window).scroll(function () {
        // 取得目前在畫面上的高度
        var scrollHeight = $(window).scrollTop();
        // console.log(scrollHeight);
        // 當高度高於(等於)1200時顯示#goBackBtn
        // 當高度低於1200時隱藏#goBackBtn
        if (scrollHeight >= 1200) {
            $("#goBackBtn").fadeIn(300);
        } else {
            $("#goBackBtn").fadeOut(300);
        }
    });

    // console.log("doc ready");
    // 為導覽列裡的連結綁定點擊事件
    $(".navbar .nav-link, #goBackBtn").click(function () {
        // 1. 取得移動的目標
        // $(this) 就是被點擊的nav-link
        var target = $(this).attr("href");
        // console.log(target);
        // 2. 取得目標的y座標
        // intro => #introSection
        // features => #featuresSection
        var position = $(target).offset().top;
        // console.log(position);
        // 3. (停止)並執行滾動動畫
        var duration = 300;
        var navHeight = 58;
        //  .animate({},動畫時間)
        $("html,body").stop().animate({
            scrollTop: position - navHeight
        }, duration);
    });
});