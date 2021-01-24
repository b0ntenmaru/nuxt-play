<template>
  <v-btn
    depressed
    color="primary"
    :disabled="isDisabled"
    :class="{ disabled: isDisabled }"
    @click="click"
  >
    <v-icon large>fas fa-plus</v-icon>
    <slot />
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'PrimaryButton',
  props: {
    isDisabled: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
});
</script>

<style lang="scss" scoped></style>
