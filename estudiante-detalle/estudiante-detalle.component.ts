import { EstudianteService } from './../estudiante.service';
import { ActivatedRoute } from '@angular/router';
import { Estudiante } from './../estudiante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante-detalle',
  templateUrl: './estudiante-detalle.component.html',
  styleUrls: ['./estudiante-detalle.component.css']
})
export class EstudianteDetalleComponent implements OnInit {

  id:number;
  estudiante:Estudiante;
  constructor(private route:ActivatedRoute,private estudianteService:EstudianteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.estudiante = new Estudiante();
    this.estudianteService.obtenerEstudiantePorId(this.id).subscribe(dato =>{
      this.estudiante = dato;
    })
  }

}
