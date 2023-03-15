import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    const todo = await this.prisma.todo.create({
      data: createTodoDto,
    });
    return todo;
  }

  async findAll() {
    const todos = await this.prisma.todo.findMany();
    return todos;
  }

  async findOne(id: string) {
    const todo = await this.prisma.todo.findUnique({ where: { id } });
    return todo;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.prisma.todo.update({
      where: { id },
      data: updateTodoDto,
    });
    return todo;
  }

  async remove(id: string) {
    const todo = await this.prisma.todo.delete({ where: { id } });
    return todo;
  }
}
