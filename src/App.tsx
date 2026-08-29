import Button from "./components/Button";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "var(--font-main)" }}>
      <h1>Mirinda's Design System</h1>
      <p>One component file, powering every button on the page.</p>
      <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
        <Button label="Primary Button" />
        <Button label="Secondary Button" variant="secondary" />
      </div>
    </div>
  );
}

export default App;