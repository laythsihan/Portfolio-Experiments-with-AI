export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        paper: '#f6f4ef',
        surface: '#fffdf8',
        ink: '#1c1917',
        muted: '#6f6a63',
        faint: '#a19a90',
        line: '#e2ded4',
        clay: '#9c4a2f',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        shell: '78rem',
        prose: '38rem',
      },
    },
  },
}
