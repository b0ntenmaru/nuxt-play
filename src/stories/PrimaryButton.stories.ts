import { storiesOf } from '@storybook/vue';
import PrimaryButton from '@/components/PrimaryButton.vue';

storiesOf('sample/PrimaryButton', module).add('PrimaryButton', () => ({
  components: { PrimaryButton },
  template: `
    <v-app>
      <v-main>
        <v-container>
          <PrimaryButton>ボタン</PrimaryButton>
        </v-container>
      </v-main>
    </v-app>
  `,
}));
