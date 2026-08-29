type BadgeProps = {
  label: string;
  tone?: "blue" | "green" | "amber";
};

function Badge({ label, tone = "blue" }: BadgeProps) {
  const colors = {
    blue: { bg: "rgba(37, 99, 235, 0.12)", text: "#2563eb" },
    green: { bg: "rgba(22, 163, 74, 0.12)", text: "#16a34a" },
    amber: { bg: "rgba(217, 119, 6, 0.12)", text: "#d97706" },
  };

  const c = colors[tone];

  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: "999px",
        backgroundColor: c.bg,
        color: c.text,
        fontSize: "13px",
        fontWeight: 600,
      }}
    >
      {label}
    </span>
  );
}

export default Badge;