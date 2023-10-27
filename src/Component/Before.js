import React, { useState } from 'react'

// This is the Before page which consists of an input form in which we have to filled the details.
// We have used props to update the value of the inputs field.

export default function Before(props) {

  return (
    <div className='flex justify-center align-middle'>
      <div class="md:mt-8 flex justify-center flex-col items-center  ">
        <h1 className='text-3xl  mt-20 font-bold'>Bank Details</h1>
        <div className='w-[80%] md:w-[50%] mt-4 mb-8 ' >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque non reiciendis quod provident unde nostrum tempora, perferendis fuga quos odit vel nobis harum adipisci. Deserunt rerum dolorum a est commodi veniam iure voluptate. Placeat.
          </p>
        </div>
        <form className=' shadow-2xl w-[95%] px-0 md:px-10 py-10 md:w-[50%]'>
          <div class="flex flex-wrap gap-4 md:gap-[9rem]  justify-left items-center mb-6">
            <div class="">
              <label class="block font-semibold md:text-right mb-0 px-6 pr-2" for="inline-full-name">
                ACCOUNT HOLDER NAME
              </label>
            </div>
            <div class="pl-4 md:pl-3">
              <input value={props.data.accName} onChange={(e) => {
                props.setData((prev) => {
                  return { ...prev, accName: e.target.value }
                })
              }} class=" appearance-none border-2 border-gray-200 rounded w-[21.5rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" placeholder='ACCOUNT HOLDER NAME' />
            </div>
          </div>
          <div class="flex flex-wrap md:gap-[12rem] justify-left items-center mb-6">
            <div >
              <label class="block font-semibold md:text-right mb-0 px-6 pr-4" for="inline-full-name">
                ACCOUNT NUMBER
              </label>
            </div>
            <div class="pl-4 md:pl-0">
              <input value={props.data.accNumber} onChange={(e) => {
                props.setData((prev) => {
                  return { ...prev, accNumber: e.target.value }
                })
              }} class=" appearance-none border-2 border-gray-200 rounded w-[21.5rem] py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="number" placeholder='ACCOUNT NUMBER' />
            </div>
          </div>
          <div class="flex flex-wrap md:gap-[16.5rem] justify-left items-center mb-6">
            <div  >
              <label class="block font-semibold md:text-right mb-0 px-6 pr-3" for="inline-full-name">
                IFSC CODE
              </label>
            </div>
            <div class="pl-4 md:pl-0">
              <input value={props.data.IFSC} onChange={(e) => {
                props.setData((prev) => {
                  return { ...prev, IFSC: e.target.value }
                })
              }} class=" appearance-none border-2 border-gray-200 rounded w-[21.5rem] py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" placeholder='IFSC CODE' />
            </div>
          </div>
          <div class="flex flex-wrap md:gap-[15.5rem] justify-left items-center mb-6">
            <div >
              <label class="block font-semibold md:text-right mb-0 px-6 pr-3" for="inline-full-name">
                BANK NAME
              </label>
            </div>
            <div class="pl-4 md:pl-0" >
              <input value={props.data.bankName} onChange={(e) => {
                props.setData((prev) => {
                  return { ...prev, bankName: e.target.value }
                })
              }} class=" appearance-none border-2 border-gray-200 rounded w-[21.5rem] py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" placeholder='BANK NAME' />
            </div>
          </div>
          <div class="flex flex-wrap md:gap-[16.3rem] justify-left items-center mb-6">
            <div >
              <label class="block font-semibold md:text-right mb-0 px-6 pr-3" for="inline-full-name">
                BANK CITY
              </label>
            </div>
            <div class="pl-4 md:pl-0" >
              <input value={props.data.bankCity} onChange={(e) => {
                props.setData((prev) => {
                  return { ...prev, bankCity: e.target.value }
                })
              }} class=" appearance-none border-2 border-gray-200 rounded w-[21.5rem] py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" placeholder='BANK CITY' />
            </div>
          </div>
          <div class="flex flex-wrap md:gap-[14rem] justify-left items-center mb-6">
            <div >
              <label class="block  font-semibold md:text-right mb-0 px-6 pr-3" for="inline-full-name">
                BRANCH NAME
              </label>
            </div>
            <div class="pl-4 md:pl-0" >
              <input value={props.data.branchName} onChange={(e) => {
                props.setData((prev) => {
                  return { ...prev, branchName: e.target.value }
                })
              }} class=" appearance-none border-2 border-gray-200 rounded w-[21.5rem] py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" placeholder='BRANCH NAME' />
            </div>
          </div>
          <div class="flex flex-wrap md:gap-[4.5rem] justify-left items-center mb-6">
            <div >
              <label class="block  font-semibold md:text-right mb-0 px-6 pr-4" for="inline-full-name">
                RELATION WITH ACCOUNT HOLDER
              </label>
            </div>
            <div class="pl-4 md:pl-0" >
              <input value={props.data.relation} onChange={(e) => {
                props.setData((prev) => {
                  return { ...prev, relation: e.target.value }
                })
              }} class=" appearance-none border-2 border-gray-200 rounded w-[21.5rem] py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" placeholder='RELATION WITH ACCOUNT HOLDER' />
            </div>
          </div>
          <div class="flex flex-wrap md:gap-[16.8rem] justify-left items-center mb-6">
            <div >
              <label class="block font-semibold md:text-right mb-0 px-6 pr-3" for="inline-full-name">
                CONSENT
              </label>
            </div>
            <div class=" ml-5 md:ml-0 p-2 border-2  w-[85%] md:w-[45%] border-gray-200 rounded ">
              <input class="mr-2 leading-tight" type="checkbox" />
              <span class="text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molesti4ae natus dignissimos ratione exercitationem, sapiente obcaecati modi voluptatem minima accusantium enim.
              </span>
            </div>
          </div>

          <div class="md:flex pr-8 flex-wrap justify-end md:items-center">
            <button onClick={() => props.setSaved(true)} class="shadow bg-green-400 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold mx-4 my-3 py-4 px-8 rounded text-lg" type="button">
              SAVE
            </button>
          </div>
        </form>
        <div className='w-[80%] md:w-[50%] mt-4 mb-8 '>
          <p>THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!</p>
        </div>
        <div className="h-0.5 bg-gray-200"></div>
      </div>
    </div>
  )
}
