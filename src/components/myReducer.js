import { useState } from "react";

export function MyReducer(reducer, data) {
    const [state, setState] = useState(data);

    return [state, function(action) {
        setState(reducer(state, action));
    }]
}