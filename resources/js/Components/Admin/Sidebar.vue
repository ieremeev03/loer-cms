<template>
    <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
    <!-- you will need to add a little "X" button next to the logo in order to close it though -->
    <div class="w-1/2 md:w-1/3 lg:w-64  md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30" id="main-nav">
          <div class="w-full h-16 border-b flex px-4 items-center mb-8">
            <p class="font-semibold text-3xl text-orange-600 pl-4">LOER CMS</p>
          </div>

          <div >
            Добавить страницу
            <p class="pl-4 text-sm font-semibold mb-1">Страницы</p>
                <ul class="">

                </ul>
          </div>

          <div class="mb-4 px-4">
            <p class="pl-4 text-sm font-semibold mb-1">Модули</p>
            <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
              <span class="text-gray-700 text-sm">Инструкторы</span>
            </div>
            <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
              <span class="text-gray-700 text-sm">Подарочные сертификаты</span>
            </div>
          </div>



        </div>
</template>

<script>
import {Link} from '@inertiajs/vue3'
import MenuItem from "@/Components/Admin/MenuItem.vue";
export default {
    components: {MenuItem},
    props: ['pages'],
    setup(props) {
        console.log(props.pages)
    }
}
</script>
