# Tic Tac Toe 20x20 Game

## Introduction
The **Tic Tac Toe 20x20** game is an advanced version of the classic Tic Tac Toe game, designed for two players. The objective is to align five consecutive marks on a 20x20 grid. This game offers more strategic depth due to the larger grid and persistent score tracking across sessions.

## Table of Contents
1. [Features](#features)
2. [Game Rules](#game-rules)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technical Details](#technical-details)
6. [Code Structure](#code-structure)
7. [LocalStorage Integration](#localstorage-integration)
9. [Conclusion](#conclusion)

## Features
- **20x20 Grid**: A large board that offers more strategic possibilities.
- **Two-Player Mode**: Players alternate between placing X and O.
- **Score Tracking**: Persistent score tracking across sessions using LocalStorage.
- **Restart Game**: Ability to restart the game without resetting the score.
- **Winner Detection**: The game detects the first player to align five consecutive marks in any direction (horizontal, vertical, or diagonal).

## Game Rules
- Players take turns placing their marks (X or O) on the grid.
- The first player to align five consecutive marks (either horizontally, vertically, or diagonally) wins the game.
- Players can restart the game using the "Recommencer" button, which resets the board but preserves the scores.

## Installation
To run the game locally:
1. Download or clone the repository.
2. Open `index.html` in a modern web browser.

Ensure that `style.css` and `index.js` files are in the same directory for proper functionality and styling.

## Usage
1. Open the `index.html` file in your browser.
2. The game starts with Player X's turn.
3. Click on any cell to place the mark (X or O).
4. The game alternates between Player X and Player O after each move.
5. If a player aligns five consecutive marks, the game declares a winner and updates the score.
6. Click the "Recommencer" button to start a new game while keeping the scores.

## Technical Details
The game is built using HTML, CSS, and JavaScript. Here's a breakdown of key components:
- **HTML**: Provides the basic structure for the board, score display, and restart button.
- **CSS**: Used for styling the grid and the game interface.
- **JavaScript**: Implements the game logic, handles user interactions, and manages the game's state.

### Code Structure
- **HTML**: Contains the grid layout and UI elements.
- **CSS**: Defines styles for the board, cells, and user interface elements.
- **JavaScript**: Implements the game logic and player interactions.

### Key Functions in JavaScript:
1. **`createBoard()`**: Dynamically generates the 20x20 grid.
2. **`handleClick(event)`**: Handles the player's move, updates the board, and checks for a winner.
3. **`checkForWinner(row, col)`**: Detects whether a player has aligned five marks consecutively in any direction.
4. **`countInDirection(row, col, dx, dy)`**: Counts consecutive marks in a specified direction.
5. **`initializeScores()`**: Initializes player scores from `localStorage`.
6. **`updateScoresInLocalStorage()`**: Updates player scores in `localStorage`.
7. **`changeScore()`**: Updates the displayed score on the screen.
8. **`gameOver()`**: Resets the game, clears the board, and re-initializes the scores.
9. **`restartButton Event Listener`**: Resets the game board but keeps the scores intact.

## LocalStorage Integration
The game uses `localStorage` to persist player scores even after refreshing the page or restarting the game. This allows for continuous score tracking across multiple sessions.

### `localStorage` Methods:
- **`initializeScores()`**: Checks if scores exist in `localStorage` and loads them. If not, it initializes the scores to zero.
- **`updateScoresInLocalStorage()`**: Saves the current scores to `localStorage` after each game round.
- **`gameOver()`**: Clears `localStorage` and resets the game state.

## Conclusion
The Tic Tac Toe 20x20 game offers a more strategic challenge compared to the traditional 3x3 grid, with added features like persistent score tracking and a larger playing area. The game is fully functional and allows two players to engage in a fun and competitive experience.
