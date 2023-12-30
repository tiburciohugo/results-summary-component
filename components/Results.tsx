import React from "react";

export default function Results() {
  return (
    <div className="flex h-full w-screen items-start justify-center md:items-center">
      <div className="flex max-w-xl flex-col justify-between rounded-3xl bg-white lg:flex-row">
        <div className="flex-col rounded-b-3xl bg-gradient-to-t from-royal-blue to-slate-blue py-6 text-center md:rounded-3xl">
          <h2 className="text-lg text-pale-blue">Your Result</h2>
          <div className="mx-auto mt-4 h-32 w-32 flex-col justify-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue p-6">
            <h2 className="text-6xl font-extrabold text-white">76</h2>
            <p className="text-pale-blue">of 100</p>
          </div>
          <h2
            className="mt-4 text-2xl font-bold text-white
          "
          >
            Great
          </h2>
          <p className="mt-4 px-12 text-pale-blue">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>

        <div className="w-full max-w-sm flex-col space-y-4 px-8 py-6 font-bold justify-center items-center mx-auto">
          <h3 className="pb-2 text-left text-lg text-dark-blue">Summary</h3>
          <div className="flex items-center justify-between rounded-lg bg-light-red bg-opacity-10 px-4 py-3">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#F55"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
                />
              </svg>
              <p className="text-light-red opacity-90">Reaction</p>
            </div>
            <p className="text-slate-400">
              <span className="text-dark-blue">80</span> / 100
            </p>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-orange-yellow bg-opacity-10 px-4 py-3">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#FFB21E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
                />
                <path
                  stroke="#FFB21E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
                />
                <path
                  stroke="#FFB21E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
                />
              </svg>
              <p className="text-orange-yellow opacity-90">Memory</p>
            </div>
            <p className="text-slate-400">
              <span className="text-dark-blue">92</span> / 100
            </p>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-green-teal bg-opacity-10 px-4 py-3">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#00BB8F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
                />
              </svg>
              <p className="text-green-teal opacity-90">Verbal</p>
            </div>
            <p className="text-slate-400">
              <span className="text-dark-blue">61</span> / 100
            </p>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-cobalt-blue bg-opacity-10 px-4 py-3">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#1125D6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
                />
                <path
                  stroke="#1125D6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
                />
              </svg>
              <p className="text-cobalt-blue opacity-90">Visual</p>
            </div>
            <p className="text-slate-400">
              <span className="text-dark-blue">72</span> / 100
            </p>
          </div>
          <button className="mx-auto mt-8 w-full rounded-full bg-dark-blue py-3 text-lg text-white">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
