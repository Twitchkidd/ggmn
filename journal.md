# ggmn journal!

Ahh, so it displays stuff, let's get the logic in, and then the rest of it!

Wait, it's too hideous, I can't cope, I need to take a stab at a bit of layout. Title top left, a brown outline for the board, burgandy for the felt, and then the pips in a lighter brown and a white with just a bit of tan, maroon and brighter white checkers, and I swear it's possible to describe 3d shapes with hmtl/css, imagine this thing folds up at the end of the game?

Okay, I'm going to bring in the title from the other project, let's start there.

// Wow, okay next step needs to be to look at this from a project perspective!

// Okay, next step from a right now perspective is before I forget I need to write down what I was thinking as far as interface design does:

To accomodate for mouse users, keyboard users, and touchscreen interfaces:

Mouse users: valid spaces to move from should get a highlight on hover, and then clicking one highlights it further, and then any valid moves from there get a highlight on hover, and when clicked, that makes the move.

Keyboard users: first focus is the roll button, and then there's the double button, enter on the roll button and focus should evaporate, then first focus should be on a first valid space, and then enter on a valid space should put focus on a first valid move, then enter makes the move. Shift + enter should unselect spaces, and a tooltip should appear if the user seems to be using tab navigation.

Touchscreen users: above a certain size, it's probably fine to have it work like the mouse ... ah, no hover, though ... there's long-press, though, and I imagine someone would just 'lean' on the board to try and get it to give more info. Below a certain size, the UI should accomodate for the reduced precision, and I think the drag to move selection would be good, and then any valid moves from a selected space would be highlighted, and the buttons for making the moves would be totally separate, like, big dice below the board, to avoid error there.

I guess with a valid space selected, clicking on the dice or tabbing to the dice and pressing enter should also make the move, for continuity, and why not.

Oh, you don't need to have a 'double' button, just make the doubling cube on the board the button.

2021-11-16 Oh boy! I've got a meeting tomorrow morning about a freelance web dev gig! Let's bust this thing out and be ready to move on!
