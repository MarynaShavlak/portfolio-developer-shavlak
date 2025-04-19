import {articlesData} from "../data/articlesData.js";
import {formatDate, getDatetimeValue} from "./date.js";

export function initBlog() {
    generateBlogMarkup(articlesData);
    const visibleArticles = 3;
    const $articles = $('.articles__item');
    const total = $articles.length;
    hideExtraArticles($articles, visibleArticles);
    $('.blog__btn').on('click', function () {
        showMoreArticles($articles, total, visibleArticles);
    });
    $('.read-more-btn').on('click', function () {
        const $articleText = $(this).parent().find('.article__text');
        const isShowContent = $(this).parent().hasClass('showContent');

        $articleText.animate(
            {
                'max-height': isShowContent ? '96px' : '1000px',
            },
            300,
        );

        $(this).parent().toggleClass('showContent');
        const text = !isShowContent ? 'Read Less' : 'Read more';
        $(this).text(text);
    });
}

function generateBlogMarkup(data) {
    const articlesHTML = data.map(
        ({ title, category, text, date }) => `
      <li class="articles__item">
        <div class="article__img-wrap">
          <time class="article__date" datetime="${getDatetimeValue(
            date,
        )}">${formatDate(date)}</time>
          <div class="articles__photo"></div>
        </div>
        <div class="article__meta">
          <a class="article__title" href="#">${title}</a>
          <p class="article__category">${category}</p>
          <p class="article__text">${text}</p>
        </div>
        <button type="button" class="read-more-btn">READ MORE</button>
      </li>
    `,
    );

    $('.articles-list').html(articlesHTML.join(''));
}

function hideExtraArticles($articles, visibleArticles) {
    $articles.slice(visibleArticles).hide();
}

function showMoreArticles($articles, total, visibleArticles) {
    $articles.filter(':hidden').slice(0, visibleArticles).slideDown('slow');
    const shownItemsQuantity = $articles.filter(':not(:hidden)').length;
    const remainingItems = total - shownItemsQuantity;
    if (remainingItems === 0) {
        $('.blog__btn').hide();
    }
}
