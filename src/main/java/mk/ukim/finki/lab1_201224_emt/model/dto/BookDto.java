package mk.ukim.finki.lab1_201224_emt.model.dto;

import lombok.Data;
import mk.ukim.finki.lab1_201224_emt.model.enumeration.Category;


@Data
public class BookDto {
    private String name;

    private Category categories;

    private Long author;

    private Integer availableCopies;

    public BookDto(String name, Category categories, Long author, Integer availableCopies) {
        this.name = name;
        this.categories = categories;
        this.author = author;
        this.availableCopies = availableCopies;
    }
}
