import UiInputSearch from './InputSearch.vue';

export default {
  title: 'Ui/InputSearch',
  component: UiInputSearch,
  argTypes: {
    modelValue: {
      control: {
        type: 'text'
      }
    },
    darkMode: {
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiInputSearch },
  setup() {
    return { args };
  },
  data() {
    return {
      model: ''
    };
  },
  template: '<ui-input-search v-bind="args" :model-value="model"/>'
});

export const Default = Template.bind({});

Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<ui-input-search />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
