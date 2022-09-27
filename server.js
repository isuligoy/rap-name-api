const express = require('express') 
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age' : 26,
        'birthName': 'Un nombre',
        'birthLocation' : 'London, England',
    },
    'chanser the Raper':{
        'age' : 26,
        'birthName': 'Chanse',
        'birthLocation' : 'Chicago, Illinois',
    },
    'unknown':{
        'age' : 0,
        'birthName': 'unknown',
        'birthLocation' : 'unknown',
    }
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
} )

app.get('/api/:name', (request,response)=>{
    const rapperName = request.params.name.toLocaleLowerCase()
    console.log(rappers['unknown'])
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen( PORT,()=>{
    console.log(`the server is running in port ${PORT}, go catch it!`)
})