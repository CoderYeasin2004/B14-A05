1 :-Web Link :- b14-a05-dev.netlify.app

2 :-description (“My project is a Dev Stack technology management website. Its main features are responsive design, dynamic technology cards, adding and removing technologies from a personal stack, duplicate prevention, Remove All functionality, localStorage data persistence, and toast notifications. It also has a responsive navbar and footer.”)

3:-“Technologies i used for this assignent/Project: React, TypeScript/JavaScript(ES6+), Tailwind CSS, DaisyUI React Toastify, JSON(For Technology data) and Vite. I also used browser localStorage for data persistence and Git/GitHub for version control.” 

4:- 1:- Responsive Design
Works on desktop, tablet, and mobile.
Responsive navbar, technology cards, and footer.
2:-Technology Cards:-
Displays different technologies with:
Technology icon
Name
Description
Category
Difficulty level
Rating
Badge
3:-Add to Stack:-
Users can add a technology to their personal stack.
The button changes to “Added to Stack” after selection.

i.What is JSX, and why is it used in React?.(JSX is a syntax that lets us write HTML-like code inside JavaScript, and React uses it to create UI components easily.)

ii.What is the difference between props and state?.(Props are data passed from a parent component, while state is data managed and changed within a component.)

iii.What does the useState hook do, and where did you use it in this project?.(useState is used to create and manage changing data (state) in a React component, and in this project I used it to manage UI data such as selected/updated values.)

iv.What does the useEffect hook do, and why did you need it to load the JSON data?.(useEffect runs code after the component loads or updates, and I used it to fetch and load the JSON data when the project starts.)

v.Why does every item in a .map() list need a unique key prop?.(Because the key helps React uniquely identify each item, so it can efficiently track and update list items.)

vi.What is conditional rendering? Show one place you used it (example: the empty stack message).(Conditional rendering means showing different UI based on a condition; for example, I used it to show an “Empty Stack” message when the stack has no items.)

vii.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?.(Parent - Child: Pass data using props; Child - Parent: Use a callback function passed through props.)