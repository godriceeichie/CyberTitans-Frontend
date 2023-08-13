import { atom } from "recoil";

const maxPriceAtom = () => {
    atom({
        key: 'maxPrice',
        default: null
    })
}
export default maxPriceAtom