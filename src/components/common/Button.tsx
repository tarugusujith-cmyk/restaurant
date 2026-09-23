
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";

  const variantStyles = {
    primary:
      "bg-green-500 text-white hover:bg-orange-600",

    secondary:
      "bg-gray-900 text-white hover:bg-gray-800",

    outline:
      "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;