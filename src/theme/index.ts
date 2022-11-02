import type { Theme } from 'theme-ui'

export const theme: Theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    secondary: 'green',
  },
  cards: {
    primary: {
      background: 'skyblue',
      borderRadius: '10px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  buttons: {
    primary: {
      cursor: 'pointer',
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
  },
}
