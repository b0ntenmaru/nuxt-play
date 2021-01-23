import { storiesOf } from '@storybook/vue';
import Link from '@/components/Link.vue';

storiesOf('Link', module).add('Link', () => ({
  components: { Link },
  template: `<Link />`,
}));
