package com.example.demo.service;

import com.example.demo.entity.Memo;
import com.example.demo.repository.MemoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemoService {

    private final MemoRepository memoRepository;

    public MemoService(MemoRepository memoRepository) {
        this.memoRepository = memoRepository;
    }

    public List<Memo> findAll() {
        return memoRepository.findAll();
    }

    public Optional<Memo> findById(Long id) {
        return memoRepository.findById(id);
    }

    public Memo save(Memo memo) {
        return memoRepository.save(memo);
    }

    public void delete(Long id) {
        memoRepository.deleteById(id);
    }
}