package com.example.data1700_oblig2and3_jru;

public class Ticket {
    private String movieSelector;
    private Integer amount;
    private String firstName;
    private String lastName;
    private String phoneNr;
    private String email;


    public String getMovieSelector() {
        return movieSelector;
    }

    public void setMovieSelector(String movieSelector) {
        this.movieSelector = movieSelector;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNr() {
        return phoneNr;
    }

    public void setPhoneNr(String phoneNr) {
        this.phoneNr = phoneNr;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
