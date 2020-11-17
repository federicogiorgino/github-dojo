import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Repos from "../components/Repos";
import InfoPanel from "../components/InfoPanel";
import GhPolyglot from "gh-polyglot";
import Graphs from "../components/Graphs";
import Footer from "../components/Footer";

const User = (props) => {
  const username = props.match.params.id;

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const [userInfo, setUserInfo] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      setErrors(false);
      setLoading(true);

      try {
        const info = await axios(`https://api.github.com/users/${username}`);

        setUserInfo(info.data);
      } catch (error) {
        setErrors(true);
      }
      setLoading(false);
    };
    const fetchRepos = async () => {
      setErrors(false);
      setLoading(true);

      try {
        const repos = await axios(`https://api.github.com/users/${username}/repos?per_page=30`);

        setUserRepos(repos.data);
      } catch (error) {
        setErrors(true);
      }
      setLoading(false);
    };

    const fetchStats = async () => {
      setErrors(false);
      setLoading(true);

      try {
        const user = new GhPolyglot(username);

        user.userStats((err, stats) => {
          if (err) {
            setErrors(true);
          }

          setUserStats(stats);
        });
      } catch (error) {
        setErrors(true);
      }
      setLoading(false);
    };

    fetchInfo();
    fetchRepos();
    fetchStats();
  }, [username]);

  if (errors) {
    return (
      <Container>
        <div>Error</div>
      </Container>
    );
  } else if (!errors && loading) {
    return (
      <Container className='vh-100 flex-center'>
        <h1>Loading</h1>
      </Container>
    );
  } else if (!errors && !loading && userInfo && userRepos && userStats) {
    return (
      <>
        <InfoPanel infos={userInfo} />
        <Graphs repos={userRepos} stats={userStats} username={username} />
        <Repos repos={userRepos} username={username} />
        <Footer />
      </>
    );
  } else {
    return null;
  }
};

export default User;
