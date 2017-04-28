import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Open two browsers and search . . . that's socket i/o! </h4>
    There are {props.repos.length} repos.
    {props.repos.map((repo) =>
      <div class="repo">
        <p>{repo.repo}</p>
        <p>{repo.username}</p>
        <a href="{repo.url}">{repo.url}</a>
      </div>
    )}
  </div>
)

export default RepoList;