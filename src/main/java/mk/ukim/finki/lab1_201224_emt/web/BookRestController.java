package mk.ukim.finki.lab1_201224_emt.web;

import mk.ukim.finki.lab1_201224_emt.model.Book;
import mk.ukim.finki.lab1_201224_emt.model.dto.BookDto;
import mk.ukim.finki.lab1_201224_emt.service.BookService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = {"http://localhost:5173"})
public class BookRestController {
    private final BookService bookService;

    public BookRestController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> findAll() {
        return this.bookService.findAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        return this.bookService.findById(id)
                .map(b -> ResponseEntity.ok().body(b))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }



    @PostMapping("/add")
    public ResponseEntity<Book> save(@RequestBody BookDto bookDto) {
        return this.bookService.save(bookDto)
                .map(b -> ResponseEntity.ok().body(b))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PutMapping("/{id}/edit")
    public ResponseEntity<Book> edit(@PathVariable Long id, @RequestBody BookDto bookDto) {
        return this.bookService.update(id, bookDto)
                .map(b -> ResponseEntity.ok().body(b))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Book> delete(@PathVariable Long id) {
        this.bookService.delete(id);
        if (this.bookService.findById(id).isEmpty())
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/{id}/rent")
    public ResponseEntity<Book> rent(@PathVariable Long id) {
        return this.bookService.rented(id)
                .map(b -> ResponseEntity.ok().body(b))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }
}
