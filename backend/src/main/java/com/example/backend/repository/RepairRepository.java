package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.backend.model.Repair;

@Repository
public interface RepairRepository extends JpaRepository<Repair, Long> {
}
