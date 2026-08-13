import { Icon } from "@iconify/react";

interface ToolPillProps {
  label: string;
  icon?: string;
}

export default function ToolPill({ label, icon }: ToolPillProps) {
  return (
    <div className="inline-flex cursor-default items-center gap-2 rounded-full border border-pf-border bg-pf-card px-4 py-2 text-[13.5px] font-semibold tracking-[0.3px] text-pf-teal shadow-sm transition-colors duration-200 hover:border-pf-gold hover:shadow-md">
      {icon && (
        <span className="flex items-center justify-center text-lg opacity-80">
          <Icon icon={icon} />
        </span>
      )}
      <span>{label}</span>
    </div>
  );
}
