package com.example.data1700_oblig2and3_jru;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TicketRepository {

    @Autowired
    private JdbcTemplate db;

    public void saveTickets(Ticket newTicket) {
        String sql = "INSERT INTO Ticket (movieSelector, amount, firstName, lastName, phoneNr, email) VALUES(?, ?, ?, ?, ?, ?)";
        db.update(sql, newTicket.getMovieSelector(), newTicket.getAmount(), newTicket.getFirstName(),
                newTicket.getLastName(), newTicket.getPhoneNr(), newTicket.getEmail());
    }

    public List<Ticket> getTickets() {
        String sql = "SELECT * FROM Ticket ORDER BY LOWER(lastName)";
        List<Ticket> getTickets = db.query(sql, new BeanPropertyRowMapper(Ticket.class));
        return getTickets;
    }

    public void deleteTickets(Long id) {
        String sql = "DELETE FROM Ticket WHERE id = ?";
        db.update(sql);
    }
}
