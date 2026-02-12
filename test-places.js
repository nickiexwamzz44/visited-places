function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log(`PASS: ${testName}`);
    } else {
        console.log(`FAIL: ${testName}. Expected ${expected} but got ${actual}`);
    }
}

let mlolongo = new Place('Mlolongo', ['African Heritage Museum'], '2024', 'Breathtaking views!');

assertEqual(mlolongo.location, 'Mlolongo', 'TEST ONE: sets location');
assertEqual(mlolongo.landmarks.length, 1, 'TEST ONE: sets landmarks');
assertEqual(mlolongo.year, '2024', 'TEST ONE: sets year');
assertEqual(mlolongo.notes, 'Breathtaking views!', 'TEST ONE: sets notes');

let expectedDescription = 'Visited Mlolongo in 2024. Landmarks: African Heritage Museum. Notes: Breathtaking views!';
assertEqual(mlolongo.fullDescription(), expectedDescription, 'TEST TWO: fullDescription returns formatted string');

mlolongo.addLandmark('Mlolongo Market');
assertEqual(mlolongo.landmarks.length, 2, 'TEST THREE: can add new landmarks');

assertEqual(mlolongo.getRating(), 'Great', 'TEST FOUR: returns rating');
