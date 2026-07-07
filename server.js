//bring express into our server
const express = require('express')
const morgan = require('morgan')
const path = require('path')

const skills = [
  {
    id: 1,
    name: 'HTML',
    category: 'Frontend',
    level: 'Beginner',
    description: 'I can use semantic HTML to structure a web page.'
  },
  {
    id: 2,
    name: 'CSS',
    category: 'Frontend',
    level: 'Beginner',
    description: 'I can style pages using selectors, colors, spacing, and layout.'
  },
  {
    id: 3,
    name: 'JavaScript',
    category: 'Programming',
    level: 'Beginner',
    description: 'I can use variables, functions, conditionals, loops, arrays, and objects.'
  },
  {
    id: 4,
    name: 'DOM Manipulation',
    category: 'Frontend',
    level: 'Beginner',
    description: 'I can select elements and respond to user events.'
  },
  {
    id: 5,
    name: 'Express',
    category: 'Backend',
    level: 'Learning',
    description: 'I can create server routes and send responses to the browser.'
  },
  {
    id: 6,
    name: 'EJS',
    category: 'Backend',
    level: 'Learning',
    description: 'I can render dynamic HTML pages using server data.'
  }
];
//==============================================

const projects = [
  {
    id: 1,
    image: '/images/Memory Game.png',
    title: 'Memory Game',
    description: 'A browser-based game built with HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Add sounds',
      'Score tracking',
    ],
    status: 'Completed',
    reflection: 'This project helped me practice DOM manipulation and event listeners.'
  },
  {
    id: 2,
    title: 'XO Game',
    image: '/images/Screenshot xo.png',
    description: 'A two-player Tic Tac Toe game where users take turns placing X and O.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Player turns',
      'Win condition checking',
      'Reset button'
    ],
    status: 'Completed',
    reflection: 'This project helped me understand arrays, indexes, and game logic.'
  },
  {
    id: 3,
    title: 'Rock Paper Scissors',
    image: '/images/Screenshot 3.png',
    description: 'A game where the player competes against the computer.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Random computer choice',
      'Player choice buttons',
      'Round result display'
    ],
    status: 'Completed',
    reflection: 'This project helped me practice conditionals and functions.'
  }
];



// actuall use express
const app = express ()

app.use(express.static(path.join(__dirname, "public")))

app.use(morgan('dev'))

app.get('/', function(req,res){
    res.render('home.ejs')
})

app.get('/skills', function(req,res){

    res.render('skill.ejs' , {
        skills : skills
    })
})

app.get('/projects', function(req,res){


    res.render('projects.ejs', {
        projects: projects,
        
    })
})

app.get('/projects/:projectId', function(req,res){

    const index = Number(req.params.projectId)

 res.render('project-show.ejs' , {
        projects : projects, index:index

    })
  })
    

app.listen(4000, function(){
    console.log('listening to port 3000')
})