import { Router } from 'express'
const router = Router()
import * as devskillsController from '../controllers/devskills.js'


/* GET users listing. */
router.get('/', devskillsController.index)
router.get('/new', devskillsController.new)
router.get('/:id', devskillsController.show)
router.post('/', devskillsController.create)
router.delete('/:id', devskillsController.delete)

export {
  router
}