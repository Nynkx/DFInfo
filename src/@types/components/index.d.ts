import React from "react";

export interface OptionItem {
  value: string;
  text: string;
}
export interface Props {
  id?: string | "";
  children?: React.ReactNode;
}

export interface SelectComponentProps extends Props {
  label?: string | "";
  items?: Array<OptionItem> | [];
  multiple?: boolean | false;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface HeaderProps extends Props {}
