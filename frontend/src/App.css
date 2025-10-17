import React, { useEffect, useState } from "react";
import { getMemos, createMemo, updateMemo, deleteMemo } from "./services/memoService";
import MemoForm from "./components/MemoForm";
import MemoList from "./components/MemoList";

function App() {
  const [memos, setMemos] = useState([]);

  const fetchMemos = async () => {
    const res = await getMemos();
    setMemos(res.data);
  };

  useEffect(() => {
    fetchMemos();
  }, []);

  const handleAdd = async (newMemo) => {
    await createMemo({ content: newMemo });
    await fetchMemos();
  };

  const handleDelete = async (id) => {
    await deleteMemo(id);
    await fetchMemos();
  };

  const handleUpdate = async (id, updatedContent) => {
    await updateMemo(id, { content: updatedContent });
    await fetchMemos();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>メモ帳</h1>
      <MemoForm onAdd={handleAdd} />
      <MemoList memos={memos} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;