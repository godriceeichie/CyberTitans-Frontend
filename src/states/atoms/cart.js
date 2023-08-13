import { atom } from "recoil";

const cartAtom = atom(
    {
        key: 'cartData', 
        default: []
    }
)
export default cartAtom