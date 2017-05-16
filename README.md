# wahabtv
Goal: Build a webapp/website the Raspberry Pis running on TVs can poll for updates to their loop using REST

The webapp must:
1. Have a management
    1. front-end accessible via the web (AWS) for an admin to login to and use to control what’s displayed on the TV so   The front end must:§
        1. Have a login/password for one user, the Admin. No other users necessary.§
        2. Allow the admin to upload .mp4 files to the webapp and store them in the database.§
        3. Permit no more than 10  file uploads at once, with files no greater than 200MB each (is that reasonable?).§
        4. Allow the admin to select the order in which the files are played one after another in the loop (first upload is the first one played, second is the next, and so on)§
2. Generate a JSON config based on what is input that can be
    1. read/parsed by the Pis. This will likely be just
    2. filenames, delay, and URLs to the files themselves. This
    3. config will be available via REST for the HTTP GET the Pis will issue looking for a config.
3. Use TCP port 443 or 80
4. Use RESTful protocol and practices. E.g. Once the webapp is configured, issuing a HTTP GET for http://<tvserver>/control/config returns JSON for the configuration that was set up by the admin.o   
5. It would be excellent to add an authentication token to this so the Raspberry PIs can get to it and no one else can.
6. Use a database to store the uploads. Anything is fine.
7. Only permit downloading if the correct authentication token is presented.
8. Run on AWS and any other Amazon services you need.
9. Support multiple Raspberry Pis talking to it to
    1. obtain the same JSON config and files (so
    2. two authentication tokens).
10. If the webapp is running but nothing config’d yet, the
    1. webapp must respond to any Pi agents performing a GET with a response of some kind saying “nope, nothing yet”.
11. There will be a corresponding agent we can write in
    1. Python to run on the Raspberry Pi that can do the
        1. authentication,
        2. file downloading, and
        3. playing.

Suggestions:
1. start with the webapp/database and
2. see if you can simply make a webpage that lets you upload files and then
3. generates a JSON config you can read via URL with the HTTP GET like above.
4. Then add the authentication pieces (login & auth tokens) and then you’re almost done.
