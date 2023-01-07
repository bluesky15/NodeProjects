const express = require('express')

const app = express()
const port = 8080

app.get('/', (_req, res) => {
  res.send('Hello World!')
})
// let s1 = new QuizOption("Delhi",true,1).toString()
// let s2 = new QuizOption("Kolkata",false,1).toString()

// let l = [s1,s2]

// let r = new QuizListModel("What is the capital of India?", l, 0,false)


// console.log(JSON.stringify(r,null,2))
// console.log(s1)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// function QuizOption(value,isCorrect,tag){
// this.value = value
// this.isCorrect = isCorrect
// this.tag=tag
// return this
// }

// function QuizListModel(question, options,selectedTag,isLocked){
// this.options = options
// this.question = question
// this.isLocked = isLocked
// this.selectedTag = selectedTag
// }