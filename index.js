function getIssues() {
  fetch("https://api.github.com/repos/ian-ramos/javascript-fetch-lab/issues", {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  const issues = document.getElementById("issues");
}

function createIssue() {
  const issueTitle = document.getElementById("title").value;
  const issueText = document.getElementById("body").value;
  fetch("https://api.github.com/repos/ian-ramos/javascript-fetch-lab/issues", {
    method: "post",
    body: JSON.stringify(`Title: ${issueTitle} Text: ${issueText}`),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => json(res))
    .then(json => console.log(json));
}

function showResults(json) {
  const resultsDiv = document.getElementById("results");
  for (const el of json) {
    const link = document.createElement("a");
    link.innerText = el.forks_url;
    link.href = el.forks_url;
    resultsDiv.appendChild(link);
  }
}

function forkRepo() {
  const repo =
    "https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks";
  fetch(repo, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "";
}
