import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from '../books/dto/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { };

    @Get()
    async getBooks() {
        const books = await this.booksService.getBooks();
    }

    @Get(':bookId')
    async getBook(@Param('bookId') bookId) {
        const book = await this.booksService.getBook(bookId);
    }

    @Post()
    async storeBook(@Body() createBookDTO: CreateBookDTO) {
        const book = await this.booksService.storeBook(createBookDTO);
    }

    @Delete()
    async deleteBook(@Query() query) {
        const book = await this.booksService.deleteBook(query.bookId);
    }
}
