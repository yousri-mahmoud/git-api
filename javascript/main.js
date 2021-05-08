/*const reposApi = fetch("https://api.github.com/users/yousri12/repos")
  .then((response) => response.json())
  .then((data) => {
    data.map((repoName) => {
      const myDiv = document.createElement("div");
      document.body.appendChild(myDiv);
      const myData = document.createTextNode(
        `name ${repoName.name} -- repo private "${repoName.private}"`
      );
      myDiv.appendChild(myData);
      myDiv.style.margin = "10px 30px ";
    });
  });
*/
let myInput = document.querySelector(".searchgit input"),
  myButton = document.querySelector(".searchgit span"),
  showData = document.querySelector(".repodata");

myButton.onclick = function () {
  gitRepo();
};

const gitRepo = function () {
  if (myInput.value == "") showData.innerHTML = "Please Enter Githup Username";
  else {
    showData.innerHTML = "";
    const reposApi = fetch(
      `https://api.github.com/users/${myInput.value}/repos` //
    )
      .then((response) => response.json())
      .then((repos) => {
        repos.forEach((repo) => {
          let myNewDiv = document.createElement("div"),
            textName = document.createTextNode(`${repo.name}`);

          myNewDiv.appendChild(textName);

          // url
          let anchor = document.createElement("a");
          anchor.setAttribute("target", "_blank");
          anchor.innerHTML = "visit";
          anchor.href = repo.html_url;
          myNewDiv.appendChild(anchor);
          // date
          let myDate = document.createElement("span");
          myDate.innerHTML = `${new Date(
            repo.created_at
          ).toLocaleDateString()}`;
          myNewDiv.appendChild(myDate);
          showData.appendChild(myNewDiv);
          myNewDiv.className = "created";
        });
      });
  }
};
