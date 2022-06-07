<template>
  <footer>
    <h1 id="footerStart">YuHung<br>Blog.</h1>

    <div id="footerCenter">
      <div id="info">
        <a class="flex" href="https://goo.gl/maps/t2GfFvQQWNBJdvsDA" target="_blank">
          <fa class="text-2xl" :icon="['fa-solid', 'location-dot']" />&nbsp;
          <span class="hidden md:inline-block">Taiwan, Taipei</span>
        </a>
        <br />
        <a class="flex" href="tel:+886981328088">
          <fa class="text-2xl" :icon="['fa-solid', 'phone']" />&nbsp;
          <span class="hidden md:inline-block">+886 981 328 088</span>
        </a>
        <br />
        <a class="flex" href="mailto:eddychen101020@gmail.com" target="_blank">
          <fa class="text-2xl" :icon="['fa-solid', 'envelope']" />&nbsp;
          <span class="hidden md:inline-block">eddychen101020@gmail.com</span>
        </a>
      </div>
    </div>

    <div id="footerEnd">
      <div class="footerItem">
        <a class="md:hidden" href="https://goo.gl/maps/t2GfFvQQWNBJdvsDA" target="_blank">
          <fa class="text-2xl md:mr-8" :icon="['fa-solid', 'location-dot']" />
        </a>
        <a class="md:hidden" href="tel:+886981328088">
          <fa class="text-2xl md:mr-8" :icon="['fa-solid', 'phone']" />
        </a>
        <a class="md:hidden" href="mailto:eddychen101020@gmail.com" target="_blank">
          <fa class="text-2xl md:mr-8" :icon="['fa-solid', 'envelope']" />
        </a>
        
        <a href="https://www.instagram.com/eddy_chen_86/" target="_blank">
          <fa class="text-2xl md:mr-8" :icon="['fa-brands', 'instagram']" />
        </a>
        <a href="https://github.com/eddychen86" target="_blank">
          <fa class="text-2xl md:mr-8" :icon="['fa-brands', 'github']"/>
        </a>
        <a href="https://www.behance.net/eddychen10f358/projects" target="_blank">
          <fa class="text-2xl" :icon="['fa-brands', 'behance']" />
        </a>
      </div>
    </div>

    <a id="Copyright" href="https://github.com/eddychen86/SideProject-5--My-Resume-Website-V2" target="_blank">POWER by YuHung Chen</a>
  </footer>
</template>

<style scoped lang="scss">
footer {
  @apply
    pt-12 pb-5 px-10
    text-white text-center
    bg-[#1e1e1e]
    sm:grid grid-cols-4 md:grid-cols-3
  ;
}

#footerStart {
  @apply
    pb-5 xs:p-0
    text-4xl font-bold sm:text-left 
    opacity-70
    sm:flex items-center
  ;
}

#footerCenter {
  @apply
    sm:text-white/70 leading-8 text-lg font-extralight
    hidden md:flex justify-center
  ;
}

#footerEnd {
  @apply
    pt-5 sm:pt-0 mt-4 mb-8 sm:m-0
    flex flex-col justify-center items-center sm:items-end
    sm:col-span-3 md:col-span-1
  ;
}

.footerItem {
  @apply
    px-4 py-3 md:px-3 md:py-2
    rounded-[20px] md:rounded-full 
    bg-white/10
    md:flex md:justify-between md:items-center
    grid grid-cols-3 gap-x-[50px] gap-y-[30px] md:gap-0
  ;
}

#Copyright {
  @apply
    pt-16
    text-sm font-thin
    col-span-4 md:col-span-3
  ;
}
</style>