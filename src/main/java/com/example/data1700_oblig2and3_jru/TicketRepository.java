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
        List<Ticket> getTickets = db.query(sql, new BeanPropertyRowMapper<>(Ticket.class));
        return getTickets;
    }

    public Ticket getCurrentTicket(long id) {
        Object[] param = new Object[1];
        param[0] = id;
        String sql = "SELECT * FROM Ticket WHERE id=?";
        Ticket currentTicket = db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(Ticket.class));
        return currentTicket;
    }

    public long editTicket(Ticket ticket) {
        String sql = "UPDATE Ticket SET movieSelector=?, amount=?, firstName=?, lastName=?, phoneNr=?, email=? WHERE id=?";
        return db.update(sql ,ticket.getMovieSelector(), ticket.getAmount(), ticket.getFirstName(),
                ticket.getLastName(), ticket.getPhoneNr(), ticket.getEmail(), ticket.getId());
    }

    public void deleteOneTicket(long id) {
        String sql = "DELETE FROM Ticket WHERE id = ?";
        db.update(sql, id);
    }

}
