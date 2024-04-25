package mk.ukim.finki.lab1_201224_emt.web;

import mk.ukim.finki.lab1_201224_emt.model.Author;
import mk.ukim.finki.lab1_201224_emt.model.dto.AuthorDto;
import mk.ukim.finki.lab1_201224_emt.service.AuthorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/author")
@CrossOrigin(origins = {"http://localhost:5173/"})

public class AuthorRestController {

        private final AuthorService authorService;

        public AuthorRestController(AuthorService authorService) {
            this.authorService = authorService;
        }

        @GetMapping
        public List<Author> findAll(){
            return this.authorService.findAll();
        }
        @PostMapping
        public ResponseEntity<Author> save(@RequestBody AuthorDto authorDto){
            return this.authorService.save(authorDto)
                    .map(r -> ResponseEntity.ok().body(r))
                    .orElseGet(() -> ResponseEntity.badRequest().build());
        }
}

