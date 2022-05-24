# TypeScript with React

TypeScript is a superset of the JavaScript language that has a single open-source compiler and is developed mainly by a single vendor: Microsoft. The goal of TypeScript is to help catch mistakes early through a type system and to make JavaScript development more efficient.

_"Would you rather have "silly" errors during development, or insanity-inducing errors in production?"_ - ConfuciusBateman

### Resources

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Mastering React Hooks with Typescript](https://www.youtube.com/watch?v=zM_ZiSl2n2E): Jack Herrington

### Tutorials

- [TypeScript Course In ReactJS](https://www.youtube.com/watch?v=1jMJDbq7ZX4&t=379s): Pedro Tech

### Table of Contents

- [Components](#Components)
- [States](#States)

## Components

Let's look at a couple examples of how we can use TypeScript with Functional Components:

```tsx
// User.tsx

// define our User props interface
interface UserInterface {
  name: string;
  age: number;
  email: string;
}

const User = ({ name, age, email }: UserInterface) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{email}</h2>
    </div>
  );
};
```

Another way we can add Functional Components is through the `FC` definition:

```tsx
// User.tsx

// import FC class from react
import { FC } from 'react';

interface UserInterface {
  name: string;
  age: number;
  email: string;
}

// define User as a functional component and pass the interface into the carrots
const User: FC<UserInterface> = ({ name, age, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{email}</h2>
    </div>
  );
};
```

## States

Let's look at a very simple way of how we can add types to states in React:

```tsx
// string
const [name, setName] = useState<string | null>('');

// array
const [users, setUsers] = useState<[] | null>([]);
```

## Event Types

Let's look at an example of adding types to events:

```tsx
// User.tsx

// import ChangeEvent type
import { useState, ChangeEvent } from 'react';

const User = () => {
  const [name, setName] = useState<string | null>('');

  // pass in ChangeEvent type to the event object
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <label>{name}</label>
      <input placeholder="Type your name..." onChange={handleChange} />
    </div>
  );
};
```

## Enums

An enum is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors:

- Numeric
- String

The difference between an _enum_ and an _interface_ is, with interfaces we are generally defining some sort of object and with enums we are basically defining a set of different options.

Let's look at an example below:

```tsx
// Hero.tsx

import { FC } from 'react';

// export enum for use in App.tsx
export enum WeaponType {
  Thor = 'Hammer',
  IronMan = 'Suit',
  Hulk = 'Fists',
}

// define our interface props
interface HeroInterface {
  name: string;
  age: number;
  weaponType: WeaponType;
}

const Hero: FC<HeroInterface> = ({ name, age, weaponType }) => {
  return (
    <div>
      <h2>Hero:</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Weapon: {weaponType}</p>
    </div>
  );
};

export default Hero;
```

Now over in `App.tsx` we can import our `WeaponType` enum:

```tsx
// App.tsx

import Hero, { WeaponType } from './components/Hero';

const App = () => {
  return (
    <div className="App">
      <Hero name="Thor" age={2000} weaponType={WeaponType.Thor} />
      <Hero name="Iron Man" age={46} weaponType={WeaponType.IronMan} />
      <Hero name="Hulk" age={58} weaponType={WeaponType.Hulk} />
    </div>
  );
};

export default App;
```

We can use enums to replace conditional (boolean) type logic.

## Types

Let's look at an example of how we can use `types`:

```tsx
// Hero.tsx

import { FC } from 'react';

interface HeroInterface {
  name: string;
  age: number;
}

const Hero: FC<HeroInterface> = ({ name, age }) => {
  // define the type
  type StreamingType = 'Disney Plus' | 'Peacock' | 'Hulu';
  // set the type to a var
  const stream: StreamingType = 'Disney Plus';

  return (
    <div>
      <h2>Hero:</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Where to stream: {stream}</p>
    </div>
  );
};
```

## Types with The Context API

- [CodeSandbox Example](https://codesandbox.io/s/ts-context-api-4k3de3)

Let's look at an example of using types with the built in Context API:

```tsx
// App.tsx

import { HeroProvider } from './context/HeroContext';
import Hero from './components/Hero';

const App = () => {
  return (
    <HeroProvider>
      <div className="App">
        <Hero />
      </div>
    </HeroProvider>
  );
};

export default App;
```

```tsx
// HeroContext.tsx

import { createContext } from 'react';

// create interface for context value
interface HeroContextInterface {
  name: string;
  age: number;
  isMortal: boolean;
}

// pass the interface into createContext
const HeroContext = createContext<HeroContextInterface | null>(null);

const HeroProvider = (props: { children: React.ReactNode }) => {
  // define the context value
  const contextValue = {
    name: 'Thor',
    age: 2000,
    isMortal: false,
  };

  return (
    <HeroContext.Provider value={contextValue}>
      {props.children}
    </HeroContext.Provider>
  );
};

export { HeroProvider, HeroContext };
```

```tsx
// Hero.tsx

import { useContext } from 'react';
import { HeroContext } from '../context/HeroContext';

const Hero = () => {
  const { name, age } = useContext(HeroContext);

  return (
    <div>
      <h2>Hero:</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Hero;
```
