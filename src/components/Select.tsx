import * as React from "react";

type OptionItem = {
  value: string;
  text: string;
};

type Props = {
  id?: string | "";
  label?: string | "";
  items?: Array<OptionItem> | [];
  multiple?: boolean | false;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<Props> = (props) => {
  console.log(props.multiple);
  return (
    <>
      <label htmlFor={props.id}></label>
      <select
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
