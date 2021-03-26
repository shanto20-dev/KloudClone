# README

# KloudClone

[Live Site!](https://kloudclone.herokuapp.com/#/)

![KloudClone](https://user-images.githubusercontent.com/74939594/112639842-1a34ec00-8e17-11eb-8b58-84cdd8270feb.png)

## Table of Contents


## Background
KloudClone is a full-stack web application clone of SoundCloud. The website allows users to sign up, sign in, and sign out with secure user authenticiation. Users of the website can upload songs with album-art, descriptions, and genre tags. Users can also listen to songs with a complete music-player on the Discover page. The music player features include pause/play, skip song, previous song, shuffle playlist, repeat song, a time-scrubber that displays the current-time of the song and the entire duration of the song, and a volume control slider that mutes on click. 

KloudClone was built with a Ruby on Rails framework back-end and a React/Redux for the front-end. 

## Technologies

* Ruby on Rails
* React.js
* Redux.js
* PostgreSQL
* Webpack
* Amazon AWS S3
* ~~My brilliant mind~~


## User Auth

* Users can sign-up and create an account with KloudClone
* Users can sign-in with KloudClone and upload music
* The sign-up and sign-in forms are rendered on modals which were created with React components listening for Redux slices of state
* The modals slide-in on open and slide-out on close or log-in success
* There is a demo-user feature for KloudClone
* The splash page of KloudClone is an AuthRoute - meaning that you cannot access the page if you are signed-in.

## Discover Page and the Music Player

* The discover page has indexes of the songs in KloudClone's database
* The songs are listed with their Title and Artist Name
* When you click on a song album-cover, that specific song will begin to play
* Songs are queued up and played continously after the last song ends (unless the loop feature is toggled)
* The music player features include pause/play, skip song, previous song, shuffle playlist, repeat song, a time-scrubber that displays the current-time of the song and the entire duration of the song, and a volume control slider that mutes on click. 

## Song Upload

* The song-upload page is a multi-step process that uses local-state changes in React to render the appropriate step
* The first step is to upload a file via drag-and-drop or button-click
* Upon acceptance of an appropriate file, the form will switch to filling out details regarding the song like Title, Album Art, Genre, and description
* Upon acceptance of song details, a successful upload screen will render displaying the song details that were filled out by the user.

