<template>
  <footer class="grid grid-cols-1 sm:grid-cols-3">
    <div id="footerStart">
      <h1 class="subTitle m-0">YuHung<br>Blog.</h1>
    </div>

    <div id="footerCenter" class="text-white/70 leading-8 text-lg font-extralight flex justify-center">
      <div>
        <a class="" href="https://goo.gl/maps/t2GfFvQQWNBJdvsDA" target="_blank">
          <fa class="" :icon="['fa-solid', 'location-dot']" />&nbsp;
          Taiwan, Taipei
        </a>
        <br />
        <a class="" href="tel:+886981328088">
          <fa class="" :icon="['fa-solid', 'phone']" />&nbsp;
          +886 981 328 088
        </a>
        <br />
        <a class="" href="mailto:eddychen101020@gmail.com" target="_blank">
          <fa class="" :icon="['fa-solid', 'envelope']" />&nbsp;
          eddychen101020@gmail.com
        </a>
      </div>
    </div>

    <div id="footerEnd" class="flex flex-col justify-center items-end">
      <div class="w-40 px-3 py-2 rounded-full bg-white/10 flex justify-between items-center">
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

    <p id="Copyright" class="pt-10 text-sm font-thin text-center col-span-3">
      POWER by YuHung Chen
    </p>
  </footer>
</template>

<style scoped lang="scss">
footer {
  @apply
    px-12 pt-10 pb-5
    text-white
    bg-[#1e1e1e]
  ;

  #footerStart {
    @apply
      text-2xl font-bold
      opacity-70
    ;
  }

  #footerEnd {
    
  }
}
</style>