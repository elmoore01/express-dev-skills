var express = require('express');
var router = express.Router();
var mySkillsCtrl = require('../controllers/skills');

// GET /skills/new
router.get('/new', mySkillsCtrl.new);
// GET /skills/:id
router.get('/:id',mySkillsCtrl.show);
// GET /skills
router.get('/', mySkillsCtrl.index);
// POST /skills
router.post('/', mySkillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', mySkillsCtrl.delete);

module.exports = router;
