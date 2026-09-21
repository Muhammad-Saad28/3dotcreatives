import { ReactNode } from "react";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  trigger?: boolean;
}

export default function RevealSection({
  children,
  className = "",
}: RevealSectionProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
