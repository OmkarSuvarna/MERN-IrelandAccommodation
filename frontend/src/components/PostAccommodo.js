import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';


const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState(null);

    return (
        <div className="big-datepicker">
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Select a date"
            />
        </div>
    );
};

const PostAccommodo = () => {
    // const [billsIncluded, setBillsIncluded] = useState(null);
    const [roomSharing, setroomSharing] = useState(null);

    const [additionalFieldsVisible, setAdditionalFieldsVisible] = useState(false);

    const [formFields, setFormFields] = useState({
        streetName: '',
        county: 'Dublin',
        eircode: '',
        rent: null,
        deposit: null,
        fromDate: null,
        toDate: null,
        accommodationType: '',
        lookingFor: '',
        livingRoomShared: null,
        kitchenShared: null,
        bedroomCount: 0,
        bathCount: 0,
        sutiableFor: '',
        durationType: '',
        furnished: null,
        billsIncluded: null,
        additionalBills: [],
        roomSharing: false,
        contactNumber: '',
        email: '',
        description: '',
        colleges: [],
        store: [],
        fastFood: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    const handleBooleanChange = (e) => {
        const { name, value } = e.target;
        setFormFields({
            ...formFields,
            [name]: value === 'true',
        });
    };

    const handleCollegeCheckbox = (e) => {
        const { value, checked } = e.target;
        setFormFields(prevState => {
            if (checked) {
                return {
                    ...prevState,
                    colleges: [...prevState.colleges, value]
                };
            }
            else {
                return {
                    ...prevState,
                    colleges: prevState.colleges.filter(college => college !== value)
                };
            }
        });
    };

    const handleStoreCheckbox = (e) => {
        const { value, checked } = e.target;
        setFormFields(prevState => {
            if (checked) {
                return {
                    ...prevState,
                    store: [...prevState.store, value]
                };
            }
            else {
                return {
                    ...prevState,
                    store: prevState.store.filter(item => item !== value)
                };
            }
        });
    };

    const handleFastFoodCheckbox = (e) => {
        const { value, checked } = e.target;
        setFormFields(prevState => {
            if (checked) {
                return {
                    ...prevState,
                    fastFood: [...prevState.fastFood, value]
                };
            }
            else {
                return {
                    ...prevState,
                    fastFood: prevState.fastFood.filter(item => item !== value)
                };
            }
        });
    };

    const setBillsIncluded = (value) => {
        setFormFields({
            ...formFields,
            billsIncluded: value
        });

        setAdditionalFieldsVisible(value === 'No');
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formattedData = {
            ...formFields,
            fromDate: formFields.fromDate ? formFields.fromDate.toISOString().split('T')[0] : null,
            toDate: formFields.toDate ? formFields.toDate.toISOString().split('T')[0] : null,
        };

        try {
            const response = await fetch('http://localhost:5000/api/accommodations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section className="contact">
            <form onSubmit={handleSubmit}>
                <div className="page-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-title">Post an Accommodation</h1>
                                {/* <h2 className="page-description">Contact</h2> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-content2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row mt-5">
                                    <legend>
                                        <h3>Address</h3>
                                    </legend>
                                    <div className="col-lg-4">
                                        <label>Street Name *</label>
                                        <input type="text"
                                            name="streetName"
                                            className="inp-contact"
                                            value={formFields.streetName}
                                            onChange={handleInputChange}
                                            required />
                                    </div>
                                    <div className="col-lg-4">
                                        <label>County</label>
                                        <select className="form-select"
                                            name="county"
                                            id="county"
                                            value={formFields.county}
                                            onChange={handleInputChange}>
                                            <option selected="Dublin">Dublin</option>
                                            <option value="Carlow">Carlow</option>
                                            <option value="Cavan">Cavan</option>
                                            <option value="Clare">Clare</option>
                                            <option value="Cork">Cork</option>
                                            <option value="Donegal">Donegal</option>
                                            <option value="Galway">Galway</option>
                                            <option value="Kerry">Kerry</option>
                                            <option value="Kildare">Kildare</option>
                                            <option value="Kilkenny">Kilkenny</option>
                                            <option value="Laois">Laois</option>
                                            <option value="Leitrim">Leitrim</option>
                                            <option value="Limerick">Limerick</option>
                                            <option value="Longford">Longford</option>
                                            <option value="Louth">Louth</option>
                                            <option value="Mayo">Mayo</option>
                                            <option value="Meath">Meath</option>
                                            <option value="Monaghan">Monaghan</option>
                                            <option value="Offaly">Offaly</option>
                                            <option value="Roscommon">Roscommon</option>
                                            <option value="Sligo">Sligo</option>
                                            <option value="Tipperary">Tipperary</option>
                                            <option value="Waterford">Waterford</option>
                                            <option value="Westmeath">Westmeath</option>
                                            <option value="Wexford">Wexford</option>
                                            <option value="Wicklow">Wicklow</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Eir Code</label>
                                        <input type="text"
                                            name="eircode"
                                            className="inp-contact"
                                            value={formFields.eircode}
                                            onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row mt-5">
                                    <legend>
                                        <h3>Accommodation Details</h3>
                                    </legend>
                                    <div className="col-lg-2">
                                        <label>Rent</label>
                                        <div class="currency-wrap">
                                            <span class="currency-code">€</span>
                                            <input type="number"
                                                class="text-currency"
                                                name="rent"
                                                value={formFields.rent}
                                                onChange={handleInputChange}
                                                required />
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <label>Deposit</label>
                                        <div class="currency-wrap">
                                            <span class="currency-code">€</span>
                                            <input type="number"
                                                class="text-currency"
                                                name="deposit"
                                                value={formFields.deposit}
                                                onChange={handleInputChange}
                                                required />
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <label className="mb-2">From Date</label>
                                        <DatePickerComponent />
                                    </div>
                                    <div className="col-lg-2">
                                        <label className="mb-2">To Date</label>
                                        <DatePickerComponent />
                                    </div>

                                    <div class="mydict col-lg-4">
                                        <label className="mb-2">Accommodation Type</label>
                                        <div>
                                            <label>
                                                <input type="radio"
                                                    name="accommodationType"
                                                    value="Apartment"
                                                    checked={formFields.accommodationType === "Apartment"}
                                                    onChange={handleInputChange} />
                                                <span style={{ width: '8.5rem', display: 'inline-block' }}>Apartment</span>
                                            </label>
                                            <label>
                                                <input type="radio"
                                                    name="accommodationType"
                                                    value="House"
                                                    checked={formFields.accommodationType === "House"}
                                                    onChange={handleInputChange} />
                                                <span style={{ width: '8.5rem', display: 'inline-block' }}>House</span>
                                            </label>
                                            <label>
                                                <input type="radio"
                                                    name="accommodationType"
                                                    value="Rowhouse"
                                                    checked={formFields.accommodationType === "Rowhouse"}
                                                    onChange={handleInputChange} />
                                                <span style={{ width: '8.5rem', display: 'inline-block' }}>Rowhouse</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row mt-4 mb-1">
                                    <div class="mydict col-lg-4">
                                        <label className="mb-2">Looking For</label>
                                        <div>
                                            <label>
                                                <input type="radio"
                                                    name="lookingFor"
                                                    value="No Preference"
                                                    checked={formFields.lookingFor === "No Preference"}
                                                    onChange={handleInputChange} />
                                                <span style={{ width: '9.5rem', display: 'inline-block' }}>No Preference</span>
                                            </label>
                                            <label>
                                                <input type="radio"
                                                    name="lookingFor"
                                                    value="Females Only"
                                                    checked={formFields.lookingFor === "Females Only"}
                                                    onChange={handleInputChange} />
                                                <span style={{ width: '8.5rem', display: 'inline-block' }}>Females Only</span>
                                            </label>
                                            <label>
                                                <input type="radio"
                                                    name="lookingFor"
                                                    value="Males Only"
                                                    checked={formFields.lookingFor === "Males Only"}
                                                    onChange={handleInputChange} />
                                                <span style={{ width: '7.5rem', display: 'inline-block' }}>Males Only</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 mydict">
                                        <label className="mb-2">Living Room Shared?</label>
                                        <div>
                                            <label>
                                                <input type="radio"
                                                    name="livingRoomShared"
                                                    value="true"
                                                    checked={formFields.livingRoomShared === true}
                                                    onChange={handleBooleanChange} />
                                                <span style={{ width: '5rem', display: 'inline-block' }}>Yes</span>
                                            </label>
                                            <label>
                                                <input type="radio"
                                                    name="livingRoomShared"
                                                    value="false"
                                                    checked={formFields.livingRoomShared === false}
                                                    onChange={handleBooleanChange} />
                                                <span style={{ width: '5rem', display: 'inline-block' }}>No</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 mydict">
                                        <label className="mb-2">Kitchen Shared?</label>
                                        <div>
                                            <label>
                                                <input type="radio"
                                                    name="kitchenShared"
                                                    value="true"
                                                    checked={formFields.kitchenShared === true}
                                                    onChange={handleBooleanChange} />
                                                <span style={{ width: '5rem', display: 'inline-block' }}>Yes</span>
                                            </label>
                                            <label>
                                                <input type="radio"
                                                    name="kitchenShared"
                                                    value="false"
                                                    checked={formFields.kitchenShared === false}
                                                    onChange={handleBooleanChange} />
                                                <span style={{ width: '5rem', display: 'inline-block' }}>No</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="mb-2">Number of Rooms</label>
                                        <div className='qty-flex'>
                                            <span>Bedroom</span>
                                            <div class="qty-container">
                                                <button class="qty-btn-minus btn-light" type="button"><i class="fa fa-minus"></i></button>
                                                <input type="text" name="qty" value="0" class="input-qty" />
                                                <button class="qty-btn-plus btn-light" type="button"><i class="fa fa-plus"></i></button>
                                            </div>
                                            <span>Bath</span>
                                            <div class="qty-container">
                                                <button class="qty-btn-minus btn-light" type="button"><i class="fa fa-minus"></i></button>
                                                <input type="text" name="qty" value="0" class="input-qty" />
                                                <button class="qty-btn-plus btn-light" type="button"><i class="fa fa-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row mt-4">
                                    <div class="mydict col-lg-3">
                                        <label>Sutiable For</label>
                                        <select className="form-select"
                                            name="sutiableFor"
                                            id="sutiableFor"
                                            value={formFields.sutiableFor}
                                            onChange={handleInputChange}>
                                            <option selected="">Choose...</option>
                                            <option value="Students">Students</option>
                                            <option value="Working Professionals">Working Professionals</option>
                                            <option value="Students & Working Professionals">Students & Working Professionals</option>
                                        </select>
                                    </div>
                                    <div class="mydict col-lg-3">
                                        <label>Duration Type</label>
                                        <div>
                                            <label>
                                                <input type="radio"
                                                    name="durationType"
                                                    value="Permanent"
                                                    checked={formFields.durationType === "Permanent"}
                                                    onChange={handleInputChange} />
                                                <span style={{ padding: '0.65rem', width: '9rem', display: 'inline-block' }}>Permanent</span>
                                            </label>
                                            <label>
                                                <input type="radio"
                                                    name="durationType"
                                                    value="Temporary"
                                                    checked={formFields.durationType === "Temporary"}
                                                    onChange={handleInputChange} />
                                                <span style={{ padding: '0.65rem', width: '9rem', display: 'inline-block' }}>Temporary</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 mydict">
                                        <label className="mb-2">Room Furnished?</label>
                                        <div>
                                            <label>
                                                <input type="radio"
                                                    name="furnished"
                                                    value="true"
                                                    checked={formFields.furnished === true}
                                                    onChange={handleBooleanChange} />
                                                <span style={{ width: '5rem', display: 'inline-block' }}>Yes</span>
                                            </label>
                                            <label>
                                                <input type="radio"
                                                    name="furnished"
                                                    value="false"
                                                    checked={formFields.furnished === false}
                                                    onChange={handleBooleanChange} />
                                                <span style={{ width: '5rem', display: 'inline-block' }}>No</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 mydict">
                                        <label className="mb-2">Bills Included?</label>
                                        <div>
                                            <label>
                                                <input type="radio"
                                                    name="billsIncluded"
                                                    value="Yes"
                                                    onChange={() => setBillsIncluded('Yes')} />
                                                <span style={{ width: '5rem', display: 'inline-block' }}>Yes</span>
                                            </label>
                                            <label>
                                                <input type="radio"
                                                    name="billsIncluded"
                                                    value="No"
                                                    onChange={() => setBillsIncluded('No')} />
                                                <span style={{ width: '5rem', display: 'inline-block' }}>No</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 mydict">
                                        <label className="mb-2">Room Sharing?</label>
                                        <div>
                                            <label>
                                                <input type="radio" name="roomSharing" value="Yes" onChange={() => setroomSharing('Yes')} />
                                                <span style={{ width: '5rem', display: 'inline-block' }}>Yes</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="roomSharing" value="No" onChange={() => setroomSharing('No')} />
                                                <span style={{ width: '5rem', display: 'inline-block' }}>No</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="row mt-3">
                                    <div className="col-lg-6">
                                        <div class="form-group">
                                            <label className="mb-2" for="exampleFormControlTextarea1">Description</label>
                                            <textarea class="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows="3"
                                                name="description"
                                                value={formFields.description}
                                                onChange={handleInputChange}></textarea>
                                        </div>
                                    </div>

                                    {additionalFieldsVisible && (
                                        <div className="col-lg-4">
                                            <div className="row" style={{ paddingLeft: '20px' }}>
                                                <label className="mb-2">Additional Bills</label>
                                                <div class="col form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Electricity
                                                    </label>
                                                </div>
                                                <div class="col form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Heating
                                                    </label>
                                                </div>
                                                <div class="col form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Wifi
                                                    </label>
                                                </div>
                                            </div>
                                        </div>)}
                                    {roomSharing === 'Yes' && (
                                        <div className="col-lg-2">
                                            <label>Rent</label>
                                            <input type="number" className="inp-contact" />
                                        </div>)}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row mt-5">
                                    <legend>
                                        <h3>Near By</h3>
                                    </legend>

                                    <div className="col-lg-1-5">
                                        <span className='nearbyLabel'>Colleges: </span>
                                    </div>
                                    <div className="col-lg-10 nearbyCheckbox">
                                        <div className="row">
                                            <div class="col form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="dublinBusinessSchool"
                                                    name="dublinBusinessSchool"
                                                    value="Dublin Business School"
                                                    onChange={handleCollegeCheckbox} />
                                                <label className="form-check-label" htmlFor="dublinBusinessSchool">
                                                    Dublin Business School
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="nationalCollegeOfIreland"
                                                    name="nationalCollegeOfIreland"
                                                    value="National College of Ireland"
                                                    onChange={handleCollegeCheckbox} />
                                                <label className="form-check-label" htmlFor="nationalCollegeOfIreland">
                                                    National College of Ireland
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="technologicalUniversityDublin"
                                                    name="technologicalUniversityDublin"
                                                    value="Technological University Dublin"
                                                    onChange={handleCollegeCheckbox} />
                                                <label className="form-check-label" htmlFor="technologicalUniversityDublin">
                                                    Technological University Dublin
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="trinityCollegeDublin"
                                                    name="trinityCollegeDublin"
                                                    value="Trinity College Dublin"
                                                    onChange={handleCollegeCheckbox} />
                                                <label className="form-check-label" htmlFor="trinityCollegeDublin">
                                                    Trinity College Dublin
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="dublinCityUniversity"
                                                    name="dublinCityUniversity"
                                                    value="Dublin City University"
                                                    onChange={handleCollegeCheckbox} />
                                                <label className="form-check-label" htmlFor="dublinCityUniversity">
                                                    Dublin City University
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="griffithCollege"
                                                    name="griffithCollege"
                                                    value="Griffith College"
                                                    onChange={handleCollegeCheckbox} />
                                                <label className="form-check-label" htmlFor="griffithCollege">
                                                    Griffith College
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row mt-3">

                                    <div className="col-lg-1-5">
                                        <span className='nearbyLabel'>Stores: </span>
                                    </div>
                                    <div className="col-lg-10 nearbyCheckbox">
                                        <div className="row">
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="lidl"
                                                    name="lidl"
                                                    value="LIDL"
                                                    onChange={handleStoreCheckbox} />
                                                <label className="form-check-label" htmlFor="lidl">
                                                    LIDL
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="aldi"
                                                    name="aldi"
                                                    value="Aldi"
                                                    onChange={handleStoreCheckbox} />
                                                <label className="form-check-label" htmlFor="aldi">
                                                    Aldi
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="tesco"
                                                    name="tesco"
                                                    value="Tesco"
                                                    onChange={handleStoreCheckbox} />
                                                <label className="form-check-label" htmlFor="tesco">
                                                    Tesco
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="centra"
                                                    name="centra"
                                                    value="Centra"
                                                    onChange={handleStoreCheckbox} />
                                                <label className="form-check-label" htmlFor="centra">
                                                    Centra
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="spar"
                                                    name="spar"
                                                    value="Spar"
                                                    onChange={handleStoreCheckbox} />
                                                <label className="form-check-label" htmlFor="spar">
                                                    Spar
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="dunnes"
                                                    name="dunnes"
                                                    value="Dunnes"
                                                    onChange={handleStoreCheckbox} />
                                                <label className="form-check-label" htmlFor="dunnes">
                                                    Dunnes
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="pennies"
                                                    name="pennies"
                                                    value="Pennies"
                                                    onChange={handleStoreCheckbox} />
                                                <label className="form-check-label" htmlFor="pennies">
                                                    Pennies
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="dayBreak"
                                                    name="dayBreak"
                                                    value="DayBreak"
                                                    onChange={handleStoreCheckbox} />
                                                <label className="form-check-label" htmlFor="dayBreak">
                                                    DayBreak
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row mt-3">
                                    <div className="col-lg-1-5">
                                        <span className='nearbyLabel'>Fast-Food: </span>
                                    </div>
                                    <div className="col-lg-10 nearbyCheckbox">
                                        <div className="row">
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="mcDonalds"
                                                    name="mcDonalds"
                                                    value="McDonalds"
                                                    onChange={handleFastFoodCheckbox} />
                                                <label className="form-check-label" htmlFor="mcDonalds">
                                                    McDonalds
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="apachePizza"
                                                    name="apachePizza"
                                                    value="Apache Pizza"
                                                    onChange={handleFastFoodCheckbox} />
                                                <label className="form-check-label" htmlFor="apachePizza">
                                                    Apache Pizza
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="burgerKing"
                                                    name="burgerKing"
                                                    value="Burger King"
                                                    onChange={handleFastFoodCheckbox} />
                                                <label className="form-check-label" htmlFor="burgerKing">
                                                    Burger King
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="fiveGuys"
                                                    name="fiveGuys"
                                                    value="Five Guys"
                                                    onChange={handleFastFoodCheckbox} />
                                                <label className="form-check-label" htmlFor="fiveGuys">
                                                    Five Guys
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="kfc"
                                                    name="kfc"
                                                    value="KFC"
                                                    onChange={handleFastFoodCheckbox} />
                                                <label className="form-check-label" htmlFor="kfc">
                                                    KFC
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="subway"
                                                    name="subway"
                                                    value="Subway"
                                                    onChange={handleFastFoodCheckbox} />
                                                <label className="form-check-label" htmlFor="subway">
                                                    Subway
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="supermac"
                                                    name="supermac"
                                                    value="Supermac"
                                                    onChange={handleFastFoodCheckbox} />
                                                <label className="form-check-label" htmlFor="supermac">
                                                    Supermac
                                                </label>
                                            </div>
                                            <div class="col form-check">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    id="domino"
                                                    name="domino"
                                                    value="Domino"
                                                    onChange={handleFastFoodCheckbox} />
                                                <label className="form-check-label" htmlFor="domino">
                                                    Domino
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row mt-5">
                                    <legend>
                                        <h3>Contact Details</h3>
                                    </legend>
                                    <div className="col-lg-3">
                                        <label>Contact Number</label>
                                        <input type="text"
                                            className="inp-contact"
                                            name="contactNumber"
                                            value={formFields.contactNumber}
                                            onChange={handleInputChange} />
                                    </div>

                                    <div className="col-lg-3">
                                        <label>Email</label>
                                        <input type="text"
                                            className="inp-contact"
                                            name="email"
                                            value={formFields.email}
                                            onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 post-btn">
                    <button class="pushable" type="submit">
                        <span class="shadow"></span>
                        <span class="edge"></span>
                        <span class="front">
                            Post Accommodation
                        </span>
                    </button>
                </div>
            </form>
        </section >
    );
}

export default PostAccommodo;