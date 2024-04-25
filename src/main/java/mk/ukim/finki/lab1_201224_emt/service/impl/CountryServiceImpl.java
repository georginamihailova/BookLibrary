package mk.ukim.finki.lab1_201224_emt.service.impl;

import mk.ukim.finki.lab1_201224_emt.model.Country;
import mk.ukim.finki.lab1_201224_emt.model.dto.CountryDto;
import mk.ukim.finki.lab1_201224_emt.repository.CountryRepository;
import mk.ukim.finki.lab1_201224_emt.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryServiceImpl implements CountryService {
    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public Optional<Country> save(CountryDto countryDto) {
        Country country = new Country(countryDto.getName(),countryDto.getContinent());
        this.countryRepository.save(country);

        return Optional.of(country);
    }
    public List<Country> findAll(){
        return this.countryRepository.findAll();
    }
}
