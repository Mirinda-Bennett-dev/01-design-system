type CardProps = {
  title: string;
  text: string;
};

function Card({ title, text }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)",
        borderRadius: "12px",
        padding: "var(--space-lg)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        maxWidth: "360px",
      }}
    >
      <h2 style={{ margin: "0 0 8px 0", fontSize: "20px" }}>{title}</h2>
      <p style={{ margin: 0, color: "var(--color-text-muted)", lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

export default Card;