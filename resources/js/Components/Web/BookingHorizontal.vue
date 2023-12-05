<template>
    <div id="KonturWidget">

    </div>
</template>

<script>
export default {
    name: "BookingHorizontal",
    mounted() {

        initWidget({
            id: "394759c1-b8e1-46b0-8660-1e0871627d9e",
            type: "horizontalBlock",
            form: {
                container: "KonturWidget", // Замените ID элемента для виджета здесь
                insert: "before"
            }
        });

    }
}


function initWidget(config) {

    var timeoutId;
    /** Проверяем, что есть window (модифицируйте этот код, если у вас есть SSR) */
    var context = window;
    if (!context)
        return;
    /** Функция, пытающаяся инициализировать виджет, в нашем случае каждые 500мс */
    var tryInitWidget = function() {
        var HotelWidget = context.HotelWidget;
        var TIMEOUT_DELAY = 500;
        if (HotelWidget) HotelWidget.init(config, "https://bookonline24.ru/");
        else timeoutId = setTimeout(tryInitWidget, TIMEOUT_DELAY);
    };

    clearTimeout(timeoutId);
    tryInitWidget();
    /**
     *  Возвращаем функцию остановки попыток инициализировать виджет.
     *  Если у вас React - вызывайте эту функцию в componentDidMount
     *  Если вы используете хуки - просто верните эту функцию в хуке: React.useEffect(() => initWidget({...}), [])
     */



}
</script>



<style scoped>

</style>
