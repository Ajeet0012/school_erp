import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LibraryService } from './library.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post('books')
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.libraryService.createBook(createBookDto);
  }

  @Get('books')
  findAllBooks() {
    return this.libraryService.findAllBooks();
  }

  @Get('books/:id')
  findOneBook(@Param('id') id: string) {
    return this.libraryService.findOneBook(id);
  }

  @Patch('books/:id')
  updateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.libraryService.updateBook(id, updateBookDto);
  }

  @Delete('books/:id')
  removeBook(@Param('id') id: string) {
    return this.libraryService.removeBook(id);
  }
}

