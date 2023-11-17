<template>
    <section class="section__how">
        <div class="container section__how-container">
            <div class="section__how-block" v-bind:class="'section__'+properties.left_color.value">
                <h2 class="section__services-title"><a href="/howtoget">Как добраться</a></h2>
                <div class="section__services-text">Скорый электропоезд "Ласточка" довезет Вас до Чусового,где производится пересадка на автобусный трансфер до Горнолыжного курорта "Такман".</div>
            </div>
            <div class="section__how-block" v-bind:class="'section__'+properties.left_color.value">
                <h2 class="section__services-title">График работы</h2>
                <div class="section__how-block-columns">
                    <div class="section__how-block-column">
                        <div class="section__how-block-item">
                            <div class="section__how-block-item-title">Администрация</div>
                            <div class="section__how-block-item-text"><p>Ежедневно</p> <p>с 9:00 до 23:00</p></div>
                        </div>
                        <div class="section__how-block-item">
                            <div class="section__how-block-item-title">Кафе</div>
                            <div class="section__how-block-item-text"><p>Ежедневно</p> <p>с 9:00 до 23:00</p></div>
                        </div>
                    </div>
                    <div class="section__how-block-column">
                        <div class="section__how-block-item">
                            <div class="section__how-block-item-title">Прокат</div>
                            <div class="section__how-block-item-text"><p>Ежедневно</p> <p>с 9:00 до 23:00</p></div>
                        </div>
                        <div class="section__how-block-item">
                            <div class="section__how-block-item-title">Инструкторы </div>
                            <div class="section__how-block-item-text"><p>Ежедневно</p> <p>с 9:00 до 23:00</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HowBlock",
    props: ['title_block', 'content', 'properties' ],
}
</script>

<style scoped>

.section__services-title a {
    color: #181F26;
}

</style>
