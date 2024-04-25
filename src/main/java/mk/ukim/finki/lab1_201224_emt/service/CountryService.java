package mk.ukim.finki.lab1_201224_emt.service;

import mk.ukim.finki.lab1_201224_emt.model.Country;
import mk.ukim.finki.lab1_201224_emt.model.dto.CountryDto;

import java.util.List;
import java.util.Optional;

public interface CountryService {
    Optional<Country> save(CountryDto countryDto);
    List<Country> findAll();
}
