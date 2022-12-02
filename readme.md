# CS 424 Project 2: Traffic Crashes - People
Dataset used: https://data.cityofchicago.org/Transportation/Traffic-Crashes-People/u6pd-qa9d

Link to website: sites.google.com/uic.edu/cs-424

## Introduction

In this project, we worked with the dataset of Chicago Traffic Crashes – People. This set is a collection of all the traffic crashes that involved the injury of people from late 2013 to present day 2022, collected by the Chicago Police Department. We were tasked with creating a website that presents these visualizations and answers the questions that we posed in previous projects. We made visualizations creating intersections of age, sex, zip code and time to give us information about the people involved in traffic crashes in Chicago.

## Our dataset

We chose to mostly work with the data from 2021 for most of our visualization because using more than one year would make the data too large and unloadable to Observable. For out third visualization, we incorporated the datasets for 2019, 2020, and 20201. Using python datetime, we extracted the month of the crash from CRASH_DATE and inserted this as a new column into the data. Then in Observable, we cleaned our data so that only rows with a zip code, sex, age, and date were used for plotting. We also limited the zip codes to the 67 Chicago zip codes.
The zip code, age, sex, and date were all recorded by the officer taking information about the incident. Additionally, we think it is worth noting that sex was recorded by the officer based on what they determined the sex of the people involved in the crash to be.

## Our Questions

Our primary concern is with finding indicators for when a crash will occur and who will be involved. These were our primary questions:

- Can age indicate likelihood of crashing? (Visualization 1)
- When do crashes usually occur? (Visualization 3)
- Can zip code indicate likelihood of crashing? (Visualization 4)

We also wanted to explore the interactions between these categories. We decided on the following question:
- For a given month, does it remain true that males are more involved with crashes? (Visualization 2)

## Our Plots

### Visualization 1

Our first visualization is a brushable scatterplot of the age of people and the frequency of involvment in a crash. Brushing of this plot selects points and changes the linked barchart which demonstrates the frequency of each sex involved in crashes. Figure shows the scatterplot and barchart before any portion is selected. When selecting various age ranges, it can be seen that Males are more involved in crashes than Females. This is demonstrated in Figure 2. From these figures it can be seen that people between the ages of 25-35 are more involved in crashes.

![image](https://user-images.githubusercontent.com/69224393/205402406-d7e711f1-cc1d-4c54-a2f9-b876c745d9e8.png)
Figure 1: Scatterplot of age vs. frequency and barchart of sex vs. frequency before any selection is made.

![image](https://user-images.githubusercontent.com/69224393/205402482-5fb23f9a-2334-4665-b007-0335eeac67f3.png)
Figure 2: Scatterplot of age vs. frequency and barchart of sex vs. frequency after a portion of the scatterplot is chosen. The barchart is updated based on the brushed portion of the scatterplot.

### Visualization 2

The second visualization gives the user the option to choose various months in 2021 to see which sex was involved in the most crashes. Figure 3 shows the default barchart of sex vs. frequency where the month is January. Figure 4 shows Novemeber. When a new month is chosen, the y-axis is updated to reflect the number of crashes in that month. This visualization demonstrates, that regardless of time, males are more involved in crashes than females.

![image](https://user-images.githubusercontent.com/69224393/205403111-7fdbc861-c866-4cf1-b2d5-4cdd8aeef296.png)
Figure 3: Barchart of sex vs. frequency based on the month of the crash. By default, it shows the January data.

![image](https://user-images.githubusercontent.com/69224393/205403210-51ee9f6b-48f7-478e-bca1-4571f98649f0.png)
Figure 4: Barchart of sex vs. frequency based on the month of the crash with November selected. The y-axis is updated with each month.

### Visualization 3

The third visualization is a multi-linked view. It is meant to show when crashes usually occur. There are two barcharts: month vs. frequency and barchart vs. frequency. The user is given the option to choose between the years 2019, 2020, or 2021. Figure 5 shows the default barchart which is the data for 2019. Figure 6 shows that the year 2020 is chosen. These interactive figures show that most crashes occur during the warmer months between May and August. They also show that Fridays have more crashes in comparison to other weekdays.

![image](https://user-images.githubusercontent.com/69224393/205403350-3f354406-5401-42eb-9627-a0997bb8c068.png)
Figure 5: Barcharts of month vs. frequency and weekday vs. frequency based on the year of the crash. By default, it shows the 2019 data.

![image](https://user-images.githubusercontent.com/69224393/205403392-954712a3-3fff-4929-b470-0b33b87f0349.png)
Figure 6: Barcharts of month vs. frequency and weekday vs. frequency with 2020 as the chosen year. For both barcharts, the y-axis is updated when a new year is chosen.

### Visualization 4

The final visualization is a spatial view. Each chicago zipcode is outline and filled in based on the number of crashes in 2019. The darker the color means that there were mroe crashes. When a zipcode is clicked on, a pop up shows stating the zipcode and the number of crashes. The view shows that people from the zipcodes  60629, 60639, 60620, 60623, and 60619 are involved in the most crashes.

![image](https://user-images.githubusercontent.com/69224393/205403572-d2578a08-3239-4803-b2d8-15ad521df17a.png)
Figure 7: Spatial visualization of each zipcode and the frequency of crashes in each zipcode. The color is darker if the there are more crashes.

![image](https://user-images.githubusercontent.com/69224393/205403668-2926af28-37bd-4dcc-be3f-247e403347a5.png)
Figure 8: Spatial visualization of each zipcode and the frequency of crashes in each zipcode. A zipcode is selected so the zipcode and number of crashes is shown.

## Final Thoughts

This project was challenging and rewarding at the same time because we were challenged to complete tasks that we were never introduced to before, which means we got the opportunity to learn new things. The skills we gained in this class over the semester have been useful, but gaining the ability to easily share and elaborate upon our visualizations brought everything together in a very concrete way. 
