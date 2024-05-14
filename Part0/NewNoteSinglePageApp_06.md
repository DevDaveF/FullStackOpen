```mermaid
sequenceDiagram

    Note over browser: 1. User enters text "hello" into browser form element text field name "note"
    Note over browser: 2. User clicks "Save" button triggering the form submit event
    
    participant browser
    participant browserJS
    participant server
    

    browser->>browserJS: The submit event triggers JavaScript code to fetch the form element and register an event handler
    activate browserJS
    Note over browserJS: 1. The event handler immediately calls the method e.preventDefault() to prevent the default handling of form's submit.
    Note over browserJS: 2. The event handler creates a new note, adds it to the notes list with the command notes.push(note)
    browserJS-->>browser:  The event handler rerenders the note list on the HTML document page
    Note over browserJS: Payload form data {content: "hello", date: "2024-05-02"} content type application/json submitted to server
    browserJS->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
   
