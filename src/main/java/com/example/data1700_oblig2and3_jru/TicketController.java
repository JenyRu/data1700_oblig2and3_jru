package com.example.data1700_oblig2and3_jru;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TicketController {

    //Creating a new arraylist to save the tickets.
    // public final List<Ticket> ticketList = new ArrayList<>(); --> Part of Oblig 2

    @Autowired
    private TicketRepository rep;

    @PostMapping("/saveTickets")
    public void saveTickets(Ticket newTicket) {
        //Adding a new ticket.
        // ticketList.add(newTicket); --> Part of Oblig 2
        rep.saveTickets(newTicket);
        System.out.println("Ticket: " + newTicket);
    }

    //////////////////////////////////////////////////////////
    @GetMapping("/getTickets")
    public List<Ticket> getTickets() {
        //  return ticketList; Part of Oblig 2
        return rep.getTickets();
    }

    //////////////////////////////////////////////////////////
    @GetMapping("getCurrentTicket")
    public Ticket getCurrentTicket(long id) {
        return rep.getCurrentTicket(id);
    }

    //////////////////////////////////////////////////////////
    @PostMapping("/editTicket")
    public String editTicket(Ticket ticket) {
        rep.editTicket(ticket);
        return "edited";
    }

    //////////////////////////////////////////////////////////
    @PostMapping("/updateTickets")
    public void updateTickets(Ticket ticket) {
        rep.saveTickets(ticket);
    }

    //////////////////////////////////////////////////////////
    @DeleteMapping("/deleteOneTicket")
    public void deleteOneTicket(long id) {
        //   ticketList.clear(); --> Part of Oblig 2
        rep.deleteOneTicket(id);
    }
}