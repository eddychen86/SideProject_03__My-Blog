<template>
  <nav>
    <ul id="menu">
      <li class="m-[5%] w-full h-full">
        <router-link to="/" class="navItem">
          <h1 class="navLink">Home</h1>
        </router-link>
      </li>
      <li class="m-[5%] w-full h-full">
        <router-link to="/about" class="navItem">
          <h1 class="navLink">About</h1>
        </router-link>
      </li>
      <li class="m-[5%] w-full h-full">
        <router-link to="/project" class="navItem">
          <h1 class="navLink">Project</h1>
        </router-link>
      </li>
      <li class="m-[5%] w-full h-full">
        <router-link to="/contact" class="navItem">
          <h1 class="navLink">Contact</h1>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  @apply
    w-full h-14 fixed z-10 top-0  overflow-hidden
    bg-black/[.05] backdrop-blur-xl
  ;

  #menu {
    @apply
      container mx-auto
      w-72 sm:w-96 h-full
      border-b-2 border-white
      flex justify-around items-center
    ;

    .navItem {
      @apply
        w-full h-full
        border-b-0 border-white
        transition-all duration-200

        
      ;
    }
    .navLink {
      @apply
        h-full
        text-white
        flex justify-center items-center
        
      ;
    }
  }
}
</style>