import { IAction } from "../types";

const initial = {
    get state() {
        return {};
    }
};

export default function user (state = initial.state, action: IAction<any>) {
    switch (action.type) {
        default:
            return state;
    }
};
