Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Laila-Abu-Safiya 
typescript-exercises
/
typescript-exercises
Public
Code
Issues
Pull requests
10
Actions
Projects
Wiki
Security
Insights
typescript-exercises/src/exercises/2/index.ts /

[aviv polak] url Validity
…
Latest commit 17b9ea1 on Dec 6, 2021
 History
 1 contributor
65 lines (52 sloc)  1.29 KB
   
/*
Intro:
    All 2 users liked the idea of the community. We should go
    forward and introduce some order. We are in Germany after all.
    Let's add a couple of admins.
    Initially we only had users in the in-memory database. After
    introducing Admins, we need to fix the types so that
    everything works well together.
Exercise:
    Type "Person" is missing, please define it and use
    it in persons array and logPerson function in order to fix
    all the TS errors.
*/

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = unknown;

export const persons: User[] /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
