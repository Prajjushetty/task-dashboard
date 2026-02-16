function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      Switch to {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
}

export default ThemeToggle;
