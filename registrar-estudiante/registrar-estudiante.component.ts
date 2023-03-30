import { EstudianteService } from './../estudiante.service';
import { Estudiante } from './../estudiante';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.component.html',
  styleUrls: ['./registrar-estudiante.component.css']
})
export class RegistrarEstudianteComponent implements OnInit {

  estudiante: Estudiante = new Estudiante();
  constructor(private estudianteService:EstudianteService,private router:Router) { }

  ngOnInit(): void {}
  guardarEstudiante(){
   this.estudianteService.registrarEstudiante(this.estudiante).subscribe(dato=>{
    console.log(dato);
    this.irListaEstudiante();
   },error => console.log(error));
  }
  irListaEstudiante(){
    swal('Estudiante registrado',`El estudiante ${this.estudiante.nombre} ha sido registrado con exito`,`success`);
    this.router.navigate(['/estudiantes']);
  }
  
  onSubmit(){
    this.guardarEstudiante();
  }

}
