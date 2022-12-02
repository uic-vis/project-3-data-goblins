# CS 424 Project 2: Traffic Crashes - People
Dataset used: https://data.cityofchicago.org/Transportation/Traffic-Crashes-People/u6pd-qa9d
Link to website: sites.google.com/uic.edu/cs-424

## Introduction

In this project, we worked with the dataset of Chicago Traffic Crashes – People. This set is a collection of all the traffic crashes that involved the injury of people from late 2013 to present day 2022, collected by the Chicago Police Department. We were tasked with creating a website that presents these visualizations and answers the questions that we posed in previous projects. We made visualizations creating intersections of age, sex, zip code and month to give us information about the people involved in traffic crashes in Chicago.

## Our dataset

We chose to only work with the data from 2021 because using more than one year would make the data too large and unloadable to Observable. Using python datetime, we extracted the month of the crash from CRASH_DATE and inserted this as a new column into the data. Then in Observable, we cleaned our data so that only rows with a zip code, sex, age, and date were used for plotting. We also limited the zip codes to the 67 Chicago zip codes.
The zip code, age, sex, and date were all recorded by the officer taking information about the incident. Additionally, we think it is worth noting that sex was recorded by the officer based on what they determined the sex of the people involved in the crash to be.

## Our Questions

Our primary concern is with finding indicators for who will be in a crash. These were our primary questions:

- Can zip code indicate likelihood of crashing?
- Can sex indicate likelihood of crashing?
- Can age indicate likelihood of crashing?

We also wanted to explore the interactions between these categories. We decided on two questions:
- For a subset of crashes, does it remain true that males are more likely to crash?
- For a given month, does the frequency of crashes for certain ages or zip codes change? 

## Our Plots

Ultimately, we made 5 visualizations: a bar chart of zip code versus frequency, a bar chart of age versus frequency, a bar chart of sex versus frequency, a scatterplot of age versus zip code with a brushable feature that created a bar chart of sex versus frequency per intersection of age and zip code, and we made a scatterplot of age versus zip code with a drop-down menu that separated the data based on month.

## Final Thoughts

This project was challenging and rewarding at the same time because we were challenged to complete tasks that we were never introduced to before, which means we got the opportunity to learn new things. The skills we gained in this class over the semester have been useful, but gaining the ability to easily share and elaborate upon our visualizations brought everything together in a very concrete way. 
