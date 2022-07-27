import React, { useEffect, useState } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';
import './Pokedex.css'
import Pokemon from "../Pokemon/Pokemon";
import { useParams } from "react-router-dom";
const Pokedex = (props) => {
    const [pokemons, setPokemons] = useState([])
    let { pokemon_name } = useParams()
    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
            .then(res => res.json())
            .then( (data) => {
                setPokemons(data.results)
            })
    }, [])
    return (
            <TableContainer component={Paper} >
                <Table
                    sx={{maxWidth:'auto'}} 
                    align='center' 
                    aria-label="simple table">
                    <TableHead className="Tabla">
                        <TableRow>
                            <TableCell align="center">Lista de Pokemon's</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="Tabla">
                        {pokemon_name === undefined &&
                            pokemons.map((pokemon, index) => {
                                return(
                                    <TableRow sx={{maxWidth:'auto'}} className="a" key={index}>
                                        <TableCell align="center">
                                            <Pokemon name={pokemon.name}/>
                                        </TableCell>
                                    </TableRow>)
                            })}
                        {pokemon_name !== undefined &&
                        <Pokemon name={pokemon_name}/>}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default Pokedex;