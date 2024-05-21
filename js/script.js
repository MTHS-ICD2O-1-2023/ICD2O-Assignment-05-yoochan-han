// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yoochan
// Created on: May 2024
// This file contains the JS functions for index.html
function fibonacci() { // without recursive function and list.
  const userNumber = document.getElementById("get-number").value
  let fibonacciNumber1 = 1 //F1     F1 + F2 = 1, Fn-1 + Fn-2 = Fn
  let fibonacciNumber2 = 0
  let savePoint = 0
  for(counter=1;counter<userNumber;counter++) {
    savePoint = fibonacciNumber1
    fibonacciNumber1 = fibonacciNumber2 + fibonacciNumber1
    fibonacciNumber2 = savePoint
  }
  const answer = fibonacciNumber1
document.getElementById("TheAnswer").innerHTML = "In the Fibonacci sequence, the " + userNumber + "th number is " + answer
}
