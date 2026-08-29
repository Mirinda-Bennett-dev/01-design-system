import Badge from "./components/Badge";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div
      style={{
        padding: "var(--space-lg)",
        fontFamily: "var(--font-main)",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>Mirinda's Design System</h1>
        <ThemeToggle />
      </div>
      <p>A living library of reusable components, built with React and TypeScript.</p>

      <h2 style={{ marginTop: "var(--space-lg)" }}>Buttons</h2>
      <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
        <Button label="Primary Button" />
        <Button label="Secondary Button" variant="secondary" />
      </div>

      <h2 style={{ marginTop: "var(--space-lg)" }}>Cards</h2>
      <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
        <Card
          title="Reusable"
          text="One Card component renders every card on this page, just by changing its instructions."
        />
        <Card
          title="Consistent"
          text="Every card shares the same spacing, rounded corners, and shadow from our design tokens."
        />
      </div>

      <h2 style={{ marginTop: "var(--space-lg)" }}>Inputs</h2>
      <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
        <Input label="Email address" placeholder="you@example.com" />
        <Input label="Company" placeholder="Acme Inc." />
      </div>

      <h2 style={{ marginTop: "var(--space-lg)" }}>Badges</h2>
      <div style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap" }}>
        <Badge label="Stable" tone="green" />
        <Badge label="Beta" tone="amber" />
        <Badge label="New" tone="blue" />
      </div>
    </div>
  );
}

export default App;