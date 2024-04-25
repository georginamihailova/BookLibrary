package mk.ukim.finki.lab1_201224_emt.service.impl;

import jakarta.transaction.Transactional;
import mk.ukim.finki.lab1_201224_emt.model.Author;
import mk.ukim.finki.lab1_201224_emt.model.Country;
import mk.ukim.finki.lab1_201224_emt.model.dto.AuthorDto;
import mk.ukim.finki.lab1_201224_emt.model.exceptions.InvalidCountryException;
import mk.ukim.finki.lab1_201224_emt.repository.AuthorRepository;
import mk.ukim.finki.lab1_201224_emt.repository.CountryRepository;
import mk.ukim.finki.lab1_201224_emt.service.AuthorService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorServiceImpl implements AuthorService {
    private final AuthorRepository authorRepository;
    private final CountryRepository countryRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository, CountryRepository countryRepository) {
        this.authorRepository = authorRepository;
        this.countryRepository = countryRepository;
    }

    @Override
    @Transactional
    public Optional<Author> save(AuthorDto authorDto) {
        Country country = this.countryRepository.findById(authorDto.getCountry())
                .orElseThrow(InvalidCountryException::new);

        Author author = new Author(authorDto.getName(), authorDto.getSurname(), country);

        this.authorRepository.save(author);

        return Optional.of(author);
    }

    @Override
    public List<Author> findAll() {
        return this.authorRepository.findAll();
    }
}

