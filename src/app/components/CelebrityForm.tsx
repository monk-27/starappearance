"use client";

import FormInput from "./forminput";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./celebrityform.css";
import CelebrityCard from "./celebritycard";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ErrorMessage } from "formik";

import { useEffect, useState } from "react";

import Header from "./headers";


interface IProps {}
const Celebrityforms = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };
  const [showAlert, SetShowAlert] = useState(false);
  const [alertData, SetAlertData] = useState("");
  

  
  const formik = useFormik({
    initialValues: {
      line1: "",
      line2: "",
      line3:"",
      line4:"",
      line5:"",
      line6:"",
      line7:"",
      line8:"",
      line9:"",
      line10:"",

      
    },
    validationSchema: Yup.object({
      line1: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!")
        ,
      line2: Yup.string()
        .length(6, "Incorrect Number")
        .required("Phone Number can't be Empty")
        ,
        line3: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!")
        ,
        line4: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!")
      ,
      line5: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!")
        ,line6: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!")
        ,line7: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!")
        ,line8: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!")
        
        ,line9: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!")
        ,
        line10: Yup.string()
        .min(2, "Too short!")
        .max(200, "Field should be not more than  200 characters!")
        .required("Field is Required!")
    }),
  
    onSubmit: (values, { setSubmitting, setFieldError }) => {
      
      setSubmitting(true);
  
      setSubmitting(false);
    },
  });
  
  useEffect(() => {}, []);
  return (
    <>
      {!showComponent? (
        <><Header showComponent1={true}/>
        
        
        <div className="card-container">
          
          <form onSubmit={formik.handleSubmit}>
            <div className="body">
              <div className="heading">
                <h1>
                  <strong
                    style={{
                      backgroundColor: "#fc5b62",
                      width: "40px",
                      height: " 40px",
                      color: "#fff!important",
                      fontSize: " 1.125rem",
                      lineHeight: "42px",
                      textAlign: "center",

                      display: "inline-block",
                      borderRadius: "50%",
                    }}
                  >
                    ✰
                  </strong>
                  Submit Form
                </h1>
                <h3>Get Best Price</h3>
              </div>

              <div className="first-line">
                <FormInput
                  type="select"
                  label="What's the occasion?"
                  placeholder="Select Type"
                  name="line1"
                  formik={formik}
                  style={{ width: 200, flex: 1, borderRadius: 5, padding: 10 }}
                  options={[
                    {
                      label: "Please Select any option",
                      value: "",
                      disabled: true,
                      selected: true,
                    },
                    {
                      label: "Virtual",
                      value: "Virtual",
                      disabled: false,
                      selected: false,
                    },
                    {
                      label: "Video Shoutout",
                      value: "Video Shoutout",
                      disabled: false,
                      selected: false,
                    },
                    {
                      label: "Campus",
                      value: "Campus",
                      disabled: false,
                      selected: false,
                    },
                    {
                      label: "Corporate",
                      value: "Corporate",
                      disabled: false,
                      selected: false,
                    },
                    {
                      label: "Private Party",
                      value: "Private Party",
                      disabled: false,
                      selected: false,
                    },
                    {
                      label: "Concert/Festival",
                      value: "Concert/Festival",
                      disabled: false,
                      selected: false,
                    },
                    {
                      label: "Professional Hiring",
                      value: "Professional Hiring",
                      disabled: false,
                      selected: false,
                    },
                    {
                      label: "Inauguration",
                      value: "Inauguration",
                      disabled: false,
                      selected: false,
                    },
                    {
                      label: "Photo/Video Shoot",
                      value: "Photo/Video Shoot",
                      disabled: false,
                      selected: false,
                    },
                    {
                      label: "Religious",
                      value: "Religious",
                      disabled: false,
                      selected: false,
                    },
                    {
                      label: "Charity",
                      value: "Charity",
                      disabled: false,
                      selected: false,
                    },
                    {
                      label: "Fashion Show",
                      value: "Fashion Show",
                      disabled: false,
                      selected: false,
                    },
                    {
                      label: "Kids Party",
                      value: "Kids Party",
                      disabled: false,
                      selected: false,
                    },
                    {
                      label: "Exhibition",
                      value: "Exhibition",
                      disabled: false,
                      selected: false,
                    },
                  ]} />
                 

                <FormInput
                  type="date"
                  label="Event Date"
                  placeholder=""
                  name="line9"
                  formik={formik}
                  style={{ width: 200, flex: 1, borderRadius: 5, padding: 10 }} />
              </div>

              <FormInput
                type="textarea"
                label="Venue Address"
                placeholder=""
                name="line3"
                formik={formik}
                style={{ flex: 1, borderRadius: 5, padding: 10 }} />
              <div className="first-line">
                <FormInput
                  type="text"
                  label="Budget"
                  placeholder=""
                  name="line4"
                  formik={formik}
                  style={{ width: 200, flex: 1, borderRadius: 5, padding: 10 }} />

                <FormInput
                  type="text"
                  label="How many people will attend?"
                  placeholder=""
                  name="line5"
                  formik={formik}
                  style={{ width: 200, flex: 1, borderRadius: 5, padding: 10 }} />
              </div>
              <FormInput
                type="text"
                label="Full Name"
                placeholder=""
                name="line6"
                formik={formik}
                style={{ flex: 1, borderRadius: 5, padding: 10 }} />
              <div className="first-line">
                <FormInput
                  type="email"
                  label="Email Address (No Spam!)"
                  placeholder=""
                  name="line7"
                  formik={formik}
                  style={{ width: 200, flex: 1, borderRadius: 5, padding: 10 }} />
                <FormInput
                  type="phone"
                  label="Mobile Number"
                  placeholder="Phone Number"
                  name="line2"
                  // value={formik.values.phone}
                  onChange={(phone: any) => formik.setFieldValue("phone", phone)}
                  flagsImagePath="/flags.png"
                  formik={formik}
                  countries={["US", "GB", "CA", "AU", "NZ"]}
                  international={true}
                  style={{ width: 200, flex: 1, borderRadius: 5, padding: 10 }} />
              </div>

              <FormInput
                type="text"
                label="Tell us more (we love to listen)"
                placeholder=""
                name="line10"
                formik={formik}
                style={{ flex: 1, borderRadius: 5, padding: 10 }} />
              <div className="bottom-line">
                <FormInput
                  type="select"
                  label=" "
                  placeholder="Select Type"
                  name="line8"
                  formik={formik}
                  style={{
                    width: 10,
                    flex: 1,
                    borderRadius: 5,
                    padding: 10,
                  }}
                  options={[
                    {
                      label: "Yes",
                      value: "Yes",
                      disabled: true,
                      selected: true,
                    },
                    {
                      label: "No",
                      value: "No",
                      disabled: false,
                      selected: false,
                    },
                  ]} />
                <p style={{ marginLeft: 130 }}>Send more options in my budget</p>
              </div>
              <button
                className="button-red"
                onClick={() => {
                  handleClick();
                } }
              >
                Back
              </button>
              {showComponent && <CelebrityCard />}

            </div>
          </form>
        </div></>
      ) : (
        <CelebrityCard />
      )}
    </>
  );
};

export default Celebrityforms;
