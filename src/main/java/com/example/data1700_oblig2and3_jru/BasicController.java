package com.example.data1700_oblig2and3_jru;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
public class BasicController {

    //Creating a new arraylist to save the tickets
    public final List<Ticket> ticketList = new ArrayList<>();

    @PostMapping("/saveTickets")
    public void saveTickets(Ticket newTicket) {
        ticketList.add(newTicket);
        System.out.println("Ticket: " + newTicket);
    }

    //////////////////////////////////////////////////////////
    @GetMapping("/getTickets")
    public List<Ticket> getTickets() {
        return ticketList;
    }

    //////////////////////////////////////////////////////////

    @GetMapping("/deleteTickets")
    public void deleteTickets() {
        ticketList.clear();
    }
}
//DeleteMapping doesn't work...
/*
    @DeleteMapping("/deleteTickets")
    public List<Ticket> deleteTickets(@RequestParam Ticket newTicket) {
        ticketList.remove(newTicket);
        return ticketList;
    }*/

/*
    @DeleteMapping("/deleteTicket")
    public String deleteTicket(@RequestParam Integer newTicket){
        ticketList.remove(newTicket);
        return "The tickets were deleted";
}*/
