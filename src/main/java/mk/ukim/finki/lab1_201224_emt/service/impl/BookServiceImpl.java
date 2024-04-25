package mk.ukim.finki.lab1_201224_emt.service.impl;

import jakarta.transaction.Transactional;
import mk.ukim.finki.lab1_201224_emt.model.Author;
import mk.ukim.finki.lab1_201224_emt.model.Book;
import mk.ukim.finki.lab1_201224_emt.model.dto.BookDto;
import mk.ukim.finki.lab1_201224_emt.model.exceptions.InvalidAuthorException;
import mk.ukim.finki.lab1_201224_emt.model.exceptions.InvalidBookException;
import mk.ukim.finki.lab1_201224_emt.repository.AuthorRepository;
import mk.ukim.finki.lab1_201224_emt.repository.BookRepository;
import mk.ukim.finki.lab1_201224_emt.service.BookService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {
    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;

    public BookServiceImpl(BookRepository bookRepository, AuthorRepository authorRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
    }

    @Override
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @Override
    @Transactional
    public Optional<Book> save(BookDto bookDto) {
        Author author = this.authorRepository.findById(bookDto.getAuthor()).orElseThrow(InvalidAuthorException::new);
        Book book = new Book(bookDto.getName(),bookDto.getCategories(),author,bookDto.getAvailableCopies());
        this.bookRepository.save(book);
        return Optional.of(book);
    }

    @Override
    public void delete(Long id) {
        this.bookRepository.deleteById(id);
    }

    @Override
    public Optional<Book> update(Long id, BookDto bookDto) {
        Author author = this.authorRepository.findById(bookDto.getAuthor()).orElseThrow(InvalidAuthorException::new);
        Book book = this.bookRepository.findById(id).orElseThrow(InvalidBookException::new);
        book.setAuthor(author);
        book.setName(bookDto.getName());
        book.setCategories(bookDto.getCategories());
        book.setAvailableCopies(bookDto.getAvailableCopies());
        this.bookRepository.save(book);
        return Optional.of(book);
    }

    @Override
    @Transactional
    public Optional<Book> rented(Long id) {
        Book book = this.bookRepository.findById(id).orElseThrow(InvalidBookException::new);
        Long author = book.getAuthor().getId();
        if (book.getAvailableCopies() > 0)
            book.setAvailableCopies(book.getAvailableCopies() - 1);
        this.bookRepository.save(book);
        return Optional.of(book);
    }

    @Override
    public Optional<Book> findById(Long id) {
        return this.bookRepository.findById(id);
    }

//    @Override
//    public void refreshMaterializedView() {
//        this.booksViewRepository.refreshMaterializedView();
//    }
}
