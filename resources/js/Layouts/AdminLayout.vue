<script setup>
import ApplicationLogo from '@/Components/Admin/ApplicationLogo.vue';
import Sidebar from '@/Components/Admin/Sidebar.vue';
import { Link } from '@inertiajs/vue3';
import { ref, watch } from 'vue';
import MenuItem from "@/Components/Admin/MenuItem.vue";
import '../../css/app.css';
import DropdownLink from "../../../vendor/laravel/breeze/stubs/inertia-vue-ts/resources/js/Components/DropdownLink.vue";

const showSidebar = ref(false)
const showMenu = ref(false)

</script>
<template>

    <button @click="showSidebar = !showSidebar"
            data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
    </button>
    <aside id="sidebar-multi-level-sidebar" :class="{'-translate-x-0': showSidebar }" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <div class="w-full h-16 flex flex-col px-4 items-center mb-8">
                <p class="font-semibold text-3xl text-orange-600 pl-4">LOER CMS</p>
                <div class="text-white text-xs ">for Takman</div>
            </div>
            <ul class="space-y-2 font-medium" >
                <li>
                    <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">


                        <svg  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="#000000" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h16v7H0V0zm2 2v3h12V2H2zM0 9h16v7H0V9zm2 2v3h12v-3H2z" fill="currentColor"/>
                        </svg>
                        <span class="flex-1 ml-3 text-left whitespace-nowrap"><a href="/admin/menus">Меню</a></span>

                    </button>
                </li>
                <li>
                    <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path fill="currentColor" d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z"/>
                            </g>
                        </svg>
                        <span class="flex-1 ml-3 text-left whitespace-nowrap"><a href="/admin/pages">Контент</a></span>
                    </button>
                </li>

                <li>
                    <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V19.9C2.5 21.4 3.14 22 4.73 22H8.77C10.36 22 11 21.4 11 19.9Z" fill="currentColor"/>
                            <path d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2H15.23C13.64 2 13 2.6 13 4.1V10.9C13 12.4 13.64 13 15.23 13H19.27C20.86 13 21.5 12.4 21.5 10.9Z" fill="currentColor"/>
                            <path d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15H15.23C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z" fill="currentColor"/>
                        </svg>
                        <span class="flex-1 ml-3 text-left whitespace-nowrap"><a href="/admin/infoblocks">Инфоблоки</a></span>

                    </button>
                </li>

                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4L19 8.05512V15.9449L12 20L5 15.9449V8.05512L12 4ZM6.5 9.79002L11.25 12.5417L11.25 17.8306L6.5 15.0789V9.79002ZM12.75 17.8306L17.5 15.0789V9.79002L12.75 12.5417L12.75 17.8306ZM12 11.2413L16.7526 8.48809L12 5.73489L7.2474 8.48809L12 11.2413Z" fill="currentColor"/>
                        </svg>

                        <span class="flex-1 ml-3 whitespace-nowrap">Модули</span>
                    </a>

                    <ul class="ml-5 text-sm">
                        <li>
                            <a href="/admin/instructors" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span class="flex-1 ml-3 whitespace-nowrap">Инструкторы</span>
                            </a>
                        </li>

                        <li>
                            <a href="/admin/skipasses" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span class="flex-1 ml-3 whitespace-nowrap">Скипасы</span>
                            </a>
                        </li>

                        <li>
                            <a href="/admin/certificates" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span class="flex-1 ml-3 whitespace-nowrap">Сертификаты</span>
                            </a>
                        </li>
                    </ul>
                </li>


                <li>
                    <DropdownLink :href="route('logout')" method="post" as="button" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Выйти</span>
                    </DropdownLink>



                </li>

            </ul>
        </div>
    </aside>

    <div  @click="showSidebar = false" class="sm:ml-64">
        <slot/>
    </div>

    <div
        class="drawer-mask"
        :style="{
        width: showSidebar ? '100vw' : '0',
        opacity: showSidebar ? '0.6' : '0',
      }"
        @click="showSidebar = false"
    ></div>

</template>





