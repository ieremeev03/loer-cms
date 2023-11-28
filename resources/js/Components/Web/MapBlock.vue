<template>
    <section class="section__card" @click="isActive = true; console.log(isActive)">
        <div :class="{pointerEvent: isActive }"  id="wrapMap" style="position: relative; overflow: hidden; width: 100%; height: 100%; pointer-events: none; cursor: pointer" >
            <iframe id="map-iframe" src="https://yandex.ru/map-widget/v1/?ll=57.158551%2C58.112926&mode=routes&rtext=58.010455%2C56.229443~58.352660%2C57.772938&rtn=1&rtt=auto&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzEwNTIxMBIY0KDQvtGB0YHQuNGPLCDQn9C10YDQvNGMIgoN8-pgQhW0CmhC~ymapsbm1%3A%2F%2Forg%3Foid%3D1013344228&z=9.89" width="100%" height="100%" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
        </div>



    </section>
</template>

<script>
export default {
    name: "MapBlock",
    data() {
        return { isActive: false }
    },

}

</script>

<style scoped>

</style>
