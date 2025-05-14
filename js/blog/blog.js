import { devInterviewPosts } from "../../data/articlesData.js";
import { formatDate, getDatetimeValue } from "../utils/date.js";

export function initBlog() {
  generateBlogMarkup(devInterviewPosts);
  const visibleArticles = 3;
  const $articles = $(".articles__item");
  const total = $articles.length;
  hideExtraArticles($articles, visibleArticles);
  $(".blog__btn").on("click", function () {
    showMoreArticles($articles, total, visibleArticles);
  });
}

function generateBlogMarkup(data) {
  const articlesHTML = data.map(
    ({ title, category, text, date, link, img }) => `
      <li class="articles__item">
      
        <div class="article__img-wrap">
        <a href="${link}" target="_blank">
         <time class="article__date" datetime="${getDatetimeValue(
           date,
         )}">${formatDate(date)}</time>
          <img class="articles__photo" alt="Photo of blog post" src="./assets/images/blog/${img}"/>
          </a>
                
        </div>
     <div class="article__meta">
  <a class="article__title" href="#">${title}</a>
  <p class="article__text">${text}</p>
</div>
        <button type="button" class="read-more-btn star-btn star-btn-blue">
        <div class="star-1">
                        <img src="./assets/images/icons/star-blue.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-2">
                        <img src="./assets/images/icons/star-blue.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-3">
                        <img src="./assets/images/icons/star-blue.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-4">
                        <img src="./assets/images/icons/star-blue.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-5">
                        <img src="./assets/images/icons/star-blue.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-6">
                        <img src="./assets/images/icons/star-blue.svg" alt="Star Icon"/>
                    </div>
        READ MORE
        </button>
        <div class="ocean ocean--blog">
  <div class="wave"></div>
</div>
      </li>
    `,
  );

  $(".articles-list").html(articlesHTML.join(""));
}

function hideExtraArticles($articles, visibleArticles) {
  $articles.slice(visibleArticles).hide();
}

function showMoreArticles($articles, total, visibleArticles) {
  $articles.filter(":hidden").slice(0, visibleArticles).slideDown("slow");
  const shownItemsQuantity = $articles.filter(":not(:hidden)").length;
  const remainingItems = total - shownItemsQuantity;
  if (remainingItems === 0) {
    $(".blog__btn").hide();
  }
}
