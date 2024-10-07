import { cn } from "@/lib/utils";

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger" | "info" | "alert";
}

export function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("flex items-start rounded-md p-3 my-2", {
        "border-l-red-600 bg-red-800/5 border-l-4": type === "danger",
        "border-l-orange-600 bg-orange-800/5 border-l-4": type === "warning",
        "border-l-blue-600 bg-blue-800/5 border-l-4": type === "info",
        "border-l-yellow-600 bg-yellow-800/5 border-l-4": type === "alert",
        border: type === "default",
      })}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}