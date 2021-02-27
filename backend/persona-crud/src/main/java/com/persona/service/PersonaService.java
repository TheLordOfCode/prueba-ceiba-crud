package com.persona.service;

import com.persona.entity.Persona;
import com.persona.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PersonaService {
    private final int DIEZ_OCHO_ANIOS = 18;
    @Autowired
    PersonaRepository personaRepository;

    public List<Persona> list(){
        return personaRepository.findAll();
    }

    public Optional<Persona> getOne(int id){
        return personaRepository.findById(id);
    }

    public Optional<Persona> getByNombre(String nombre){
        return personaRepository.findByNombre(nombre);
    }

    public void  save(Persona persona){
        personaRepository.save(persona);
    }

    public void delete(int id){
        personaRepository.deleteById(id);
    }

    public boolean existsById(int id){
        return personaRepository.existsById(id);
    }

    public boolean existsByNombre(String nombre){
        return personaRepository.existsByNombre(nombre);
    }
    public boolean existsByCedula(long cedula){
        return personaRepository.existsByCedula(cedula);
    }

    public boolean esMayorDeEdad(LocalDate fechaNacimiento) {
        LocalDate fechaDeHoy = LocalDate.now();
        long diferenciaDeAnios = ChronoUnit.YEARS.between(fechaDeHoy, fechaNacimiento);
        return diferenciaDeAnios > DIEZ_OCHO_ANIOS;
    }

}
