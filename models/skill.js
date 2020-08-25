const skills = [
    {id: 12345, skill: 'Public Speaking', level: 5},
    {id: 23456, skill: 'Nonprofit Management', level: 4},
    {id: 34567, skill: 'Dog Spoiler', level: 3}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function getAll() {
    return skills;
}

function create(skill) {
    skill.id = Date.now() % 10000000;
    skill.level = parseInt(skill.level);
    skills.push(skill);
}