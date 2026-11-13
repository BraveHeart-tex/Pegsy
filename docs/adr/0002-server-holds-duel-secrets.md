# The server holds Duel Secret Codes and scores Guesses; Solo runs on the device

To score a Guess you need the Secret Code. If a Duel opponent's device scored Guesses, it would need the Secret Code, and the opponent could read it. So in Duel, the server keeps both Secret Codes, scores every Guess, and decides the Outcome. A device only ever receives its own Secret Code, its own Guesses and Hints, and the opponent's Guesses and Hints against its own Secret Code. A Secret Code is revealed to the other Player only when the Game ends.

Solo has to work offline, and the only person who could cheat is the player themselves, so a Solo Game is generated and scored entirely on the device.

## Consequences

The Hint and Outcome rules have to give exactly the same results on the device (for Solo) and on the server (for Duel), so they must be shared code with no environment-specific dependencies. The server also handles everything else that changes a Series: Join, Lock In, Forfeit, Rematch and Expire. Timers are measured on the server, never on a device. Guest identity has to be a secret, non-guessable token tied to the device. A Nickname is never enough to act as a Player.
