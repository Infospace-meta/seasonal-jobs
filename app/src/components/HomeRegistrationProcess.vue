<template>
  <section class="px-4 py-8 sm:py-20">
    <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Text -->
      <div class="flex flex-col md:px-0 stick top-10">
        <h1 class="font-semibold text-2xl md:text-3xl mb-5">
          Application Process
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
          aspernatur doloribus sed repudiandae labore.
        </p>
      </div>
      <!-- End Text -->

      <!-- Timeline: Register,Apply,Receive,Travel,Work,BringItHome -->
      <div class="lg:col-span-2">
        <div class="mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div
              class="absolute border-opacity-20 border-gray-700 h-full border [left:50%]"
            ></div>
            <!-- Register item -->
            <div
              class="mb-8 flex justify-between items-center w-full right-timeline"
            >
              <div class="order-1 w-5/12"></div>
              <div
                class="z-10 flex items-center order-1 bg-green-800 shadow-xl w-8 h-8 rounded-full"
              >
                <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div
                class="order-1 rounded-2xl shadow-md w-5/12 px-6 py-4 border-2 border-green-700"
              >
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Register</h3>
                <p class="text-sm tracking-wide text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem at veritatis sapiente.
                </p>
              </div>
            </div>

            <!-- Apply item -->
            <div
              class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
            >
              <div class="order-1 w-5/12"></div>
              <div
                class="z-10 flex items-center order-1 bg-green-700 shadow-xl w-8 h-8 rounded-full"
              >
                <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div
                class="order-1 rounded-2xl shadow-xl w-5/12 px-6 py-4 border-2 border-green-700"
              >
                <h3 class="mb-3 font-bold text-xl">Apply</h3>
                <p class="text-sm tracking-wide text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem at veritatis sapiente.
                </p>
              </div>
            </div>

            <!-- Receive item -->
            <div
              class="mb-8 flex justify-between items-center w-full right-timeline"
            >
              <div class="order-1 w-5/12"></div>
              <div
                class="z-10 flex items-center order-1 bg-green-700 shadow-xl w-8 h-8 rounded-full"
              >
                <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div
                class="order-1 rounded-2xl shadow-xl w-5/12 px-6 py-4 border-2 border-green-700"
              >
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Receive</h3>
                <p class="text-sm tracking-wide text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem at veritatis sapiente.
                </p>
              </div>
            </div>

            <!-- Travel item -->
            <div
              class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
            >
              <div class="order-1 w-5/12"></div>
              <div
                class="z-10 flex items-center justify-center order-1 bg-green-700 shadow-xl w-8 h-8 rounded-full"
              >
                <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
              </div>
              <div
                class="order-1 rounded-2xl shadow-xl w-5/12 px-6 py-4 border-2 border-green-700"
              >
                <h3 class="mb-3 font-bold text-xl">Travel</h3>
                <p class="text-sm tracking-wide text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem at veritatis sapiente.
                </p>
              </div>
            </div>

            <!-- Work item -->
            <div
              class="mb-8 flex justify-between items-center w-full right-timeline"
            >
              <div class="order-1 w-5/12"></div>
              <div
                class="z-10 flex items-center order-1 bg-green-700 shadow-xl w-8 h-8 rounded-full"
              >
                <h1 class="mx-auto font-semibold text-lg text-white">5</h1>
              </div>
              <div
                class="order-1 rounded-2xl shadow-xl w-5/12 px-6 py-4 border-2 border-green-700"
              >
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Work</h3>
                <p class="text-sm tracking-wide text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem at veritatis sapiente.
                </p>
              </div>
            </div>

            <!-- Bring It home item -->
            <div
              class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
            >
              <div class="order-1 w-5/12"></div>
              <div
                class="z-10 flex items-center justify-center order-1 bg-green-700 shadow-xl w-8 h-8 rounded-full"
              >
                <h1 class="mx-auto text-white font-semibold text-lg">6</h1>
              </div>
              <div
                class="order-1 rounded-2xl shadow-xl w-5/12 px-6 py-4 border-2 border-green-700"
              >
                <h3 class="mb-3 font-bold text-xl">Bring It Home</h3>
                <p class="text-sm tracking-wide text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem at veritatis sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Timeline -->
    </div>
  </section>
</template>

<script setup></script>
