# Netflix Clone App

This is a React Native application that simulates the user interface and features of the Netflix app. The app allows users to browse trending movies, view Netflix Originals, watch movie trailers, and navigate between different sections of the app.

## Features
- Browse Trending Movies: View a list of trending movies fetched from the TMDB API.
- Netflix Originals: Explore a collection of Netflix Originals TV shows.
- Movie Trailers: Watch trailers of selected movies using the YouTube iframe player.
- Navigation: Use the navigation bar to switch between different sections of the app.
- Modal View: Display detailed information about a selected movie in a modal window.
- Responsive Design: The app is designed to work on different screen sizes.

## Installation
1. Clone the repository: `git clone https://github.com/AnuAithal/netflix-clone-app.git`
2. Navigate to the project directory: `cd netflix-clone-app`
3. Install dependencies: `npm install` or `yarn install`
4. Start the app: `npm start` or `yarn start`

Make sure you have React Native and Expo CLI installed on your system before proceeding.

## Technologies Used
React Native
React Navigation
movie-trailer
react-native-youtube-iframe

## Usage
1. **Login:**
   - Open the app to access the login page.
   - Enter the username and password.
   - Tap "Login".
   - Successfully logging in will take you to the home page; otherwise, an alert will appear.

2. **Home Page:**
   - After logging in, you'll see the home page.
   - The movie banner will automatically change at intervals.
   - Press the play button on the banner to watch the trailer.
   - To exit the trailer, tap the back button.

3. **Movie Categories:**
   - Scroll through rows of movie cards categorized by genre.

4. **Movies Page:**
   - Tap "Movies" in the navbar to navigate to the movies page.
   - A list of movies will be displayed.
   - Scroll vertically to view more movies.

5. **Movie Details:**
   - Press any movie card in the Movies page to view its details.
   - Tap the play button to watch the movie's trailer.

6. **Logout:**
   - Press the icon in the top-left corner of the navbar to log out.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

