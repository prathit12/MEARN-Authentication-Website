const express = require('express');
const router = express.Router();
const { getGoals, 
        setGoals, 
        updateGoals, 
        deleteGoals } = require('../controllers/goalControllers')
const {protect} = require('../middleware/authmiddleware')


router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').delete(protect, deleteGoals).put(protect, updateGoals)


module.exports = router