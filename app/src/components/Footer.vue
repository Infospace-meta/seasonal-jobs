<template>
  <section class="bg-gray-50">
    <div class="md:max-w-xl lg:max-w-7xl mx-auto py-5 text-gray-500">
      <!-- <div class="flex flex-col justify-center items-center space-y-10 py-10 sm:flex sm:flex-row sm:justify-between sm:items-center sm:py-14 mx-5"> -->
      <div
        class="grid grid-cols-1 justify-center items-center space-y-10 py-10 md:grid md:grid-cols-1 md:justify-between md:items-center lg:grid lg:grid-cols-3 lg:justify-between lg:items-center sm:py-14 mx-1"
      >
        <!-- seasonaljobs logo -->
        <div class="flex justify-start items-start">
          <router-link to="/" class="flex justify-center items-center">
            <img
              src="../assets/kenya-removebg.png"
              alt="seasonaljobs"
              class="h-1/3 w-1/3"
            />
            <div class="flex justify-center items-center space-x-2 font-serif">
              <p class="text-2xl text-red-600 font-bold">"Bring</p>
              <p class="text-2xl font-bold text-black">it</p>
              <p class="text-2xl text-green-600 font-bold">Home!"</p>
            </div>
          </router-link>
        </div>

        <!-- bottom_left part -->
        <div
          class="flex justify-center items-center lg:flex lg:justify-start lg:items-start gap-24 text-gray-500 px-2"
        >
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>

      <!-- names of sections
      <div class="">
        <ul class="flex justify-center items-center gap-5">
          <li class="text-gray-500 hover:text-green-950 hover:pb-2">
              <router-link to="/">Home</router-link>
            </li>
          <li class="text-gray-500 hover:text-green-950 hover:pb-2">
            <router-link to="/about">About</router-link>
          </li>
          <li class="text-gray-500 hover:text-green-950 hover:pb-2">
              <router-link to="/contact">Contact</router-link>
            </li>
          <li class="text-gray-500 hover:text-green-950 hover:pb-2">
            <router-link to="/register">Register</router-link>
          </li>
        </ul>
      </div> -->
      <hr />
      <div
        class="grid grid-cols-1 justify-center items-center md:grid md:grid-cols-3 md:justify-center md:items-center py-10 bg-gray-300 px-5 space-y-5"
      >
        <!-- social icons -->
        <div class=" flex flex-col justify-center items-center ">
          <p
            class="text-gray-500 flex justify-center items-center py-2 lg:justify-end lg:items-end px-2"
          >
            Stay in touch with us
          </p>
          <div
            class="flex justify-center items-center md:flex md:justify-center md:items-center lg:flex lg:justify-end lg:items-end gap-3"
          >
            <!-- e-mail -->
            <div class="rounded-full bg-gray-200 p-2 hover:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2E7D32"
                class="bi bi-envelope-at"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"
                />
                <path
                  d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"
                />
              </svg>
            </div>
            <!-- phone -->
            <div class="rounded-full bg-gray-200 p-2 hover:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2E7D32"
                class="bi bi-telephone hover:block"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <div class="absolute bg-gray-300 hidden p-2">
                <p class="text-white">+44 7399 413391</p>
              </div>
            </div>
            <!-- location -->
            <div class="rounded-full bg-gray-200 p-2 hover:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2E7D32"
                class="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"
                />
                <path
                  d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                />
              </svg>
            </div>
            <!-- whatsApp -->
            <div class="rounded-full bg-gray-200 p-2 hover:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2E7D32"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center md:flex md:flex-col md:justify-start md:items-start space-y-3">
          <h1 class="text-lg font-semibold text-gray-900"> <router-link to="/about">About</router-link> </h1>
          <ul class="flex flex-col justify-center items-center md:flex md:flex-col md:justify-start md:items-start space-y-2">
            <li class="hover:underline"><router-link to="#">Mission</router-link></li>
            <li class="hover:underline"><router-link to="#">Vision</router-link></li>
            <li class="hover:underline"><router-link to="#">Help</router-link></li>
            <li class="hover:underline"><router-link to="#">Ask a question</router-link></li>
          </ul>
        </div>
        <div class="flex flex-col justify-center items-center md:flex md:flex-col md:justify-start md:items-start space-y-3">
          <h1 class="text-lg font-semibold text-gray-900 -left-5"> <router-link to="/register"> Register</router-link></h1>
          <ul class="flex flex-col justify-center items-center md:flex md:flex-col md:justify-start md:items-start space-y-2">
            <li class="hover:underline"><router-link to="#">lorem</router-link></li>
            <li class="hover:underline"><router-link to="#">Ipsum</router-link></li>
            <li class="hover:underline"><router-link to="#">Clomun</router-link></li>
            <li class="hover:underline"><router-link to="">Veliaranto</router-link></li>
          </ul>
        </div>
      </div>

      <div
        class="grid cols-1 justify-center items-center sm:grid sm:grid-cols-3 sm:justify-center sm:items-center"
      >
        <div class="mx-12">
          <img src="../assets/images/seasonal_logo.png" alt="seasonal_jobs" />
        </div>
        <div>
          <p class="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ipsa
            laborum numquam possimus, dignissimos illum, dolorum debitis eaque
            libero facilis natus, aliquam minima? Reiciendis, doloremque.
          </p>
        </div>
        <div>
          <img
            src="../assets/images/youth_logo.png"
            class="h-48 w-48"
            alt="youthfund"
          />
        </div>
      </div>

      <hr />
      <!-- bottom part -->
      <div
        class="grid grid-cols-1 justify-center items-center md:grid md:grid-cols-1 md:justify-between md:items-center lg:grid lg:grid-cols-1 lg:justify-between lg:items-center mx-5 py-5 space-y-3"
      >
        <!-- bottom_right part -->
        <div
          class="grid grid-cols-1 justify-center items-center text-gray-500 space-y-2"
        >
          <div
            class="flex justify-center items-center lg:flex lg:justify-center lg:items-center space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height=""
              fill="currentColor"
              class="bi bi-c-circle h-3 w-3 lg:mb-[5px]"
              viewBox="0 0 16 16"
            >
              <path
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"
              />
            </svg>
            <p class="">Copyright 2024. All Rights Reserved</p>
          </div>
          <p
            class="flex justify-center items-center lg:flex lg:justify-center lg:items-center"
          >
            Created by Info-space meta
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
