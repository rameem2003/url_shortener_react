import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import "./linkresult.css";

const LinkResult = ({ value }) => {
  const [shortLink, setShortlink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${value}`);
      setShortlink(res.data.result.full_short_link);

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (value.length) {
      fetch();
    }
  }, [value]);

  const notify = (link) => {
    toast.success(`${link} is copied`, {position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"});
  };

  return (
    <>
      {loading && <p className="load">Loading.....</p>}
      {error && <p className="load">Something went Wrong ......</p>}
      {shortLink && (
        <div className="linkResult">
          <p>{shortLink}</p>

          <CopyToClipboard text={shortLink}>
            <button type="button" onClick={() => notify(shortLink)}>
              Copy Link
            </button>
          </CopyToClipboard>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      )}
    </>
  );
};

export default LinkResult;
