<template>
    <section id="contact" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
        <div class="flex flex-col md:flex-row gap-8">
          <div class="md:w-1/2">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <div class="mb-4">
                <label for="name" class="block text-gray-600 mb-2">Name</label>
                <input type="text" id="name" class="w-full p-3 border rounded-lg" placeholder="Your Name" />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-600 mb-2">Email</label>
                <input type="email" id="email" class="w-full p-3 border rounded-lg" placeholder="Your Email" />
              </div>
              <div class="mb-4">
                <label for="message" class="block text-gray-600 mb-2">Message</label>
                <textarea id="message" class="w-full p-3 border rounded-lg" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button class="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">Send Message</button>
            </div>
          </div>
          <div class="md:w-1/2 flex flex-col justify-center">
            <p class="text-gray-600 mb-4">Feel free to reach out for collaborations or inquiries!</p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-600 hover:text-blue-600">LinkedIn</a>
              <a href="https://github.com/sdr20" class="text-gray-600 hover:text-blue-600">GitHub</a>
              <a href="https://www.facebook.com/stevendhaniel.ruelo.7/" class="text-gray-600 hover:text-blue-600">Facebook</a>
              <a href="https://www.instagram.com/stvndhaniel/" class="text-gray-600 hover:text-blue-600">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <!-- <img
        src="@/assets/XwI4.gif"
        alt="Warrior Animation"
        class="Warrior-gif absolute bottom-0 left-0 w-24 h-auto"
      /> -->
    </section>
  </template>
  
  <script>
  export default {}
  </script>