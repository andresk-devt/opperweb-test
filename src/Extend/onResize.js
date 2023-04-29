import { ref, onMounted, onUnmounted } from 'vue';

export default function() {
  const screenWidth = ref(window.innerWidth);

  const onResize = () => {
    screenWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', onResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
  });

  return {
    screenWidth,
  };
}