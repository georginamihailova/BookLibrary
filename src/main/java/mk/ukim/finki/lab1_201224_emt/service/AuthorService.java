package mk.ukim.finki.lab1_201224_emt.service;

import mk.ukim.finki.lab1_201224_emt.model.Author;
import mk.ukim.finki.lab1_201224_emt.model.dto.AuthorDto;

import java.util.List;
import java.util.Optional;

public interface AuthorService {
    Optional<Author> save(AuthorDto author);
    List<Author> findAll();
}
