package mk.ukim.finki.lab1_201224_emt.model.exceptions;

public class InvalidCountryException extends RuntimeException{
    public InvalidCountryException() {
        super("Invalid Country!");
    }
}
