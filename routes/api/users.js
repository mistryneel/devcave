import express from 'express'

const router = express.Router()

// @route   GET /api/users/test
// @desc    Test users api
// @access  Public
router.get('/test', (req, res) => res.json({
  msg: 'users works'
}))

export default router