package mk.ukim.finki.lab1_201224_emt.web;

import mk.ukim.finki.lab1_201224_emt.model.Country;
import mk.ukim.finki.lab1_201224_emt.model.dto.CountryDto;
import mk.ukim.finki.lab1_201224_emt.service.CountryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/country")
@CrossOrigin(origins = {"http://localhost:5173"})

public class CountryRestController {

    private final CountryService countryService;

    public CountryRestController(CountryService countryService) {
        this.countryService = countryService;
    }
    @GetMapping
    public List<Country> findAll() {
        return this.countryService.findAll();
    }
    @PostMapping
    public ResponseEntity<Country> save(@RequestBody CountryDto countryDto) {
        return this.countryService.save(countryDto)
                .map(b -> ResponseEntity.ok().body(b))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

}
