# visited-places
Places I've been to

Project layout
|_index.html - Open with browser
|_places.js - business logic
|_test-places.js - tests
|_README.md - test progress and results

Pseudocode tests
TEST ONE: Can create a new Place with all properties
Create a Place with location, landmarks, year, notes
Expect location, landmarks, year, notes to match inputs

TEST TWO: fullDescription method
Call fullDescription on a Place
Expect a formatted string with location, year, landmarks, notes

TEST THREE: addLandmark method
Call addLandmark with a new landmark
Expect landmarks length to increase by 1

TEST FOUR: getRating method
Call getRating on a Place
Expect the rating string to match the expected value
