import  swal  from 'sweetalert2';
import { EstudianteService } from './../estudiante.service';
import { Estudiante } from './../estudiante';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-estudiante',
  templateUrl: './actualizar-estudiante.component.html',
  styleUrls: ['./actualizar-estudiante.component.css']
})
export class ActualizarEstudianteComponent implements OnInit {

  id:number;
  estudiante: Estudiante = new Estudiante();
  
  constructor(private estudianteService:EstudianteService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.estudianteService.obtenerEstudiantePorId(this.id).subscribe(dato=>{
      this.estudiante = dato;
    },error =>console.log(error));
  }
  irAlistaDeEstudiante(){
    this.router.navigate(['/estudiantes']);
    swal('Estudiante actualizado',`El estudiante ${this.estudiante.nombre} ha sido actualizado con exito`,`success`);
  }
   onSubmit(){
    this.estudianteService.actualizarEstudiante(this.id,this.estudiante ).subscribe(dato => {
     this.irAlistaDeEstudiante();
    },error => console.log(error));
  }

}
