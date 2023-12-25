
import React from "react";
import "./input.scss";
interface CategoryDropDownProps {
  onchange: (e:any) => void;
  name: string;
  placeholder: string;
  value: string;
  //   onchange: string;
  title: string;
  error: Boolean;
}

const InputTextArea: React.FC<CategoryDropDownProps> = ({
  name,
  placeholder,
  value,
  onchange,
  title,
  error,
}) => {
  return (
    <div className="form-control-area">
      <label htmlFor="">{title}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
      {error ? <span>{title} is required</span> : null}
    </div>
  );
};

export default InputTextArea;
