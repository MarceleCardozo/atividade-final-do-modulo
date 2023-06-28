const rowVideos = document.getElementById("row-videos");

function renderVideos() {
  const categories = {};

  videos.forEach((item) => {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push(item);
  });

  let html = "";

  for (const category in categories) {
    html += `
    <div class="col-12 pt-2" 
      <p>
        <a href="" class="link-title fw-bold">${category}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
        </svg>
        </a>
      </p>
    </div>
    `;

    categories[category].forEach((item) => {
      html += `
    <div class="col-12 col-sm-6 col-md-3 col-video">
      <div class="card" style="width: 18rem" onmouseenter="showDetail(this)" onmouseleave="closeDetail(this)">
        <img src="${item.img}" class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
        <a href="#" class="custom-link video-link" data-bs-toggle="modal" data-bs-target="#videoModal" onclick="openVideoModal(event, '${item.link}')"> 
            <p class="card-title detail-video">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
              </svg>
              <span>${item.title}</span>
           </p>
          </a>
        </div>
       </div>
    </div>
`;
    });
  }

  rowVideos.innerHTML = html;
}

function showDetail(element) {
  element.classList.add("card-hover");
}

function closeDetail(element) {
  element.classList.remove("card-hover");
}

function openVideoModal(event, videoLink) {
  event.preventDefault();
  const modal = document.querySelector(".modal");
  const iframe = modal.querySelector("iframe");
  const youtubeLink = modal.querySelector("#videoLink");

  iframe.src = videoLink;
  youtubeLink.href = videoLink;

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

renderVideos();
