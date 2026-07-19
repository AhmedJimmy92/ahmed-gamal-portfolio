interface SectionTitleProps {
  title: string;
  highlight?: string;
}

export default function SectionTitle({
  title,
  highlight,
}: SectionTitleProps) {
  return (
    <div className="mb-16 text-center">
      <p className="mb-3 uppercase tracking-[8px] text-green-400">
        Portfolio
      </p>

      <h2 className="text-5xl font-black text-white">
        {title}{" "}
        {highlight && (
          <span className="text-green-400">{highlight}</span>
        )}
      </h2>
    </div>
  );
}