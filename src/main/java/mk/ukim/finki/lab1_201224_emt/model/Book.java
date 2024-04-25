package mk.ukim.finki.lab1_201224_emt.model;

import jakarta.persistence.*;
import lombok.Data;
import mk.ukim.finki.lab1_201224_emt.model.enumeration.Category;

@Data
@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Enumerated(EnumType.STRING)
    private Category categories;

    @ManyToOne
    private Author author;

    private Integer availableCopies;


    public Book(String name, Category categories, Author author, int availableCopies) {
        this.name = name;
        this.categories = categories;
        this.author = author;
        this.availableCopies = availableCopies;
    }

    public Book() {

    }
}
