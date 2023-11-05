import React from 'react'
import meat from "../assets/svg-export/meatsvg.svg"
import veggie from "../assets/svg-export/svgexport-7.svg"
import family from "../assets/svg-export/svgexport-8.svg"
import fit from "../assets/svg-export/svgexport-9.svg"
import quick from "../assets/svg-export/svgexport-10.svg"
import pescatarian from "../assets/svg-export/svgexport-11.svg"
import "../plan.css"

const preference = [
    {
        preference: "Meat & Veggies",
        image: meat,

    },
    {
        preference: "Veggie",
        image: veggie
    },
    {
        preference: "Family & Friendly",
        image: family
    },
    {
        preference: "Fit & Wholesome",
        image: fit
    },
    {
        preference: "Quick & Easy",
        image: quick
    },
    {
        preference: "Pescatarian",
        image: pescatarian
    },
]



const Plan = () => {
    const [items, setItem] = React.useState(preference)
    const [selected, setSelected] = React.useState([])
    const [no_of_people, setNoOfPeople] = React.useState(2)
    const [mealsperweek, setMealPerWeek] = React.useState(2)



    const togglePreference = (preference) => {
        if (selected.includes(preference)) {
            setSelected(selected.filter(item => item !== preference))
        } else {
            setSelected([...selected, preference])
        }

    }





    return (

        <div className="main-container">

            <div className='item-container'>
                <div className='heading'><h1>Personalize your plan</h1></div>

                <div className='left-right-content'>


                    <section className='left-content'>
                        <div className='top-content'>
                            <p id='choose-preference-heading' className='heading'>1. Choose your preferences</p>
                            <p id='preference-para'>Your preferences help us show you the most relevant recipes first. You'll still have access to all recipes each week!
                                <div style={{ color: 'red' }} id='select-preference'>Please select at least 1 option.</div>
                            </p>
                        </div>

                        <div className='select-preference-container'>
                            {
                                items.map((item, index) => {

                                    return (
                                        <div key={index + 1} className='select-preference-btns'>
                                            <button
                                                style={{
                                                    color: selected.includes(item.preference) ? 'red' : 'grey',
                                                    "backgroundColor": selected.includes(item.preference) ? '#E1F5FE' : 'transparent',
                                                }}
                                                className={` select-preference ${selected.includes(item.preference) ? 'selected' : ''}`}
                                                onClick={() => { togglePreference(item.preference) }}>
                                                <img
                                                    src={item.image} alt="logo" />

                                                <p >{item.preference}</p>
                                            </button>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </section>
                    <div class="vl"></div>
                    <section className='right-content'>
                        <div className='heading-div'><h1 className='heading'>2. Customize your plan size</h1></div>

                        <div className='customize-container'>
                            <div className='customize-people custDiv'>
                                <span>Number of people</span>
                                <div className='people-btns'>

                                    <button className={no_of_people === 2 ? 'selected' : 'not-selected'}
                                        style={{
                                            backgroundColor: no_of_people === 2 ? 'green' : '',
                                        }}
                                        onClick={() => { setNoOfPeople(2) }}>2</button>
                                    <button
                                        style={{
                                            backgroundColor: no_of_people === 4 ? 'green' : '',
                                        }}
                                        className={no_of_people === 4 ? 'selected' : 'not-selected'} onClick={() => { setNoOfPeople(4) }}>4</button>
                                </div>
                            </div>
                            <div className='meals-per-week custDiv'>
                                <span>Meals per week</span>
                                <div className='btns'>
                                    <button className='meals-per-week'
                                        style={{
                                            backgroundColor: mealsperweek === 2 ? 'green' : '',
                                        }}
                                        onClick={() => { setMealPerWeek(2) }}>2</button>
                                    <button className='meals-per-week'
                                        style={{
                                            backgroundColor: mealsperweek === 3 ? 'green' : '',
                                        }}
                                        onClick={() => { setMealPerWeek(3) }}>3</button>
                                    <button className='meals-per-week'
                                        style={{
                                            backgroundColor: mealsperweek === 4 ? 'green' : '',
                                        }}
                                        onClick={() => { setMealPerWeek(4) }}>4</button>
                                    <button className='meals-per-week'
                                        style={{
                                            backgroundColor: mealsperweek === 5 ? 'green' : '',
                                        }}
                                        onClick={() => { setMealPerWeek(5) }}>5</button>
                                    <button className='meals-per-week'
                                        style={{
                                            backgroundColor: mealsperweek === 6 ? 'green' : '',
                                        }}
                                        onClick={() => { setMealPerWeek(6) }}>6</button>
                                </div>
                            </div>
                        </div>

                        <div className='total'>


                            <span className={` both ${selected.length > 0 ? 'preference-selected' : 'preference-not-selected'}`}>
                                {
                                    selected.length > 0 ? selected.map((item, index) => {
                                        return (
                                            <span key={index + 1}>{item}</span>
                                        )
                                    }) : <p>Choose your plan</p>
                                }

                                <div className='description'>
                                    <p>{mealsperweek} meals for {no_of_people} people per week</p>
                                    <p>{mealsperweek * no_of_people} total servings</p>
                                    <hr />
                                    <div className='total summary'>
                                        <p>Box price <span>${mealsperweek * no_of_people * 20}</span></p>
                                        <p>Price per serving <span>${mealsperweek * no_of_people * 2}</span> </p>
                                        <p>Total Box <span>${mealsperweek * no_of_people * 20 + mealsperweek * no_of_people * 2}</span> </p>

                                    </div>
                                </div>

                            </span>
                        </div>

                    </section>
                </div>

            </div>


        </div>


    )
}

export default Plan