type InputProps = {
  label: string;
  placeholder?: string;
};

function Input({ label, placeholder }: InputProps) {
  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-sm)",
        maxWidth: "320px",
      }}
    >
      <span style={{ fontSize: "14px", fontWeight: 600 }}>{label}</span>
      <input
        placeholder={placeholder}
        style={{
          padding: "10px 14px",
          borderRadius: "8px",
          border: "1px solid var(--color-text-muted)",
          backgroundColor: "var(--color-surface)",
          color: "var(--color-text)",
          fontSize: "15px",
        }}
      />
    </label>
  );
}

export default Input;