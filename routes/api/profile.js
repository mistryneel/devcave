import express from 'express'

const router = express.Router()

// @route   GET /api/profile/test
// @desc    Test profile api
// @access  Public
router.get('/test', (req, res) => res.json({
  msg: 'profile works'
}))

export default router