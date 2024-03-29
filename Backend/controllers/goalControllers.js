const asyncHandler = require('express-async-handler');

// @desc   Get Goals
// @route GET / api/goals
// @access private
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

const getGoals = asyncHandler( async (req,res) => {
    const goals = await Goal.find({user: req.user.id})
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
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(goal)
})

// @desc   Update Goals
// @route Update / api/goals/:id
// @access private

const updateGoals = asyncHandler( async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    //check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // make sure the logedin user matches the goal user
    if(goal.user.toString() !=  req.user.id) {
        res.status(401)
        throw new Error('User not Authorized')
    }
    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })

    res.status(200).json(updateGoal)
})

// @desc   Delete Goals
// @route Delete / api/goals/:id
// @access private

const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }
        //check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // make sure the logedin user matches the goal user
    if(goal.user.toString() !=  req.user.id) {
        res.status(401)
        throw new Error('User not Authorized')
    }

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: `Deleted Goal: ${deletedGoal}` });
});

module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}