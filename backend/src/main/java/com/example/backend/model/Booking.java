package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String serviceRequired;
    private String email;
    private String phoneNumber;
    private String address;
    private LocalDate date;
    private String additionalNotes;
    private String paymentMethod;
}
