package com.example.espacoeventosapi.repository;

import com.example.espacoeventosapi.usuario.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}