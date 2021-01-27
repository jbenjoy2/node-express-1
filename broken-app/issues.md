# Broken App Issues
1. inconsistent use of variable types; switched to const and let where appropriate

2. No real error-handling middleware

3. Moved server starting, which was incomplete, to new file server.js

4. 'Catch' statement wasn't catching any errors; missing argument 

5. not using express.json() so express was not told what type of request body to look for

6. async callback function wasn't mapping asynchronously and so results array was holding pending promises

