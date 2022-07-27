import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';

export class dados {
  codigo: number;
  nome: string;
  endereco: string;
  email: string;
  status: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data;
  @Input() displayedColumns;

  dataSource: MatTableDataSource<any>;
  dataLength: number;
  dataChart: any;
  body: any;

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private cdk: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.cdk.detectChanges();
  }

  ngAfterViewInit() { 
    this.cdk.detectChanges();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }
}
