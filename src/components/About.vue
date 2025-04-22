<!-- src/components/About.vue -->
<template>
    <section id="about" class="py-20 bg-gray-50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">About Me</h2>
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-6 md:mb-0 flex justify-center">
            <img src="@/assets/me.png" alt="Profile" class="max-w-xs rounded-lg shadow-md" />
          </div>
          <div class="md:w-1/2 md:pl-8">
            <p class="text-gray-600 mb-4">
              I’m a proud BS Information Technology graduate from Zamboanga Peninsula Polytechnic State University, where I honed my skills in software development, system design, and creative problem-solving. I specialize in crafting visually stunning designs and building seamless, user-friendly web applications.
            </p>
            <p class="text-gray-600">
              My expertise spans a wide range of technologies, including React.js, Vue.js, PHP, and SQL for dynamic web development, as well as Arduino for hardware projects.
            </p>
          </div>
        </div>
      </div>
      <!-- Walking GIF -->
      <!-- <img
        src="@/assets/walking.gif"
        alt="Walking Animation"
        class="walking-gif absolute bottom-0 left-0 w-24 h-auto animate-walk"
      /> -->
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .walking-gif {
    transform: scaleX(1); /* Ensure the GIF faces right; change to scaleX(-1) if it faces left */
  }
  
  .animate-walk {
    animation: walkAcross 20s linear infinite; /* Increased duration to 10s for slower movement */
  }
  
  @keyframes walkAcross {
    0% {
      transform: translateX(-100%) scaleX(1);
    }
    100% {
      transform: translateX(calc(100vw - 100%)) scaleX(1);
    }
  }
  </style>