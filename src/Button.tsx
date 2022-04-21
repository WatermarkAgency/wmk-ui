import * as React from "react";
import { LinkTarget, WmkLink } from "wmk-link";

export const WmkButton = {
  /**
   * Creates a hyperlink to web pages, files, email addresses,
   * locations in the same page, or anything else a URL can address,
   * in the style of a button as opposed to a plain text link.
   */
  Link: ({
    children,
    to,
    style,
    target,
    label,
    title,
    mailto,
    tel
  }: {
    children: React.ReactChild;
    to: string;
    style?: React.CSSProperties;
    target?: LinkTarget;
    label?: string;
    title?: string;
    mailto?: boolean;
    tel?: boolean;
  }) => {
    return (
      <WmkLink
        to={to}
        target={target}
        label={
          label ? label : typeof children === "string" ? children : undefined
        }
        title={title}
        mailto={mailto}
        tel={tel}>
        {children}
      </WmkLink>
    );
  },
  /**
   * An interactive element activated by a user with a mouse,
   * keyboard, finger, voice command, or other assistive technology.
   * Once activated, it then performs a programmable action via its handler
   */
  Action: ({
    children,
    disabled,
    handler,
    style,
    onKeyDown,
    onKeyUp,
    role,
    autofocus
  }: {
    children: React.ReactChild;
    disabled?: true;
    handler?: React.MouseEventHandler<HTMLButtonElement>;
    style?: React.CSSProperties;
    onKeyDown: React.KeyboardEventHandler<HTMLButtonElement>;
    onKeyUp: React.KeyboardEventHandler<HTMLButtonElement>;
    autofocus?: boolean;
    role?:
      | "checkbox"
      | "link"
      | "menuitem"
      | "menuitemcheckbox"
      | "menuitemradio"
      | "option"
      | "radio"
      | "switch"
      | "tab";
  }) => {
    return (
      <button
        type="button"
        disabled={disabled}
        onClick={handler}
        style={style}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        role={role}
        autoFocus={autofocus}>
        {children}
      </button>
    );
  }
};

WmkButton.Link;
