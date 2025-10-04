import React from 'react'

export default function Blogs(){
  return (
    <div className="container">
      <h2>React Development Insights</h2>
      
      <div style={{display:'grid', gap:24, marginTop:24}}>
        
        <div className="card">
          <h3>1. What is `useState` and how does it work in React?</h3>
          <p>
            `useState` is a **React Hook** that lets you add state variables to functional components. It is the fundamental way to store data that changes over time and affects the component's rendering.
          </p>
          <p>
            **How it works:** It returns an array with exactly two values:
            <ol>
              <li>The **current state value** (e.g., `count`).</li>
              <li>A **state setter function** (e.g., `setCount`) which you use to update the state. Calling the setter function will queue a re-render of the component with the new state value.</li>
            </ol>
            Example: `const [count, setCount] = useState(0);`
          </p>
        </div>

        <div className="card">
          <h3>2. What is the purpose of `useEffect` in React?</h3>
          <p>
            `useEffect` is a React Hook that lets you **synchronize a component with an external system** (often referred to as **side effects**). Side effects are any interaction with the world outside of React, such as:
            <ul>
              <li>**Data Fetching:** Getting data from an API.</li>
              <li>**Subscriptions:** Setting up event listeners or connecting to a WebSocket.</li>
              <li>**Manual DOM Manipulation:** Changing the document title or directly modifying DOM nodes.</li>
            </ul>
            The hook takes two arguments: a function containing the side effect, and an **optional dependency array**. If the dependency array is empty (`[]`), the effect runs only once after the initial render (like `componentDidMount`).
          </p>
        </div>

        <div className="card">
          <h3>3. What is a custom hook in React and when should you use one?</h3>
          <p>
            A **custom hook** is a JavaScript function whose name starts with **`use`** (e.g., `useLocalStorage`, `useFetch`). It allows you to **extract and reuse stateful logic** from a component. They are built using the existing React Hooks (`useState`, `useEffect`, etc.).
          </p>
          <p>
            **When to use one:** You should use a custom hook when you have **complex, non-visual logic** that needs to be shared across multiple components without duplication. For example, the logic to **read and write to `localStorage`** (as used in this project) is an excellent candidate for a custom hook (`useLocalStorage`).
          </p>
        </div>
        
        <div className="card">
          <h3>4. Difference between controlled and uncontrolled components? Which one is better?</h3>
          <p>
            **Controlled Component:** A form input element whose value is **controlled by React state**. The data is handled by a function (`onChange`) that updates the state, making the component the "single source of truth."
          </p>
          <p>
            **Uncontrolled Component:** A form input element whose value is **managed by the DOM itself**. You use a `ref` to read its value when needed (e.g., on form submission).
          </p>
          <p>
            **Which one is better?** **Controlled components** are generally considered **better** in modern React development. They make forms more predictable, easier to validate in real-time, and simpler to reset or manipulate programmatically.
          </p>
        </div>
        
        <div className="card">
          <h3>5. Tell us something about `useFormStatus()` (explore and explain)</h3>
          <p>
            `useFormStatus()` is a relatively new hook introduced for use with **React Server Components (RSC)** and **Server Actions**. It provides status information about the last form submission, which is crucial for building responsive and accessible forms that work with server-side data mutations.
          </p>
          <p>
            **Key properties it returns:**
            <ul>
              <li>**`pending`:** A boolean that is `true` when the parent form is actively submitting.</li>
              <li>**`data`:** The data payload the form is submitting.</li>
              <li>**`method`:** The HTTP method used for the submission (e.g., `GET`, `POST`).</li>
            </ul>
            **Purpose:** It allows developers to easily disable the submit button or show a loading indicator *inside* the form component **without passing props down**, ensuring users don't submit the form multiple times during a network request.
          </p>
        </div>
        
      </div>
    </div>
  )
}