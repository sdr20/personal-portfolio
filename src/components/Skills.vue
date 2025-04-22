<!-- src/components/Skills.vue -->
<template>
  <section id="skills" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">My Skills</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="skill in skills" :key="skill.name" class="bg-white p-4 rounded-lg shadow-md text-center">
          <i :class="skill.icon" class="text-2xl text-blue-600 mb-2"></i>
          <p class="text-gray-800 font-semibold">{{ skill.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: 'Graphic Design', icon: 'fas fa-paint-brush' },
        { name: 'Web Development', icon: 'fas fa-code' },
        { name: 'Adobe Photoshop', icon: 'fas fa-image' },
        { name: 'Figma', icon: 'fab fa-figma' },
        { name: 'Vue.js', icon: 'fab fa-vuejs' },
        { name: 'React.js', icon: 'fab fa-react' },
        { name: 'PHP', icon: 'fab fa-php' },
        { name: 'Arduino', icon: 'fas fa-microchip' },
        { name: 'SQL', icon: 'fas fa-database' },
        { name: 'Tailwind CSS', icon: 'fas fa-wind' },
        { name: 'UI/UX Design', icon: 'fas fa-desktop' },
        { name: 'HTML & CSS', icon: 'fab fa-html5' },
        { name: 'Flutter', icon: 'fab fa-flutter' }, // Added Flutter
        { name: 'Kotlin', icon: 'fas fa-code' } // Added Kotlin
      ]
    }
  }
}
</script>