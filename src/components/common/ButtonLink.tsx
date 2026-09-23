
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

function ButtonLink({
  children,
  href,
  variant = "primary",
  className = "",
  target,
  rel,
  onClick,
}: ButtonLinkProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";

  const variantStyles = {
    primary: "bg-green-500 text-white hover:bg-orange-600",
    secondary: "bg-gray-900 text-white hover:bg-gray-800",
    outline:
      "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
  };

  return (
    <Link
      to={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export default ButtonLink;