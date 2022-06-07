<template>
  <footer>
    <h1 id="footerStart">YuHung<br>Blog.</h1>

    <div id="footerCenter">
      <div id="info">
        <a href="https://goo.gl/maps/t2GfFvQQWNBJdvsDA" target="_blank">
          <fa class="text-2xl text-white sm:text-base" :icon="['fa-solid', 'location-dot']" />&nbsp;
          <span class="hidden sm:inline-block">Taiwan, Taipei</span>
        </a>
        <br />
        <a href="tel:+886981328088">
          <fa class="text-2xl text-white sm:text-base" :icon="['fa-solid', 'phone']" />&nbsp;
          <span class="hidden sm:inline-block">+886 981 328 088</span>
        </a>
        <br />
        <a href="mailto:eddychen101020@gmail.com" target="_blank">
          <fa class="text-2xl text-white sm:text-base" :icon="['fa-solid', 'envelope']" />&nbsp;
          <span class="hidden sm:inline-block">eddychen101020@gmail.com</span>
        </a>
      </div>
    </div>

    <div id="footerEnd">
      <div class="footerItem">
        <a href="https://www.instagram.com/eddy_chen_86/" target="_blank">
          <fa class="text-2xl" :icon="['fa-brands', 'instagram']" />
        </a>
        <a href="https://github.com/eddychen86" target="_blank">
          <fa class="text-2xl" :icon="['fa-brands', 'github']"/>
        </a>
        <a href="https://www.behance.net/eddychen10f358/projects" target="_blank">
          <fa class="text-2xl" :icon="['fa-brands', 'behance']" />
        </a>
      </div>
    </div>

    <p id="Copyright">POWER by YuHung Chen</p>
  </footer>
</template>

<style scoped lang="scss">
footer {
  @apply
    px-12 pt-10 pb-5
    text-white
    bg-[#1e1e1e]
    sm:grid grid-cols-2 lg:grid-cols-3
  ;

  #footerStart {
    @apply
      pb-5 sm:p-0
      text-2xl font-bold text-center sm:text-left
      opacity-70
      col-span-2 lg:col-span-1 row-span-2 lg:row-span-1
    ;
  }

  #footerCenter {
    @apply
      sm:text-white/70 leading-8 text-lg font-extralight
      flex justify-center
    ;

    #info {
      @apply
        w-40 sm:w-auto
        px-3 py-2 mt-5 sm:p-0 sm:m-0
        rounded-full sm:rounded-none
        bg-white/10 sm:bg-white/0
        flex justify-between items-center sm:block
      ;
    }
  }

  #footerEnd {
    @apply
      flex flex-col justify-center items-center lg:items-end
    ;

    .footerItem {
      @apply
        w-40
        px-3 py-2 mt-5
        rounded-full 
        bg-white/10
        flex justify-between items-center
      ;
    }
  }

  #Copyright {
    @apply
      pt-10
      text-sm font-thin text-center
      col-span-3
    ;
  }
}
</style>