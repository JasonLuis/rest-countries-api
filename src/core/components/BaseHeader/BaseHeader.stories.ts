import UiBaseHeader from './BaseHeader.vue';

export default {
  title: 'Ui/BaseHeader',
  component: UiBaseHeader,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiBaseHeader },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-base-header v-bind="args"/>'
});

export const Default = Template.bind({});

Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<ui-base-header />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
