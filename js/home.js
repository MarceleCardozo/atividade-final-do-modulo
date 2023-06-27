const rowVideos = document.getElementById("row-videos");

function renderVideos() {
  let html = "";

  videos.forEach(
    (item) =>
      (html += `
      <div class="col-12 col-sm-6 col-md-3 col-movie" id="row-videos">
        <div class="card" style="width: 18rem">
          <img src="${item.img}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">
                Categoria: ${item.category}
              </p>
              <a href="${item.link}" class="btn btn-primary">Play</a>
            </div>
        </div>
      </div>
            `)
  );

  rowVideos.innerHTML = html;
}

renderVideos();
