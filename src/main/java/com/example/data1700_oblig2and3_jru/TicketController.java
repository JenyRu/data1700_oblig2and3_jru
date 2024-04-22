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

    @DeleteMapping("/deleteTickets")
    public List<Ticket> deleteTickets() {
     //   ticketList.clear(); --> Part of Oblig 2
        rep.deleteTickets(1L);
        return null;
    }
}
//No good in the long run to use GetMapping
/*    @GetMapping("/deleteTickets")
    public void deleteTickets() {
        ticketList.clear();
    }*/
//DeleteMapping doesn't work... gotta add id
/*
    @DeleteMapping("/deleteTickets")
    public List<Ticket> deleteTickets() {
        ticketList.clear();
        return ticketList;
    }*/
//^This one just deletes ONE and I haven't specified WHICH ONE I wanna delete

/*
    @DeleteMapping("/deleteTicket")
    public String deleteTicket(@RequestParam Integer newTicket){
        ticketList.remove(newTicket);
        return "The tickets were deleted";
}*/
