import  swal  from 'sweetalert2';
import { Router } from '@angular/router';
import { EstudianteService } from './../estudiante.service';
import { Estudiante } from './../estudiante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.css']
})
export class ListarEstudianteComponent implements OnInit {

  estudiantes:Estudiante[];
  constructor(private estudianteServicio:EstudianteService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerEstudiantes();
  }
  actualizarEstudiante(id:number){
    this.router.navigate(['actualizar-estudiante',id]);
  }
  private obtenerEstudiantes(){
     this.estudianteServicio.obtenerListaEstudiantes().subscribe(e =>{
      this.estudiantes = e;
    })
  }
  eliminarEstudiante(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al estudiante",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) =>{
      if(result.value){
        this.estudianteServicio.eliminarEstudiante(id).subscribe(dato =>{
          console.log(dato);
          this.obtenerEstudiantes();
          swal(
            'Estudiante eliminado',
            'El estudiante ha sido eliminado con exito',
            'success'
          )
        })
      }
  })
}
 verDetalles(id:Number) {
    this.router.navigate(['estudiante-detalle',id]);
}
}
