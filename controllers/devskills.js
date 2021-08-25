import * as devskillsDb from '../data/dev-skills-db.js'

export {
  index,
  show,
  newDevSkill as new,
  create,
  deleteDevskill as delete
}

function deleteDevskill(req, res) {
  devskillsDb.findByIdAndDelete(req.params.id, function(error, devskill) {
    res.redirect('/devskills')
  })
}

function create(req, res) {
  devskillsDb.create(req.body, function (error, devskill) {
    res.redirect('/devskills')
  })
}

function newDevSkill(req, res) {
  res.render('devskills/new')
}

function index(req, res) {
  devskillsDb.find({}, function (error, devskills) {
    res.render('devskills/index', {
      devskills,
      error,
      time: req.time
    })
  })
}

function show(req, res) {
  devskillsDb.findById(req.params.id, function(error, devskill) {
    res.render('devskills/show', {
      devskill,
      error
    })
  })
}
