import sidebarRandomUserReducer, { setRandomUserAccess } from "./sidebar-randomUser-reducer";

let state = {
    randomUsers: []
}

it('array should be incrementing', () => {
    let action = setRandomUserAccess({ user: 1 });
    let newState = sidebarRandomUserReducer(state, action);
    expect(newState.randomUsers.length).toBe(1);
})

it('all identifiers should be unique, so array length === 2', () => {
    let action = setRandomUserAccess([{ userId: 1 }, { userId: 2 }, { userId: 1 }, { userId: 1 }, { userId: 1 }]);
    let newState = sidebarRandomUserReducer(state, action);
    expect(newState.randomUsers.length).toBe(2);
})

