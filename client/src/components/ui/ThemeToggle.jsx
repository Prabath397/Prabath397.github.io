import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className="icon-button"
      id="theme-toggle"
      type="button"
      aria-label="Switch color theme"
      aria-pressed={isDark}
      onClick={toggleTheme}
    >
      <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
    </button>
  );
}
