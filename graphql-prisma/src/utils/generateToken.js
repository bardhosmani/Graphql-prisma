import jwt from "jsonwebtoken";

const generateToken = (userId) => {
    return jwt.sign({ userId }, 'thujmashpejtku', { expiresIn: '31 days' })
}

export default generateToken;