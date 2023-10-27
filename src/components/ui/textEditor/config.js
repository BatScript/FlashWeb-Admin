import { lightDefaultTheme } from '@blocknote/react'

export const theme = {
  type: 'light',
  colors: {
    editor: {
      text: '#000',
      background: '#ffffff'
    },
    menu: {
      text: '#000',
      background: '#e6f4fe'
    },
    tooltip: {
      text: '#000',
      background: '#b00000'
    },
    hovered: {
      text: '#000',
      background: '#acd8fc'
    },
    selected: {
      text: '#000',
      background: '#acd8fc'
    },
    disabled: {
      text: '#acd8fc',
      background: '#acd8fc'
    },
    shadow: '#640000',
    border: '#870000',
    sideMenu: '#bababa',
    highlightColors: lightDefaultTheme.colors.highlightColors
  },
  borderRadius: 4,
  fontFamily: 'Helvetica Neue, sans-serif'
}
