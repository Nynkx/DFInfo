import { SelectComponentProps } from "@/@types";

import * as React from "react";

const Select: React.FC<SelectComponentProps> = (props) => {
  console.log(props.multiple);

  return (
    <>
      <label htmlFor={props.id}></label>
      <select
        title={props.title}
        name={props.name}
        id={props.id}
        multiple={props.multiple}
        className="select"
        onChange={(e) => props.onChange?.(e)}
      >
        {props.items?.map((item, idx) => (
          <option key={`${props.id}-option-${idx}`} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
