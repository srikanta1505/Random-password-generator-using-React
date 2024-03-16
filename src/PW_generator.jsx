import React, { Fragment, useCallback, useEffect, useState } from "react";

const PW_generator = () => {
  const [length, setLength] = useState(6);
  const [numberAllowd, isNumberAllowed] = useState(true);
  const [specialCharacterAllowed, isSpecialCharcteeAllowed] = useState(true);
  const [createdPW, setCreatedPW] = useState("");

  const PasswordGenerator = useCallback(() => {
    let str = "sQzQpoAVyIwHtUmevrKFNEZLRkbgTcPdXMiGnDJWaBOlxShjfuCyY";
    let pass = "";
    if (numberAllowd) str += "0123456789";
    if (specialCharacterAllowed) str += '!@#~$%^&*_+?:-"?,./;';

    for (let index = 1; index <= length; index++) {
      let charLength = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charLength);
    }
    setCreatedPW(pass);
  }, [length, numberAllowd, specialCharacterAllowed, setCreatedPW]);

  useEffect(
    () => PasswordGenerator(),
    [length, numberAllowd, specialCharacterAllowed, setCreatedPW]
  );
  return (
    <Fragment>
      <div className="px-12 my-8 text-center font-bold w-3/4 mx-auto shadow-md rounded-lg bg-gray-300">
        <div className="mb-4 p-4 text-3xl font-serif  text-blue-800">
          Password generator
        </div>
        <div className="flex mb-6">
          <input
            className="px-4 outline-none shadow-lg w-full rounded-full"
            type="text"
            name="password"
            placeholder="Password"
            value={createdPW}
            readOnly
          />
          <button className="outline-none ml-4 p-2 rounded-full shadow-lg text-white bg-blue-500">
            Copy
          </button>

          <button
            onClick={PasswordGenerator}
            className=" outline-none ml-4 p-2 rounded-full shadow-lg text-white bg-blue-500"
          >
            Refresh
          </button>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="flex mb-3">
            <input
              className="w-16 cursor-pointer"
              type="range"
              id="range"
              min={6}
              defaultValue={12}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="range">
              <pre> length {length}</pre>
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="addnumber"
              defaultChecked
              onChange={() => isNumberAllowed((prevValue) => !prevValue)}
            />
            <label htmlFor="addnumber">Add Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked
              id="addcharacters"
              onChange={() =>
                isSpecialCharcteeAllowed((prevValue) => !prevValue)
              }
            />
            <label htmlFor="addcharacters">Add Special Characters</label>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PW_generator;
