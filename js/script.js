// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function calculateClicked () {
  // this function multiples two numbers using while loops

  // input
  const number1 = parseInt(document.getElementById("number1").value)
  const number2 = parseInt(document.getElementById("number2").value)
  let counter = 0
  let total = 0

  // process
  while (counter < number1) {
    total = total + number2
    counter = counter + 1
  }
  
  // output
  document.getElementById("user-answer").innerHTML = "The answer is " + total
}
