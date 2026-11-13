# Pegsy

Pegsy is a Codebreaker game: players crack hidden color codes using hints. This glossary is the shared language for the rules, modes, and players.

## Rules

**Color**:
One of the 6 peg colors a Code can use. Every Color always has its own symbol, so you never need to tell colors apart to play.
_Avoid_: Peg type

**Slot**:
One of the 4 positions in a Code or a Guess.
_Avoid_: Hole, position, cell

**Code**:
An ordered set of 4 Colors, one per Slot. Colors can repeat and no Slot can be empty.
_Avoid_: Pattern, combination, answer

**Secret Code**:
The Code a player has to crack. Only its owner can see it until the Game ends.
_Avoid_: Solution, hidden code

**Guess**:
A Code a player submits to try to crack a Secret Code. A player gets at most 10 Guesses per Game.
_Avoid_: Attempt, try, row, move

**Hint**:
What a player gets back after a Guess: an Exact count and a Near count. It never says which Slots they refer to.
_Avoid_: Feedback, score, key pegs, result

**Exact**:
A Color in a Guess that is in the right Slot.
_Avoid_: Black peg, bull, hit

**Near**:
A Color in a Guess that is in the Secret Code but in a different Slot. Matches are never counted twice, so repeated Colors count at most as often as they appear in the Secret Code.
_Avoid_: White peg, cow, blow, partial

**Crack**:
To submit a Guess with 4 Exact.
_Avoid_: Solve, win, break

## Modes

**Game**:
One complete play of Solo or Duel, from the first Guess to the Outcome.
_Avoid_: Round, session

**Solo**:
A Game where one player tries to Crack a random Secret Code within 10 Guesses. Works offline.
_Avoid_: Classic, practice, single-player, vs. computer

**Duel**:
A Game between exactly two players. Each one sets a Secret Code for the other, and both try to Crack the other's at the same time.
_Avoid_: Versus, match, multiplayer game, race

**Setup**:
The start of a Duel, when each Player privately picks their Secret Code. Guessing starts for both Players at the same moment, once both have Locked In.
_Avoid_: Lobby, code selection

**Lock In**:
Confirming your Secret Code during Setup. After that it can't be changed.
_Avoid_: Submit code, confirm, ready

**Outcome**:
How a Game ended for a Player: Win, Loss, or Draw. In Duel, whoever Cracks in fewer Guesses wins. Cracking in the same number of Guesses, or neither Player Cracking, is a Draw. Time never decides an Outcome.
_Avoid_: Result, verdict

**Decided**:
A Duel is Decided as soon as no remaining Guess can change its Outcome. It ends at that moment, even if a Player still has Guesses left.
_Avoid_: Finished, complete

**Series**:
All the Duels played by the same two Players through one Invite, with a running Score. It is Open until someone Joins, then Active, then Closed for good once a Player Leaves or ends it, or it Expires.
_Avoid_: Match, lobby. Also avoid "room" or "session" when you mean a Series; those words are for technical concepts only.

**Join**:
Explicitly taking the open seat in a Series from an Invite. Just opening the link never Joins.
_Avoid_: Accept, claim, enter

**Away**:
A Player in an Active Series who isn't currently in it: disconnected, in the background, or off doing something else such as Solo. Being Away never costs a Player anything by itself.
_Avoid_: Disconnected, offline, idle, inactive

**Leave**:
A Player choosing to end their Series. It Closes the Series for both Players.
_Avoid_: Quit, exit, resign

**Forfeit**:
A Loss given before a Duel is Decided, to a Player who Leaves, or who is Away while they still have Guesses to make and their opponent ends the Duel. A Duel that is already Decided can never get a Forfeit.
_Avoid_: Abandon, default, DNF

**Expire**:
When a Series Closes on its own: an Invite nobody Joined within 1 hour, or both Players Away for 30 minutes. It never changes an Outcome.
_Avoid_: Timeout, cleanup

**Score**:
The running tally of Wins and Draws for each Player across one Series.
_Avoid_: Points, record, stats

**Rematch**:
A new Duel in the same Series, with new Secret Codes. Either Player can ask for one, and it starts only when both agree.
_Avoid_: Replay, play again

**Stats**:
A Player's Solo history, kept only on their device: Games played, win rate, current streak, and how many Guesses their wins took.
_Avoid_: Score, record, leaderboard

## People

**Player**:
A person taking part in a Game.
_Avoid_: User, account

**Nickname**:
The name a Player chooses and shows to others. It is only a label and does not prove who someone is.
_Avoid_: Username, handle, display name

**Guest**:
A Player with no account. The device remembers who they are.
_Avoid_: Anonymous user, visitor

**Invite**:
A link one Player shares so another Player can join their Series without signing up. The first person to open it takes the second seat.
_Avoid_: Room code, invitation, share link
