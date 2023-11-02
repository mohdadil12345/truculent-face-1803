import React from 'react'


let preference = [
    {
        preference: "Meat & Veggies",
        image: "../assets/svg-export/meatsvg.svg"
    },
    {
        preference: "Veggie",
        image: "../assets/svg-export/svgexport-7.svg"
    },
    {
        preference: "Family & Friendly",
        image: "../assets/svg-export/svgexport-8.svg"
    },
    {
        preference: "Fit & Wholesome",
        image: "../assets/svg-export/svgexport-9.svg"
    },
    {
        preference: "Quick & Easy",
        image: "../assets/svg-export/svgexport-10.svg"
    },
    {
        preference: "Pescatarian",
        image: "../assets/svg-export/svgexport-11.svg"
    },
]
const Plan = () => {
    const [item, setItem] = React.useState(preference)


    // console.log(item);


    return (
        <div>
            <div className="main-container">

                <div className='item-container'>
                    <div className='heading'><h1>Personalize your plan</h1></div>

                    <div className='left-content'>
                        <div className='top-content'>
                            <p id='choose-preference'>1. Choose your preferences</p>
                            <p id='preference-heading'>Your preferences help us show you the most relevant recipes first. You'll still have access to all recipes each week!
                                <span style={{ color: 'red' }} id='select-preference'>Please select at least 1 option.</span>
                            </p>
                        </div>
                        <img style={{ color: 'red' }} src="../assets/svg-export/meatsvg.svg" alt="" />

                        <div className='select-preference-container'>
                            {
                                item.map((item) => {
                                    console.log(item.image);
                                    return (
                                        <div>

                                            <button className='select-preference'>
                                                <img src={item.image} style={{ color: 'red' }} alt="" />
                                                <p>{item.preference}</p>
                                            </button>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className='right-content'></div>
                </div>



            </div>

        </div>
    )
}

export default Plan