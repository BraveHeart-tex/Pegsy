# Duel is symmetric, not maker-vs-breaker

Classic Codebreaker is asymmetric: one player sets a Code and watches while the other cracks it, then they swap. On a phone, the watching player has nothing to do. Duel is symmetric instead. Each Player sets a Secret Code for the other, and both crack at the same time, so both are always playing.

## Considered Options

- **Classic maker/breaker with role swap**: true to the original game, but half of each Game is spent waiting.
- **Race on one shared random Code**: simplest to build, but nobody gets to set a Code to stump their friend, so it feels less personal.
- **Duel (chosen)**: both Players stay active, and each still sets a Code for the other.

## Consequences

Players never take turns, so there is no turn order to enforce. Each Player's progress is independent, and one Player can finish while the other is still guessing. An AI opponent that guesses back, Race, and other formats are out of scope for the MVP.
