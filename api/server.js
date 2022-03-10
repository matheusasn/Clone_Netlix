const cors = require('cors')
const express = require('express');
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    return res.json([{
        trailer: `assets/videos/trailer_guardioes_da_galaxia_1080p.mp4`,
        cover: `assets/images/guardios-da-galaxia.jpg`,
        name: 'Guardiões da Galaxia',
        relevance: 98,
        age: 12,
        parts: 2,
        categories: ['Épico','Filme de fantasia','Viagem no espaço'],
      },
      {
        trailer: `assets/videos/trailer_guardioes_da_galaxia_1080p.mp4`,
        cover: `assets/images/guardios-da-galaxia.jpg`,
        name: 'Guardiões da Galaxia 2',
        relevance: 40,
        age: 10,
        parts: 2,
        categories: ['Épico','Filme de fantasia','Viagem no espaço'],
      },
      {
        trailer: `assets/videos/trailer_guardioes_da_galaxia_1080p.mp4`,
        cover: `assets/images/guardios-da-galaxia.jpg`,
        name: 'Guardiões da Galaxia 3',
        relevance: 56,
        age: 16,
        parts: 2,
        categories: ['Épico','Filme de fantasia','Viagem no espaço'],
      },
      {
        trailer: `assets/videos/trailer_guardioes_da_galaxia_1080p.mp4`,
        cover: `assets/images/guardios-da-galaxia.jpg`,
        name: 'Guardiões da Galaxia 3',
        relevance: 56,
        age: 16,
        parts: 2,
        categories: ['Épico','Filme de fantasia','Viagem no espaço'],
      }
      ])
})

app.listen(8585)   