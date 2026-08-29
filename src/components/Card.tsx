type CardProps = {
  title: string;
  text: string;
};

function Card({ title, text }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "var(--space-lg)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        maxWidth: "360px",
      }}
    >
      <h2 style={{ margin: "0 0 8px 0", fontSize: "20px" }}>{title}</h2>
      <p style={{ margin: 0, color: "#475569", lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

export default Card;
