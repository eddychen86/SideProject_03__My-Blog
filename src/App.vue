<template>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');

* {
  @apply
    p-0 m-0
    relative
    box-border
  ;
}

#pageMenu {
  @apply
    ml-10
    top-40
    text-white/70
    border-l border-white
    fixed z-10
    hidden lg:block
  ;

  .pageMenuItem {
    @apply
      pl-5 py-2
      transition-all duration-200

      hover:border-l-[5px] hover:border-white/70 hover:font-semibold
    ;
  }

}

#about, #project, #contact {
  @apply
    w-full min-h-screen
    bg-[url('assets/002.png')] bg-center bg-cover bg-no-repeat bg-fixed
  ;
}

.body {
  @apply
    sm:container mx-auto
    w-full h-full
    py-40 px-10 lg:px-56 md:px-32 sm:px-20
  ;
}

.title {
  @apply
    mb-10
    text-3xl lg:text-5xl font-['Dancing_Script'] text-center font-bold
  ;
}

.subTitle {
  @apply
    mt-10
    text-lg lg:text-2xl font-bold
  ;
}

.para {
  @apply
    mt-3
    text-xs lg:text-base md:text-sm text-justify
  ;
}
</style>
