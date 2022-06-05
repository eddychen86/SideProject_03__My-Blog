<template>
  <footer>
    <div id="footerStart">
      <h1>YuHung<br>Web</h1>
    </div>
    <div id="footerEnd">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>

      <div class="contact">
        <fa class="fa mr-5" :icon="['fa-brands', 'instagram']" />
        <fa class="fa mr-5" :icon="['fa-brands', 'github']"/>
        <fa class="fa " :icon="['fa-brands', 'behance']" />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  @apply
    w-full px-12 pt-12 pb-5
    text-white
    flex justify-between
    bg-[#1e1e1e]
  ;

  #footerStart {
    @apply
      w-auto
      text-2xl font-bold
      opacity-70
      border border-blue-400
    ;
  }

  #footerEnd {
    @apply
      w-[40%]
      border border-blue-400
      flex justify-between
    ;
  }
}
</style>