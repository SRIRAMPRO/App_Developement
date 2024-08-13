package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.Booking;
import com.example.backend.service.BookingService;
import com.example.backend.service.EmailService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.saveBooking(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    @PutMapping("/{id}")
    public Booking updateBooking(@PathVariable Long id, @RequestBody Booking bookingDetails) {
        return bookingService.updateBooking(id, bookingDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        Booking booking = bookingService.getBookingById(id);
        if (booking != null) {
            sendCancellationEmail(booking);
        }
        return ResponseEntity.ok().build();
    }

    @PostMapping("/accept/{id}")
    public ResponseEntity<Void> acceptBooking(@PathVariable Long id) {
        Booking booking = bookingService.getBookingById(id);
        if (booking != null) {
            sendAcceptanceEmail(booking);
        }
        return ResponseEntity.ok().build();
    }

    private void sendCancellationEmail(Booking booking) {
        String subject = "Appointment Cancellation";
        String text = "Dear " + booking.getName() + ",\n\nYour appointment scheduled for " + booking.getDate() + " has been canceled.\n\nBest regards,\nYour Company";
        emailService.sendSimpleMessage(booking.getEmail(), subject, text);
    }

    private void sendAcceptanceEmail(Booking booking) {
        String subject = "Appointment Accepted";
        String text = "Dear " + booking.getName() + ",\n\nYour appointment scheduled for " + booking.getDate() + " has been accepted.\n\nBest regards,\nYour Company";
        emailService.sendSimpleMessage(booking.getEmail(), subject, text);
    }
}
