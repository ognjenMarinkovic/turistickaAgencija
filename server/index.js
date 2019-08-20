

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const mongoose = require('mongoose')

app.use(session({
	secret: 'wfansofknadsandlkasdnwdasz',
	saveUnintialized: false,
	resave: false
}))
app.set('trust proxy', 1)

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/angulardb')
.then((err) => console.log('Mongoose up'))


const User = require('./models/users')


app.use(bodyParser.json())

app.get('/api/logout',  (req, res) =>{
	req.session.destroy()
	
	res.json({
		success: true
	})
})

app.post('/api/login', async (req, res) =>{
	
	const {email, password} = req.body
	console.log(email, password)
	const resp = await User.findOne({email, password})
	console.log(resp)
	if(!resp){
		res.json({
			success: false,
			message: "incorect details"
		})

	}else{
		res.json({
			success: true,
			message: "You are logged in"
		})
		req.session.user = email
		req.session.save()
	}

	//store on db
	

} )

app.get('/api/isloggedin' , (req, res) => {
	res.json({
		status: !!req.session.user
	})
})


app.post('/api/register', async (req, res) =>{
	
	const {email, password} = req.body

	const existingUser = await User.findOne({email})

	if(existingUser){
		res.json({
			success: false,
			message: "Email already in use"
		})
		return
	}

	const user = new User({
		email,
		password
	})

	const result = await user.save()
	console.log(result)
	res.json({
		success: true,
		message: "Welcome"
	})
	//store on db


} )

app.get('/api/data', async (req,res) =>{

	const user = await User.findOne({email: req.session.user})

	if(!user){
		res.json({
			status: false,
			message: 'User was deleted'
		})
		return
	}
	 res.json({
	 	status: true,
	 	email: req.session.user,
	 	quote: user.quote
	 })

})

app.listen(1234, () => console.log('Server listening 1234'))
