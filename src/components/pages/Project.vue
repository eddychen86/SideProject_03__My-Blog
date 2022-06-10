<template>
  <Navbar />

  <main id="project">
    <ul id="pageMenu">
      <li class="pageMenuItem">
        <a href="#sp01">Side Project 1</a>
      </li>
      <li class="pageMenuItem">
        <a href="#sp02">Side Project 2</a>
      </li>
      <li class="pageMenuItem">
        <a href="#sp03">Side Project 3</a>
      </li>
      <li class="pageMenuItem">
        <a href="#comeSoon">Coming Soon!</a>
      </li>
    </ul>

    <div class="body text-white/70">

      <h1 class="title mt-20 mb-0">Side Project</h1>

      <div id="sp01" class="pt-5 lg:pt-20">
        <h3 class="subTitle mb-5 mt-0 text-center">個人網頁製作<br /><span class="font-extralight">YuHung Blog</span></h3>
        <div class="flex justify-center">
          <img src="../../assets/sp01/01.jpg" class="max-h-[350px]" >
        </div>
        <div class="spInfo">
          <p class="para leading-7 md:col-span-3">
            以網站實作的形式，打造一個屬於自己的形象網站，除了自我介紹之外，也會陸續放一些自己做的 side project 來記錄自己的學習歷程。
          </p>
          <div class="spList">
            <ul class="flex flex-wrap">
              <li class="spItem">Vue3</li>
              <li class="spItem">Vite.js</li>
              <li class="spItem">tailwindcss</li>
              <li class="spItem">SCSS</li>
            </ul>
            <p class="text-xl mt-5 px-1">
              <a target="_blank" href="https://yu-hung-web.netlify.app" class="mr-5 scale-100 hover:scale-110">
                <fa :icon="['fa-solid', 'globe']"/>
              </a>
              <a target="_blank" href="https://github.com/eddychen86/SideProject-5--My-Resume-Website-V2" class="scale-100 hover:scale-110">
                <fa :icon="['fa-brands', 'github']"/>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div id="sp02" class="pt-20">
        <h3 class="subTitle mb-5 mt-0 text-center">中興大學 IRUP 網頁重製實習專案<br /><span class="font-extralight">NCHU, IRUP website remake</span></h3>
        <div class="flex justify-center">
          <img src="../../assets/sp02/01.jpg" class="max-h-[350px]" >
        </div>
        <div class="spInfo">
          <p class="para leading-7 md:col-span-3">
            這是一個團隊實習專案，我負責 UI/UX 設計、前端切版及少量的 firebase 串接，且有另外製作一個後台管理介面。<br /><br />
            在後台可以新增、編輯、刪除文章，新增的文章傳送到 firebase 後，前台網站可以串接 firebase 的文章數據。
          </p>
          <div class="spList">
            <ul class="flex flex-wrap">
              <li class="spItem">Vue3</li>
              <li class="spItem">Vite.js</li>
              <li class="spItem">tailwindcss</li>
              <li class="spItem">SCSS</li>
              <li class="spItem">Firebase</li>
            </ul>
            <p class="text-xl mt-5 px-1">
              <a target="_blank" href="http://irup.nchu.edu.tw:83/" class="mr-5 xs:mr-0 scale-100 hover:scale-110">
                <fa :icon="['fa-solid', 'globe']"/>
              </a>
              <span class="hidden xs:inline-block">&emsp;or&emsp;</span>
              <a target="_blank" href="http://irupvip.ddns.net:83/" class="scale-100 hover:scale-110">
                <fa :icon="['fa-solid', 'globe']"/>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div id="sp03" class="pt-20">
        <h3 class="subTitle mb-5 mt-0 text-center">電商網站切版練習<br /><span class="font-extralight">PhotoNFT</span></h3>
        <div class="flex justify-center">
          <img src="../../assets/sp03/01.jpg" class="max-h-[350px]" >
        </div>
        <div class="spInfo">
          <p class="para leading-7 md:col-span-3">
            以 Vue.js 當前端框架，並使用 Vite.js 代替 Vue CLI 環境切出一個虛構的購物平台。
          </p>
          <div class="spList">
            <ul class="flex flex-wrap">
              <li class="spItem">Vue3</li>
              <li class="spItem">Vite.js</li>
              <li class="spItem">Bootstrap</li>
            </ul>
            <p class="text-xl mt-5 px-1">
              <a target="_blank" href="https://sp02-website.netlify.app" class="mr-5 scale-100 hover:scale-110">
                <fa :icon="['fa-solid', 'globe']"/>
              </a>
              <a target="_blank" href="https://github.com/eddychen86/SideProject-2--website" class="scale-100 hover:scale-110">
                <fa :icon="['fa-brands', 'github']"/>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div id="comeSoon" class="pt-20"></div>
    </div>

  </main>

  <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped lang="scss">
.spInfo {
  @apply
    mt-5
    grid grid-cols-1 md:grid-cols-5
  ;
}

.spList {
  @apply
    md:border-l
    md:pl-5 py-5 md:ml-5
    text-xs lg:text-base md:text-sm text-justify leading-7
    md:row-span-2 md:col-span-2
  ;
}

.spItem {
  @apply
    rounded-[5px]
    m-1 px-1
    text-gray-900
    bg-white/70
    transition-all duration-300

    hover:bg-gray-800 hover:text-white hover:outline hover:outline-gray-100
  ;
}
</style>