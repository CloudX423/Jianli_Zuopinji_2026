interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-surface text-secondary border border-border">
      {label}
    </span>
  );
}
