import { atom } from "recoil";

const filterAtom = atom(
    {
        key: 'filter', 
        default: ''
    }
)
export default filterAtom