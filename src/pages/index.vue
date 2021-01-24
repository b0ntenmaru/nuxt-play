<template>
  <div>
    <PrimaryButton :is-disabled="false">ボタン</PrimaryButton>
  </div>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton.vue';
export default {
  components: { PrimaryButton },
};
</script>
