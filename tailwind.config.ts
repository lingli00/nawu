import type { Config } from 'tailwindcss';

/**
 * Tailwind 令牌映射。
 * 组件里只允许写语义类名（`bg-surface text-ink border-line`），
 * 禁止写死色值 —— 深浅色切换只换 CSS 变量（见 `src/index.css`）。
 */
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        'ink-3': 'var(--ink-3)',
        line: 'var(--line)',
        'line-2': 'var(--line-2)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        'accent-soft': 'var(--accent-soft)',
        gui: 'var(--gui)',
        xu: 'var(--xu)',
        fou: 'var(--fou)',
        warn: 'var(--warn)',
        'warn-soft': 'var(--warn-soft)',
        danger: 'var(--danger)',
        'danger-soft': 'var(--danger-soft)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
        btn: 'var(--radius-btn)',
        sheet: '20px',
      },
      boxShadow: {
        card: 'var(--shadow)',
        lg: 'var(--shadow-lg)',
      },
      spacing: {
        'safe-t': 'var(--safe-t)',
        'safe-b': 'var(--safe-b)',
        topbar: '56px',
        tabbar: '56px',
        hit: '44px',
      },
      fontSize: {
        h1: ['22px', { lineHeight: '30px', fontWeight: '600' }],
        h2: ['17px', { lineHeight: '24px', fontWeight: '600' }],
        h3: ['15px', { lineHeight: '22px', fontWeight: '500' }],
        body: ['14px', { lineHeight: '20px', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '16px', fontWeight: '400' }],
        num: ['28px', { lineHeight: '34px', fontWeight: '700' }],
        'num-sm': ['16px', { lineHeight: '22px', fontWeight: '600' }],
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"PingFang SC"',
          '"Noto Sans SC"',
          '"Microsoft YaHei"',
          'system-ui',
          'sans-serif',
        ],
      },
      transitionDuration: {
        page: '200ms',
        sheet: '250ms',
      },
    },
  },
  plugins: [],
};

export default config;
