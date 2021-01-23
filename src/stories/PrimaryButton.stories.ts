import { storiesOf } from '@storybook/vue';
import PrimaryButton from '@/components/PrimaryButton.vue';

storiesOf('sample/PrimaryButton', module).add('PrimaryButton', () => ({
  components: { PrimaryButton },
  template: `
    <PrimaryButton>ボタン</PrimaryButton>
  `,
}));
