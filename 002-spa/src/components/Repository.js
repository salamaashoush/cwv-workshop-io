import React from "react"
import styled from "styled-components/macro"
import { faCodeFork, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { formatDistance } from "date-fns"
function Repository({ repo }) {
  return (
    <RepoCard>
      <RepoLink href={repo.html_url}>{repo.name}</RepoLink>
      <RepoDescription>{repo.description}</RepoDescription>
      <InfoContainer>
        <Circle />
        <RepoDetails>
          {repo.language} <FontAwesomeIcon icon={faStar} aria-hidden="true" />
          {repo.stargazers_count} <FontAwesomeIcon icon={faCodeFork} aria-hidden="true" /> {repo.forks_count}
        </RepoDetails>
        <DateContainer>{formatDistance(new Date(repo.updated_at), new Date())}</DateContainer>
      </InfoContainer>
    </RepoCard>
  )
}

const RepoCard = styled.div`
  border-bottom: 1px #d1d5da solid;
  padding: 16px;
  margin-bottom: 16px;
`

const DateContainer = styled.p`
  font-size: 12px;
  color: #586069;
  margin-left: 10px;
  margin-bottom: 0;
`

const InfoContainer = styled.div`
  display: flex;
`

const Circle = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: #f1e05a;
  margin-right: 5px;
  top: 2px;
  position: relative;
`

const RepoDescription = styled.p`
  font-size: 14px;
  color: #586069;
  margin: 4px 0 10px 0;
`

const RepoLink = styled.a`
  font-weight: 600;
  color: #0366d6;
  cursor: pointer;
  font-size: 20px;
  word-break: break-word;
`

const RepoDetails = styled.span`
  color: #586069;
  font-size: 12px;
  margin-bottom: 0;
`

export const Icon = styled.i`
  margin-left: 16px;
`

export default Repository
