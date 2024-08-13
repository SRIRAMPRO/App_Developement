package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.model.Booking;
import com.example.backend.repository.BookingRepository;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    public Booking updateBooking(Long id, Booking bookingDetails) {
        Booking booking = bookingRepository.findById(id).orElse(null);
        if (booking != null) {
            booking.setName(bookingDetails.getName());
            booking.setServiceRequired(bookingDetails.getServiceRequired());
            booking.setEmail(bookingDetails.getEmail());
            booking.setPhoneNumber(bookingDetails.getPhoneNumber());
            booking.setAddress(bookingDetails.getAddress());
            booking.setDate(bookingDetails.getDate());
            booking.setAdditionalNotes(bookingDetails.getAdditionalNotes());
            booking.setPaymentMethod(bookingDetails.getPaymentMethod());
            return bookingRepository.save(booking);
        }
        return null;
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}
