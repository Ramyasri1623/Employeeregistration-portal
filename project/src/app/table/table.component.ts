import { Component } from '@angular/core';
import { TableService } from '../services/table.service';
import { Table } from '../models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  details:Table[]=[];
  constructor(private service:TableService){

  }
  ngOnInit():void{
    this.service.onsubmit().subscribe(data=>this.details=data);
  }
}
