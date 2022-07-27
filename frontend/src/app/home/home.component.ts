import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  show = false;
  associados: any;
  publicacoes: any;
  exemplar: any;

  associadosColumns: any[] = [];
  publicacoesColumns: any[] = [];
  exemplarColumns: any[] = [];

  constructor(public dialog: MatDialog, public service: GeneralService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    forkJoin([
      this.service.getAssociado(),
      this.service.getPublicacao(),
      this.service.getExemplar()
    ]).subscribe(response => {
      this.associados = response[0];
      this.publicacoes = response[1];
      this.exemplar = response[2];

      this.associadosColumns = ['codigo', 'nome', 'endereco', 'email', 'status'];
      this.publicacoesColumns = ['isbn', 'titulo', 'autor', 'editora'];
      this.exemplarColumns = ['numero', 'isbn', 'preco'];

      this.show = true;
    });
  }

  cadastrar(type: string){
    const dialogRef = this.dialog.open(CadastroComponent,  {
      disableClose: true,
      width: '400px',
      height: '416px',
      data: {type: type},
    });

    dialogRef.afterClosed().subscribe(result => {
      // location.reload();
    });
  }

}
