const asyncHandler = require('express-async-handler')

// @desc    Get all goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(
  async (req, res) => {
    if (!req.body.text) {
      res.status(400)
      throw new Error(
        'Please enter some text'
      )
    }
    res
      .status(200)
      .json({ message: 'Get goals' })
  }
)

// @desc    Create a goal
// @route   POST /api/goals
// @access  Private
const addGoal = asyncHandler(
  async (req, res) => {
    res
      .status(201)
      .json({ message: 'Goal created' })
  }
)

// @desc    Update a goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(
  async (req, res) => {
    res.status(200).json({
      message: `Updated goal ${req.params.id}`
    })
  }
)

// @desc    Delete a goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(
  async (req, res) => {
    res.status(200).json({
      message: `Deleted goal ${req.params.id}`
    })
  }
)

module.exports = {
  getGoals,
  createGoal: addGoal,
  updateGoal,
  deleteGoal
}
