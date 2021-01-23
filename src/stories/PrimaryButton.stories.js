import { action } from '@storybook/addon-actions';
import PrimaryButton from '@/components/PrimaryButton.vue';

export default {
  title: 'buttons/PrimaryButton',
  component: PrimaryButton,
  argTypes: {
    isDisabled: { control: 'boolean' },
    buttonText: {
      control: 'text',
      defaultValue: 'ボタン',
    },
  },
};

export const PrimaryButtonComponent = () => ({
  components: { PrimaryButton },
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
    '<PrimaryButton @click="clickme" :isDisabled="isDisabled">{{ isDisabled }}</PrimaryButton>',
  methods: {
    clickme() {
      action('button-click')();
    },
  },
});
