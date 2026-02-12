# visited-places
Places I've been to

## Features 

- Add new places with location, landmarks, year, notes,and rating. 
- View details of each place by clicking its name. 
- Edit existing places (update details). 
- Delete places from the list. 
- Search/filter places by location or landmark. 
- Data persistence using localStorage.


## Project layout
|_index.html - Open with browser
|_places.js - business logic + UI 
|_style.css - optional styling
|_README.md - test progress and results

## Pseudocode tests
- JS
describe("Place", function() {
  it("sets location", function() {
    const paris = new Place("Paris", ["Eiffel Tower"], 2024, "Romantic trip");
    expect(paris.location).toEqual("Paris");
  })
});

  it("returns formatted description", function() {
    const tokyo = new Place("Tokyo", ["Shibuya Crossing"], 2025, "Cherry blossoms");
    expect(tokyo.fullDescription()).toContain("Tokyo (2025)");
  });

  it("can add new landmarks", function() {
    const nyc = new Place("New York", ["Statue of Liberty"], 2023, "Business trip");
    nyc.addLandmark("Central Park");
    expect(nyc.landmarks).toContain("Central Park");
  });

  it("returns rating", function() {
    const rome = new Place("Rome", ["Colosseum"], 2022, "History tour");
    rome.setRating(5);
    expect(rome.rating).toEqual(5);
  });

## Peer Code Review
Do JavaScript objects drive application logic? (yes)
Are constructors and prototypes used successfully? (yes)
Are pseudo-coded tests present in the README? (yes)
Does the application work as expected? (yes)

## How to use
1. Adding a Place
Fill in the form with:
Location: Paris
Landmarks: Eiffel Tower, Louvre
Year: 2024
Notes: Romantic trip
Rating: 5

Click Add Place → "Paris" appears in the list.
Clicking "Paris" shows:
Paris (2024) - Landmarks: Eiffel Tower, Louvre. Notes: Romantic trip. Rating: 5

2. Editing a Place
Click "Tokyo" in the list.
In the details panel, click Edit.
The form is pre-filled with Tokyo’s details.
Change Notes to: Cherry blossoms and sushi tour.
Resubmit → Tokyo’s entry updates.

3. Deleting a Place
Click "New York" in the list.
In the details panel, click Delete.
"New York" is removed from the list and localStorage.

4. Searching Places
Type Eiffel in the search bar.
Only "Paris" appears in the list (since it has Eiffel Tower as a landmark).
Clear the search bar → all places reappear.

## Future Enhancements
Sort places by year or rating.
Add categories (e.g., vacation, business, study abroad).
Improve UI with cards or modals.

## License
This project includes a LICENSE file.

## Author
Nicolette Wamuyu