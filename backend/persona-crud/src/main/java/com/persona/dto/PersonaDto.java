package com.persona.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

public class PersonaDto {

    @NotBlank
    private long cedula;
    @NotBlank
    private String nombre;
    @NotBlank
    private String apellido;
    @NotBlank
    private LocalDate fechaNacimiento;


    public PersonaDto() {
    }

    public PersonaDto(long cedula, String nombre, String apellido, LocalDate fechaNacimiento) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }

    public long getCedula() {
        return cedula;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }
}
