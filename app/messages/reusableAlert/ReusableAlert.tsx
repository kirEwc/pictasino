// ReusableAlert.tsx
"use client";

import React from "react";
import { Alert } from "@heroui/react";

export type AlertColor =
  | "danger"
  | "success"
  | "warning"
  | "default"
  | "primary"
  | "secondary";
export type AlertVariant = "solid" | "faded" | "flat" | "bordered";

interface ReusableAlertProps {
  title: string;
  description: string;
  color?: AlertColor;
  variant?: AlertVariant;
  onClose?: () => void;
}

export const ReusableAlert: React.FC<ReusableAlertProps> = ({
  title,
  description,
  color = "danger",
  variant = "faded",
  onClose,
}) => {
  return (
    <Alert
      title={title}
      description={description}
      color={color}
      variant={variant}
      onClose={onClose} // Cuando se haga click en el icono de cerrar, se llamará a este callback
    />
  );
};
