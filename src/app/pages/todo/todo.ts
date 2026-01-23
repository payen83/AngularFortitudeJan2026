import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';

interface TodoItem {
  title: string,
  selected: boolean
}

@Component({
  selector: 'app-todo',
  imports: [...SharedModules],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  public todoList: TodoItem[] = [
    { title: 'Do homework', selected: false },
    { title: 'Wash car', selected: true },
    { title: 'Study for exam', selected: false },
  ];

  onSelected(index: number){
    this.todoList[index].selected = !this.todoList[index].selected;
  }

  onDelete(index: number){
    let confirmation = confirm("Are you sure you want to delete this item?");
    if(confirmation){
      this.todoList.splice(index, 1);
    }
  }
}
