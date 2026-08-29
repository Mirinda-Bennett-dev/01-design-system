import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  return (
    <button
      onClick={toggle}
      style={{
        padding: "8px 16px",
        borderRadius: "999px",
        border: "1px solid var(--color-text-muted)",
        backgroundColor: "transparent",
        color: "var(--color-text)",
        cursor: "pointer",
        fontSize: "14px",
      }}
    >
      {dark ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
}

export default ThemeToggle;