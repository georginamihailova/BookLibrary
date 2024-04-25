package mk.ukim.finki.lab1_201224_emt.service;

import mk.ukim.finki.lab1_201224_emt.model.Book;
import mk.ukim.finki.lab1_201224_emt.model.dto.BookDto;

import java.util.List;
import java.util.Optional;

public interface BookService {
    List<Book> findAll();
    Optional<Book> save(BookDto bookDto);
    void delete(Long id);
    Optional<Book> update(Long id, BookDto bookDto);

    Optional<Book> rented(Long id);
    Optional<Book> findById(Long id);

//    void refreshMaterializedView();
}
