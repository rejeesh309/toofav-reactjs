import { useState, useRef, useEffect } from "react";

function SelectAndInput() {
  const [selectWidth, setSelectWidth] = useState(0);
  const [inputWidth, setInputWidth] = useState(0);
  const selectRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const select = selectRef.current;
    const options = select.options;
    let maxWidth = 0;

    // Find the maximum width of the option text
    for (let i = 0; i < options.length; i++) {
      const optionWidth = options[i].getBoundingClientRect().width;
      if (optionWidth > maxWidth) {
        maxWidth = optionWidth;
      }
    }

    // Set the width of the select box to accommodate the widest option
    setSelectWidth(maxWidth + 20); // Add some padding for the dropdown arrow
  }, [selectWidth]);

  useEffect(() => {
    const input = inputRef.current;
    const inputWidth = input.getBoundingClientRect().width;

    // Set the width of the input field to match the width of the select box
    setInputWidth(selectWidth - 20); // Subtract the padding for the dropdown arrow
  }, [selectWidth]);

  return (
    <div>
      <select ref={selectRef} style={{ width: selectWidth }}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2 is longer</option>
        <option value="option3">Option 3 is the longest</option>
      </select>
      <input ref={inputRef} style={{ width: inputWidth }} />
    </div>
  );
}

export default SelectAndInput;
