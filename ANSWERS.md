- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components bring a lot of functionality that we normally didn’t get with the React API when using function components. Main difference is the syntax. Functional component is plain JS and uses props and return while class uses render method. 

- [ ] Name three lifecycle methods and their purposes.

    1. render(): renders JSX to the DOM. It is required for class components, component won't work without it. Needs to be a pure function--it should return the same thing each time you call it. Called in the Mounting Phase of the component lifecycle and during the Updating Phase. 
    2. componentDidMount: it's a part of the mounting phase in React Lifecycle. Inside of it we can call setState which forces a re-render of the component so any asynchronous actions should be done here, like fetching. Only called once.
    3. componentWillUnmount: Cleaning up anyhing related to your component. ie. cancel outgoing network requests or remove event listeners.

- [ ] What is the purpose of a custom hook?

The purpose of a custom hook is so we can reuse the same hook, reusabilty. They keep our code DRY, which makes it easy to read and use. Custom hooks let us skip writing out all of the stateful logic for our non-visual behavior.  It's reusable because we can import it anywhere in your app and build out stateful logic in other components.

- [ ] Why is it important to test our apps?

It's important to test our apps so we can find bugs faster, reduce risk of regressions, so we can trust our code, have a safety net when making changes or refactoring, and save time in the long run. 
