import './introduction.style.css'

const Intro = ({handleChange}) => {
    return (
        <div className="intro">
            <fieldset>
                <legend>Personal Details</legend>
            <label htmlFor="fname">First name:  
            <input type="text" name="fname" id="fname" placeholder="First name" onChange={handleChange}/>
            </label>
            <label htmlFor="sname">Last name:  
            <input type="text" name="sname" id="sname" placeholder="Second name" onChange={handleChange}/>
            </label>
            <label htmlFor="phone">Phone:  
            <input type="number" name="phone" id="phone" placeholder="Phone No." onChange={handleChange}/>
            </label>
            <label htmlFor="email">Email:  
            <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange}/>
            </label>
            <label htmlFor="linkedin">LinkedIn:  
            <input type="text" name="linkedin" id="linkedin"  onChange={handleChange}/>
            </label>
            <label htmlFor="github">Github:  
            <input type="text" name="github" id="github"  onChange={handleChange}/>
            </label></fieldset>
        </div>
    )
}

export default Intro