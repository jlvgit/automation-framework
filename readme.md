# Running tests

In order for tests to run an [appium](http://appium.io/) server must be running. And an emulator must running for the appium server to connect to.

To run all tests use `npm run test`

To run a specific test use `npm run test -- --tags @tag` replacing `@tag` with the tag of the test you would like to run

# Repl

To open a repl session use `npm run repl`

Once the repl is open you can use the automatically create `driver` variable to interact with an emulator through the command line.

For example to click a "Login" button using the repl you first find the element (note that the await is needed to get the correct element):
`button = await driver.findElementById('login_button')`

Then you can call any actions on the element as outined in the Appium documentation. To click you would do this:
`button.click()`

# Repl Troubleshooting

-   If you get an `Uncaught SyntaxError: await is only valid in async function`:
    **Solution:** This is because repl-awaiting is not enabled. Older versions of node do not have the repl-await option enabled by default. Make sure that the supported node version in the `.nvmrc` file is in use (run `nvm use` to set the system to the correct node version). If nvm is not being used, and the version of node does not have repl-await enabled by default, you can enable the option manually by creating an environment variable with: `export NODE_OPTIONS=--experimental-repl-await`
