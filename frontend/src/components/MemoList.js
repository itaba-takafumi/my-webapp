import React, { useState } from "react";

function MemoList({ memos, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editingContent, setEditingContent] = useState("");

  return (
    <div>
      <h2>メモ一覧</h2>
      {memos.map((memo) => (
        <div key={memo.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px", paddingBottom: "8px" }}>
          {editingId === memo.id ? (
            <>
              <input
                value={editingContent}
                onChange={(e) => setEditingContent(e.target.value)}
              />
              <button onClick={() => { onUpdate(memo.id, editingContent); setEditingId(null); }}>保存</button>
              <button onClick={() => setEditingId(null)}>キャンセル</button>
            </>
          ) : (
            <>
              <p>{memo.content}</p>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>
                作成: {memo.createdAt || "不明"}　更新: {memo.updatedAt || "不明"}
              </p>
              <button onClick={() => { setEditingId(memo.id); setEditingContent(memo.content); }}>編集</button>
              <button onClick={() => onDelete(memo.id)}>削除</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default MemoList;