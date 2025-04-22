<template>
  <main>
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </main>
</template>

<script>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Skills from '../components/Skills.vue'
import Contact from '../components/Contact.vue'

export default {
  components: { Hero, About, Projects, Skills, Contact }
}
</script>