import UiSelectRegion from './SelectRegion.vue';

export default {
  title: 'Ui/SelectRegion',
  component: UiSelectRegion,
  argTypes: {
    darkMode: {
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiSelectRegion },
  setup() {
    return { args };
  },
  data() {
    return {
      model: ''
    };
  },
  template: '<ui-select-region v-model="model" v-bind="args"/>'
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<ui-select-region />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
