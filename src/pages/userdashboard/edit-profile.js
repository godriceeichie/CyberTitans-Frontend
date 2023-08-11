import { React } from 'react';
import "../../styles/settings.css"
const EditProfile=()=>{
    return(
        <>
             <div className="profile-view">
                                <p id="prf-vw-hd">Edit Profile</p>
                                <div className="prf-img">
                                    <img src="/assets/42iMS0.jpg" alt="" />
                                </div>
                                <form className="prf-form">
                                <div class="dbl-inp">
											<div class="dbl-hld">
												<label for="FirstName">FirstName: </label>
												<input type="text"/>
											</div>
											<div class="dbl-hld">
												<label for="LastName">LastName: </label>
												<input type="text"/>
											</div>
										</div>
										<label for="Email">Email: </label>
										<input type="text" id="em"/>
										<label for="Phone">Phone Number: </label>
										<input type="text" id="pn"/>
										<input type="submit" value="Save" id="inp-sub"/>
                                </form>
                            </div>
        </>
    )
}

export default EditProfile