import { Component, OnInit, Input } from '@angular/core';
import { ListTitlesService } from 'src/app/services/list-titles/list-titles.service';

@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.scss']
})
export class ListTitlesComponent implements OnInit {

  @Input() title: string | undefined;
  list: Array<any> = new Array();
  
  constructor(private listTitlesService:  ListTitlesService) { }
  
  ngOnInit(): void {
    this.listTitlesService.listTitles().subscribe( (data) => {
      this.list = data;
      console.log(data)
    }, err => {
      console.log('Erro ao listar filmes', err)
    })
  }

}
