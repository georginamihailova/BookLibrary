package mk.ukim.finki.lab1_201224_emt.repository;

import mk.ukim.finki.lab1_201224_emt.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends JpaRepository<Country,Long> {
}
