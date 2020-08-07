import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ProfileStatus from './ProfileStatus';
import { create, act } from "react-test-renderer";



describe("Profile status", () => {
    test("displaying input after doubleClicked on span", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus authUserId='1' profile={{ userId: '1' }} status='GT40' />);
        });
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span.props.children).toBe('GT40')
        act(() => span.props.onDoubleClick());
        const input = instance.findByType("input");
        expect(input.props.value).toBe("GT40");
    });
    test("update status", async () => {
        let component;
        act(() => {
            component = create(<ProfileStatus authUserId='1' profile={{ userId: '1' }} status='GT40' />);
        });
        const instance = component.root;
        const span = instance.findByType("span");
        act(() => span.props.onDoubleClick());
        const input = instance.findByType("input");
        act(() => input.props.onChange({target:{value:'hello'}}));
        expect(input.props.value).toBe('hello');
    });
});






// let container;

// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   document.body.removeChild(container);
//   container = null;
// });


// describe("Button component", () => {
//     test("it shows the expected text when clicked", () => {
//       act(() => {
//         ReactDOM.render(<ProfileStatus status='GT40' />, container);
//       });
//       const span = container.getElementsByTagName("span")[0];
//       expect(span.textContent).toBe('GT40');
//       act(() => {
//         span.dispatchEvent(new MouseEvent("doubleClick", { bubbles: true }));
//       });
//       const input = container.getElementsByTagName("input")[0];
//       expect(input.target.value).toBe("GT40");
//     });
//   });