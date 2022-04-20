import * as React from "react";
import { WmkLink } from "wmk-link";

const WmkButton = ({
  children,
  type,
  role,
  to,
  disabled,
  handler,
  style
}: {
  children: React.ReactChild;
  type?: "button" | true;
  role?: "button" | true;
  to?: string;
  disabled?: true;
  handler?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}) => {
  return to && !disabled ? (
    <WmkLink role={role === true ? "button" : role}>{children}</WmkLink>
  ) : (
    <button
      type={type === true ? "button" : type}
      disabled={disabled}
      onClick={handler}
      style={style}>
      {children}
    </button>
  );
};

export default WmkButton;
