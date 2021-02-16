const express =require('express');
const mongojs =require('mongojs');

const app =express();

const databaseURL='workout_tracker';
const collections =['workouts'];

const db =mongojs(databaseURL, collections);
db.on('error', (error) => {
    console.log('Database Error:', error);
  });
