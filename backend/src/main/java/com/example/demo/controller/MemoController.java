package com.example.demo.controller;

import com.example.demo.entity.Memo;
import com.example.demo.service.MemoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/memos")
@CrossOrigin(origins = "http://localhost:3000") // Reactからアクセスを許可
public class MemoController {

    private final MemoService memoService;

    public MemoController(MemoService memoService) {
        this.memoService = memoService;
    }

    // 一覧取得
    @GetMapping
    public List<Memo> getAllMemos() {
        return memoService.findAll();
    }

    // ID指定取得
    @GetMapping("/{id}")
    public Memo getMemoById(@PathVariable Long id) {
        return memoService.findById(id)
                .orElseThrow(() -> new RuntimeException("Memo not found with id " + id));
    }

    // 作成
    @PostMapping
    public Memo createMemo(@RequestBody Memo memo) {
        return memoService.save(memo);
    }

    // 更新
    @PutMapping("/{id}")
    public Memo updateMemo(@PathVariable Long id, @RequestBody Memo memoDetails) {
        Memo memo = memoService.findById(id)
                .orElseThrow(() -> new RuntimeException("Memo not found with id " + id));

        memo.setContent(memoDetails.getContent());
        return memoService.save(memo);
    }

    // 削除
    @DeleteMapping("/{id}")
    public void deleteMemo(@PathVariable Long id) {
        memoService.delete(id);
    }
}