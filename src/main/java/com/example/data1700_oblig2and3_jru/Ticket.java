package com.example.data1700_oblig2and3_jru;

public class Ticket {
    private String movieSelector;
    private int amount;
    private String firstName;
    private String lastName;
    private String phoneNr;
    private String email;

    @Override
    public String toString() {
        return "\n" + "Movie: " + movieSelector + "\n" +
                "Amount: " + amount + "\n" +
                "First name: " + firstName + "\n" +
                "Last name: " + lastName + "\n" +
                "Phone Nr: " + phoneNr + "\n" +
                "Email:" + email + "\n";
    }

    public String getMovieSelector() {
        return movieSelector;
    }

    public void setMovieSelector(String movieSelector) {
        this.movieSelector = movieSelector;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
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