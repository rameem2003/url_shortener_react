import React, { useState, useEffect } from "react";
import { FaCopy, FaTrashCan } from "react-icons/fa6";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import "./linkresult.css";

const LinkResult = ({ value }) => {
  const [shortLink, setShortlink] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${value}`);
      // setShortlink(res.data.result.full_short_link);

      setShortlink((oldLink) => {
        // return [...oldLink, res.data.result.full_short_link];
        return [
          ...oldLink,
          { main_link: value, shorted_link: res.data.result.full_short_link },
        ];
      });

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const deleteLink = (index) => {
    toast.success(`Delete`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setShortlink((oldLink) => {
      // const filteredLinks = shortLink.filter((link) => )
    });
  };

  useEffect(() => {
    if (value.length) {
      fetch();
    }
  }, [value]);

  const notify = (link) => {
    toast.success(`${link} is copied`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      {loading && <p className="load">Loading.....</p>}
      {error && <p className="load">Something went Wrong ......</p>}
      {/* {shortLink && (
        <div className="linkResult">
          <p>{shortLink}</p>

          <CopyToClipboard text={shortLink}>
            <button type="button" onClick={() => notify(shortLink)}>
              Copy Link
            </button>
          </CopyToClipboard>
        </div>
      )} */}

      {/* {shortLink &&
        shortLink.map((link, index) => {
          return (
            <div className="linkResult">
              <p>
                {index}. {link.shorted_link}
              </p>

              <CopyToClipboard text={link}>
                <button type="button" onClick={() => notify(link)}>
                  Copy Link
                </button>
              </CopyToClipboard>
            </div>
          );
        })} */}

      {shortLink &&
        shortLink.map((link, index) => {
          return (
            <div className="linkCard">
              <div className="index">
                <h1>{index + 1}</h1>
              </div>
              <div className="links">
                {/* <p>{link.main_link}</p> */}
                <h2>{link.shorted_link}</h2>
              </div>

              <CopyToClipboard text={link.shorted_link}>
                <button onClick={() => notify(link.shorted_link)}>
                  <FaCopy />
                </button>
              </CopyToClipboard>

              <button onClick={() => deleteLink(index)}>
                <FaTrashCan />
              </button>
            </div>
          );
        })}

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
    </>
  );
};

export default LinkResult;
