package com.example.data1700_oblig2and3_jru;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicController {

    //Creating a new arraylist to save the tickets
    public final List<Ticket> ticketList = new ArrayList<>();
    @PostMapping("/saveTickets")
    public void saveTickets(Ticket ticket) {
        ticketList.add(ticket);
        System.out.println("Ticket: " + String.valueOf(ticket));
    }

    //////////////////////////////////////////////////////////
    @GetMapping("/getTickets")
    public List<Ticket> getTickets() {
        return ticketList;
    }

    //////////////////////////////////////////////////////////
    @DeleteMapping("/deleteTickets")
    public void deleteTickets() {
        ticketList.clear();
    }
}
