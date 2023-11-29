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

const Contact = () => {
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
                                <div className="col-lg-3">
                                    <label>Eir Code</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div class="mydict col-lg-3">
                                    <label className="mb-2">Accommodation Type</label>
                                    <div>
                                        <label>
                                        <input type="radio" name="radio"/>
                                        <span  style={{ padding: '0.65rem', width: '9rem', display: 'inline-block' }}>Permanent</span>
                                        </label>
                                        <label>
                                        <input type="radio" name="radio"/>
                                        <span  style={{ padding: '0.65rem', width: '9rem', display: 'inline-block' }}>Temporary</span>
                                        </label>                               
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="mb-2">From Date</label>
                                        <DatePickerComponent />
                                </div>
                                <div className="col-lg-3">
                                    <label className="mb-2">To Date</label>
                                        <DatePickerComponent />
                                </div>
                            </div>
                        </div>                        
                        <div className="col-lg-12">
                            <div className="row mt-5">                            
                                <div class="mydict col-lg-5">
                                    <label className="mb-2">Looking For</label>
                                    <div>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span  style={{ width: '9rem', display: 'inline-block' }}>No Preference</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span  style={{ width: '9rem', display: 'inline-block' }}>Females Only</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span  style={{ width: '9rem', display: 'inline-block' }}>Males Only</span>
                                    </label>                               
                                    </div>
                                </div>
                                <div class="mydict col-lg-7">
                                    <div className='qty-flex'>

                                    <span>Bedroom</span>
                                    <div class="qty-container">
                                    <button class="qty-btn-minus btn-light" type="button"><i class="fa fa-minus"></i></button>
                                    <input type="text" name="qty" value="0" class="input-qty"/>
                                    <button class="qty-btn-plus btn-light" type="button"><i class="fa fa-plus"></i></button>
                                    </div>
                                    <span>Bath</span>
                                    <div class="qty-container">
                                    <button class="qty-btn-minus btn-light" type="button"><i class="fa fa-minus"></i></button>
                                    <input type="text" name="qty" value="0" class="input-qty"/>
                                    <button class="qty-btn-plus btn-light" type="button"><i class="fa fa-plus"></i></button>
                                    </div>
                                    <span>Kitchen</span>
                                    <div class="qty-container">
                                    <button class="qty-btn-minus btn-light" type="button"><i class="fa fa-minus"></i></button>
                                    <input type="text" name="qty" value="0" class="input-qty"/>
                                    <button class="qty-btn-plus btn-light" type="button"><i class="fa fa-plus"></i></button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-5">                            
                            <div className="col-lg-2">
                                <span className="nearby">Near By</span>
                            </div>
                            <div className="col-lg-10">
                            <div className="row">                            

                                <div class="col form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        LIDL
                                    </label>
                                </div>
                                <div class="col form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Aldi
                                    </label>
                                </div>
                                <div class="col form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Tesco
                                    </label>
                                </div>
                                <div class="col form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Super Value
                                    </label>
                                </div>
                                <div class="col form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Centra
                                    </label>
                                </div>
                                <div class="col form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Spar
                                    </label>
                                </div>
                                <div class="col form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Dunnes
                                    </label>
                                </div>
                                <div class="col form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Pennies
                                    </label>
                                </div>
                                <div class="col form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        DayBreak
                                    </label>
                                </div>
                                <div class="col form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Dunnes
                                    </label>
                                </div>                                
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-5">
                            <div className="col-lg-4">
                            <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Sutiable For</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">Students</option>
                                <option value="2">Working Professionals</option>
                                <option value="3">Students & Working Professionals</option>
                            </select>
                            </div>
                            </div>
                            <div className="col-lg-4">
                                    <label>Rent</label>
                                    <input type="number" className="inp-contact" />
                                </div>
                                <div className="col-lg-4">
                                    <label>Deposit</label>
                                    <input type="number" className="inp-contact" />
                                </div>
                        </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-5">
                        <div className="col-lg-3">
                            <div className="row">

                            <label>Bills Included</label>
                            <div class="col form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Yes
                            </label>
                            </div>
                            <div class="col form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                No
                            </label>
                            </div>
                                
                            </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="row">

                            <label>Room Sharing</label>
                            <div class="col form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Yes
                            </label>
                            </div>
                            <div class="col form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                No
                            </label>
                            </div>
                                
                            </div>
                            </div>
                            <div className="col-lg-6">
                                    <label>Contact Number</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;