package com.booklibrary.repository;

import com.booklibrary.entity.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CheckoutRepository extends JpaRepository<Checkout, Long> {
    Checkout findByUserEmailAndBoolId(String userEmail, long bookId);

    List<Checkout> findByUserEmail(String userEmail);
}
