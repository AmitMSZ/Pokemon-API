import { Card, CardActions, CardContent, CardMedia, Collapse, IconButton, Typography,styled } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from "react";
import './Pokemon.css'

const Pokemon = (props) => {
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [urlPokemon,setUrlPokemon] = useState('')
    const [urlPokemonBack, setUrlPokemonBack] = useState('')
    const [urlPokemonShiny, setUrlPokemonShiny] = useState('')
    const [urlPokemonShinyBack, setUrlPokemonShinyBack] = useState('')
    const [urlPokemonFamale, setUrlPokemonFamale] = useState('')
    const [urlPokemonFamaleBack, setUrlPokemonFamaleBack] = useState('')

    
    const [pokemonName, setPokemonName] = useState('ditto')
    const [pokemonInput, setPokemonInput] = useState('')

    const [codigo, setCodigo] = useState('')
    const [nombre, setNombre] = useState('')
    const [tipo, setTipo] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    
    const [habilidad, sethabilidad] = useState('')
    const [movimientos, setMovimientos] = useState('')
    const [experiencia, setExperiencia] = useState('')

    const [estadisticas, setEstadisticas] = useState('')

    useEffect( () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
            .then(res => res.json())
            .then(
                (data) => {
                    
                    setUrlPokemon(data.sprites.front_default)
                    setUrlPokemonBack(data.sprites.back_default)
                    setUrlPokemonShiny(data.sprites.front_shiny)
                    setUrlPokemonShinyBack(data.sprites.back_shiny)
                    setUrlPokemonFamale(data.sprites.front_female)
                    setUrlPokemonFamaleBack(data.sprites.back_female)

                    setCodigo(data.id)
                    setNombre(data.name)
                    setTipo(data.types.map(t => (t.type.name + (', '))))
                    setPeso(data.weight)
                    setAltura(data.height)
                    sethabilidad(data.abilities.map(e => ((e.ability.name + ' ' ))))
                    setMovimientos(data.moves.map(m => (m.move.name + ', ')))
                    setEstadisticas(data.stats.map(s => (s.stat.name + ': ' + s.base_stat + ' '))) 
                    setExperiencia(data.base_experience)
                }
            )
    }, [pokemonName])

    const handleChange = (event) => {
        setPokemonInput(event.target.value)
    }
    const [radio, setRadio] = useState('Normal')
    const handleChangeRadius = (event) => {
        setRadio(event.target.value)
    }
    const handleClick = () => {
        setPokemonName(pokemonInput)
    }
    
    let url1, url2, descript
    if (radio === 'Famale') {
        url1 = urlPokemonFamale
        url2 = urlPokemonFamaleBack
        descript = 'pokemon famale'
    }
    else if (radio === 'Shiny') {
        url1 = urlPokemonShiny
        url2 = urlPokemonShinyBack
        descript = 'pokemon shiny'

    } else {
        url1 = urlPokemon
        url2 = urlPokemonBack
        descript = 'pokemon normal'
    }
    return (
        <>
            
            <Card sx={{maxWidth: 220}} className='card'>
                <CardContent className="i">
                        <CardMedia
                        component="img"
                        image={url1}
                        alt={nombre}/>
                        <CardMedia
                        component="img"
                        image={url2}
                        alt={nombre}/>
                </CardContent>
                <CardContent className="e">
                        <Typography align="center" gutterBottom variant="h5" component='div'>
                            {nombre} #{codigo}
                        </Typography>
                        <Typography align="center" variant="body2" color='text.secundary'>
                        </Typography>
                        <CardActions disableSpacing>
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography paragraph>Especificaciones: </Typography>
                            <Typography paragraph>
                                Tipo: {tipo}
                                <br/>
                                Peso: {peso}
                                <br/>
                                Altura: {altura}
                                <br/>
                                Habilidades: {habilidad}
                                <br/>
                                Movimientos: {movimientos[0]}
                                <br/>
                                Exp. Base: {experiencia}
                                <br/>
                                Stats:
                                <br/>
                                {estadisticas[0]}
                                <br/>
                                {estadisticas[1]}
                                <br/>
                                {estadisticas[2]}
                                <br/>
                                {estadisticas[3]}
                                <br/>
                                {estadisticas[4]}
                            </Typography>
                            </CardContent>
                        </Collapse>
                </CardContent>
            </Card>
        </>
    );
} 
export default Pokemon;