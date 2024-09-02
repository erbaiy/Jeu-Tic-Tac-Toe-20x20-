# Tic Tac Toe 20x20 Game

## Introduction
The Tic Tac Toe 20x20 game is an advanced version of the classic Tic Tac Toe game, designed for two players. The objective is to align five consecutive marks on a 20x20 grid. This game offers a more strategic challenge with its larger board size and persistent score tracking.

## Table of Contents
1. [Features](#features)
2. [Game Rules](#game-rules)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technical Details](#technical-details)
6. [Code Structure](#code-structure)
7. [LocalStorage Integration](#localstorage-integration)
8. [Future Improvements](#future-improvements)
9. [Conclusion](#conclusion)

## Features
- **20x20 Grid**: A large board that offers more strategic possibilities.
- **Two-Player Mode**: Players take turns placing their marks (X or O).
- **Score Tracking**: Scores are stored and persisted across sessions.
- **Restart Game**: Players can reset the board to start a new game.
- **Winner Detection**: The game automatically detects and declares a winner when five consecutive marks are aligned.

## Game Rules
- Players take turns placing their marks (X or O) on the grid.
- The first player to align five consecutive marks in any direction (horizontal, vertical, or diagonal) wins the game.
- Players can click the "Recommencer" button to restart the game, which resets the board but keeps the scores intact.

## Installation
To run the game locally, simply open the `index.html` file in any modern web browser. Ensure that the accompanying `style.css` file is in the same directory for proper styling.

## Usage
1. Open `index.html` in your web browser.
2. The game begins with Player X's turn.
3. Click on a cell in the 20x20 grid to place your mark.
4. The game alternates between Player X and Player O after each move.
5. If a player aligns five marks, they win, and the score is updated.
6. Click "Recommencer" to start a new game while keeping the scores.

## Technical Details
The game is built using standard web technologies:
- **HTML**: Provides the structure of the game, including the board, score display, and
