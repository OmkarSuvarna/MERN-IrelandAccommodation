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
    return (
        <section className="contact">
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
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row mt-5">
                                <legend>
                                    <h3>Address</h3>
                                </legend>
                                <div className="col-lg-4">
                                    <label>Street Name</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-4">
                                    <label>County</label>
                                    <select className="form-select" name="county" id="county">
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
                                    <input type="text" className="inp-contact" />
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
                                        <span class="currency-code">€</span><input type="number" class="text-currency" />
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <label>Deposit</label>
                                    <div class="currency-wrap">
                                        <span class="currency-code">€</span><input type="number" class="text-currency" />
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
                                            <input type="radio" name="radio" />
                                            <span style={{ width: '8.5rem', display: 'inline-block' }}>Apartment</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span style={{ width: '8.5rem', display: 'inline-block' }}>House</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
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
                                            <input type="radio" name="radio" />
                                            <span style={{ width: '9.5rem', display: 'inline-block' }}>No Preference</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span style={{ width: '8.5rem', display: 'inline-block' }}>Females Only</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span style={{ width: '7.5rem', display: 'inline-block' }}>Males Only</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-2 mydict">
                                    <label className="mb-2">Living Room Shared?</label>
                                    <div>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span style={{ width: '5rem', display: 'inline-block' }}>Yes</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span style={{ width: '5rem', display: 'inline-block' }}>No</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-2 mydict">
                                    <label className="mb-2">Kitchen Shared?</label>
                                    <div>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span style={{ width: '5rem', display: 'inline-block' }}>Yes</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
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
                                    <select className="form-select" name="sutiableFor" id="sutiableFor">
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
                                            <input type="radio" name="radio" />
                                            <span style={{ padding: '0.65rem', width: '9rem', display: 'inline-block' }}>Permanent</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span style={{ padding: '0.65rem', width: '9rem', display: 'inline-block' }}>Temporary</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-2 mydict">
                                    <label className="mb-2">Room Furnished?</label>
                                    <div>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span style={{ width: '5rem', display: 'inline-block' }}>Yes</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span style={{ width: '5rem', display: 'inline-block' }}>No</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-2 mydict">
                                    <label className="mb-2">Bills Included?</label>
                                    <div>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span style={{ width: '5rem', display: 'inline-block' }}>Yes</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span style={{ width: '5rem', display: 'inline-block' }}>No</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-2 mydict">
                                    <label className="mb-2">Room Sharing?</label>
                                    <div>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span style={{ width: '5rem', display: 'inline-block' }}>Yes</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span style={{ width: '5rem', display: 'inline-block' }}>No</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-5">
                                <legend>
                                    <h3>Near By</h3>
                                </legend>
                                <div className="col-lg-1">
                                    <span className='nearbyLabel'>Stores: </span>
                                </div>
                                <div className="col-lg-11 nearbyCheckbox">
                                    <div className="row">
                                        <div class="col form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                LIDL
                                            </label>
                                        </div>
                                        <div class="col form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Aldi
                                            </label>
                                        </div>
                                        <div class="col form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Tesco
                                            </label>
                                        </div>
                                        <div class="col form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Centra
                                            </label>
                                        </div>
                                        <div class="col form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Spar
                                            </label>
                                        </div>
                                        <div class="col form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Dunnes
                                            </label>
                                        </div>
                                        <div class="col form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Pennies
                                            </label>
                                        </div>
                                        <div class="col form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                DayBreak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-3">

                                <div className="col-lg-1">
                                    <span className='nearbyLabel'>Colleges: </span>
                                </div>
                                <div className="col-lg-11 nearbyCheckbox">
                                    <div className="row">
                                        <div class="col form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Dublin Business School
                                            </label>
                                        </div>
                                        {/* <div class="col form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                National College of Ireland
                                            </label>
                                        </div> */}
                                        <div class="col form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Technological University Dublin
                                            </label>
                                        </div>
                                        <div class="col form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Trinity College Dublin
                                            </label>
                                        </div>
                                        <div class="col form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Dublin City University
                                            </label>
                                        </div>
                                        <div class="col form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Griffith College
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
                                    <input type="text" className="inp-contact" />
                                </div>

                                <div className="col-lg-3">
                                    <label>Email</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default PostAccommodo;