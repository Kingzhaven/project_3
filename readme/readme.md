# Todo List Application

### Author: Ben Riggs

## Overview

This is a simple and responsive Todo List application built with React. It allows users to manage daily tasks efficiently. Users can add new tasks, mark tasks as complete or incomplete, delete tasks, and filter tasks based on their status (All, Completed, or Remaining). The app also stores the todo list in the browser’s local storage, so tasks persist even after refreshing the page.

## Features

- **Add a New Task**: Users can type in the task they want to add and hit "Add" to include it in the list.
- **Mark as Complete**: A checkbox next to each task allows users to mark tasks as complete or incomplete.
- **Delete a Task**: A delete button removes the task from the list.
- **Task Filtering**: Users can filter the tasks by "Show All", "Show Completed", or "Show Remaining".
- **Persistence**: The list is saved in the browser’s local storage, so tasks remain between page reloads.
- **Baseline Tasks**: The app starts with predefined tasks (Mopping, Sweeping, and Cleaning the Stove).

## How to Use

1. **Add a Task**: Type in the input field and press the "Add" button to create a new task.
2. **Mark a Task as Complete**: Check the box next to a task to mark it as completed. The task will be struck through.
3. **Delete a Task**: Click the "Delete" button next to a task to remove it.
4. **Filter Tasks**:
   - "Show All" displays all tasks.
   - "Show Completed" shows only the completed tasks.
   - "Show Remaining" displays tasks that are still incomplete.
5. **Persistent Data**: Your list is stored in local storage, so tasks won't disappear if you refresh or close the browser.

## Technologies Used

- **React.js**: For building the interactive user interface.
- **HTML**: For structuring the application.
- **CSS**: For styling and designing the look of the app.
- **JavaScript (ES6+)**: For adding interactivity and handling state management.
- **Local Storage**: For saving and loading tasks even after refreshing the browser.

## Setup Instructions

1. Clone or download the repository.
2. Install the necessary dependencies by running `npm install`.
3. Start the development server using `npm start`.
4. Open the app in the browser at `http://localhost:3000`.
