var Joi = require('joi')

const customors = [
    {id: 1, name: 'Huzaifa Shakeel', workinghours :4},
    {id: 2, name: 'Ikrma Ahmed', workinghours :9},
    {id: 3, name: 'Ahmed Malik', workinghours :3}
]

module.exports.getcustomorservice = (req, res)=>{
    res.send(customors)
    
}

module.exports.postcustomorService = (req, res)=>{
    var {error} = validateCustomor(req.body)
    if(error){
    return res.send(error.details[0].message)
    }
    
    const customor = {
        id: customors.length + 1,
        name : req.body.name,
        workinghours: req.body.workinghours
    }
    customors.push(customor)
    res.send(customor)
}


module.exports.putCustomorService = (req, res)=>{
    var customor =  customors.find(c => c.id === parseInt(req.params.id))
    if(!customor){
        return res.send("No customor with this id")
    }
    var {error} =validateCustomor(req.body)
    if(error){
        return res.send(error.details[0].message)
    }
    customor.name = req.body.name
    customor.workinghours= req.body.workinghours
    res.send(customor)
}

module.exports.deleteCustomorService = (req, res)=>{
    var customor = customors.find(c=> c.id === parseInt(req.params.id))
    if(!customor){
        return res.send("No Customor with this id")
    }
    console.log(customors)
    var index = customors.indexOf(customor)
    customors.splice(index, 1)
    res.send(customors)
}

function validateCustomor(customor){
    var schema = Joi.object({name: Joi.string().min(8).required(),
    workinghours : Joi.number().integer().required()})
    return schema.validate(customor)
}