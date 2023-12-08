<template>
    <div id="WidgetIdBooking"></div>
</template>

<script setup>
(function(k,o,t,e,l){
    l = document.createElement("script");
    l.type = "text/javascript";
    l.src = "https://bookonline24.ru/widget.js";
    l.async = !0;
    l.onload = l.onreadystatechange = function() {
        e = this.readyState;
        !o && (!e || e === "complete") && (o = 1) && k();
    };
    t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(l, t);
})(function(){
    HotelWidget.init({

        id: "aaba9e02-6081-4a8e-a6b3-baf1e48db86c",
        type: "horizontalBlock",
        form: {
            container: "WidgetIdBooking",
        }
    }, "https://bookonline24.ru/");
});
</script>
