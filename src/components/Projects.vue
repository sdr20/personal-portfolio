<template>
    <section id="projects" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">My Projects</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <a :href="project.link" class="text-blue-600 hover:underline">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'RightJob Solution Payroll System',
            description: 'A responsive online Payroll built with Vue.js and Tailwind CSS.',
            image: './src/assets/rjs.jpg',
            link: 'https://payroll-system-frontend-pied.vercel.app/'
          },
          {
            id: 2,
            title: 'Online Quiz System',
            description: 'A user-friendly online quiz system for creating, taking, and managing quizzes with ease.',
            image: './src/assets/onlinequizsystem.jpg',
            link: 'https://online-quiz-front-b1mqoj5uh-sdr20s-projects.vercel.app/login'
          },
          {
            id: 3,
            title: 'Vowsyle E-commerce Mobile App', 
            description: 'A stylish e-commerce platform offering exquisite wedding gowns and chic womens wear for every special occasion..',
            image: './src/assets/app.jpg',
            link: 'https://github.com/sdr20/vowstyle-E-commerce-App'
          }
        ]
      }
    }
  }
  </script>