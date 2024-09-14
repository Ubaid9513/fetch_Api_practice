var container = document.getElementById("container");

async function usersData() {
  let userUrl = await fetch("https://jsonplaceholder.typicode.com/users");
  let userData = await userUrl.json();
  let postUrl = await fetch("https://jsonplaceholder.typicode.com/posts");
  let postData = await postUrl.json();
  return { userData, postData };
}

usersData()
  .then(({ userData, postData }) => {
    for (let i = 0; i < userData.length; i++) {
      let users = userData[i];

      const userCard = document.createElement("div");
      userCard.classList.add("post-cards");

      const userId = document.createElement("h2");
      userId.innerText = `User Id: ${users.id}`;
      userCard.appendChild(userId);

      const userName = document.createElement("h2");
      userName.innerText = `User Name: ${users.name}`;
      userCard.appendChild(userName);

      for (let j = 0; j < postData.length; j++) {
        let post = postData[j];

        if (post.userId === users.id) {
          const postId = document.createElement("h4");
          postId.innerText = `Post: ${post.id}`;
          userCard.appendChild(postId);

          const postTitle = document.createElement("h4");
          postTitle.innerText = `Title: ${post.title}`;
          userCard.appendChild(postTitle);

          const postBody = document.createElement("h4");
          postBody.innerText = `Body: ${post.body}`;
          userCard.appendChild(postBody);
        }

        container.appendChild(userCard);
      }
    }
  })
  .catch((error) => {
    console.log("Error ==>", error);
  });
