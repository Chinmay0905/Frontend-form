import React, { useState } from 'react'
import Before from './Before';
import After from './After';

// This is the form in which all the details are collected and after submitting shows the view only page of the filled details.
// We have imported After and Before pages in this file.
// Before denotes the page before submitting the form.
// After denotes the page after submitting the form.

export default function Form() {
  // We have used usestates for saving the details to preview.
  const [saved, setSaved] = useState(false);
  const [data, setData] = useState({
    accName: "",
    accNumber: "",
    IFSC: "",
    bankName: "",
    bankCity: "",
    branchName: "",
    relation: ""
  })
  return (
    <>
      {!saved && <Before data={data} setData={setData} setSaved={setSaved} />}
      {saved && <After setData={setData} data={data} />}
    </>
  )
}
