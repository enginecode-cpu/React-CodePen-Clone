import React, { useState } from "react";
import cn from "classnames";
import { FaExpandAlt, FaCompressAlt } from "react-icons/fa";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

function Editor({ language, title, value, onChange }) {
  const [open, setOpen] = useState(false);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className={cn("editor-container", { open })}>
      <div className="editor-title">
        {title}
        <button
          className="expand-btn"
          onClick={() => {
            setOpen((prevOpen) => !prevOpen);
          }}
        >
          {open ? <FaExpandAlt /> : <FaCompressAlt />}
        </button>
      </div>
      <ControlledEditor
        className="code-mirror-wrapper"
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
}

export default Editor;
