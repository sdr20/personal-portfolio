<!-- src/App.vue -->
<template>
  <div class="relative min-h-screen">
    <!-- Three.js Canvas for 3D Background -->
    <canvas ref="threeCanvas" class="absolute inset-0 z-0"></canvas>
    <!-- Main Content -->
    <div class="relative z-10">
      <Navbar />
      <router-view />
      <Footer />
    </div>
    <!-- Stationary Warrior GIF at Bottom-Right -->
    <img
      src="@/assets/4hsh.gif"
      alt="Warrior Sitting"
      class="fixed bottom-0 right-4 w-32 h-auto z-20"
    />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Navbar, Footer },
  setup() {
    const threeCanvas = ref(null);
    let scene, camera, renderer, cube;

    const initThreeJS = () => {
      // Scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x1f2937); // Match Tailwind's gray-800

      // Camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Renderer
      renderer = new THREE.WebGLRenderer({ canvas: threeCanvas.value, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      // Cube
      const geometry = new THREE.BoxGeometry(2, 2, 2);
      const material = new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true }); // Tailwind blue-500, wireframe style
      cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Handle Window Resize
      const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', onWindowResize);

      // Animation Loop
      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();

      // Cleanup on Unmount
      return () => {
        window.removeEventListener('resize', onWindowResize);
        renderer.dispose();
      };
    };

    onMounted(() => {
      initThreeJS();
    });

    onUnmounted(() => {
      if (renderer) renderer.dispose();
    });

    return { threeCanvas };
  },
};
</script>