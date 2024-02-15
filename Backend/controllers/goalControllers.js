const asyncHandler = require('express-async-handler');

// @desc   Get Goals
// @route GET / api/goals
// @access private
const Goal = ('../models/goalModel')

const getGoals = asyncHandler( async (req,res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})
// @desc   Set Goals
// @route SET / api/goals
// @access private

const setGoals = asyncHandler( async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

// @desc   Update Goals
// @route Update / api/goals/:id
// @access private

const updateGoals = asyncHandler( (req,res) => {
    res.status(200).json({message: `Update Goals ${req.params.id}`})
})

// @desc   Delete Goals
// @route Delete / api/goals/:id
// @access private

const deleteGoals = asyncHandler( (req,res) => {
    res.status(200).json({message: `Delete Goals ${req.params.id}`})
})


module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}