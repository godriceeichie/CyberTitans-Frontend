import { atom } from "recoil";

const cartAtom = atom(
    {
        key: 'cartItems', 
        default: []
    }
)
export default cartAtom