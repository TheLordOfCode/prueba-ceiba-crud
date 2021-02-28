package com.persona.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.persona.service.PersonaService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.hamcrest.CoreMatchers.is;

@RunWith(SpringRunner.class)
@WebMvcTest(PersonaController.class)
@EnableAsync
public class PersonaControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;
    @MockBean
    private PersonaService personaService;

    @Test
    public void listTest() throws Exception {
        // arrange
        long cedula = 1234;
        String nombre = "juan";
        String apellido = "perez";
        String fechaNacimiento = "1993-06-11";
        // act - assert
        mockMvc.perform(get("/personas").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].nombre", is(nombre)))
                .andExpect(jsonPath("$[0].apellido", is(apellido)))
                .andExpect(jsonPath("$[0].cedula", is(cedula)))
                .andExpect(jsonPath("$[0].fechaNacimiento", is(fechaNacimiento)));
    }
}