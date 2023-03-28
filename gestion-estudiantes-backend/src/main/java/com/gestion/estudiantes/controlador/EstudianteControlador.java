package com.gestion.estudiantes.controlador;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.gestion.estudiantes.excepciones.ResourceNotFoundException;
import com.gestion.estudiantes.modelos.Estudiante;
import com.gestion.estudiantes.repositorio.EstudianteRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200/")
public class EstudianteControlador {

	@Autowired
	private EstudianteRepositorio estudianteRepositorio ;
	 
	@GetMapping("/estudiantes")
	public List<Estudiante> obtenerListaEstudiantes(){
		return estudianteRepositorio.findAll();
	}
	 @PostMapping("/estudiantes")
	 public Estudiante guardarEstudiante(@RequestBody Estudiante estudiante) {
		 return estudianteRepositorio.save(estudiante);
	 }
	 @GetMapping("/estudiantes/{id}")
	 public ResponseEntity<Estudiante> obtenerEstudiantePorId(@PathVariable Long id){
		 Estudiante estudiante = estudianteRepositorio.findById(id)
				 .orElseThrow(()-> new ResourceNotFoundException("No se encontró el estudiante con el ID : " + id ));
		 return ResponseEntity.ok(estudiante);
	 }
	 
	 @PutMapping("/estudiantes/{id}")
	 public ResponseEntity<Estudiante> actualizarEstudiante(@PathVariable Long id,@RequestBody Estudiante estudianteDetalles){
		 Estudiante estudiante = estudianteRepositorio.findById(id)
				 .orElseThrow(()-> new ResourceNotFoundException("No se encontró el estudiante con el ID : " + id ));
		 
		 estudiante.setNombre(estudianteDetalles.getNombre());
		 estudiante.setApellido(estudianteDetalles.getApellido());
		 estudiante.setEmail(estudianteDetalles.getEmail());
		 
		 Estudiante estudianteActualizado = estudianteRepositorio.save(estudiante);
		 return ResponseEntity.ok(estudianteActualizado);
	 }
	 @DeleteMapping("/estudiantes/{id}")
	 public ResponseEntity<Map<String,Boolean>> eliminarEstudiante(@PathVariable Long id){
		 Estudiante estudiante = estudianteRepositorio.findById(id)
				 .orElseThrow(()-> new ResourceNotFoundException("No se encontró el estudiante con el ID : " + id ));
		 estudianteRepositorio.delete(estudiante);
		 Map<String,Boolean> respuesta = new HashMap<>();
		 respuesta.put("eliminar", Boolean.TRUE);
		 return ResponseEntity.ok(respuesta);
	 }
	
}
