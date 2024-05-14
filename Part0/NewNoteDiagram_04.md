```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: 1. User enters text "hello" into browser form element text field name "note"
    Note right of browser: 2. User clicks "Save" button triggering the form submit event with form method "POST"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of browser: 1. Payload form data "hello" content type text/html submitted
    server-->>browser: GET https://studies.cs.helsinki.fi/exampleapp/notes
    Note right of browser: Status code 302 URL redirect to location above "...exampleapp/notes"
    Note right of browser: 1. Server executes serverside JavaScript to access form data "hello" via `req.body` field of the request object
    Note right of browser: 2. Server creates a new note object, and adds it to array called `notes`
    Note right of browser: 3. Note object has two fields, the user input (1)"content" and the (2)"data" it was submitted: "content":"hello","date":"2024-5-2"
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file 
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file 
    deactivate server

    Note right of browser: Browser starts executing the JavaScript file code that fetches the JSON data from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content": "hello","date":"2024-5-2"}, ...]
    Note right of browser: Browser executes the callback function that renders the notes including the new note object with value "hello"
    deactivate server



