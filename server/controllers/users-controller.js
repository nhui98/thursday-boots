const { userData } = require("../data.js")

exports.signin = async (req, res, next) => {
    const { email, password } = req.body
    console.log(email, password);
    
    if (!email || !password) {
        res.status(401).send({ message: "Invalid email or password" })
    } else {
        const user = userData.find(x => email === x.email && password === x.password)
        
        if (user) {
            res.send({
                id: user.id,
                firstName: user.firstName,
            })
        } else {
            res.status(401).send({ message: "Invalid email or password" })
        }
    }
}