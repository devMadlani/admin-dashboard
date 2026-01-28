import React from "react";
import { Tag } from "antd";

export type TagType =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "draft";

interface MyBadgeProps {
  type?: TagType;
  label?: string;
  style?: React.CSSProperties;
  className?: string;
}

const TAG_CONFIG: Record<TagType, { color: string; defaultText: string }> = {
  primary: {
    color: "#F65F42",
    defaultText: "Primary",
  },
  success: {
    color: "green",
    defaultText: "Success",
  },
  danger: {
    color: "red",
    defaultText: "Danger",
  },
  warning: {
    color: "orange",
    defaultText: "Warning",
  },
  info: {
    color: "blue",
    defaultText: "Info",
  },
  draft: {
    color: "default",
    defaultText: "Draft",
  },
};
const DEFAULT_STYLE: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 500,
  padding: "4px 12px",
  borderRadius: 24,
};

const MyBadge: React.FC<MyBadgeProps> = ({
  type = "primary",
  label,
  style,
  className,
}) => {
  const config = TAG_CONFIG[type];

  return (
    <Tag
      color={config.color}
      style={{ ...DEFAULT_STYLE, ...style }}
      className={className}
    >
      {label ?? config.defaultText}
    </Tag>
  );
};

export default MyBadge;
