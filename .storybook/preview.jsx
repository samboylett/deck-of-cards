import * as nextImage from 'next/image';

import 'semantic-ui-css/semantic.min.css'
import '../styles/globals.css'

Object.defineProperty(nextImage, 'default', {
    configurable: true,
    value: props => <img {...props} />
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
