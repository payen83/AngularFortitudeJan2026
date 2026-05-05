import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { MatDialog } from '@angular/material/dialog';
import { Add } from '../../components/add/add';

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
export class Todo implements OnInit{

  constructor(
    public dialog: MatDialog, 
    private cdr: ChangeDetectorRef){
  }

  onAdd(){
    const dialogRef = this.dialog.open(Add);
    dialogRef.afterClosed().subscribe((result: any) => {
      if(result) {
          this.todoList.push({title: result, selected: false});
          this.cdr.detectChanges();
          this.saveStorage('TODO', this.todoList);
      }
    })
  }

  public todoList: TodoItem[] = [];

  onSelected(index: number){
    this.todoList[index].selected = !this.todoList[index].selected;
    this.saveStorage('TODO', this.todoList);
  }

  onDelete(index: number){
    let confirmation = confirm("Are you sure you want to delete this item?");
    if(confirmation){
      this.todoList.splice(index, 1);
      this.saveStorage('TODO', this.todoList);
    }
  }

  onClear(){
    let confirmation = confirm("Are you sure you want to clear the list?");
    if(confirmation){
      this.todoList = [];
      this.saveStorage('TODO', this.todoList);
    }
  }

  saveStorage(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  loadStorage(key: string){
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  }

  ngOnInit(){
    const data: any = this.loadStorage('TODO');
    this.todoList = data;
  }

}
