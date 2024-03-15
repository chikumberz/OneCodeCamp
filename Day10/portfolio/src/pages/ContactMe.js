import React from 'react'
import { Link } from 'react-router-dom'

const ContactMe = () => {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formElements = form.elements

    let email = formElements.email.value;
    let message = formElements.message.value;

    alert(`Your e-mail is "${email}". \n\n Your message is "${message}". \n\n Thank for submiting your message!`);
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="mh-800 py-8">
          <h1 className="title-custom mb-5">Get in Touch With Me!</h1>
          <p className="my-10">
            E-mail: <Link className="text-sky-400/100">benjie.taluyo@gmail.com</Link>
            <br />Contact #: +64 204 023 2025
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-6">
              <div className="col-span-2">
                <div className="grid gap-x-6 gap-y-8">
                  <div className="col-span-full">
                    <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Your e-mail:</label>
                    <div class="mt-2">
                      <input type="email" name="email" id="email" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label for="message" className="block text-sm font-medium leading-6 text-gray-900">Message:</label>
                    <div className="mt-2">
                      <textarea id="message" name="message" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few message.</p>
                  </div>

                  <div className="col-span-full">
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default ContactMe