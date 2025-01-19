# cs-628-pe-Fernando
Movie List App 
The Movie List App's input consists of a preset set of movie objects, each with characteristics such as title, genre, release year, and an accompanying poster image from the public folder. The user uses a dropdown menu to filter movies by genre. When you click on a movie, you will see an alert with the title of the film.

Process
The app leverages React to dynamically render and manage the movie list. It uses the useState hook to keep track of the selected genre and filter the movies displayed accordingly. When the user selects a genre, the app compares it to the movie objects and displays just the related entries. Furthermore, React's map function is used to dynamically generate components for each movie card, including details and images.

Output
The result is a dynamic and interactive UI that shows a list of movie cards. Each card displays the film's title, genre, release year, and poster. Users can filter the movies by genre using the dropdown menu, or watch all movies by selecting "All Genres." When you click on a movie card, you will see an alert with the title of the movie.
