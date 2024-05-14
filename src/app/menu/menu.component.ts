import { Component, Injectable, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameService } from '../game.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  isLoggedIn = true;
  public usuario: any;
  public email: string = '';
  public status: string = '';
  public mostrarFormulario: boolean = true; // Variable para controlar la visibilidad del formulario

  constructor(private GameService: GameService) {}

  ngOnInit(): void {}

  public cargarData() {
    const url = `http://localhost:8090/crud/buscarPersona?email=${this.email}`;
    this.GameService.get(url).subscribe(respuesta => {
      console.log(respuesta);
      this.usuario = respuesta;
      this.mostrarFormulario = false; // Ocultar el formulario después de cargar los datos
    });
  }
}



