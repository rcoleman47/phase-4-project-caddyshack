puts "Creating seeds..."

# Generate users
ryan = User.create(username: "ryanadams", email: "myemail@gmail.com", password: "password")
coleman = User.create(username: "coleman", email: "abc@gmail.com", password: "password")

# Generate courses
gc_edmond = Course.create(name: "Golf Club of Edmond", address: "2905 N Sooner Road", city: "Edmond", state: "Oklahoma", image_url: "https://i0.wp.com/www.golfedmond.com/wp-content/uploads/2016/06/Golf-Club-Edmond-Final-1.png?fit=520%2C170")

# Generate tee_boxes
championship = TeeBox.create(tee: "Championship", color: "Gold", par: 70, course_id: gc_edmond.id)
member = TeeBox.create(tee: "Member", color: "Blue", par: 70, course_id: gc_edmond.id)
senior = TeeBox.create(tee: "Senior", color: "White", par: 70, course_id: gc_edmond.id)
forward = TeeBox.create(tee: "Forward", color: "Red", par: 70, course_id: gc_edmond.id)

# Generate holes
# # Championship 
Hole.create(number: 1, par: 4, distance: 330, handicap: 17, tee_box_id: championship.id)
Hole.create(number: 2, par: 5, distance: 519, handicap: 9, tee_box_id: championship.id)
Hole.create(number: 3, par: 3, distance: 182, handicap: 7, tee_box_id: championship.id)
Hole.create(number: 4, par: 4, distance: 362, handicap: 13, tee_box_id: championship.id)
Hole.create(number: 5, par: 4, distance: 400, handicap: 5, tee_box_id: championship.id)
Hole.create(number: 6, par: 4, distance: 516, handicap: 1, tee_box_id: championship.id)
Hole.create(number: 7, par: 3, distance: 175, handicap: 11, tee_box_id: championship.id)
Hole.create(number: 8, par: 4, distance: 423, handicap: 15, tee_box_id: championship.id)
Hole.create(number: 9, par: 5, distance: 654, handicap: 3, tee_box_id: championship.id)
Hole.create(number: 10, par: 3, distance: 212, handicap: 6, tee_box_id: championship.id)
Hole.create(number: 11, par: 4, distance: 395, handicap: 10, tee_box_id: championship.id)
Hole.create(number: 12, par: 4, distance: 376, handicap: 2, tee_box_id: championship.id)
Hole.create(number: 13, par: 4, distance: 412, handicap: 4, tee_box_id: championship.id)
Hole.create(number: 14, par: 3, distance: 148, handicap: 18, tee_box_id: championship.id)
Hole.create(number: 15, par: 4, distance: 345, handicap: 14, tee_box_id: championship.id)
Hole.create(number: 16, par: 4, distance: 435, handicap: 8, tee_box_id: championship.id)
Hole.create(number: 17, par: 3, distance: 169, handicap: 16, tee_box_id: championship.id)
Hole.create(number: 18, par: 5, distance: 521, handicap: 12, tee_box_id: championship.id)

puts "Seeding Done! ...I guess"