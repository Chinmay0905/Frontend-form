import React from 'react'

// This is the After page which denotes the preview of filled details of the user.

export default function After(props) {
        var currentDate = new Date()
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString(undefined, options);
  return (
    <div className='flex justify-center align-middle'>
      <div class="md:mt-8 flex justify-center flex-col items-center  ">
        <h1 className='text-3xl  mt-20 font-medium'>Bank Details</h1>
        <div className='w-[80%] md:w-[60%] mt-4 mb-8 ' >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque non reiciendis quod provident unde nostrum tempora, perferendis fuga quos odit vel nobis harum adipisci. Deserunt rerum dolorum a est commodi veniam iure voluptate. Placeat.
          </p>
        </div>
        <form className='  w-[95%] shadow-2xl px-0 md:px-10 py-10 md:w-[60%]'>
          <div class="flex flex-wrap gap-4 md:gap-[9rem]  justify-left items-center mb-6">
            <div class="">
              <label class="block font-semibold md:text-right mb-0 px-6 pr-4" for="inline-full-name">
                ACCOUNT HOLDER NAME
              </label>
            </div>
            <div class="pl-4 md:pl-1">
              <input readOnly value={props.data.accName} class=" font-medium appearance-none border-2 bg-green-50 border-gray-200 rounded w-[21.5rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" placeholder='ACCOUNT HOLDER NAME' />
            </div>
          </div>
          <div class="flex flex-wrap md:gap-[12rem] justify-left items-center mb-6">
            <div >
              <label class="block font-semibold md:text-right mb-0 px-6 pr-4" for="inline-full-name">
                ACCOUNT NUMBER
              </label>
            </div>
            <div  class="pl-4 md:pl-0">
              <input readOnly value={props.data.accNumber} class=" font-medium appearance-none border-2 bg-green-50 border-gray-200 rounded w-[21.5rem] py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="number" placeholder='ACCOUNT NUMBER' />
            </div>
          </div>
          <div class="flex flex-wrap md:gap-[16.5rem] justify-left items-center mb-6">
            <div  >
              <label class="block font-semibold md:text-right mb-0 px-6 pr-3" for="inline-full-name">
                IFSC CODE
              </label>
            </div>
            <div  class="pl-5 md:pl-0">
              <input readOnly value={props.data.IFSC} class=" font-medium appearance-none border-2 bg-green-50 border-gray-200 rounded w-[21.5rem] py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" placeholder='IFSC CODE' />
            </div>
          </div>
          <div class="flex flex-wrap md:gap-[15.5rem] justify-left items-center mb-6">
            <div >
              <label class="block font-semibold md:text-right mb-0 px-6 pr-3" for="inline-full-name">
                BANK NAME
              </label>
            </div>
            <div  class="pl-4 md:pl-0" >
              <input readOnly value={props.data.bankName} class=" font-medium appearance-none border-2 bg-green-50 border-gray-200 rounded w-[21.5rem] py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" placeholder='BANK NAME' />
            </div>
          </div>
          <div class="flex flex-wrap md:gap-[16.3rem] justify-left items-center mb-6">
            <div >
              <label class="block font-semibold md:text-right mb-0 px-6 pr-3" for="inline-full-name">
                BANK CITY
              </label>
            </div>
            <div  class="pl-4 md:pl-0" >
              <input readOnly value={props.data.bankCity} class=" font-medium appearance-none border-2 bg-green-50 border-gray-200 rounded w-[21.5rem] py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" placeholder='BANK CITY' />
            </div>
          </div>
          <div class="flex flex-wrap md:gap-[14rem] justify-left items-center mb-6">
            <div >
              <label class="block font-semibold md:text-right mb-0 px-6 pr-3" for="inline-full-name">
                BRANCH NAME
              </label>
            </div>
            <div  class="pl-4 md:pl-0" >
              <input readOnly value={props.data.branchName} class=" font-medium appearance-none border-2 bg-green-50 border-gray-200 rounded w-[21.5rem] py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" placeholder='BRANCH NAME' />
            </div>
          </div>
          <div class="flex flex-wrap md:gap-[4.5rem] justify-left items-center mb-6">
            <div >
              <label class="block font-semibold md:text-right mb-0 px-6 pr-4" for="inline-full-name">
                RELATION WITH ACCOUNT HOLDER
              </label>
            </div>
            <div  class="pl-4 md:pl-0" >
              <input readOnly value={props.data.relation} class=" font-medium appearance-none border-2 bg-green-50 border-gray-200 rounded w-[21.5rem] py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" placeholder='RELATION WITH ACCOUNT HOLDER' />
            </div>
          </div>
          <div class="flex flex-wrap md:gap-[16.8rem] justify-left items-center mb-6">
            <div >
              <label class="block font-semibold md:text-right mb-0 px-6 pr-2.5" for="inline-full-name">
                CONSENT
              </label>
            </div>
            <div class=" ml-5 md:ml-0 p-2 border-2  w-[85%] md:w-[45%] bg-green-50 border-gray-200 rounded ">
              
              <span class="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molesti4ae natus dignissimos ratione exercitationem, sapiente obcaecati modi voluptatem minima accusantium enim.
              </span>
              <div><span className='font-medium'>FILLED ON {formattedDate}</span></div>
            </div>
          </div>

          
        </form>
        <div className='w-[80%] md:w-[60%] mt-4 mb-8 '>
          <p>THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!</p>
        </div>
        <div className="h-0.5 bg-gray-200"></div>
      </div>
    </div>
  )
}
