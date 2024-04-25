package mk.ukim.finki.lab1_201224_emt.model.exceptions;

public class InvalidBookException extends RuntimeException{
    public InvalidBookException(){
        super("Invalid Book!");
    }
}
