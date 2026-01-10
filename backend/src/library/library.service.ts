import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class LibraryService {
  createBook(createBookDto: CreateBookDto) {
    // TODO: Implement create book logic
    throw new Error('Method not implemented.');
  }

  findAllBooks() {
    // TODO: Implement find all books logic
    throw new Error('Method not implemented.');
  }

  findOneBook(id: string) {
    // TODO: Implement find one book logic
    throw new Error('Method not implemented.');
  }

  updateBook(id: string, updateBookDto: UpdateBookDto) {
    // TODO: Implement update book logic
    throw new Error('Method not implemented.');
  }

  removeBook(id: string) {
    // TODO: Implement remove book logic
    throw new Error('Method not implemented.');
  }
}

