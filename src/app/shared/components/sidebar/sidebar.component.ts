import { Linhas } from './../../model/linhas';
import { Component, OnInit } from '@angular/core';
import { StpoaService } from '../../shared/stpoa.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { of } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter,
  tap,
  switchMap
} from "rxjs/operators";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public formLinhas: FormGroup;
  public linhas: Array<Linhas>;

  constructor(
    private stpoaService: StpoaService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.initForm();
    this.initLinhas();
    this.nomeLinha();
  }

  public linha(id: string): void {
    this.stpoaService.listaByNome(id);
  }

  private initForm(): void {
    this.formLinhas = this.fb.group({
      inputLinha: ['', Validators.required]
    });
  }

  private initLinhas(): void {
    this.stpoaService.listaLinhas().subscribe(linhas => {
      console.log(linhas);
      this.linhas = linhas;
    }, (erro) => {
      console.log(erro);
    });
  }

  private nomeLinha(): void {
    this.formLinhas.get('inputLinha').valueChanges
    .pipe(
      filter(val => val.length > 2),
      distinctUntilChanged(),
      debounceTime(500),
      // tap(val => console.log(val)),
      switchMap(val => this.stpoaService.listaByNome(val))
    ).subscribe(linha => {
      this.linhas = linha;
    }, (erro) => {
      console.log(erro);
    });
  }

}
