package com.gestion.estudiantes.repositorio;

import com.gestion.estudiantes.modelos.Estudiante;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstudianteRepositorio extends JpaRepository<Estudiante,Long> {

	
}
