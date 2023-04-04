import UiCardCountryInfo from './CardCountryInfo.vue';

export default {
  title: 'Ui/CardCountryInfo',
  component: UiCardCountryInfo,
  argTypes: {
    img: {
      control: {
        type: 'text'
      }
    },
    country: {
      control: {
        type: 'text'
      }
    },
    population: {
      control: {
        type: 'number'
      }
    },
    region: {
      control: {
        type: 'text'
      }
    },
    capital: {
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
  components: { UiCardCountryInfo },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-card-country-info v-bind="args"/>'
});

export const Default = Template.bind({});
Default.args = {
  img: 'https://flagcdn.com/br.svg',
  country: 'Brazil',
  population: 206135893,
  region: 'Americas',
  capital: 'Brasília'
};
Default.parameters = {
  docs: {
    source: {
      code: `<ui-card-country-info />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
