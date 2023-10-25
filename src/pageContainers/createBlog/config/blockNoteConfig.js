import { lightDefaultTheme } from '@blocknote/react'

export const theme = {
  type: 'light',
  colors: {
    editor: {
      text: '#222222',
      background: '#ffffff'
    },
    menu: {
      text: '#ffffff',
      background: '#9b0000'
    },
    tooltip: {
      text: '#ffffff',
      background: '#b00000'
    },
    hovered: {
      text: '#ffffff',
      background: '#b00000'
    },
    selected: {
      text: '#ffffff',
      background: '#c50000'
    },
    disabled: {
      text: '#9b0000',
      background: '#7d0000'
    },
    shadow: '#640000',
    border: '#870000',
    sideMenu: '#bababa',
    highlightColors: lightDefaultTheme.colors.highlightColors
  },
  borderRadius: 4,
  fontFamily: 'Helvetica Neue, sans-serif',
}
