package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
