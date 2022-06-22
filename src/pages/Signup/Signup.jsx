import { useState } from "react";
import { chakra } from "@chakra-ui/react";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumnail, setThumnail] = useState(null);
  const [thumnailError, setThumnailError] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, thumnail);
    setEmail("");
    setPassword("");
    setDisplayName("");
    setThumnail("");
  };
  //handle image from user
  const handleThumnail = (e) => {
    setThumnail(null);
    const selectFile = e.target.files[0];
    //check file with regex
    let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;

    console.log(selectFile);

    if (!selectFile) {
      setThumnailError("Please Select file");
      alert("Please Select File");
      return;
    }
    if (regex.test(selectFile)) {
      setThumnailError("Please Select image file");
      alert("Please Select Image file");
      return;
    }
    if (selectFile.size > 2000000) {
      setThumnailError("Please Select File Size less than 100000");
      return;
    }
    setThumnailError(null);
    setThumnail(selectFile);
  };
  return (
    <chakra.form onSubmit={submitForm}>
      <chakra.h2>Signup</chakra.h2>
      <chakra.label htmlFor="email">
        <chakra.span>Email: </chakra.span>
        <chakra.input
          type="email"
          required
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </chakra.label>

      <chakra.label htmlFor="password">
        <chakra.span>Password: </chakra.span>
        <chakra.input
          type="password"
          required
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </chakra.label>

      <chakra.label htmlFor="displayName">
        <chakra.span>Name: </chakra.span>
        <chakra.input
          type="text"
          required
          placeholder="Enter Name"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </chakra.label>

      <chakra.label htmlFor="Thumnail">
        <chakra.span>ImageProfile: </chakra.span>
        <chakra.input
          type="file"
          required
          placeholder="Upload"
          onChange={handleThumnail}
        />
        {thumnailError && <p className="error">{thumnailError}</p>}
      </chakra.label>
      <chakra.button >Signup</chakra.button>
    </chakra.form>
  );
};

export default Signup;
