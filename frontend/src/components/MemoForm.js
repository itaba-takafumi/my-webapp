import React, { useState } from "react";

function MemoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    await onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "16px" }}>
      <input
        type="text"
        placeholder="新しいメモ"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default MemoForm;