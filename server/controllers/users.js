const bcrypt = require("bcryptjs")
const { User } = require("../models/user.js")

exports.register = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body
    
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) return res.status(400).json({ message: "user already exists" })

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = new User({ firstName, lastName, email, password: hashedPassword })

        const user = await newUser.save()
        res.status(201).json({ email: user.email, firstName: user.firstName, lastName: user.lastName, id: user._id })
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(401).send({ message: "Invalid email or password" })
    } else {
        try {
            const user = await User.findOne({ email })
            if (!user) return res.status(401).send({ message: "Invalid email or password" })

            const isPasswordValid = await bcrypt.compare(password, user.password)
            if (!isPasswordValid) return res.status(401).send({ message: "Invalid email or password" })

            res.status(200).json({ email: user.email, firstName: user.firstName, lastName: user.lastName, id: user._id })
        } catch (error) {
            res.status(401).send({ message: "Invalid email or password" })
        }
    }
}