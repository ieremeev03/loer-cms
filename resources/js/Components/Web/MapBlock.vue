<template>
    <section class="section__card">
        <div id="wrapMap" style="position: relative; overflow: hidden; width: 100%; height: 100%; ">


            <iframe  id="map-iframe" src="https://yandex.ru/map-widget/v1/?ll=57.028740%2C58.180724&mode=routes&rtext=58.010455%2C56.229443~58.352660%2C57.772938&rtt=auto&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzEwNTIxMBIY0KDQvtGB0YHQuNGPLCDQn9C10YDQvNGMIgoN8-pgQhW0CmhC~ymapsbm1%3A%2F%2Forg%3Foid%3D1013344228&z=10.11&gestureHandling=none" width="100%" height="100%" frameborder="1" allowfullscreen="true" style="position: relative; pointer-events: none;"></iframe>
        </div>
    </section>
</template>

<script>
export default {
    name: "MapBlock"
}
</script>

<style scoped>

</style>
