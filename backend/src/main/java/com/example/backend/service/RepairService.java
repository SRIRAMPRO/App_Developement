package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.model.Repair;
import com.example.backend.repository.RepairRepository;
import java.util.List;

@Service
public class RepairService {

    @Autowired
    private RepairRepository repairRepository;

    public List<Repair> getAllRepairs() {
        return repairRepository.findAll();
    }

    public Repair createRepair(Repair repair) {
        return repairRepository.save(repair);
    }

    public Repair getRepairById(Long id) {
        return repairRepository.findById(id).orElse(null);
    }

    public Repair updateRepair(Long id, Repair repair) {
        if (repairRepository.existsById(id)) {
            repair.setId(id);
            return repairRepository.save(repair);
        }
        return null;
    }

    public void deleteRepair(Long id) {
        repairRepository.deleteById(id);
    }
}
