const mongoose = require('mongoose')

const {Schema} =mongoose;

const SkillSchema= new Schema({
    email:{
        type:String,
        required: true
    },
    SkillData:{
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('UserSkill',SkillSchema);