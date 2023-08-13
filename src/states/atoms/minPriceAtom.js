import { atom } from "recoil";

const minPriceAtom = () => {
    atom({
        key: 'minPrice',
        default: null
    })
}
export default minPriceAtom