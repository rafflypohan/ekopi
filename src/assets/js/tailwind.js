import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import '../styles/css/tailwind.css'

import {
  TCard,
  TButton,
  TInput,
  TInputGroup,
  TCheckbox,
  TDropdown
} from 'vue-tailwind/dist/components'

const settings = {
  't-button':{
    component: TButton,
    props:{
      classes: 'block px-4 py-2 text-white text-lg font-semibold transition duration-100 ease-in-out bg-primary border border-transparent rounded shadow-sm hover:bg-primary-600 focus:border-primary focus:ring-2 focus:ring-yellow-900 focus:outline-none focus:ring-opacity-50 disabled:opacity-50',
      type: 'submit'
    }
  },

  't-card': {
    component: TCard,
    props: {
      fixedClasses: {
        wrapper: 'border rounded shadow-lg ',
        body: 'p-3',
        header: 'border-b px-8 py-6 rounded-t ',
        footer: 'border-t p-3 rounded-b'
      },
      classes: {
        wrapper: 'bg-white border-gray-100',
        body: '',
        header: 'font-bold text-xl',
        footer: 'border-gray-100'
      },
    }
  },

  't-input':{
    component: TInput,
    props:{
    }
  },
  
  't-input-group': {
    component: TInputGroup,
    props:{
      fixedClasses: {
        wrapper: '',
        label: 'block',
        body: '',
        feedback: ' text-sm text-sm',
        description: 'text-gray-400 text-sm'
      },
      classes: {
        wrapper: '',
        label: '',
        body: '',
        feedback: 'text-gray-400',
        description: 'text-gray-400'
      },
    }
  },
  't-checkbox': {
    component: TCheckbox,
    props: {
      fixedClasses: 'transition duration-100 ease-in-out rounded shadow-sm focus:border-yellow-900 focus:ring-2 focus:ring-yellow-900 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
      classes: 'text-primary border-gray-300 ',
      variants: {
        error: 'text-red-500 border-red-300',
        success: 'text-green-500 border-green-300'
      }
    }
  },
  't-dropdown': {
    component: TDropdown
  }
}

Vue.use(VueTailwind, settings)