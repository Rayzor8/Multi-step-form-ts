# Multi-step-form-ts

mini project multi step form

## Using Tech stack :

1. React
2. Typescript
3. TailwindCSS
4. Vite

## Running App :

1. npm install
2. npm run dev

### What problems occur when making this application

1. If Clicking button next, form valdation not working :

   - How to Solve :
   - Change button type "button" with type "submit"
   - remove next() function on button onClick Event
   - move the next() function to the onSubmit event so that the form can validate the input form

2. Use Partial to allow typescript to use only the required number of input data form types.
