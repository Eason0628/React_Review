import { useSelector, useDispatch } from "react-redux";
import { handleSex } from "../redux/commentCreateSelectorSlice.js"
import axios from "axios";
function StoreTestD () {
    const gender = useSelector((state) => {
        return state.commentCreateSelectorSlice.gender;
    });

    const sex = useSelector(handleSex);
    console.log(gender)
    return (
        <>
            <p> gender: {gender} </p>
            <p> sex: {sex} </p>
        </>
    );
}
export default StoreTestD;
