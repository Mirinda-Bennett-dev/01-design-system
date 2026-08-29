type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
};

function Button({ label, variant = "primary" }: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <button
      style={{
        padding: "12px 24px",
        borderRadius: "8px",
        border: isPrimary ? "none" : "2px solid var(--color-primary)",
        backgroundColor: isPrimary ? "var(--color-primary)" : "transparent",
        color: isPrimary ? "#ffffff" : "var(--color-primary)",
        fontSize: "16px",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

export default Button;