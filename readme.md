# Project 3

## Trip Planner

An app that lets a user plan an adventure in its entirety, down to the gear and people that are going to come. Once the trip is planned, it sends a full itinerary to everyone involved, so people can be on the same page. All your planning in one place.

## Wireframes

#### ERD
https://drive.google.com/open?id=1S3xRcYb0dqa0w7TTny2wDJ93DABviPQs

#### Component Hierarchy
https://drive.google.com/open?id=1exNGVVImg_WdNh1_6qHzJGaoN3O4befL

#### Mobile
https://drive.google.com/open?id=1LK8qSdeoH9m0XPFjOsgxj_pW04ReoMkr

https://drive.google.com/open?id=1uEkiK8YolqkUtFbWMnQ42azy0ZFhMND6

https://drive.google.com/open?id=1v9NFcdCK6PH2HSH7J1_mb_gucMcU_Txw

https://drive.google.com/open?id=133FtfhnQ2p6yWevU7yHW5VwXmywlnyZB

https://drive.google.com/open?id=1FCe6MQCtxjxvPmCkaN0rXjE84fz31P-T

#### Desktop

Insert desktop here

## Components

#### Main

User can register and log on to their profile.

#### Home

User can select what trip they want to take.
They can view and edit their trips.

#### Profile

User profile will display their username, current trip, and past trips.

#### Trip

Users will be displayed the information of the trip
Users can add and remove gear. They can select the recommended or customize and search for their gear. Users should be able to choose the trip and day, as well as, any information about it.

##### PostMVP

Users can add others to the trip.

#### Itinerary Page

This component will show people in the involved in the trip, display the full itinerary.




#### Navigation

Home, Profile, Planning, About

##### MVP

Plan a trip.
Create a collaborative itinerary.
After the user selects a trip, they should be redirected to an info page.
Create an API of trips and gear associated
The info page will display a map of the location and gear required.
Users can add people to a group either by a code, username, or email information.

##### PostMVP

Send the itinerary to the people within the group.
Users can combine their list of items.
The list will be a checkbox and there will be two lists where there are checked items and non-checked items
Users can post their past adventures on a new public component.
Other users can rate the posts (1-5 scale)and the posts will be aligned based on the average ratings.
Users can add photos to a trip
Display the weather for the days selected


#### ERD

Each account has one user
Each user has many plans
Each plan has one location and itinerary
Each itinerary has many items

## Timeline

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create a login page | H |  1 Hr |  |  |
| Create an API | H | 1 Hr |  |  |
| Make sure the login page works | H | 2 Hrs |  |  |
| Create the skeleton | H | 1 Hr | |  |
| Create a itinerary | H | 1 Hr |  | |
| Display info | H | 1 Hr | |  |
| Add People to group | H | 2 Hr |  |  |
| PostMVP | | | |
| Send out information | M | 2 Hr | |
| Combine list with other users | M | 2 Hr | |
| Checkboxes will be changed in real time based on click| M | 30 mins | |
| Add Photos  | L | ??? | |
| Rating system and post | L | 1 Hr | |
