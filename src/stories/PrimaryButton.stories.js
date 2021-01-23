import { action } from '@storybook/addon-actions';
import PrimaryButtonComponent from '@/components/PrimaryButton.vue';

export default {
  title: 'buttons',
};

export const PrimaryButton = () => ({
  components: { PrimaryButtonComponent },
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      value: 'ボタン',
    },
  },
  template:
    '<PrimaryButtonComponent @click="clickme" :isDisabled="isDisabled">{{ buttonText }}</PrimaryButtonComponent>',
  methods: {
    clickme() {
      action('button-click')();
    },
  },
});

PrimaryButton.argTypes = {
  isDisabled: { control: 'boolean' },
  buttonText: {
    control: 'text',
    defaultValue: 'ボタン',
  },
};
