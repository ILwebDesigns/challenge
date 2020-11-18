import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import NavBar from "../Components/NavBar";
import Welcome from "../Components/Welcome";
import SitesList from "../Components/SitesList";
import axios from "axios";
import { Container } from "@material-ui/core";

const baseURL = "http://churrasco.uk.to:3005/api/sites";

export default function SitesContainer({ location }) {
  const history = useHistory();
  const [onLoading, setLoading] = useState(true);
  const [list, setList] = useState({ sites: [] });

  useEffect(() => {
    let ignore = false;
    const auth = sessionStorage.getItem("AuthToken");
    async function request() {
      const result = await axios.get(baseURL);
      if (result.status === 200) {
        if (!ignore) setList(result.data);
        setLoading(false);
      } else {
        history.push("/");
      }
    }
    if (auth) {
      request();
      return () => {
        ignore = true;
      };
    } else {
      history.push("/");
    }
  }, [history]);

  const handleLogout = () => {
    sessionStorage.clear();
    return history.push("/");
  };

  if (onLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <NavBar logout={handleLogout} location={location} />      
      <Container maxWidth='lg'>
      <Welcome />
      <SitesList list={list.sites} />      
      </Container>
    </>
  );
}
