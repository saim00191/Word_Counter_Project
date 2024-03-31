#! /usr/bin/env node

import inquirer from "inquirer";

let condition = true;

while(condition){

const UserInput  = await inquirer.prompt([
    {
        type : "input",
        name : "Sentence",
        message : "Enter Your Sentence To Count Words?"
    },
])
const SentenceInput = UserInput.Sentence

const LetterWithoutSpaces = SentenceInput.replace(/\s/g,"")

const LetterCount = LetterWithoutSpaces.length

console.log("Letters : ",LetterCount);

const wordArr = SentenceInput.split(" ")
const wordCount = wordArr.length

console.log( "Words : ",wordCount);

const UserInput2 = await inquirer.prompt(
    {
        type : "confirm",
        name : "again",
        message : "Do you want to continue?"
    }
)
condition = UserInput2.again
}





