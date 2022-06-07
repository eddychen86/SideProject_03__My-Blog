<template>
  <header
    class="h-screen w-full"
    ondragstart="return false"
    oncopy="return false"
    oncut="return false"
  >
    <h1 id="webTitle">YuHung Blog.</h1>
    <router-link id="btn" to="/about">Enter</router-link>
    <p id="developer" >by Yu-Hung, Chen</p>
  </header>
</template>

<style scoped lang="scss">
header {
  @apply
    bg-[url('../assets/001.png')] bg-center bg-cover bg-no-repeat 
    flex flex-col justify-center items-center
  ;

  #webTitle {
    @apply
      text-7xl text-white font-['Dancing_Script']
      opacity-0
    ;
    animation: webTitle 2s .5s forwards;

    @keyframes webTitle {
      from {
        opacity: 0%;
        top: -70px;
      }
      to {
        opacity: 70%;
        top: 0px;
      }
    }
  }
  
  #btn {
    @apply
      mt-10 px-2 py-5
      text-2xl text-white font-extralight
      rounded-full
      opacity-0
      transition-all duration-200

      hover:text-gray-800 hover:font-light
      hover:bg-white/70
    ;
    animation: btn 1s 2.5s forwards;

    @keyframes btn {
      from {
        opacity: 0%;
      }
      to {
        opacity: 70%;
      }
    }
  }

  #developer {
    @apply
      absolute
      bottom-5
      text-white font-light
      opacity-0
    ;
    animation: developer .5s 3.5s forwards;
    @keyframes developer {
      from {
        opacity: 0;
      }
      to {
        opacity: 70%;
      }
    }
  }
}
</style>