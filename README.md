# Socket.io Chat App

A simple real-time chat application built with Node.js, Express, and Socket.IO.

## Features

- Real-time messaging between connected users
- User name selection
- Typing indicator
- Join/leave notifications
- Colorful chat interface

## Project Structure

- `index.js` - server setup and Socket.IO event handling
- `index.html` - client-side chat UI and frontend logic
- `package.json` - project dependencies and scripts

## Requirements

- Node.js
- socketio
- expressjs
- nodemon
- npm

## Installation

```bash
npm install
```

## Run the app

From the project folder:

```bash
npm start
```

Then open the browser at:

```text
http://localhost:3000
```

## Notes

On Windows PowerShell, you may need to run the app with Command Prompt if execution policy blocks npm scripts:

```bash
cmd /c "cd /d c:\Users\Marwan\Downloads\socketio && npm install && npm start"
```
## Demo

<video width="800" controls>
  <source src="./demo.mp4" type="video/mp4">
</video>

## License

This project is for learning and demo purposes.
