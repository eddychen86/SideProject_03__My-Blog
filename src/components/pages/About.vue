<template>
  <Navbar />

  <main id="about">
    <ul id="pageMenu">
      <li class="pageMenuItem">
        <a href="#skills">Skills</a>
      </li>
      <li class="pageMenuItem">
        <a href="#workExperience">Work Experience</a>
      </li>
      <li class="pageMenuItem">
        <a href="#aboutMe">About Me</a>
      </li>
      <li class="pageMenuItem">
        <a href="#education">Education</a>
      </li>
      <li class="pageMenuItem">
        <a href="#othersExperience">Others Experience</a>
      </li>
    </ul>

    <div class="body">

      <div class="grid xl:grid-cols-3 gap-10 auto-rows-max mt-20">
        <div class="w-full xl:block flex justify-center items-center">
          <img id="myPhoto" src="@/assets/Eddy_480x480.jpg">
        </div>
        <div class="xl:col-span-2 text-white font-light flex flex-col justify-center">
          <h1 class="name">陳昱宏 EDDY</h1>
          <p class="para sm:px-12 md:px-0">
            大家好，我叫陳昱宏，畢業於樹德科技大學視覺傳達設計系。我的興趣是前端設計，目前都是用國外論壇、影片等自主學習。攝影、看展覽、羽球是主要的休閒娛樂。
          </p>

          <div class="mt-3 grid sm:grid-cols-3 sm:px-12 md:px-0">
            <ul class="sm:col-span-2 grid grid-cols-3 sm:grid-cols-1">
              <li class="pt-3">
                <a class="flex justify-center sm:justify-start" href="https://goo.gl/maps/t2GfFvQQWNBJdvsDA" target="_blank">
                  <fa class="text-3xl sm:mr-2" :icon="['fa-solid', 'location-dot']" />
                  <span class="hidden sm:inline-block">Taiwan, Taipei</span>
                </a>
              </li>
              <li class="pt-3">
                <a class="flex justify-center sm:justify-start" href="tel:+886981328088">
                  <fa class="text-2xl sm:mr-2" :icon="['fa-solid', 'phone']" />
                  <span class="hidden sm:inline-block">+886 981 328 088</span>
                </a>
              </li>
              <li class="pt-3">
                <a class="flex justify-center sm:justify-start" href="mailto:eddychen101020@gmail.com" target="_blank">
                  <fa class="text-2xl sm:mr-2" :icon="['fa-solid', 'envelope']" />
                  <span class="hidden sm:inline-block">eddychen101020@gmail.com</span>
                </a>
              </li>
            </ul>

            <ul class="grid grid-cols-3 sm:grid-cols-1">
              <li class="pt-3">
                <a class="flex justify-center sm:justify-start" href="https://www.instagram.com/eddy_chen_86/" target="_blank">
                  <fa class="text-3xl sm:mr-2" :icon="['fa-brands', 'instagram']" />
                  <span class="hidden sm:inline-block">eddy_chen_86</span>
                </a>
              </li>
              <li class="pt-3">
                <a class="flex justify-center sm:justify-start" href="https://github.com/eddychen86" target="_blank">
                  <fa class="text-[27px] sm:mr-2" :icon="['fa-brands', 'github']"/>
                  <span class="hidden sm:inline-block">eddychen86</span>
                </a>
              </li>
              <li class="pt-3">
                <a class="flex justify-center sm:justify-start" href="https://www.behance.net/eddychen10f358/projects" target="_blank">
                  <fa class="text-[23px] sm:mr-1" :icon="['fa-brands', 'behance']" />
                  <span class="hidden sm:inline-block">陳昱宏</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="skills">
        <h1 class="title">Skills</h1>
        <div class="grid sm:grid-cols-2 gap-5">
          <div class="text-white/70">
            <h3 class="subTitle m-0 text-center">語法、預處理器、框架</h3>

            <div class="my-5 grid grid-cols-2 xs:grid-cols-3 font-light w-full sm:border-r">
              <ul>
                <li class="flex flex-col items-center p-3">
                  <img class="langIcon" src="@/assets/icon/html.png" >
                  <p class="langPara">HTML</p>
                </li>
                <li class="flex flex-col items-center p-3">
                  <img class="langIcon" src="@/assets/icon/css.png" >
                  <p class="langPara">CSS</p>
                </li>
                <li class="flex flex-col items-center p-3">
                  <img class="langIcon" src="@/assets/icon/js.png" >
                  <p class="langPara">JS</p>
                </li>
              </ul>
              <ul>
                <li class="flex flex-col items-center p-3">
                  <img class="langIcon" src="@/assets/icon/scss.png" >
                  <p class="langPara">SCSS</p>
                </li>
                <li class="flex flex-col items-center p-3">
                  <img class="langIcon" src="@/assets/icon/bootstrap.png" >
                  <p class="langPara">Bootstrap</p>
                </li>
                <li class="flex flex-col items-center p-3">
                  <img class="langIcon" src="@/assets/icon/tailwindcss.png" >
                  <p class="langPara">Tailwindcss</p>
                </li>
              </ul>
              <ul>
                <li class="flex flex-col items-center p-3">
                  <img class="langIcon" src="@/assets/icon/vue.png" >
                  <p class="langPara">Vue</p>
                </li>
              </ul>
            </div>

            <ul class="para sm:pr-5 md:pr-10 list-disc">
              <li>
                擅長使用 HTML、CSS 來進行網頁切版，尤其是常使用 Tailwindcss 與 Bootstrap 來進行切版。
              </li>
              <br />
              <li>
                SCSS 學習中，知道如何運用巢狀式結構，目前主要是在學習如何使用進階的功能。
              </li>
              <br />
              <li>
                前端框架正努力學習中，透過閱覽文章（如 stack overflow、IT邦幫忙）、影片、書籍來自學。
              </li>
            </ul>
          </div>
          <div class="text-white/70">
            <h3 class="subTitle m-0 text-center">工具</h3>

            <div class="my-5 font-light w-full grid grid-cols-2 xs:grid-cols-3">
              <div class="hidden sm:flex flex-col items-center p-3 col-span-3">
                <div class="langIcon"></div>
                <p class="langPara">&nbsp;</p>
              </div>
              <div class="flex flex-col items-center p-3">
                <img class="langIcon" src="@/assets/icon/illustrator.png" >
                <p class="langPara">Illustrator</p>
              </div>
              <div class="flex flex-col items-center p-3">
                <img class="langIcon" src="@/assets/icon/photoshop.png" >
                <p class="langPara">PhotoShop</p>
              </div>
              <div class="flex flex-col items-center p-3">
                <img class="langIcon" src="@/assets/icon/figma.png" >
                <p class="langPara">Figma</p>
              </div>
              <div class="hidden sm:flex flex-col items-center p-3 col-span-3">
                <div class="langIcon"></div>
                <p class="langPara">&nbsp;</p>
              </div>
            </div>

            <ul class="para smsm::pl-5 md:sm:pl-10 list-disc">
              <li>
                目前是使用 VScode 當作主力開發工具來使用，有時需測試的功能會在 codepen 上先做測試。
              </li>
              <br />
              <li>
                Figma 在學習階段，目前會拿來做一些簡單的網頁排版設計。
              </li>
            </ul>

          </div>
        </div>
      </div>

      <div id="workExperience">
        <h1 class="title">Work Experience</h1>

        <div class="workGrid mb-20">
          <a 
            class="companyLink"
            href="http://foresii.com/" target="_blank"
          >
            <img class="companyLogo" src="@/assets/icon/foresii.png" >
            <h3 class="subTitle font-light text-center">想見科技<br />股份有限公司</h3>
          </a>
          <div class="workInfo">
            <h3 class="subTitle font-normal mt-0 mb-5">2021.12 ～ 2022.06&emsp;|&emsp;實習前端工程師</h3>
            <ul class="workList">
              <li>網頁 UI/UX 設計</li>
              <li>網頁前端切版</li>
              <li>依不同專案開發需求以 HTML、CSS、響應式設計 (RWD)、JS、Vue.js 等技術協助前後端開發。</li>
            </ul>
          </div>
        </div>

        <div class="workGrid mb-20">
          <a 
            class="companyLink"
            href="https://www.wetalk-space.com/" target="_blank"
          >
            <img class="companyLogo" src="@/assets/icon/wetalk.png" >
            <h3 class="subTitle font-light text-center">維特實業<br />股份有限公司</h3>
          </a>
          <div class="workInfo">
            <h3 class="subTitle font-normal mt-0 mb-5">2021.05 ～ 2021.08&emsp;|&emsp;平面設計人員</h3>
            <ul class="workList">
              <li>設計製作平面文宣、海報和 banner</li>
              <li>公司動態 logo 製作、公司牆面視覺設計 </li>
              <li>進行圖稿、文案的排版設計</li>
              <li>與印刷廠聯絡，進行估價、打樣之事宜</li>
              <li>影片拍攝剪輯</li>
            </ul>
          </div>
        </div>

        <div class="workGrid">
          <a
            class="companyLink"
            href="https://www.facebook.com/howteam.image/" target="_blank"
          >
            <img class="companyLogo" src="@/assets/icon/howteam.png" >
            <h3 class="subTitle font-light text-center">好隊影像<br />有限公司</h3>
          </a>
          <div class="workInfo">
            <h3 class="subTitle font-normal mt-0 mb-5">2018.07 ～ 2018.08&emsp;|&emsp;攝影實習生</h3>
            <ul class="workList">
              <li>協助專案資料蒐集</li>
              <li>拍攝現場幫忙架設器材與搬器材</li>
              <li>拍攝工作照</li>
              <li>影片動態 logo 製作</li>
              <li>上字幕</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="aboutMe">
        <h1 class="title">About Me</h1>
        <p class="para">
          我是陳昱宏，出生於台北，畢業於樹德科技大學視覺傳達設計系。擅長圖文編排、修圖、網站切版。雖然主修設計科系，但前端工程設計是我的主要興趣與目標，期待在此領域發光發熱。
        </p>
        <br />
        <h3 class="subTitle">【 工作經歷 】</h3>
        <hr>
        <p class="para">
          曾當過攝影實習生，體會到職場上的各種辛苦，但也了解了業界技術與知識，並學習如何規劃工作順序。
          畢業後開始第一份工作：美編人員。在短短3個月的工作期間，我體會到了大量的工作量常需在極少的時間內完成。因這樣的工作環境，學習到時間控管的重要性。
          <br /><br />
          在工作流程上，前期會先照預設的進度走，當時間越來越緊迫，但感覺自己或是整體團隊工作趕不上進度時，會主動與主管討論並尋求解決方案；因為我的個性比較務實，希望團隊都可以聽懂我所要表達的內容，我會以邊說邊畫或是提供參考資料的方式讓對方理解我想表達的內容；在溝通時難免會發生與同事、主管意見相左的時候，我會先與對方互相了解彼此的目的與原因，再互相討論出最終方案。
        </p>
        <br />
        <h3 class="subTitle">【 轉職契機 】</h3>
        <hr>
        <p class="para">
          在大學期間曾上過一些網頁設計的課程，在學習的過程中萌生對製作網站的熱情，認為網頁設計是數位媒體設計重要的一環，也認為平面設計未來可能會轉型為網站型態的趨勢，所以積極投入學習網頁開發相關課程，並以成為前端工程師為目標。
        </p>
        <br />
        <h3 class="subTitle">【 學習過程 】</h3>
        <hr>
        <p class="para">
          在 HaHow 線上學習平台學習前端設計相關課程，從中學會撰寫 SCSS、Pug，並在結束第一份工作後，開始參加文化大學進修部開設為期半年的前端設計課程，來加速與提升學習效果。期間學習了基本的 HTML、CSS、JS、Vue、Bootstrap 等技術，並能獨力完成一個簡單的網站。除此之外，也自學了 Tailwind CSS，目前正在學習  React  與 Figma。
          <br /><br />
          在團體實習專案中，我擔任 UI/UX 設計及前端切版的負責人，從中學到團隊合作的重要性，在尚未掌握每個語言的進階用法與邏輯時，整個團隊都會互相思考來快速解決問題。除了工作態度外，也讓我學到了一些從課程中沒有獲取到的技術。
        </p>
        <br />
        <h3 class="subTitle">【 自我期許 】</h3>
        <hr>
        <p class="para">
          這些經歷都是在為未來的工作所奠下的基石，讓我在進軍前端相關領域時，能有所發揮。雖然在學習上還有很長一段路要走，目前先精進切版並將 JS 學得更熟悉，在前端語法的基礎邏輯與用法都熟悉之後，會持續將 Vue、React 學好，讓我的技能更加全面。或許這過程會跌跌撞撞、遇到許多挫折和低潮，但我會繼續保持這顆熱忱的心，不斷提升工作技能，期許能為公司做出更多的貢獻。
        </p>
      </div>

      <div id="education">
        <h1 class="title">Education</h1>
        <div class="sm:flex justify-center">
          <div class="educationInfo lg:pr-5 py-5">
            <img class="schoolLogo p-2" src="@/assets/icon/jwsh.png">
            <div class="sm:pt-5 h-full">
              <h3 class="subTitle mt-0">2013 ～ 2016</h3><br />
              <p class="para sm:text-center mt-0 font-normal">景文高中 高職部<br />室內設計系</p>
            </div>
          </div>
          <div class="educationInfo lg:px-5 py-5">
            <img class="schoolLogo p-2" src="@/assets/icon/stu.png">
            <div class="sm:pt-5 h-full">
              <h3 class="subTitle mt-0">2016 ～ 2020</h3><br />
              <p class="para sm:text-center mt-0 font-normal">樹德科技大學<br />視覺傳達設計系</p>
            </div>
          </div>
          <div class="educationInfo lg:pl-5 pt-5 pb-0">
            <img class="schoolLogo pt-2" src="@/assets/icon/sce.png">
            <div class="sm:pt-5 h-full">
              <h3 class="subTitle mt-0">2021 ～ 2022</h3><br />
              <p class="para sm:text-center mt-0 font-normal">中國文化大學 進修部<br />前端工程師養成班</p>
            </div>
          </div>
        </div>
      </div>

      <div id="othersExperience">
        <h1 class="title">Others Experience</h1>

        <h3 class="subTitle">參加「ICID 創新設計論文研討會」發表論文</h3>
        <p class="para">2019 | 大學</p>
        <p class="para">曾參加過致理科大所舉辦的設計相關論文研討會，而我所發表的是一篇關於台灣濫用包裝的現象造成環境影響的論文。</p>

        <h3 class="subTitle">參加 Vue.js Taiwan 2022 講座</h3>
        <p class="para">2022 | 進修</p>
        <p class="para">曾參加過 Vue.js Taiwan 與 LINE 舉辦的講座，此講座分成兩大主軸，Tailwind CSS 和 Vue，主要是深入了解 Vue 的進階應用與 Tailwind CSS 的便利性、客製化特色。</p>
      </div>
    </div>
  </main>

  <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped lang="scss">
#myPhoto {
  @apply
    w-[200px] md:min-w-[100px]
    border border-gray-300/70 rounded-full
  ;
}

.name {
  @apply
    text-3xl lg:text-4xl font-semibold text-center xl:text-left
    opacity-70
  ;
}

#skills, #workExperience, #aboutMe, #education, #othersExperience {
  @apply
    pt-20
    text-white/70
  ;
}

#skills {

  .langIcon {
    @apply
      mr-1
      h-7
    ;
  }

  .langPara {
    @apply
      mt-3
      text-xs lg:text-base md:text-sm text-white text-justify
    ;
  }
}

#workExperience {
  .workGrid {
    @apply
      grid grid-cols-1 sm:grid-cols-3 gap-10
    ;

    .companyLink {
      @apply
        flex flex-col justify-center items-center
      ;

      .companyLogo {
        @apply
          max-w-full w-28
          rounded-[10px]
        ;
      }
    }

    .workInfo {
      @apply
        pt-10 sm:pt-0 sm:pl-10
        border-t sm:border-l sm:border-t-0
        sm:col-span-2
      ;

      .workList {
        @apply
          pl-5
          leading-8
          list-decimal
        ;
      }
    }
  }
}

#aboutMe {
  @apply
    text-lg text-justify
  ;

  h3 {
    @apply 
      mb-3
    ;
  }
}

#education {

  .educationInfo {
    @apply
      w-full
      sm:py-10
      text-center
      flex sm:flex-col justify-center sm:justify-around items-center
    ;

    .schoolLogo {
      @apply
        h-auto sm:h-24 w-12 xs:w-20 sm:w-auto
        mr-5 xs:mr-10 sm:mr-0
        rounded-[10px]
        bg-white
      ;
    }
  }
}
</style>