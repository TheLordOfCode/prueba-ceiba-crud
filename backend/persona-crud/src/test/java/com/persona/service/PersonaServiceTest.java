package com.persona.service;

import com.persona.repository.PersonaRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;


public class PersonaServiceTest {

    @Mock
    private PersonaRepository personaRepository;
    @InjectMocks
    private PersonaService personaService;


    @Before()
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }


    @Test
    public void listTest() {
        // arrange - act
        personaService.list();
        // assert
        Mockito.verify(personaRepository, Mockito.times(1))
                .findAll();
    }

    @Test
    public void getOneTest() {
        // arrange
        int id = 1;
        // act
        personaService.getOne(id);
        // assert
        Mockito.verify(personaRepository, Mockito.times(1))
                .findById(id);
    }


}
