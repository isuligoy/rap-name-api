const express = require('express') 
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const presidentesArg = {
    'hipólito yrigoyen':{
        "nombre" : 'hipólito yrigoyen',
        'inicio-fin': [1928 , 1930],
        'partido': 'Unión Cívica Radical',
        'foto': './img/yrigoyenHipolito.jpg',
        'vicepresidentes': 'Enrique Martínez',
        'electo': 'Elecciones',
    },
    'josé flix uriburu':{
        "nombre" : 'josé flix uriburu' ,
        'inicio-fin': [1930 , 1932],
        'partido': 'Revolución de 1930',
        'foto': './img/joseFelixUriburu.jpg',
        'vicepresidentes': ['Enrique Santamarina','N/S'],
        'electo': 'Golpe de Estado',
    },

    'Agustín P. Justo':{
        "nombre" : 'Agustín P. Justo',
        'inicio-fin': [1932 , 1938],
        'partido': 'Unión Cívica Radical',
        'foto': './img/agustinPedroJusto.png',
        'vicepresidentes': 'Julio Argentino Pascual Roca',
        'electo': 'Elecciones',
    },

    'Roberto M. Ortiz':{
        "nombre" : 'Roberto M. Ortiz',
        'inicio-fin': [1938 , 1942],
        'partido': 'Unión Cívica Radical',
        'foto': './img/robertoMOrtiz.jpg',
        'vicepresidentes': 'Ramón S. Castillo',
        'electo': 'Elecciones',
    },

    'Ramón S. Castillo':{
        "nombre" : 'Ramón S. Castillo',
        'inicio-fin': [1942 , 1943],
        'partido': 'Partido Demócrata Nacional',
        'foto': './img/ramonCastillo.jpg',
        'vicepresidentes': 'N/S',
        'electo': 'Renuncia Presidencial',
    },

    'Pedro Pablo Ramírez':{
        "nombre" : 'Pedro Pablo Ramírez',
        'inicio-fin': [1943 , 1944],
        'partido': 'Revolución de 1943',
        'foto': '',
        'vicepresidentes': ['Sabá H. Sueyro','Edelmiro J. Farrell'],
        'electo': 'Golpe de Estado',
    },

    'edelmiro julián farrell':{
        "nombre" : 'edelmiro julián farrell',
        'inicio-fin': [1944 , 1946],
        'partido': 'Revolución de 1943',
        'foto': '',
        'vicepresidentes': ['Juan Domingo Perón' , 'Juan Pistarini'],
        'electo': 'Recambio bajo Golpe de Estado',
    },

    'juan D. peron (1º)':{
        "nombre" : 'juan D. peron (1º)',
        'inicio-fin': [1946 , 1952],
        'partido': 'Partido Laborista',
        'foto': './img/juanDomingoPeron.jpg',
        'vicepresidentes': 'Juan Hortensio Quijano ',
        'electo': 'Elecciones',
    },
    
    'juan D. peron (2º)':{
        "nombre" : 'juan D. peron (2º)',
        'inicio-fin': [1952 , 1955],
        'partido': 'Partido Peronista',
        'foto': './img/juanDomingoPeron.jpg',
        'vicepresidentes': ['N/S' ,'Alberto Tessaire'],
        'electo': 'Elecciones',
    },

    'eduardo lonardi':{
        "nombre" : 'eduardo lonardi',
        'inicio-fin': [1955 , 1955],
        'partido': 'Revolución Libertadora',
        'foto': '',
        'vicepresidentes': 'Isaac Francisco Rojas',
        'electo': 'Golpe de Estado',
    },

    'pedro eugenio aramburu':{
        "nombre" : 'pedro eugenio aramburu',
        'inicio-fin': [1955 , 1958],
        'partido': 'Revolución Libertadora',
        'foto': '',
        'vicepresidentes': 'Isaac Francisco Rojas',
        'electo': 'Golpe de Estado',
    },

    'unknown':{
        'nombre' : 'unknown',
        'inicio-fin': ['N/S','N/S'],
        'partido': 'N/S',
        'foto': './img/unknown.jpg',
        'vicepresidentes': 'N/S',
        'electo': 'N/S',
    },
}

app.get('/', ( request,response )=>{
    response.sendFile(__dirname + '/index.html')
} )


app.get('/api', ( request,response ) => {
        response.json(presidentesArg)
    }
)

app.get('/api/:name', (request,response)=>{

    const valor = request.params.name.toLocaleLowerCase()
    const presidente = Number(valor) || valor

    if(typeof presidente === 'string'){
        response.json(presidentesArg[presidente])
    }else if(Number.isInteger(presidente)){

        const year = presidente
        let key = 0
        for (let value in presidentesArg) {
            const inicio = presidentesArg[value]['inicio-fin'][0]
            const fin = presidentesArg[value]['inicio-fin'][1]
            key++

            if(inicio <= year && fin >= year){
                response.json(presidentesArg[ value ] )
                break;
            }

            if(Object.keys(presidentesArg).length == key){
                response.json(presidentesArg['unknown'])
            }
        }

    }else{
        throw new Error('Dato Invalido')
    }
})

app.listen( process.env.PORT || PORT, () => {
    console.log(`the server is running in port ${PORT}, go catch it!`)
})