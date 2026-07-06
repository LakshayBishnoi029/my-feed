const posts = [
{
    id: 1,
    username:"Jhone Doe",
    profile:"assets/image/svg/1st.svg ",
    post:"assets/image/png/1st.png",
},
{
    id: 2,
    username:"Jhone Doe",
    profile:"assets/image/svg/2nd-profile.svg",
    post:"assets/image/png/2nd.png",
},
{
    id: 3,
    username:"Jhone Doe",
    profile:"assets/image/svg/3rd-profile.svg",
    post:"assets/image/png/3rd.png",
},
{
    id: 4,
    username:"Jhone Doe",
    profile:"assets/image/svg/2nd-profile.svg",
    post:"assets/image/png/4th.png",
},
];

const postsContainer = document.getElementById("posts");
function toggleMenu(id){
    document
        .getElementById(`menu-${id}`)
        .classList.toggle("show");
}
postsContainer.innerHTML = posts.map(post=>`

<div class="post">

    <div class="top-menu d-flex align-items-center justify-content-between">
    <div class="top d-flex align-items-center w-100">

        <img width="48" heigth="48" src="${post.profile}">

        <h4 class="username fw-normal text-black m-0">${post.username}</h4>
        

    </div>
    <div class="menu">

            <button class="menu-btn d-flex flex-row" onclick="toggleMenu(${post.id})">
                ...
            </button>

            <div class="dropdown" id="menu-${post.id}">
                <p>Edit</p>
                <p>Delete</p>
                <p>Share</p>
            </div>

        </div>
</div>

    

   <div class="post-image d-flex align-items-center justify-content-center">
    <img class="post-img " src="${post.post}"></div>

    <div class="bottom d-flex align-items-center">
              <img width="24" height="24" src="assets/image/svg/like.svg" alt="heart">
              <img width="24" height="24" src="assets/image/svg/comment.svg" alt="coment">
    
    </div>
    <div class="comment d-flex justify-content-between">
    <input class="add-coment w-100"
    type="text"
    placeholder="Add comment..."  > <button class="post-btn" > POST <button> </div>

</div>

`).join("");
